<template>
  <i
    :class="[`tyh-icon ${icon}`]"
    :style="[
      {
        color,
        fontSize: `${size}px`
      }
    ]"
    @click="iconClick"
  />
</template>

<script>
export default {
  name: 'TyhIcon',
  props: {
    // icon 的 Class
    icon: String,
    // icon 的颜色
    color: {
      type: String,
      default: '#606266'
    },
    // icon 的大小
    size: {
      type: String,
      default: '16'
    }
  },
  methods: {
    // icon 点击事件
    iconClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style src="./style/index.css" scoped></style>
