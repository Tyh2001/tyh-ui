<template>
  <i :class="[iconClass]" :style="[iconStyle, sizeStyle]" @click="iconClick" />
</template>

<script>
export default {
  name: 'TyhIcon',
  props: {
    icon: String,
    color: {
      type: String,
      default: '#606266'
    },
    size: {
      type: String,
      default: '16'
    }
  },
  computed: {
    iconClass () {
      return `tyh-icon ${this.icon}`
    },
    iconStyle () {
      return {
        color: this.color
      }
    },
    sizeStyle () {
      return {
        fontSize: `${this.size}px`
      }
    }
  },
  methods: {
    iconClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
