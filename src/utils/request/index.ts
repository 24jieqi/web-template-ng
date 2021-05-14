import config from '@/config';
import { message } from 'antd';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'querystring';
import { omit } from 'wbd-frontend-kit';
import { msg, handleNoCommontError } from './errorHandle';

type requestOptions = AxiosRequestConfig & {
  url?: string;
  noLoading?: boolean;
  headers?: any;
};

interface IErrorData {
  code: number;
  message: string;
  success: boolean;
  timestamp: number;
}

const { baseUrl, authKey } = config;

axios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const data = response.data;
    // 操作不成功时直接提示
    if (!data.success) {
      message.error(data.message);
      return Promise.reject(data.message);
    }
    return data as any;
  },
  ({ response }: AxiosError<IErrorData>) => {
    if (response) {
      const { status, data, config } = response;
      const message = data?.message || msg.errorMsg;
      // 全局响应拦截需要重写
      handleNoCommontError(message, config);
      return Promise.reject(message);
    } else {
      return Promise.reject(msg.networkErrorMsg);
    }
  },
);
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  config.paramsSerializer = (params: any) => qs.stringify(params);
  return config;
});
export default async function request<T = any>(options: requestOptions) {
  const { url } = options;
  const Authorization = localStorage.getItem(authKey);
  const lang = localStorage.getItem('currentLang');
  let headers = {};
  if (options) {
    headers = options.headers || {};
  }
  const defaultOptions = {
    headers: {
      ...headers,
      'X-Access-Token': Authorization,
      locale: lang,
    },
    credentials: 'include',
    timeout: 60000,
    withCredentials: true,
    validateStatus(status: any) {
      return status >= 200 && status < 300;
    },
  };
  const newOptions: requestOptions = { ...defaultOptions, ...omit(options, ['url', 'headers']) };
  const newUrl = baseUrl + url;
  return axios(newUrl, newOptions) as unknown as T;
}
