<template>
  <div ref="tyh-message" class="tyh-message" v-if="isShow">
    <span class="tyh-message-body" :class="[typeClass]">
      <Tyh-icon v-if="iconClass" :icon="iconClass" :color="iconColorType" />

      <p class="tyh-message-message">
        {{ message }}
      </p>
    </span>
  </div>
</template>

<script>
import TyhIcon from '../../icon/src/icon'
export default {
  name: 'TyhMessage',
  components: {
    TyhIcon
  },
  data () {
    return {
      isShow: false,
      message: '',
      times: 1400,
      type: '',
      iconClass: ''
    }
  },
  computed: {
    typeClass () {
      return this.type
        ? `tyh-message-body--${this.type}`
        : 'tyh-message-body--'
    },
    iconColorType () {
      if (this.type === 'primary') return '#409eff'
      if (this.type === 'danger') return '#2ea44f'
      if (this.type === 'success') return '#f05048'
      if (this.type === 'warning') return '#ff7700'
      return '#484848'
    }
  },
  mounted () {
    this.isShow = true
    setTimeout(() => {
      this.isShow = false
    }, this.times)
  }
}
</script>

<style src="../style/index.css" scoped></style>
