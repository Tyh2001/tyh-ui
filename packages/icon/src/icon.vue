<template>
  <i class="tyh-icon" :class="[iconClass]" :style="[iconStyle, sizeStyle]" />
</template>

<script>
export default {
  name: 'TyhIcon',
  components: {},
  props: {
    // icon 的 Class
    icon: String,
    // icon 的颜色
    color: {
      type: String,
      required: false,
      default: '#606266'
    },
    // icon 的大小
    size: {
      type: String,
      required: false,
      default: '16'
    }
  },
  data () {
    return {}
  },
  computed: {
    // icon 的 Class
    iconClass () {
      return `tyh-icon ${this.icon}`
    },
    // icon 的颜色
    iconStyle () {
      return {
        color: this.color
      }
    },
    // icon 的大小
    sizeStyle () {
      return {
        fontSize: `${this.size}px`
      }
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style src="../style/index.css" scoped></style>
