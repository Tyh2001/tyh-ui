<template>
  <div
    class="tyh-menu"
    :style="[backgroundColorStyle]"
    :class="{ 'tyh-menu-bottom-shadow': buttomShadow }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TyhMenu',
  props: {
    backgroundColor: {
      type: String,
      default: '#545c64'
    },
    buttomShadow: Boolean
  },
  computed: {
    backgroundColorStyle () {
      return {
        background: this.backgroundColor
      }
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
