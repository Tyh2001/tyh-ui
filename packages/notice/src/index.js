import Vue from 'vue'
import Notice from './notice'

// 创建构造器
const NoticeConstructor = Vue.extend(Notice)

/**
 * @param { Object } option 需要展示的参数
 * title: xxx
 * message: xxx
 */
export default function notice (option) {
  // 1. 实例化构造器
  const instance = new NoticeConstructor({
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
