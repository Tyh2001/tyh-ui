import Vue from 'vue'
import '../style/index.css'
import TyhButton from '../packages/button'
import TyhTag from '../packages/tag'
import TyhLink from '../packages/link'
import TyhInput from '../packages/input'
import TyhList from '../packages/list'
import TyhCard from '../packages/card'
import TyhMenu from '../packages/menu'
import TyhMenuItem from '../packages/menu-item'
import TyhTips from '../packages/tips'

const components = [
  TyhButton,
  TyhTag,
  TyhLink,
  TyhInput,
  TyhList,
  TyhCard,
  TyhMenu,
  TyhMenuItem
]

function install (dom) {
  // 全局注册组件
  components.forEach(component => {
    // 以组件组件的 name 为组件的名字 注册该组件
    dom.component(component.name, component)
  })

  // 将弹框组件挂载到原型上
  Vue.prototype.$tips = TyhTips
}

export default install
