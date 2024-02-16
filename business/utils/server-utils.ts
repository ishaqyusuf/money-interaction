"use server";

import slugify from "slugify";

export async function nextId<T>(model, where?: T) {
  return (await lastId(model, where)) + 1;
}
export async function lastId<T>(model, where?: T, _default = 0) {
  return ((
    await model.findFirst({
      orderBy: {
        id: "desc",
      },
    })
  )?.id || _default) as number;
}
export async function _slug(title, id?, model?) {
  if (!id) id = await nextId(model);
  return slugify(`${title} ${id}`);
}
