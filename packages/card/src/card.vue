<template>
  <div class="tyh-card" :class="[shadowClass]">
    <div class="tyh-card-header" v-if="!simple">
      <p class="tyh-card-title">
        <slot name="title"></slot>
      </p>

      <p class="tyh-card-subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>

    <div class="tyh-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TyhCard',
  props: {
    shadow: {
      type: String,
      default: ''
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    shadowClass () {
      return this.shadow
        ? `tyh-card-shadow-${this.shadow}`
        : ''
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
