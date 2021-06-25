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
    // 距离下面的定位距离
    bottom: {
      type: String,
      default: '40'
    },

    // 距离右面的定位距离
    right: {
      type: String,
      default: '40'
    }
  },
  data () {
    return {}
  },
  computed: {
    // 距离下面的定位距离
    bottomStyle () {
      return {
        bottom: `${this.bottom}px`
      }
    },
    // 距离右面的定位距离
    rightStyle () {
      return {
        right: `${this.right}px`
      }
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {
    backTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
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
