export function follow<T, U>(
  previous: T,
  classOfNext: new (...args: any[]) => U,
  additionalFields?: Partial<U>
): U;
