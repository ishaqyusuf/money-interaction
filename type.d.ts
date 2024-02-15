export type ServerReponse<T extends (...args: any) => any> = NonNullable<
  Awaited<ReturnType<T>>
>;
export type AsyncServerReponse<T extends (...args: any) => any> = Promise<
  Awaited<ReturnType<T>>
>;
export interface PromiseType<T extends (...args: any) => any> {
  Promise: AsyncServerReponse<T>;
  Response: Awaited<AsyncServerReponse<T>>;
  Item: Awaited<AsyncServerReponse<T>>["data"][0];
}
