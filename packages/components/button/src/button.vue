<template>
  <button :class="classList" :disabled="disabled || loading" :style="{ color }">
    <i
      v-if="loading || icon"
      :class="['tyh-icon', loading ? 'tyh-ui-loading' : icon]"
      :style="{ color }"
    />
    <slot />
  </button>
</template>

<script lang="ts" setup name="TyhButton">
  import { computed } from 'vue'
  import { Props } from './props'
  import { THEME } from '@tyh-ui2/utils'

  const prop = defineProps(Props)

  const color = computed((): string => {
    if (prop.simple) return THEME[prop.type]
    return prop.type === 'default' || !prop.type ? '#333' : '#fff'
  })

  const classList = computed((): (string | object)[] => {
    return [
      'tyh-button',
      `tyh-button-${prop.type}`,
      {
        [`tyh-button-${prop.size}`]: prop.size,
        'tyh-button-round': prop.round,
        'tyh-button-square': prop.square,
        'tyh-button-simple': prop.simple,
        'tyh-button-disabled': prop.disabled || prop.loading,
        'tyh-button-block': prop.block
      }
    ]
  })
</script>
