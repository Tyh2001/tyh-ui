<template>
  <a
    :class="isClass()"
    :style="[{ textDecoration: underline ? 'none' : 'underline' }]"
    :href="prohibit ? 'javascript:void(0)' : url"
    :target="target"
  >
    <tyh-icon
      v-if="icon"
      size="15"
      :style="[
        'margin-right: 2px',
        {
          cursor: prohibit ? 'no-drop' : 'pointer',
        },
      ]"
      :icon="icon"
      :color="COLOR[type]"
    />
    <slot />
  </a>
</template>

<script>

export default {
  name: 'TyhLink',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
      }
    },
    prohibit: Boolean,
    url: String,
    underline: {
      type: Boolean,
      default: true
    },
    target: String,
    icon: String
  },
  data () {
    return {
      COLOR: {
        primary: '#3a6ff4',
        success: '#54c600',
        danger: '#d10f1b',
        warning: '#fbcc30',
        default: '#3f536e'
      }
    }
  },
  methods: {
    isClass () {
      return [
        'tyh-link',
        `tyh-link-${this.type}`,
        this.prohibit ? `tyh-link-prohibit-${this.type}` : ''
      ]
    }
  }
}
</script>
