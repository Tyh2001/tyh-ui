<template>
  <a
    class="tyh-link"
    :class="[colorClass, hoverlineClass, underlineClass]"
    :href="url"
    :target="target"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'TyhLink',
  components: {},
  props: {
    // 跳转的路径参数
    url: String,

    // 字体颜色
    color: String,

    // 移入显示下划线
    hoverline: Boolean,

    // 显示下划线
    underline: Boolean,

    // 是否以一个新的标签页打开
    target: String
  },
  data () {
    return {}
  },
  computed: {
    // 颜色 class
    colorClass () {
      return this.color ? `tyh-link--${this.color}` : 'tyh-link--'
    },
    // 鼠标移入 class
    hoverlineClass () {
      return this.hoverline
        ? this.color
          ? `tyh-link--hoverline--${this.color}`
          : 'tyh-link--hoverline'
        : ''
    },
    // 下划线 class
    underlineClass () {
      return this.underline
        ? this.color
          ? `tyh-link--underline--${this.color}`
          : 'tyh-link--underline'
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
