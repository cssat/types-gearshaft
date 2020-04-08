interface MessageStore {
  get(streamName: string): any;
  read: (streamName: string) => any;
}

interface CategoryExtra {
  type?: string;
  types?: string[];
}

interface CreateCategoryResults {
  category: string;
  commandCategory: (extra?: CategoryExtra) => string;
  commandStreamName: (id: string, extra?: CategoryExtra) => string;
  entityStreamName: (id: string, extra?: CategoryExtra) => string;
}

declare function createCategory(category: string): CreateCategoryResults;

export { MessageStore, createCategory };
