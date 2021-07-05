<template>
  <div class="tyh-input" :class="prohibitClass">
    <input
      class="tyh-input_inp"
      :class="[sizeClass, clearClass, prohibitClass]"
      :type="inpType"
      :value="value"
      :placeholder="innerText"
      :maxlength="max"
      :disabled="prohibit"
      :autofocus="autofocus"
      :name="name"
      @input="handleInput"
    />
    <Tyh-icon
      v-if="clear || showIcon !== 'tyh-ui-close-03'"
      size="12"
      color="rgb(199, 199, 199)"
      :icon="showIcon"
      :class="[iconHeightClass]"
      @click="clearInputText"
    />
  </div>
</template>

<script>
import TyhIcon from '../../icon/src/icon'
export default {
  name: 'TyhInput',
  components: {
    TyhIcon
  },
  props: {
    value: [String, Number],
    innerText: String,
    inpType: {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'password'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'medium'
    },
    max: String,
    clear: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: String,
      default: 'tyh-ui-close-03'
    },
    prohibit: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    name: String
  },
  computed: {
    sizeClass () {
      return this.size
        ? `tyh-input_inp--${this.size}`
        : 'tyh-input_inp--medium'
    },
    clearClass () {
      return this.clear ? 'tyh-input-clear-padding' : ''
    },
    iconHeightClass () {
      return `tyh-input-icon-${this.size}-height`
    },
    prohibitClass () {
      return this.prohibit ? 'tyh-button-prohibit' : ''
    }
  },
  methods: {
    handleInput (evt) {
      this.$emit('input', evt.target.value)
    },
    clearInputText () {
      if (this.showIcon !== 'tyh-ui-close-03') {
        return
      }
      this.$emit('input', '')
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
