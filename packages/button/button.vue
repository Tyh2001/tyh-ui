<template>
  <button
    class="tyh-button"
    :class="[
      type ? (!simple ? `tyh-button--${type}` : '') : 'tyh-button--',
      prohibit
        ? !simple
          ? `tyh-button--prohibit--${type}`
          : `tyh-button--prohibit--${type}-simple`
        : '',
      simple ? `tyh-button--${type}-simple` : '',
      size ? `tyh-button--size-${size}` : '',
      {
        'tyh-button--round': round,
        'tyh-button-icon-margin': icon,
        'tyh-button-big': big,
      },
    ]"
    @click="onClick"
  >
    <tyh-icon
      v-if="icon"
      :icon="icon"
      :color="type !== 'default' ? '#fff' : ''"
    />
    <span class="tyh-button-text" :class="[{ 'tyh-button-icon-margin': icon }]">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'TyhButton',
  props: {
    type: String,
    round: Boolean,
    prohibit: Boolean, // 禁用状态
    icon: String,
    simple: Boolean,
    size: String,
    big: Boolean // 长按钮
  },
  methods: {
    // 点击事件发生给父组件处理
    onClick (evt) {
      if (this.prohibit) return
      this.$emit('click', evt)
    }
  }
}
</script>
