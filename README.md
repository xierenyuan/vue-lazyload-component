# vue-lazyload-component
> 分块渲染 组件 

## 使用
```js
yarn add vue-lazyload-component -S

npm i  vue-lazyload-component -S
```

## exampls
```js
<lazy-component @loaded="loaded('Green')">
  <div style="height: 700px;width: 100%; background: green;">
    <h1>组件 green</h1>
  </div>
</lazy-component>
```

## 参数
> __offset__ {Number} default 10 提前 在视图中显示      

> __maskClass__ {String} default lazy-load-component-mask 遮罩默认样式 可以 通用slot 重写 遮罩  

> __loaded__  {Function} 显示后触发的回调  

## develop

```js
yarn install
yarn start
```

## 参考 [vue-lazy-render](https://github.com/yeyuqiudeng/vue-lazy-render)
