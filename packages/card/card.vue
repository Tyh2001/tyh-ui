<template>
  <div class="tyh-card" :class="[shadow ? `tyh-card-shadow-${shadow}` : '']">
    <div class="tyh-card-header" v-if="!simple">
      <!-- 左侧标题 -->
      <p class="tyh-card-title">
        <slot name="title"></slot>
      </p>

      <!-- 右侧普通标题 -->
      <p class="tyh-card-subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>

    <!-- 内容 -->
    <div class="tyh-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TyhCard',
  props: {
    // 阴影显示时机
    shadow: String,
    // 简约卡片
    simple: {
      type: Boolean,
      default: false
    }
  }
}
</script>
