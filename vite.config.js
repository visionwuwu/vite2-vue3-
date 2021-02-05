import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock';
import { defineConfig } from 'vite'
import path from 'path'

// 初始不懂剧中意，再看已是剧中人。
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, './src'),
    'apis': path.resolve(__dirname, './src/apis'),
    'assets': path.resolve(__dirname, './src/assets'),
    'comps': path.resolve(__dirname, './src/components'),
    'views': path.resolve(__dirname, './src/views'),
    'utils': path.resolve(__dirname, './src/utils'),
    'styles': path.resolve(__dirname, './src/styles'),
    'router': path.resolve(__dirname, './src/router'),
    'plugins': path.resolve(__dirname, './src/plugins'),
    'layouts': path.resolve(__dirname, './src/layouts'),
  },
  plugins: [
    vue(), 
    vueJsx(),
    viteMockServe({
      supportTs: false
    })
  ]
})
