import Vue from 'vue'
import Tips from './src/tips'

// 创建构造器
const TipsConstructor = Vue.extend(Tips)

/**
 * @param { Object } option 需要展示的参数
 * title: xxx
 * message: xxx
 */
export default function tips (option) {
  // 1. 实例化构造器
  const instance = new TipsConstructor({
    // 将传递来的对象参数合并到组件的 data 中
    data: option
  })

  // 2. 手动挂载
  // 手动挂载之后 dom 元素就已经渲染完成
  instance.$mount()
  // 手动挂载到 body 上
  // $el 获取到的是当前的 dom 对象
  // 也就是 Notice.vue 中的根元素 div
  document.body.appendChild(instance.$el)

  // 返回这个实例就是为了外界在调用的时候可以获取当前实例对象
  return instance
}
