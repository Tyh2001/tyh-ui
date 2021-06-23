<template>
  <div ref="tyh-message" class="tyh-message" v-if="isShow">
    <span class="tyh-message-body" :class="[typeClass]">
      <p class="tyh-message-message">
        {{ message }}
      </p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TyhMessage',
  components: {},
  props: {},
  data () {
    return {
      isShow: false, // 显示状态
      message: '', // 显示的内容
      times: 1400, // 显示持续的时间
      type: '' // 提示类型
    }
  },
  computed: {
    // 提示的类型 class
    typeClass () {
      return this.type
        ? `tyh-message-body--${this.type}`
        : 'tyh-message-body--'
    }
  },
  watch: {},
  created () { },
  mounted () {
    // 初始化后显示提示
    // 在指定毫秒后隐藏
    this.isShow = true
    setTimeout(() => {
      this.isShow = false
    }, this.times)
  },
  methods: {}
}
</script>

<style src="../style/index.css" scoped></style>
