import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import { envConfig } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#0065FE' },
        // additionalData: `@import '@/assets/styles/variables.less';`,
      },
    },
  },
  plugins: [
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`
          },
        },
      ],
    }),
    reactRefresh(),
  ],
  server: {
    https: false,
    proxy: {
      [`/graphql`]: {
        target: envConfig.dev.apiHost,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/', // 设置公共基础路径，如果构建时有这个必要的话
})
