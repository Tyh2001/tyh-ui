<template>
  <div class="tyh-backTop" :style="[bottomStyle, rightStyle]" @click="backTop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TyhBackTop',
  components: {},
  props: {
    bottom: {
      type: String,
      default: '40'
    },
    right: {
      type: String,
      default: '40'
    }
  },
  computed: {
    bottomStyle () {
      return {
        bottom: `${this.bottom}px`
      }
    },
    rightStyle () {
      return {
        right: `${this.right}px`
      }
    }
  },
  methods: {
    backTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
