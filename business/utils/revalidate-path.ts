"use server";

import { revalidatePath } from "next/cache";

const paths = {
  interactions: "/interaction-books/[slug]/interactions",
  dashboard: "/interaction-books/[slug]/[tab]",
};
export async function _revalidatePath(path: keyof typeof paths) {
  revalidatePath(path, "page");
}
