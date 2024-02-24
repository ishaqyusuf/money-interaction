"use server";

import { revalidatePath } from "next/cache";

const paths = {
  interactions: "/interaction-books/[slug]/interactions",
};
export async function _revalidatePath(path: keyof typeof paths) {
  revalidatePath(path, "page");
}
