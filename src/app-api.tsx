import axios, { AxiosPromise } from 'axios';

type IMakeRequest = {
  url: string;
  data?: any;
  headers?: any;
  method?: 'get' | 'put' | 'post' | 'delete' | 'patch';
}

// We could use process.env.REACT_APP_BASE_URL
const baseURL = "https://images-api.nasa.gov"
const baseJsonURL = "https://images-assets.nasa.gov"

export function makeRequest<T = any>({ url, method = 'get', data, headers }: IMakeRequest) {
  return axios({
    baseURL,
    url,
    method,
    data,
    headers,
  }) as AxiosPromise<T>;
}

export const getDataByQuery = async (query: string, mediaTypes: string) => {
  try {
    const { data } = await makeRequest({ url: `/search?&media_type=${mediaTypes}&q=${query}` })
    console.log(data);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export const getAssetById = async (id: string) => {
  try {
    const { data } = await makeRequest({ url: `/asset/${id}` });
    const items = data.collection.items;
    console.log(items);
    return items;
  } catch (error) {
    console.error(error)
  }
}

export const getImageMetadataById = async (id: string) => {
  try {
    const { data } = await makeRequest({ url: `${baseJsonURL}/image/${id}/metadata.json` })
    console.log(data);
    return data;
  } catch (error) {
    console.error(error)
  }
}
export const getAudioMetadataById = async (id: string) => {
  try {
    const { data } = await makeRequest({ url: `${baseJsonURL}/audio/${id}/metadata.json` })
    console.log(data);
    return data;
  } catch (error) {
    console.error(error)
  }
}