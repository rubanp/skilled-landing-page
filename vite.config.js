export default {
  base: './',
  root: './src',
  build: {
    outDir: '../dist/',
    target: 'esnext',
    sourceMap: true,
  },
  rollupOptions: {
    external: /^lit/,
  },
};
