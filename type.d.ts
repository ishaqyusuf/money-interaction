export type ServerResponse<T extends (...args: any) => any> = NonNullable<
  Awaited<ReturnType<T>>
>;
export type AsyncServerResponse<T extends (...args: any) => any> = Promise<
  Awaited<ReturnType<T>>
>;
export interface PromiseType<T extends (...args: any) => any> {
  Promise: AsyncServerResponse<T>;
  Response: Awaited<AsyncServerResponse<T>>;
  Item: Awaited<AsyncServerResponse<T>>["data"][0];
}
