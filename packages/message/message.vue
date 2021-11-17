<template>
  <div ref="tyh-message" class="tyh-message" v-if="isShow">
    <span
      class="tyh-message-body"
      :class="[type ? `tyh-message-body--${type}` : 'tyh-message-body--']"
    >
      <tyh-icon v-if="iconClass" :icon="iconClass" :color="iconColorType" />
      <p class="tyh-message-message">
        {{ message }}
      </p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TyhMessage',
  data () {
    return {
      isShow: false, // 显示状态
      message: '', // 显示的内容
      times: 1400, // 显示持续的时间
      type: '', // 提示类型
      iconClass: '' // icon 的 Class
    }
  },
  computed: {
    // icon 的颜色类型
    iconColorType () {
      if (this.type === 'primary') return '#409eff'
      if (this.type === 'danger') return '#2ea44f'
      if (this.type === 'success') return '#f05048'
      if (this.type === 'warning') return '#ff7700'
      return '#484848'
    }
  },
  mounted () {
    // 初始化后显示提示
    // 在指定毫秒后隐藏
    this.isShow = true
    setTimeout(() => {
      this.isShow = false
    }, this.times)
  }
}
</script>
