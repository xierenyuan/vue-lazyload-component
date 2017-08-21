import Lazyload from '../src/index'
import Demo from './demo.vue'

Vue.use(Lazyload)
/* eslint-disable */
new Vue({
  el: '#app',
  template: `<demo></demo>`,
  components: {
    demo: Demo
  }
})
/* eslint-enable */
