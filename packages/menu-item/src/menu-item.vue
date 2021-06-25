<template>
  <span class="tyh-menu-item">
    <!-- 存在 url -->
    <span
      v-if="url"
      class="tyh-menu-item-span"
      :class="[prohibitClass]"
      :style="[colorStyle]"
      @click="onRouterLink"
    >
      <slot></slot>
    </span>

    <!-- 不存在 url 时 -->
    <span
      v-else
      class="tyh-menu-item-span"
      :class="[prohibitClass]"
      :style="[colorStyle]"
    >
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'TyhMenuItem',
  components: {},
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
  data () {
    return {}
  },
  computed: {
    // 是否禁用
    prohibitClass () {
      return this.prohibit
        ? 'tyh-menu-item-prohibit'
        : ''
    },
    // 文字颜色
    colorStyle () {
      return { color: this.color }
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 按钮是如果禁用 就直接返回 否则就跳转对应路由
    onRouterLink () {
      if (this.prohibit) {
        return
      }
      this.$router.push(this.url)
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
