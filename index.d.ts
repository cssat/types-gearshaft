export type ClassLike = new (...args: any[]) => any;
export type GenericConstructor<T> = new (...args: any[]) => T;
export type Message = object | { new (...args: any[]): any };
