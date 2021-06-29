<template>
  <span class="tyh-tag" :class="[colorClass, sizeClass]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'TyhTag',
  props: {
    // 标签颜色
    color: String,

    // 标签大小
    size: String
  },
  computed: {
    // 主题颜色 class
    colorClass () {
      return this.color ? `tyh-tag--${this.color}` : 'tyh-tag--'
    },
    // 尺寸 class
    sizeClass () {
      return this.size ? `tyh-tag--${this.size}` : ''
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
