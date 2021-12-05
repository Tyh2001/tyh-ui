<template>
  <footer class="tyh-footer" :style="[{ height }]">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'TyhFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>
