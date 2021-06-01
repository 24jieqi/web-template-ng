/**
 * @desc 环境变量类型定义
 */
interface ImportMetaEnv {
  /**
   * 运行环境
   */
  VITE_APP_ENV: 'dev' | 'test' | 'prod';

  /**
   * 接口前缀/服务器地址
   */
  VITE_APP_HOST: string;
}
