"use server";

import slugify from "slugify";

export async function nextId<T>(model, where?: T, _default = 0, col = "id") {
  return (await lastId(model, where, _default, col)) + 1;
}
export async function lastId<T>(model, where?: T, _default = 0, col = "id") {
  return ((
    await model.findFirst({
      orderBy: {
        id: "desc",
      },
    })
  )?.[col] || _default) as number;
}
export async function _slug(title, id?, model?) {
  if (!id) id = await nextId(model);
  return slugify(`${title} ${id}`, {
    lower: true,
  });
}
