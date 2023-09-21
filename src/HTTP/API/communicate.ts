import axios from "axios";
import get_decorators from "../Catche/getCache";

const getCache = get_decorators();
const BASE_URL = process.env.REACT_APP_BASEURL;



interface getConfiguration {
    staleTime?: number
    doCache?: boolean
}

export const ApiGet = (key: string, path: string, configuration?: getConfiguration) => {
    const promise = axios.get(path);
    return getCache(key, promise, configuration)
};

export const ApiPost = (type: string, userData: Record<string, number | string>) => {
    return new Promise((resolve, reject) => {
        axios
            .post(BASE_URL + type, userData, getHttpOptions())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error?.response?.data);
                } else {
                    reject(error?.response?.data);
                }
            });
    });
};

export const ApiPut = (type: string, userData: Record<string, number | string>) => {
    return new Promise((resolve, reject) => {
        axios
            .put(BASE_URL + type, userData)
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error.response.data);
                } else {
                    reject(error.response.data);
                }
            });
    });
};

export const ApiDelete = (type: string) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(BASE_URL + type, getHttpOptions())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error?.response?.data);
                } else {
                    reject(error?.response?.data);
                }
            });
    });
};

export const getHttpOptions = () => {
    let headers = { 'Content-Type': 'application/json' };


    return { headers };
};
