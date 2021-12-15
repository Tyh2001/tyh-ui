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
import TyhCrumbs from '../packages/crumbs'
import TyhCrumbsItem from '../packages/crumbs-item'
import TyhTable from '../packages/table'

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
  TyhCrumbs,
  TyhCrumbsItem,
  TyhTable
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  Vue.prototype.$tips = TyhTips
  Vue.prototype.$message = TyhMessage
}

const tyhUi = {
  version: '1.7.0',
  install
}

export {
  install,
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
  TyhCrumbs,
  TyhCrumbsItem,
  TyhTable
}

export default tyhUi
