<template>
  <button
    class="tyh-button-light"
    :class="[typeClass, simpleClass]"
    :style="prohibitStyle"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TyhButtonLight',
  components: {},
  props: {
    // 按钮的类型
    type: {
      type: String,
      default: 'primary'
    },
    // 朴素按钮
    simple: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    prohibit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    // 按钮的类型
    typeClass () {
      return this.type
        ? `tyh-button-light--${this.type}`
        : 'tyh-button-light--primary'
    },
    // 是否为朴素按钮
    simpleClass () {
      return !this.simple
        ? `tyh-button-linght-${this.type}-simple`
        : ''
    },
    // 是否禁用
    prohibitStyle () {
      return this.prohibit
        ? { cursor: 'not-allowed' }
        : ''
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {
    onClick (evt) {
      if (this.prohibit) return
      this.$emit('click', evt)
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
