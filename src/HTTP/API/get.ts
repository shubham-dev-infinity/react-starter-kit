import axios from "axios";
import { TGet, cacheConfig } from "typedefs/cache";


const cacheMemory: Map<string, {
    register: Date;
    data: any
}> = new Map()

const defaultCacheconfigObject: cacheConfig = {
    validate: 3600,
    doCache: true
}


export default async function get<T>(
    { endpoint, cacheConfig = defaultCacheconfigObject, source }: TGet
): Promise<T | null> {

    //check cache first along with necessary conditions.
    if (doesDataRetrivablefromCache(endpoint, cacheConfig))
        return cacheMemory.get(endpoint)?.data as T;

    const config = {
        method: 'get',
        url: `${process.env.REACT_BACK_END_URL}/${endpoint}`,
        cancelToken: source?.token,
    };

    try {
        const response = await axios.request(config);
        //store data only if doCache props is set to trues
        if (cacheConfig?.doCache) {
            cacheMemory.set(endpoint, response.data)
        }
        return response.data as T;
    } catch (error: any) {
        console.error(error.message);
        return null; // Return null for failed requests
    }
}


function doesDataRetrivablefromCache(endPoint: string, cacheConfig: cacheConfig) {

    if (!cacheConfig.doCache) return false;

    if (!cacheMemory.get(endPoint)) return false;

    const cacheData = cacheMemory.get(endPoint);
    if (((cacheData?.register.getTime() || 0) - new Date().getTime()) >= (cacheConfig.validate || 0)) return false;

    return true
}