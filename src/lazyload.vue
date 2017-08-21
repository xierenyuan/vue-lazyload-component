<template>
  <div class="lazy-load-component" :style="{height: !isRender? '100px' : 'auto'}">
    <slot v-if="isRender"></slot>
    <slot name="tip" v-if="!isRender">
      <div :class="[maskClass ? maskClass : 'lazy-load-component-mask']">
        <img :src="loadingUrl">
      </div>
    </slot>
  </div>
</template>
<script>
import inViewport from 'in-viewport'
import loading from './assets/img/loading-spin.svg'
export default {
  name: 'lazy-component',
  data() {
    return {
      // 是否渲染组件
      isRender: false,
      loadingUrl: loading
    }
  },
  mounted() {
    inViewport(this.$el, {offset: this.offset}, () => {
      this.sync()
    })
  },
  props: {
    maskClass: String,
    offset: {
      type: Number,
      default: 10
    }
  },
  methods: {
    sync() {
      this.isRender = true
      this.$emit('loaded')
    }
  }
}
</script>
