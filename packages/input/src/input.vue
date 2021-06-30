<template>
  <div class="tyh-input" :class="prohibitClass">
    <input
      class="tyh-input_inp"
      :class="[sizeClass, clearClass, prohibitClass]"
      :type="inpType"
      :value="value"
      :placeholder="innerText"
      :maxlength="max"
      :disabled="prohibit"
      :autofocus="autofocus"
      :name="name"
      @input="handleInput"
    />
    <Tyh-icon
      v-if="clear || showIcon !== 'tyh-ui-close-03'"
      size="12"
      color="rgb(199, 199, 199)"
      :icon="showIcon"
      :class="[iconHeightClass]"
      @click="clearInputText"
    />
  </div>
</template>

<script>
import TyhIcon from '../../icon/src/icon'
export default {
  name: 'TyhInput',
  components: {
    TyhIcon
  },
  props: {
    // 通过父组件 v-model 默认监听 value 事件
    value: [String, Number],
    // 文字中显示的文字
    innerText: String,
    // 文本框类型
    inpType: {
      type: String,
      default: 'text',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['text', 'password'].indexOf(value) !== -1
      }
    },
    // 文本框尺寸
    size: {
      type: String,
      default: 'medium'
    },
    // 最大输入上限
    max: String,
    // 是否可以清空文本框
    clear: {
      type: Boolean,
      default: false
    },
    // 右侧显示的图标
    showIcon: {
      type: String,
      default: 'tyh-ui-close-03'
    },
    // 是否禁用
    prohibit: {
      type: Boolean,
      default: false
    },
    // 是否自动获取焦点
    autofocus: {
      type: Boolean,
      default: false
    },
    // 原生 name 属性
    name: String
  },
  computed: {
    // 尺寸 class
    sizeClass () {
      return this.size
        ? `tyh-input_inp--${this.size}`
        : 'tyh-input_inp--medium'
    },
    // 可清空的文本框
    clearClass () {
      return this.clear ? 'tyh-input-clear-padding' : ''
    },
    // 不同尺寸的行高
    iconHeightClass () {
      return `tyh-input-icon-${this.size}-height`
    },
    // 是否禁用
    prohibitClass () {
      return this.prohibit ? 'tyh-button-prohibit' : ''
    }
  },
  methods: {
    // 输入时触发 input 事件 将新的值再传递给父组件 实现双向绑定
    handleInput (evt) {
      // 通过 input 标签的原生事件 input 将值 emit 出去，以达到值得改变实现双向绑定
      this.$emit('input', evt.target.value)
    },
    // 点击清空文本框内容
    clearInputText () {
      if (this.showIcon !== 'tyh-ui-close-03') {
        return
      }
      this.$emit('input', '')
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
