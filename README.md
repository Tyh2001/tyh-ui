# Tyh-ui



## 前言

tyh-ui 是一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端轻量级组件库



### 安装

推荐使用 npm 的方式安装：

```shell
npm i tyh-ui
```



### 快速上手

**完成引入**

在 main.js 中引入下面内容：

```js
import TyhUI from 'tyh-ui/src/index'
Vue.use(TyhUI)
```



## 组件

### button 按钮

基础用法：

```vue
<Tyh-button>默认按钮</Tyh-button>
<Tyh-button types="primary">主要按钮</Tyh-button>
<Tyh-button types="success">成功按钮</Tyh-button>
<Tyh-button types="danger">危险按钮</Tyh-button>
<Tyh-button types="warning">警告按钮</Tyh-button>
```



配置项：

| 参数  | 说明           | 类型    | 可选值                     | 默认值 |
| ----- | -------------- | ------- | -------------------------- | ------ |
| types | 按钮的类型     | string  | primary / success / danger / warning | —      |
| round | 是否为圆角按钮 | boolean | true / false              | false  |



### Tag 标签

基础用法：

```vue
<Tyh-tag>标签一</Tyh-tag>
<Tyh-tag color="primary">标签二</Tyh-tag>
<Tyh-tag color="success">标签三</Tyh-tag>
<Tyh-tag color="danger">标签四</Tyh-tag>
<Tyh-tag color="warning">标签五</Tyh-tag>
```



不同尺寸：

```vue
<Tyh-tag color="primary">标签</Tyh-tag>
<Tyh-tag size="small" color="primary">标签</Tyh-tag>
<Tyh-tag size="mini" color="primary">标签</Tyh-tag>
```



配置项：

| 参数  | 说明           | 类型   | 可选值                               | 默认值   |
| ----- | -------------- | ------ | ------------------------------------ | -------- |
| color | 标签的颜色类型 | string | primary / success / danger / warning | —        |
| size  | 标签的尺寸     | string | small / mini                         | 最大尺寸 |



### Link 链接

基础用法：

```vue
<Tyh-link>链接标签</Tyh-link>
<Tyh-link color="primary">链接标签</Tyh-link>
<Tyh-link color="success">链接标签</Tyh-link>
<Tyh-link color="danger">链接标签</Tyh-link>
<Tyh-link color="warning">链接标签</Tyh-link>
```



带有下划线：

```vue
<Tyh-link underline>链接标签</Tyh-link>
<Tyh-link underline color="primary">链接标签</Tyh-link>
<Tyh-link underline color="success">链接标签</Tyh-link>
<Tyh-link underline color="danger">链接标签</Tyh-link>
<Tyh-link underline color="warning">链接标签<Tyh-link>
```



鼠标移入带有下划线：

```vue
<Tyh-link hoverline>百度</Tyh-link>
<Tyh-link hoverline color="primary">链接标签</Tyh-link>
<Tyh-link hoverline color="success">链接标签</Tyh-link>
<Tyh-link hoverline color="danger">链接标签</Tyh-link>
<Tyh-link hoverline color="warning">链接标签</Tyh-link>
```



以新的标签页打开：

```vue
<Tyh-link target="_back">百度</Tyh-link>
<Tyh-link target="_back" color="primary">链接标签</Tyh-link>
<Tyh-link target="_back" color="success">链接标签</Tyh-link>
<Tyh-link target="_back" color="danger">链接标签</Tyh-link>
<Tyh-link target="_back" color="warning">链接标签</Tyh-link>
```



| 参数      | 说明           | 类型    | 可选值                               | 默认值 |
| --------- | -------------- | ------- | ------------------------------------ | ------ |
| url       | 跳转的路径     | string  | —                                    | —      |
| color     | 链接的字体颜色 | string  | primary / success / danger / warning | —      |
| underline | 下划线         | boolean | true / false                         | fasle  |
| hoverline | 鼠标移入下划线 | boolean | true / false                         | fasle  |
| target    | 以新的窗口打开 | string  | 同原生 target 属性                   | —      |



注：

url 参数需要以 `https://www.xxx.com` 或 `http://www.xxx.com` 格式，错误示范：`www.xxx.com`

并不建议 `underline` 和 `hoverline` 两个属性同时使用，同时使用的话 `hoverline` 效果会丢失
