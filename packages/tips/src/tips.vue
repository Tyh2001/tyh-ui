<template>
  <div
    v-if="isShow"
    class="tyh-tips"
    :class="[positionClass]"
    :style="[backgroundColorStyle]"
  >
    <!-- 头部内容 -->
    <div class="tyh-tips-header">
      <h4 class="tyh-tips-title">{{ title }}</h4>

      <!-- 关闭按钮 -->
      <Tyh-icon
        v-if="showClose"
        class="tyh-tips-close"
        icon="tyh-ui-cloes-02"
        @click="closeTips"
      />
    </div>

    <!-- 内容部分 -->
    <p v-if="isHtml" v-html="message"></p>
    <p v-else class="tyh-tips-title-message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'TyhTips',
  data () {
    return {
      title: '', // 标题
      message: '', // 内容
      times: null, // 持续时间
      isShow: false, // 显示状态
      position: null, // 显示位置
      showClose: true, // 是否显示关闭按钮
      isHtml: false, // message 是否为 html 片段
      backgroundColor: '#fff' // 自定义背景色
    }
  },
  computed: {
    // 显示的位置
    positionClass () {
      return this.position
        ? `tyh-tips-${this.position}`
        : 'tyh-tips-top-right'
    },
    // 自定义的背景色
    backgroundColorStyle () {
      return { background: this.backgroundColor }
    }
  },
  mounted () {
    // 页面初始化之后展示提示框
    this.isShow = true
    // 如果没有传递 times 时间信息，就在 3500 毫秒后隐藏
    if (this.times === null) {
      setTimeout(() => {
        this.isShow = false
      }, 3500)
      return
    }
    // 否则就在指定时间后隐藏
    setTimeout(() => {
      this.isShow = false
    }, this.times)
  },
  methods: {
    // 关闭提示框
    closeTips () {
      this.isShow = false
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
