<template>
  <div>
    <lazy-component>
      <h1>demo</h1>
    </lazy-component>
    <div style="height: 2000px;width: 100%; background: red;"></div>
    <lazy-component @loaded="loaded('Green')">
      <div style="height: 700px;width: 100%; background: green;">
        <h1>组件 green</h1>
      </div>
    </lazy-component>
    <lazy-component @loaded="loaded('Yellow')">
      <div style="height: 700px;width: 100%; background: yellow;">
        <h1>组件 yellow</h1>
      </div>
    </lazy-component>
  </div>
</template>
<script>
export default {
  methods: {
    loaded(type) {
      console.log('component', type)
    }
  }
}
</script>

