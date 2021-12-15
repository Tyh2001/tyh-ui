<template>
  <span class="tyh-menu-item">
    <span
      class="tyh-menu-item-span"
      :class="[
        {
          'tyh-menu-item-prohibit': prohibit
        }
      ]"
      :style="[
        {
          color
        }
      ]"
      @click="url ? onRouterLink() : ''"
    >
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'TyhMenuItem',
  props: {
    // 跳转的地址
    url: {
      type: String,
      default: null
    },
    // 是否禁用
    prohibit: {
      type: Boolean,
      default: false
    },
    // 文字颜色
    color: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    // 按钮是如果禁用 就直接返回 否则就跳转对应路由
    onRouterLink () {
      if (this.prohibit) return
      this.$router.push(this.url)
    }
  }
}
</script>
