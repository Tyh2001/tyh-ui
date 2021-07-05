<template>
  <fieldset class="tyh-division">
    <legend class="tyh-division-text" :class="[positionClass]">
      <slot></slot>
    </legend>
  </fieldset>
</template>

<script>
export default {
  name: 'TyhDivision',
  props: {
    position: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    positionClass () {
      return this.position
        ? `tyh-division-text--${this.position}`
        : 'tyh-division-text--left'
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
