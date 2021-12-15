<p align="center">
  <img height="260px" src="https://www.hualigs.cn/image/60c16782369ab.jpg">
</p>

## :bulb:前言

tyh-ui 是一套基于 Vue 2.0 的桌面端轻量级 UI 组件库

官网：https://tianyuhao.icu/tyhui

> 开发靠个人:computer:

Tyh-ui 是由 tyh2001 独立开发的一款基于 Vue 2.0 的桌面端轻量级 UI 组件库。

如果您在使用中有什么问题或 BUG 不妨可以来仓库的 Lssuse 中反馈一下，我很乐意来进行改进。

> 轻量易维护:low_brightness:

Tyh-ui 是一个极其轻量的组件库，它并没有那么多复杂的目录结构和冗余的代码，清晰明了。

但同时 Tyh-ui 还有很多地方需要维护改进，远远不够完美，我正在努力改进中。

## :wrench:安装

```shell
npm i tyh-ui
```

## :key:快速上手

在 `main.js` 中引入下面内容

```js
import Vue from 'vue'
import App from './App.vue'

import tyhUi from 'tyh-ui'
import 'tyh-ui/style/index.css'
Vue.use(tyhUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## :earth_africa:链接

- [官网](http://tianyuhao.icu/tyhui)
- [Github](https://github.com/Tyh2001/tyh-ui)
- [Npm](https://www.npmjs.com/package/tyh-ui)
- [更新日志](https://github.com/Tyh2001/tyh-ui/blob/master/CHANGELOG.md)

## :wave:合作者

<div style="display: flex; align-items: center;">
  <img style=" float: left;" height="60px" src="https://www.hualigs.cn/image/608132a6c15b2.jpg">
  <h4 style="display: inline-block;">tyh2001</h4>
</div>
