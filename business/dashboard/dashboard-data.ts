"use server";

import { formatCurrency } from "@/lib/utils";
import { _authId } from "../auth/auth-session";
import { prisma } from "../db";
import { DashboardComponentType } from "../type";
import { transformFormField } from "../utils/typed-transform";

export default async function dashboardData(slug, tab) {
  const components = (
    await prisma.dashboardComponents.findMany({
      where: {
        dashboardTab: {
          slug,
          permissions: {
            some: {
              bookAccess: {
                userId: await _authId(),
              },
            },
          },
        },
      },
      include: {
        formField: true,
      },
    })
  ).map((tab) => {
    return {
      ...tab,
      type: tab.type as DashboardComponentType,
      formField: transformFormField(tab.formField),
    };
  });

  const dashboardTab = await prisma.dashboardTab.findFirst({
    where: {
      slug: tab,
      permissions: {
        some: {
          bookAccess: {
            userId: await _authId(),
          },
        },
      },
    },
  });
  const cardComponents = Promise.all(
    components
      .filter((c) => c.type == "card")
      .map(async (c) => {
        const analytics = await prisma.interactionAnalytics.findMany({
          where: {
            title: c.analyticNode,
          },
        });
        const total = analytics
          .filter((s) => Number(s.value) >= 0)
          .map((s) => s.value)
          .reduce((a, b) => a + b, 0);
        let value: any = total;
        if (c.formField.dataType == "number" && c.formField.currency) {
          value = formatCurrency(value, c.formField.unit);
        }
        return {
          component: c,
          value,
        };
      })
  );
  return {
    dashboardTab,
    bookSlug: slug,
    tabSlug: tab,
    componentForm: {
      dashboardTabId: dashboardTab?.id,
      interactionBookId: dashboardTab?.interactionBookId,
    },
    components: components,
    cardComponents,
  };
}
