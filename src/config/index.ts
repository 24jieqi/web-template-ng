/**
 * 接口 headers 上 token 缓存字段
 */
export const AUTH_KEY = 'Authorization';

/**
 * 接口服务器地址
 */
export const BASE_HOST = import.meta.env.VITE_APP_HOST;

/**
 * 接口最基础的前缀
 * @description 单域名/入口有多个服务需要通过二级路由区分，配合 Nginx 做好代理就行
 */
export const BASE_URL = `${BASE_HOST}/hjgp-boot`;
