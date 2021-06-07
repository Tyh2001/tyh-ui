<template>
  <div class="tyh-card" :class="[shadowClass]">
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
  components: {},
  props: {
    // 阴影显示时机
    shadow: {
      type: String,
      default: '',
      required: false
    },

    // 简约卡片
    simple: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {}
  },
  computed: {
    // 阴影显示时机 class
    shadowClass () {
      return this.shadow
        ? 'tyh-card-shadow-' + this.shadow
        : ''
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style src="../../../style/card/index.css" scoped></style>
