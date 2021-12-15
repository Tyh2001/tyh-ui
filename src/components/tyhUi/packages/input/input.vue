
<template>
  <div class="tyh-input" :class="{ 'tyh-input-disabled': disabled }">
    <tyh-icon
      v-if="icon"
      :class="['tyh-input-icon', `tyh-input-icon-${size}`]"
      :style="[
        {
          cursor: disabled ? 'not-allowed' : 'Default',
        },
      ]"
      color="#c7c7c7"
      :icon="icon"
      size="12"
    />
    <input
      :class="isClass()"
      :type="inputType"
      :value="value"
      :placeholder="placeholder"
      :maxlength="max"
      :disabled="disabled"
      :autofocus="autofocus"
      :name="name"
      @input="input"
      @keyup.enter="$emit('enter')"
      @blur="$emit('onblur')"
      @focus="$emit('onfocus')"
    />
    <tyh-icon
      v-if="clear && !showPassword"
      :class="['tyh-input-clear', `tyh-input-icon-${size}`]"
      :style="[
        {
          cursor: disabled ? 'not-allowed' : 'pointer'
        }
      ]"
      color="#c7c7c7"
      icon="tyh-ui-guanbi"
      size="12"
      @click.native="clearText"
    />
    <tyh-icon
      v-if="showPassword"
      :class="['tyh-input-clear', `tyh-input-icon-${size}`]"
      :style="[
        {
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
      ]"
      color="#c7c7c7"
      :icon="isPass ? 'tyh-ui-browse' : 'tyh-ui-eye-close'"
      size="12"
      @click.native="showPasswordFn"
    />
  </div>
</template>

<script>
export default {
  name: 'TyhInput',
  props: {
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
      validator (val) {
        return ['text', 'password'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        return ['large', 'medium', 'small', 'mini'].includes(val)
      }
    },
    max: Number,
    clear: Boolean,
    icon: String,
    disabled: Boolean,
    autofocus: Boolean,
    name: String,
    showPassword: Boolean
  },
  data () {
    return {
      inputType: this.type,
      isPass: false
    }
  },
  methods: {
    input (evt) {
      this.$emit('input', evt.target.value)
    },
    clearText () {
      if (this.disabled) return
      this.$emit('input', '')
      console.log('12')
      this.$emit('clear')
    },
    isClass () {
      return [
        'tyh-input-input',
        `tyh-input-input-${this.size}`,
        {
          'tyh-input-icon-padding': this.icon,
          'tyh-input-clear-padding': this.clear,
          'tyh-input-disabled': this.disabled
        }
      ]
    },
    showPasswordFn () {
      this.isPass = !this.isPass
      this.isPass ? this.inputType = 'text' : this.inputType = 'password'
    }
  }
}
</script>
