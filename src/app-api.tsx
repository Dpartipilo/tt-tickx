import axios, { AxiosPromise } from 'axios';

type IMakeRequest = {
  url: string;
  data?: any;
  headers?: any;
  method?: 'get' | 'put' | 'post' | 'delete' | 'patch';
}

// We could use process.env.REACT_APP_BASE_URL
const baseURL = "https://images-api.nasa.gov"

export function makeRequest<T = any>({ url, method = 'get', data, headers }: IMakeRequest) {
  return axios({
    baseURL,
    url,
    method,
    data,
    headers,
  }) as AxiosPromise<T>;
}

export const getDataByQuery = async (query: string) => {
  try {
    const { data } = await makeRequest({ url: `/search?&media_type=image&q=${query}` })
    console.log(data);
    return data;
  } catch (error) {
    console.error(error)
  }
}