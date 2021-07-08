/**
 * 配置文件
 */
interface CommonConfig {
  /** 权限key */
  authKey: string
  /** 系统是否需鉴权 */
  authorization: boolean
}
interface EnvConfig {
  /** api host */
  apiHost: string
  /** 上传host */
  uploadHost: string
  /** 项目根路径 */
  baseUrl: string
}
export interface IConfig extends CommonConfig, EnvConfig {}

const env = import.meta.env?.VITE_APP_ENV
// 配置(公共)
const commonConfig: CommonConfig = {
  authKey: 'Authorization',
  authorization: false,
}
// 配置(根据环境变量区分)
export const envConfig: Record<typeof env, EnvConfig> = {
  // 开发环境
  dev: {
    apiHost: 'https://pitaya-dev.hjgpscm.com',
    uploadHost: 'https://pitaya-dev.hjgpscm.com',
    baseUrl: '/pitaya-app',
  },
  // 测试环境
  test: {
    apiHost: 'https://pitaya-dev.hjgpscm.com',
    uploadHost: 'https://pitaya-dev.hjgpscm.com',
    baseUrl: '/pitaya-app',
  },
  // 生产环境
  prod: {
    apiHost: 'https://durian.hjgpscm.com',
    uploadHost: 'https://durian.hjgpscm.com',
    baseUrl: '/pitaya-app',
  },
}
const config = { ...commonConfig, ...envConfig[env] }
export default config
