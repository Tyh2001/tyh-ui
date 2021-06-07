<template>
  <button
    class="tyh-button"
    :class="[typeClass, roundClass, prohibitClass]"
    @click="onClick"
    @mousedown="onMousedown"
    @mouseup="onMouseup"
  >
    <span class="tyh-button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'TyhButton',
  components: {},
  props: {
    // 按钮的类型
    type: {
      type: String,
      default: ''
    },

    // 圆角按钮
    round: Boolean,

    // 禁用状态
    prohibit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    // 类型 class
    typeClass () {
      return this.type ? 'tyh-button--' + this.type : 'tyh-button--'
    },
    // 圆角 class
    roundClass () {
      return this.round ? 'tyh-button--round' : ''
    },
    // 禁用 class
    prohibitClass () {
      return this.prohibit ? 'tyh-button--prohibit--' + this.type : ''
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 点击事件发生给父组件处理
    onClick (evt) {
      if (this.prohibit) {
        return
      }
      this.$emit('click', evt)
    },
    // 按下事件发生给父组件处理
    onMousedown (evt) {
      if (this.Ban) {
        return
      }
      this.$emit('mousedown', evt)
    },
    // 抬起事件发生给父组件处理
    onMouseup (evt) {
      if (this.Ban) {
        return
      }
      this.$emit('mouseup', evt)
    }
  }
}
</script>

<style src="../../../style/button/index.css" scoped></style>
