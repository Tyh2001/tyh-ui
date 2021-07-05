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
import TyhMessage from '../packages/message'
import TyhDivision from '../packages/division'
import TyhBackTop from '../packages/backTop'
import TyhIcon from '../packages/icon'
import TyhTable from '../packages/table'
import TyhPortrait from '../packages/portrait'

const components = {
  TyhButton,
  TyhTag,
  TyhLink,
  TyhInput,
  TyhList,
  TyhCard,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhBackTop,
  TyhIcon,
  TyhTable,
  TyhPortrait
}

const install = function (Vue) {
  // 全局注册组件
  Object.keys(components).forEach(key => {
    // 以组件组件的 name 为组件的名字 注册该组件
    Vue.component(key, components[key])
  })

  // 将组件挂载到原型上
  Vue.prototype.$tips = TyhTips
  Vue.prototype.$message = TyhMessage
}

export default {
  install,
  ...components
}
