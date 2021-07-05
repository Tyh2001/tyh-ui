<template>
  <button
    class="tyh-button"
    :class="[typeClass, roundClass, prohibitClass, simpleClass]"
    @click="onClick"
  >
    <Tyh-icon v-if="icon" :icon="icon" :color="iconColor" />
    <span class="tyh-button-text" :class="[iconButtonTextClass]">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import TyhIcon from '../../icon/src/icon'
export default {
  name: 'TyhButton',
  components: {
    TyhIcon
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    round: Boolean,
    prohibit: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClass () {
      return this.type
        ? `tyh-button--${this.type}`
        : 'tyh-button--'
    },
    roundClass () {
      return this.round ? 'tyh-button--round' : ''
    },
    prohibitClass () {
      return this.prohibit
        ? `tyh-button--prohibit--${this.type}`
        : ''
    },
    simpleClass () {
      return this.simple
        ? `tyh-button--${this.type}-simple`
        : ''
    },
    iconButtonTextClass () {
      return this.icon ? 'tyh-button-icon-margin' : ''
    },
    iconColor () {
      return this.type === '' ? '' : '#fff'
    }
  },
  methods: {
    onClick (evt) {
      if (this.prohibit) {
        return
      }
      this.$emit('click', evt)
    }
  }
}
</script>
