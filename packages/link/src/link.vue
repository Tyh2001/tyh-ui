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
    url: String,
    color: String,
    hoverline: Boolean,
    underline: Boolean,
    target: String
  },
  computed: {
    colorClass () {
      return this.color ? `tyh-link--${this.color}` : 'tyh-link--'
    },
    hoverlineClass () {
      return this.hoverline
        ? this.color
          ? `tyh-link--hoverline--${this.color}`
          : 'tyh-link--hoverline'
        : ''
    },
    underlineClass () {
      return this.underline
        ? this.color
          ? `tyh-link--underline--${this.color}`
          : 'tyh-link--underline'
        : ''
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
