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
  TyhIcon
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  Vue.prototype.$tips = TyhTips
  Vue.prototype.$message = TyhMessage
}

export default {
  install,
  ...components
}