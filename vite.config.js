import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

export default defineConfig(({ command, mode }) => {
  // vike подключаем только для сборки в продакшн.
  // В dev-сборке шрифты загружаются несколько раз
  // Воможно, из-за этого: https://github.com/vikejs/vike/issues/261
  if (command === 'serve' && mode === 'development') {
    return {
      plugins: [react()],
    };
  } else {
    return {
      plugins: [react(), vike()],
    };
  }
});
