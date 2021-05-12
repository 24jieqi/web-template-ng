import { defineConfig } from 'vite';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/hjgp-boot': {
        target: 'https://durian-dev.hjgpscm.com',
        changeOrigin: true,
        ws: false,
        secure: true,
        rewrite: (path) => path.replace(/^\/hjgp-boot/, ''),
      },
      '/_files': {
        target: 'https://durian-dev.hjgpscm.com',
        changeOrigin: true,
        ws: false,
        secure: true,
        rewrite: (path) => path.replace(/^\/_files/, ''),
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
