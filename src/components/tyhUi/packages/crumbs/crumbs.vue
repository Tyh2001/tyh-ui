<template>
  <div class="tyh-crumbs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TyhCrumbs',
  props: {
    // 分隔符
    separator: {
      type: String,
      default: 'tyh-ui-xiexian-01'
    }
  },
  provide () {
    return {
      TyhCrumbs: this
    }
  }
}
</script>
