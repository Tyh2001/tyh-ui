<template>
  <div class="tyh-card" :class="[shadow ? `tyh-card-shadow-${shadow}` : '']">
    <div class="tyh-card-header" v-if="!simple">
      <p class="tyh-card-title">
        <slot name="title" />
      </p>

      <p class="tyh-card-subtitle">
        <slot name="subtitle" />
      </p>
    </div>

    <div class="tyh-card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TyhCard',
  props: {
    shadow: String,
    simple: {
      type: Boolean,
      default: false
    }
  }
}
</script>
