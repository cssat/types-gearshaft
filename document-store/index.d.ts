export interface DocumentStore<T> {
  get(doc: object): Promise<T>;
  insert(doc: object): Promise<void>;
  update(doc: object): Promise<void>;
}
