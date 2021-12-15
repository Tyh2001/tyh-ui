<template>
  <span
    :class="isClass()"
    :style="[{ color: type === 'default' ? '#333' : '#fff' }]"
  >
    <slot />
    <tyh-icon
      v-if="isClose"
      size="8"
      icon="tyh-ui-close"
      :color="type === 'default' ? '#333' : '#fff'"
      style="margin-left: 7px"
      @click.native="$emit('close')"
    />
  </span>
</template>

<script >
export default {
  name: 'TyhTag',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
      }
    },
    size: {
      type: String,
      validator (val) {
        return ['small', 'mini'].includes(val)
      }
    },
    round: Boolean,
    isClose: Boolean
  },
  methods: {
    isClass () {
      return [
        'tyh-tag',
        `tyh-tag-${this.type}`,
        this.size ? `tyh-tag-${this.size}` : '',
        {
          'tyh-tag-round': this.round
        }
      ]
    }
  }
}
</script>
