# Tyh-ui



## 前言

tyh-ui 是一套基于 Vue 2.0 的桌面端轻量级 UI 组件库



### 安装

推荐使用 npm 的方式安装：

```shell
npm i tyh-ui
```



### 快速上手

**完成引入**

在 main.js 中引入下面内容：

```js
import tyhUI from './tyh-ui/src/index'
Vue.use(tyhUI)
```



## 组件

### Button 按钮

**基础用法：**

```vue
<Tyh-button>默认按钮</Tyh-button>
<Tyh-button type="primary">主要按钮</Tyh-button>
<Tyh-button type="success">成功按钮</Tyh-button>
<Tyh-button type="danger">危险按钮</Tyh-button>
<Tyh-button type="warning">警告按钮</Tyh-button>
```



**配置项：**

| 参数     | 说明           | 类型    | 可选值                               | 默认值 |
| -------- | -------------- | ------- | ------------------------------------ | ------ |
| type     | 按钮的类型     | string  | primary / success / danger / warning | —      |
| round    | 是否为圆角按钮 | boolean | true / false                         | false  |
| prohibit | 按钮是否禁用   | boolean | true / false                         | fasle  |



**支持事件：**

| 事件名称  | 说明               | 回调参数 |
| --------- | ------------------ | -------- |
| click     | 点击事件           | —        |
| mousedown | 按下鼠标按钮时触发 | —        |
| mouseup   | 释放鼠标按钮时触发 | —        |



### Tag 标签

**基础用法：**

```vue
<Tyh-tag>标签一</Tyh-tag>
<Tyh-tag color="primary">标签二</Tyh-tag>
<Tyh-tag color="success">标签三</Tyh-tag>
<Tyh-tag color="danger">标签四</Tyh-tag>
<Tyh-tag color="warning">标签五</Tyh-tag>
```



不同尺寸：

`size` 属性可以配置不同的尺寸

```vue
<Tyh-tag color="primary">标签</Tyh-tag>
<Tyh-tag size="small" color="primary">标签</Tyh-tag>
<Tyh-tag size="mini" color="primary">标签</Tyh-tag>
```



**配置项：**

| 参数  | 说明           | 类型   | 可选值                               | 默认值   |
| ----- | -------------- | ------ | ------------------------------------ | -------- |
| color | 标签的颜色类型 | string | primary / success / danger / warning | —        |
| size  | 标签的尺寸     | string | small / mini                         | 最大尺寸 |



### Link 链接

**基础用法：**

```vue
<Tyh-link url="">标签</Tyh-link>
<Tyh-link url="" color="primary">标签</Tyh-link>
<Tyh-link url="" color="success">标签</Tyh-link>
<Tyh-link url="" color="danger">标签</Tyh-link>
<Tyh-link url="" color="warning">标签</Tyh-link>
```



带有下划线：

`underline` 属性可以配置带有下划线

```vue
<Tyh-link underline>百度</Tyh-link>
<Tyh-link underline color="primary">百度</Tyh-link>
<Tyh-link underline color="success">百度</Tyh-link>
<Tyh-link underline color="danger">百度</Tyh-link>
<Tyh-link underline color="warning">百度</Tyh-link>
```



鼠标移入带有下划线：

`hoverline` 属性可以配置鼠标移入带有下划线

```vue
<Tyh-link hoverline>百度</Tyh-link>
<Tyh-link hoverline color="primary">百度</Tyh-link>
<Tyh-link hoverline color="success">百度</Tyh-link>
<Tyh-link hoverline color="danger">百度</Tyh-link>
<Tyh-link hoverline color="warning">百度</Tyh-link>
```



**配置项：**

| 参数      | 说明           | 类型    | 可选值                               | 默认值 |
| --------- | -------------- | ------- | ------------------------------------ | ------ |
| url       | 跳转的路径     | string  | —                                    | —      |
| color     | 链接的字体颜色 | string  | primary / success / danger / warning | —      |
| underline | 下划线         | boolean | true / false                         | fasle  |
| hoverline | 鼠标移入下划线 | boolean | true / false                         | fasle  |
| target    | 以新的窗口打开 | string  | 同原生 target 属性                   | —      |



**需要注意：**

```
url 参数需要以 https://www.xxx.com 或 http://www.xxx.com 格式，错误示范：www.xxx.com。

并不建议 underline 和 hoverline 两个属性同时使用，同时使用的话 hoverline 效果会丢失。
```



### Input 输入框

**基础用法：**

```vue
<template>
  <Tyh-input v-model="text" />
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
```



密码框：

`inpType` 属性可以规定文本框类型

```vue
<template>
  <Tyh-input inpType="password" v-model="text" />
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
```



不同尺寸：

`size` 属性可以配置文本框尺寸

