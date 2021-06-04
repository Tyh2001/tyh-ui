import Vue from 'vue'
import TyhButton from '../packages/button/index'
import TyhTag from '../packages/tag/index'
import TyhLink from '../packages/link/index'
import TyhInput from '../packages/input/index'

const components = [
  TyhButton,
  TyhTag,
  TyhLink,
  TyhInput
]

components.forEach(component => {
  Vue.component(component.name, component);
})

export default {
  TyhButton,
  TyhTag,
  TyhLink,
  TyhInput
}