"use server";

import { formatCurrency } from "@/lib/utils";
import { _authId } from "../auth/auth-session";
import { prisma } from "../db";
import { DashboardAnalyticType, DashboardComponentType } from "../type";
import { transformFormField } from "../utils/typed-transform";

export default async function getDashboardData(slug, tab) {
  const components = (
    await prisma.dashboardComponents.findMany({
      where: {
        deletedAt: null,
        dashboardTab: {
          slug: tab,
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
        formField: {
          include: {
            _count: {
              select: {
                values: {
                  where: {
                    deletedAt: null,
                  },
                },
              },
            },
          },
        },
      },
    })
  ).map((tab) => {
    return {
      ...tab,
      type: tab.type as DashboardComponentType,
      analyticType: tab.analyticType as DashboardAnalyticType,
      formField: transformFormField(tab.formField),
    };
  });

  let dashboardTab = await prisma.dashboardTab.findFirst({
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
  if (!dashboardTab) throw new Error();
  if (!dashboardTab?.interactionBookId) {
    dashboardTab = await prisma.dashboardTab.update({
      where: { id: dashboardTab.id },
      data: {
        book: {
          connect: {
            slug,
          },
        },
      },
    });
  }
  const cardComponents = await Promise.all(
    components
      .filter((c) => c.type == "Card")
      .map(async (c) => {
        let value: any = 0;
        if (c.analyticType == "Sum") {
          const analytics = await prisma.interactionAnalytics.findMany({
            where: {
              title: c.analyticNode,
              deletedAt: null,
            },
          });

          value = analytics
            .filter((s) => Number(s.value) >= 0)
            .map((s) => s.value)
            .reduce((a, b) => a + b, 0);

          if (c.formField.dataType == "number" && c.formField.currency) {
            value = formatCurrency(value, c.formField.unit);
          }
        }
        if (c.analyticType == "Count") {
          value = c.formField._count.values;
          // console.log(value);
        }
        return {
          component: c,
          value,
          comment: "",
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
