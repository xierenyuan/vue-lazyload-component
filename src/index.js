import './index.scss'
import Lazyload from './lazyload.vue'

Lazyload.install = function(Vue) {
  Vue.component(Lazyload.name, Lazyload)
}

export default Lazyload
