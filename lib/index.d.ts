export declare const getType: <T>(param: T) => string;
export declare const formatJSONDate: (jsonDate: string) => string;
export declare const deduplicateArray: <T>(arr: T[]) => T[];
export declare const deduplicateObjectArray: <T>(arr: T[], keyName: string) => never[];
export declare const shuffle: <T>(arr: T[]) => T[];
export declare const toThousands: (numberStr: string, currencySymbol?: string) => string;
export declare const simpleToThousands: (num: number, currencySymbol?: string) => string;
export declare const capitalized: (str: string) => string;
export declare const getRandomInt: (min: number, max: number) => number;
export declare const getRandomIntInclusive: (min: number, max: number) => number;
export declare const deepFlatten: (arr: any) => any;
export declare const checkWebp: () => boolean;
export declare const getFileExtension: (filename: string) => string;
export declare const isValidIP: (ip: string) => boolean;
export declare const sortBy: (key: string) => (a: any, b: any) => 1 | -1 | 0;
export declare const formatCookie: (cookies: string) => {};
export declare const sleep: (delay?: number) => Promise<unknown>;
export declare const randomColor: () => string;
export declare const randomSeries: (length: number) => string;
export declare const mongoObjectIdToTimestamp: (objectId: string) => number;