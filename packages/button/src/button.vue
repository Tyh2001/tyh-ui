<template>
  <button
    class="tyh-button"
    :class="[typeClass, roundClass, prohibitClass, simpleClass]"
    @click="onClick"
  >
    <!-- icon -->
    <Tyh-icon v-if="icon" color="#fff" :class="icon" />
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
    },

    // icon
    icon: {
      type: String,
      default: ''
    },

    // 朴素按钮
    simple: {
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
      return this.type
        ? `tyh-button--${this.type}`
        : 'tyh-button--'
    },
    // 圆角 class
    roundClass () {
      return this.round ? 'tyh-button--round' : ''
    },
    // 禁用 class
    prohibitClass () {
      return this.prohibit
        ? `tyh-button--prohibit--${this.type}`
        : ''
    },
    // 朴素按钮 class
    simpleClass () {
      return this.simple
        ? `tyh-button--${this.type}-simple`
        : ''
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
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
