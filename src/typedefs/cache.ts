import { CancelTokenSource } from "axios";

export type cacheConfig = {
    validate?: number;
    doCache?: boolean;
}

export type TGet = {
    endpoint: string;
    cacheConfig?: cacheConfig
    source?: CancelTokenSource | null | undefined;
}
