<template>
  <div class="tyh-menu" :style="[backgroundColorStyle]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TyhMenu',
  components: {},
  props: {
    // 背景色
    backgroundColor: {
      type: String,
      default: '#545c64',
      required: false
    }
  },
  data () {
    return {}
  },
  computed: {
    // 导航栏背景色
    backgroundColorStyle () {
      return { background: this.backgroundColor }
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style src="../style/index.css" scoped></style>
