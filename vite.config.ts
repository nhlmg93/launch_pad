import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import * as path from 'path'

export default defineConfig({
  plugins: [solid()],
  base: "./",
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, 'src/components'),
      "@Stores": path.resolve(__dirname, 'src/stores'),
      "@Utils": path.resolve(__dirname, 'src/utils'),
      "@Pages": path.resolve(__dirname, 'src/pages'),
      "@Layouts": path.resolve(__dirname, 'src/layouts'),
      "@Assets": path.resolve(__dirname, 'src/assets'),
      "@Public": path.resolve(__dirname, 'public')
    }
  }
})
