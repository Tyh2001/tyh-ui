<template>
  <span
    class="tyh-crumbs-item"
    :class="[
      {
        'tyh-crumbs-item__to': to,
      },
    ]"
    @click="onRouterTo"
  >
    <span class="tyh-crumbs-item-text">
      <slot></slot>
    </span>
    <tyh-icon color="#C0C4CC" :icon="icon" />
  </span>
</template>

<script>
export default {
  name: 'TyhCrumbsItem',
  props: {
    // 跳转的路径
    to: String
  },
  data () {
    return {
      icon: ''
    }
  },
  inject: ['TyhCrumbs'],
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
