<template>
  <aside class="tyh-aside" :style="[{ width }]">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'TyhAside',
  props: {
    width: {
      type: String,
      default: '200px'
    }
  }
}
</script>
