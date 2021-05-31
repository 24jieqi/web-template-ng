import { defineConfig } from 'vite';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { envConfig } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/hjgp-boot': {
        target: envConfig.dev.apiHost,
        changeOrigin: true,
      },
      '/_files': {
        target: envConfig.dev.uploadHost,
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
});
