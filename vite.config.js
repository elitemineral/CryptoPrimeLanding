import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ command, mode }) => {
  // vike подключаем только для сборки в продакшн.
  // В dev-сборке шрифты загружаются несколько раз
  // Воможно, из-за этого: https://github.com/vikejs/vike/issues/261
  // if (command === 'serve' && mode === 'development') {
  //   return {
  //     plugins: [react()],
  //   };
  // } else {
  //   return {
  //     plugins: [react(), vike(),],
  //   };
  return {
    plugins: [react(), visualizer(),],
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes('node_modules')) {
    //           return id
    //             .toString()
    //             .split('node_modules/')[1]
    //             .split('/')[0]
    //             .toString();
    //         }
    //       },
    //     },
    //   },
    // },
  };
});
