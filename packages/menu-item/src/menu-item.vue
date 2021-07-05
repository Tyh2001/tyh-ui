<template>
  <span class="tyh-menu-item">
    <span
      v-if="url"
      class="tyh-menu-item-span"
      :class="[prohibitClass]"
      :style="[colorStyle]"
      @click="onRouterLink"
    >
      <slot></slot>
    </span>

    <span
      v-else
      class="tyh-menu-item-span"
      :class="[prohibitClass]"
      :style="[colorStyle]"
    >
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'TyhMenuItem',
  props: {
    url: {
      type: String,
      default: null
    },
    prohibit: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    prohibitClass () {
      return this.prohibit
        ? 'tyh-menu-item-prohibit'
        : ''
    },
    colorStyle () {
      return { color: this.color }
    }
  },
  methods: {
    onRouterLink () {
      if (this.prohibit) {
        return
      }
      this.$router.push(this.url)
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
