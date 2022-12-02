import useSWR, { Fetcher, KeyedMutator } from 'swr';
import axios, { AxiosRequestConfig } from 'axios';


axios.defaults.baseURL = 'http://localhost:5000/api';

interface DataResponse<T> {
  data: T,
  error: any 
  isLoading: boolean,
  mutate: KeyedMutator<T>
}

export const useApi = <T>(url: string, payload: AxiosRequestConfig | undefined = undefined): DataResponse<T> => {

  const fetcher = async (url: string) => await (await axios(url, payload)).data;
  const { data, error, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    mutate
  };
};

export const api = axios;