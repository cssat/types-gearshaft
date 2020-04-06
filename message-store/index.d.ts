export type MessageStore = {
    get(streamName: string): any;
    read: (streamName: string) => any;
}

type CategoryExtra = {type?: string; types?: string[]}

type CreateCategoryResults = {
    category: string;
    commandCategory: (extra?: CategoryExtra) => string;
    commandStreamName: (id: string, extra?: CategoryExtra) => string;
    entityStreamName: (id: string, extra?: CategoryExtra) => string;
}

export function createCategory(category: string): CreateCategoryResults
