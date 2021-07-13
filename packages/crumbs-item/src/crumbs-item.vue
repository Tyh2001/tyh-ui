<template>
  <span class="tyh-crumbs-item" :class="[toClass]" @click="onRouterTo">
    <span class="tyh-crumbs-item-text">
      <slot></slot>
    </span>
    <TyhIcon color="#C0C4CC" :icon="icon" />
  </span>
</template>

<script>
import TyhIcon from '../../icon/src/icon'
export default {
  name: 'TyhCrumbsItem',
  components: {
    TyhIcon
  },
  props: {
    // 跳转的路径
    to: {
      type: String
    }
  },
  data () {
    return {
      icon: ''
    }
  },
  inject: ['TyhCrumbs'],
  computed: {
    // 传入 to 的类名
    toClass () {
      return this.to ? 'tyh-crumbs-item__to' : ''
    }
  },
  watch: {},
  created () { },
  mounted () {
    this.icon = this.TyhCrumbs.separator
  },
  methods: {
    onRouterTo () {
      if (!this.to) return
      this.$router.push(this.to)
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
