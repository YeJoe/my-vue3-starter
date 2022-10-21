import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 新增
import { viteMockServe } from 'vite-plugin-mock' // 新增
import AutoImport from 'unplugin-auto-import/vite' //新增
import Components from 'unplugin-vue-components/vite' //新增
import { ArcoResolver } from 'unplugin-vue-components/resolvers' //新增
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // targets to transform
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      // global imports to register
      imports: [
        // 插件预设支持导入的api
        'vue',
        'vue-router',
        'pinia',
        // 自定义导入的api
      ],
      // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
      dts: 'src/types/auto-imports.d.ts',
      resolvers: [ArcoResolver()],
    }),
    // 自动引入组件(这里以ArcoDesign为例)
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/','src/pages/'],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ['vue', 'md'],
      resolvers: [
        //自动引入Arco
        ArcoResolver({
          sideEffect: true,
        }),
        //自动引入图标
        IconsResolver(),
      ],
    }),
    Icons({ autoInstall: true }),
    //引入mock
    viteMockServe({
      supportTs: true,
      logger: false,
      mockPath: './src/mock/', // 解析刚刚user.ts的位置
      localEnabled: true, // 是否开启开发环境
    }),
  ],
  //引入less
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //       // 只配置全局通用参数
  //       additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/params.less')}";`,
  //     },
  //   },
  // },
  //设置src别名
  resolve: {
    // 新增
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    // 新增
    port: 3000, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 3000,
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端 api 地址
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
})
