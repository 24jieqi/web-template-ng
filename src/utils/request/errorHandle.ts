import { message } from 'antd'
import { messageApi } from 'wbd-frontend-kit'
import { AxiosRequestConfig } from 'axios'

const singleMessage = messageApi(message)

const msg = {
  forbiddenMsg: '拒绝访问',
  tokenInvalidMsg: '登录已过期，请重新登录',
  timeoutMsg: '请求超时，请稍后再试',
  errorMsg: '报告！服务器出了点小问题，稍后再试试...',
  networkErrorMsg: '您的网络出现问题，请检查网络重试',
}

function redirect() {
  if (location.pathname === 'Login') {
    return
  }

  encodeURIComponent(location.href)
  // 路由重定向的操作
}

// 错误提示
function handleNoCommontError(err: string, config: AxiosRequestConfig & { noErrorTip?: boolean }) {
  // 请求配置了不提示时不提示
  if (!config.noErrorTip) {
    singleMessage.error(err)
  }
}
export { handleNoCommontError, msg }
