<template>
  <i
    :class="[`tyh-icon ${icon}`]"
    :style="[{ color, fontSize: `${size}px` }]"
  />
</template>

<script>
export default {
  name: 'TyhIcon',
  props: {
    icon: String,
    color: String,
    size: {
      type: String,
      default: '18'
    }
  }
}
</script>

<style src="./style/index.css" scoped></style>
