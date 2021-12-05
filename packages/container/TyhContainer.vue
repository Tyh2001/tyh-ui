<template>
  <section
    class="tyh-container"
    :class="[flex ? 'tyh-container-flex' : 'tyh-container-noFlex']"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'TyhContainer',
  props: {
    flex: Boolean
  }
}
</script>
