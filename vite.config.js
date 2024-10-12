// /** @type {import('vite').UserConfig} */
import { resolve } from 'path'
// import { postcss } from './postcss.config.js'
// import liveReload from 'vite-plugin-live-reload'

export default {
   // plugins: [liveReload('/**/*.index')],
   server: {
      port: 3000,
      watch: {
         usePolling: true,
      },
   },
   root: 'src',
   emptyOutDir: true,
   build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            // about: resolve(__dirname, './src/'),
         },
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            api: 'modern-compiler', // or "modern"
         },
      },
   },
}
// css: { postcss },
