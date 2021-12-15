<template>
  <button :class="isClass()" :disabled="disabled" @click="onClick">
    <tyh-icon v-if="icon" :icon="icon" :color="textColor()" />
    <span
      class="tyh-button-text"
      :style="[icon ? 'margin-left:5px' : '', { color: textColor() }]"
    >
      <slot />
    </span>
  </button>
</template>

<script>
const COLOR = {
  primary: '#3a6ff4',
  success: '#54c600',
  danger: '#d10f1b',
  warning: '#fbcc30',
  default: '#3f536e'
}
export default {
  name: 'TyhButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
      }
    },
    round: Boolean,
    disabled: Boolean,
    icon: String,
    size: {
      type: String,
      validator (val) {
        return ['large', 'small', 'mini'].includes(val)
      }
    },
    square: Boolean,
    simple: Boolean
  },
  methods: {
    textColor () {
      if (this.simple) return COLOR[this.type]
      return this.type === 'default' || this.type === '' ? '#333' : '#fff'
    },
    isClass () {
      return [
        'tyh-button',
        this.simple
          ? this.disabled ? `tyh-button-simple-disabled-${this.type}` : `tyh-button-simple-${this.type}`
          : this.disabled ? `tyh-button-disabled-${this.type}` : `tyh-button-${this.type}`,
        this.size ? `tyh-button-size-${this.size}` : '',
        {
          'tyh-button-round': this.round,
          'tyh-button-square': this.square
        }
      ]
    },
    onClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
