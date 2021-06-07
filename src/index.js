import '../style/index.css'
import TyhButton from '../packages/button'
import TyhTag from '../packages/tag'
import TyhLink from '../packages/link'
import TyhInput from '../packages/input'
import TyhList from '../packages/list'

const components = [
  TyhButton,
  TyhTag,
  TyhLink,
  TyhInput,
  TyhList
]

function install (Vue) {
  // 全局注册组件
  components.forEach(component => {
    // 以组件组件的 name 为组件的名字 注册该组件
    Vue.component(component.name, component)
  })
}

export default install
