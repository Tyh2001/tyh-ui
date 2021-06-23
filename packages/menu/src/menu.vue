<template>
  <div
    class="tyh-menu"
    :class="[bottomTypeClass]"
    :style="[backgroundColorStyle]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TyhMenu',
  components: {},
  props: {
    // 背景色
    backgroundColor: {
      type: String,
      default: '#545c64',
      required: false
    },

    // 底部类型
    bottomType: {
      type: String,
      required: false
    }
  },
  data () {
    return {}
  },
  computed: {
    // 导航栏背景色
    backgroundColorStyle () {
      return { background: this.backgroundColor }
    },
    // 导航栏底部的类型
    bottomTypeClass () {
      return this.bottomType
        ? `tyh-menu-bottom-${this.bottomType}`
        : ''
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style src="../style/index.css" scoped></style>
