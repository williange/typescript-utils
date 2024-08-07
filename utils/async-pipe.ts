type AsyncFunction<T, R> = (input: T) => R | Promise<R>;
/**
 * This function was presented to me by a friend `@brunomoutinho`, it's a very elegant way to compose functions that return promises.
 * @param fns array of functions to ber executed in sequence
 * @returns a function that will execute all functions in sequence
 */
export const asyncPipe = <T, R>(...fns: Array<AsyncFunction<any, any>>): (x?: T) => Promise<R> =>
  (x?: T): Promise<R> => fns.reduce<Promise<any>>(async (acc, fn) => fn(await acc), Promise.resolve(x));
