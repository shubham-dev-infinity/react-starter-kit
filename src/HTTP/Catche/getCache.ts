interface MyObject {
    [key: string]: any;
}

interface getConfiguration {
    staleTime?: number
    doCache?: boolean
}

export default function get_decorators() {
    const cache_map: MyObject = {};

    return async function (hash: string, promise: Promise<any>, _configuration?: getConfiguration) {
        if (cache_map[hash]) {
            alert("success")
            return cache_map[hash]
        }

        else {
            alert('only one time')
            const result = promise.then((res: any) => res)
            cache_map[hash] = result
            return result
        }
    }
}   