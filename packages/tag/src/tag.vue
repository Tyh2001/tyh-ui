<template>
  <span class="tyh-tag" :class="[colorClass, sizeClass]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'TyhTag',
  props: {
    color: String,
    size: String
  },
  computed: {
    colorClass () {
      return this.color ? `tyh-tag--${this.color}` : 'tyh-tag--'
    },
    sizeClass () {
      return this.size ? `tyh-tag--${this.size}` : ''
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
