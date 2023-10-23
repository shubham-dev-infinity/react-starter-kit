import axios, { AxiosError, CancelTokenSource } from "axios";

export default async function post<T>(
    endpoint: string,
    data: Record<string, string>,
    source?: CancelTokenSource
): Promise<T> {
    try {
        const config = {
            method: 'post',
            url: `https://guarded-basin-60853-2954e2b74997.herokuapp.com/${endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            },
            maxBodyLength: Infinity,
            data: JSON.stringify(data),
            cancelToken: source?.token,
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw new Error((error as AxiosError).message);
    }
}
