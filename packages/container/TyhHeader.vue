<template>
  <header class="tyh-header" :style="[{ height }]">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'TyhHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>
