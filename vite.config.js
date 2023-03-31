import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define:{
    'process.env':{}
  },
  server:{
    allowedHosts:'all',
    // port:443,  // 端口号的配置
    //前端配置代理服务器，若后端解决跨域，应当注释该段代码，以防冲突
    proxy:{
      '/api':{
        target:'https://booms.life:8000',
      }
    },

  },
})
