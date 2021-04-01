// Component
import Vue from 'vue'

import component from '@/views/app/components/index.js'

Vue.use(component)
const CustomPlugin = {
  install (Vue) {
    // Custom Component
  }
}
export default CustomPlugin
