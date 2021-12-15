<template>
  <div
    class="tyh-menu"
    :style="[
      {
        background: backgroundColor,
      },
    ]"
    :class="{ 'tyh-menu-bottom-shadow': buttomShadow }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TyhMenu',
  props: {
    backgroundColor: {
      type: String,
      default: '#545c64'
    },
    buttomShadow: Boolean
  }
}
</script>
