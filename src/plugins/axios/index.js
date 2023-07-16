import axios from 'axios';
import { parseJson } from '../../helper';

export class AxiosInstance {
    static create(config = {}) {
        const { baseURL, headers } = config;
        const client = axios.create({
            baseURL,
            timeout: 360000,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Content-Type': 'application/json',
                ...headers,
            },
            responseType: 'json',
        });

        client.interceptors.response.use(
            function (response) {
                if (response.data) {
                    if (typeof response.data === 'string') {
                        response.data = parseJson(response.data);
                    }
                    response.success = true;
                } else {
                    const message = 'We had trouble connecting to the server';
                    response.data = {
                        ...(response?.data || {}),
                        message,
                        success: false,
                    };
                }
                return response;
            },
            function (error) {
                if (error.response) {
                    if (typeof error?.response?.data === 'string') {
                        error.response.data = parseJson(error.response.data);
                    }
                    error.response.data = {
                        ...(error?.response?.data || {}),
                        success: false,
                        message: error.message || error.response?.statusText,
                    };
                    return error.response;
                } else if (error.request) {
                    error.request.data = {
                        ...(error?.request?.data || {}),
                        success: false,
                        isRequestError: true,
                        message: error.message,
                    };
                    return error.request;
                }
                return {
                    ...error,
                    status: 500,
                    statusText: 'An error occurred! Try again.',
                    headers: {},
                    success: false,
                    message: 'An error occurred! Try again.',
                    data: undefined,
                    code: 500,
                };
            }
        );

        return client;
    }
}
