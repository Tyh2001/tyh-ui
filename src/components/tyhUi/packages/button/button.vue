<template>
  <button
    class="tyh-button"
    :class="[
      type ? `tyh-button--${type}` : 'tyh-button--',
      prohibit ? `tyh-button--prohibit--${type}` : '',
      simple ? `tyh-button--${type}-simple` : '',
      {
        'tyh-button--round': round,
      },
    ]"
    @click="onClick"
  >
    <tyh-icon v-if="icon" :icon="icon" :color="type === '' ? '' : '#fff'" />
    <span
      class="tyh-button-text"
      :class="[
        {
          'tyh-button-icon-margin': this.icon,
        },
      ]"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'TyhButton',
  props: {
    // 按钮的类型
    type: String,
    // 圆角按钮
    round: Boolean,
    // 禁用状态
    prohibit: {
      type: Boolean,
      default: false
    },
    // icon
    icon: String,
    // 朴素按钮
    simple: {
      type: Boolean,
      default: false
    }
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