```vue
<template>
  <Tyh-input size="big" v-model="text" /><br />
  <Tyh-input size="medium" v-model="text" /><br />
  <Tyh-input size="small" v-model="text" /><br />
  <Tyh-input size="mini" v-model="text" /><br />
</template>

<script>
export default {
  data () {
     return {
        text: ''
     }
  }
}
</script>
```



**配置项：**

| 参数      | 说明           | 类型            | 可选值                      | 默认值 |
| --------- | -------------- | --------------- | --------------------------- | ------ |
| v-model   | 绑定值         | string / number | —                           | —      |
| inpType   | 类型           | string          | text / password             | text   |
| innerText | 输入框占位文本 | string          | —                           | —      |
| size      | 文本框尺寸     | string          | big / medium / small / mini | medium |



**需要注意：**

```
目前暂不支持两个输出口同时双向绑定同一个数据，你需要以两个值来分别绑定。该 BUG 后续解决。
```



### List 列表

**基本使用：**

`content` 属性可以绑定需要展示的数组元素

`body` 属性可以绑定数组中每个元素的键值

```vue
<template>
  <TyhList
    :content="arr"
    iskey="name"
  />
</template>

<script>
export default {
  data () {
    return {
      arr: [
        { name: '小明1', age: 11 },
        { name: '小明2', age: 12 },
        { name: '小明3', age: 13 },
        { name: '小明4', age: 14 },
        { name: '小明5', age: 15 },
        { name: '小明6', age: 16 },
        { name: '小明7', age: 17 },
        { name: '小明8', age: 18 }
       ]
     }
  }
}
</script>
```



有表头和页脚的列表：

`header` 表头内容

`footer` 页脚内容

```vue
<template>
  <TyhList
    :content="arr"
    iskey="name"
    header="这是头部"
    footer="这是页脚"
  />
</template>

<script>
export default {
  data () {
    return {
      arr: [
        { name: '小明1', age: 11 },
        { name: '小明2', age: 12 },
        { name: '小明3', age: 13 },
        { name: '小明4', age: 14 },
        { name: '小明5', age: 15 },
        { name: '小明6', age: 16 },
        { name: '小明7', age: 17 },
        { name: '小明8', age: 18 }
       ]
     }
  }
}
</script>
```



**配置项：**

| 参数    | 说明           | 类型            | 可选值       | 默认值 |
| ------- | -------------- | --------------- | ------------ | ------ |
| header  | 表头信息       | string / number | —            | —      |
| footer  | 页脚信息       | string / number | —            | —      |
| content | 主体内容       | array / string  | —            | —      |
| iskey   | 循环对象键名   | string          | —            | —      |
| zebra   | 是否显示斑马纹 | boolean         | true / false | fasle  |
| num     | 是否显示序号   | boolean         | true / false | fasle  |



**需要注意：**

```
content 的数据类型如果是数组，里面包含的是一个一个的对象的话，需要以对象的某个键为列表的内容时，你就需要绑定 iskey 属性了，对应的就是对象的键名。

如果 iskey 绑定的是一个对象中没有这个键名的值则返回空。

如果 content 的数据类型是 string 或者是数组中不是一个一个的对象的形式，那么这时候 iskey 就算你绑定值也是不生效的。
```



### Card 卡片

**基本使用：**

`title` 自定义卡片的主标题

`subtitle` 自定义卡片的副标题

```vue
<Tyh-card>
  <template>
    <div slot="title">主标题</div>
    <div slot="subtitle">副标题</div>
  </template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</Tyh-card>
```



简约卡片（没有表头栏）：

`simple` 属性可以配置简约卡片

```vue
<Tyh-card simple>
  <template>
    <div slot="title">主标题</div>
    <div slot="subtitle">副标题</div>
  </template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</Tyh-card>
```



阴影显示时机：

`shadow` 属性可以配置阴影显示时机

```vue
<Tyh-card shadow="always">
  <template>
    <div slot="title">主标题</div>
    <div slot="subtitle">副标题</div>
  </template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</Tyh-card>
```

```vue
<Tyh-card shadow="hover">
  <template>
    <div slot="title">主标题</div>
    <div slot="subtitle">副标题</div>
  </template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</Tyh-card>
```

```vue
<Tyh-card shadow="noShadow">
  <template>
    <div slot="title">主标题</div>
    <div slot="subtitle">副标题</div>
  </template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</Tyh-card>
```



**配置项：**

| 参数   | 说明         | 类型    | 可选值                    | 默认值 |
| ------ | ------------ | ------- | ------------------------- | ------ |
| simple | 简约卡片     | boolean | true / false              | fasle  |
| shadow | 阴影显示时机 | string  | always / hover / noShadow | —      |



**可选插槽：**

| 名称     | 说明               |
| -------- | ------------------ |
| title    | 自定义卡片的主标题 |
| subtitle | 自定义卡片的副标题 |



**需要注意：**

```
当你配置了 simple 为 true 时，title 和 subtitle 两个具名插槽是不生效的
```

