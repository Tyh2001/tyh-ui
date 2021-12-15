<template>
  <div
    class="tyh-backTop"
    :style="[{ bottom: `${bottom}px`, right: `${right}px` }]"
    @click="backTop"
  >
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
  methods: {
    backTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 11)
    }
  }
}
</script>
