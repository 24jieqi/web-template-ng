interface IConfig {
  authKey: string
  baseUrl: string
  uploadUrl: string
}

const config: IConfig = {
  baseUrl: '/api',
  authKey: 'Authorization',
  uploadUrl: '/_files/upload',
}

export default config
