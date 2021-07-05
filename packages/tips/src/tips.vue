<template>
  <div
    v-if="isShow"
    class="tyh-tips"
    :class="[positionClass]"
    :style="[backgroundColorStyle]"
  >
    <div class="tyh-tips-header">
      <h4 class="tyh-tips-title">{{ title }}</h4>

      <Tyh-icon
        v-if="showClose"
        class="tyh-tips-close"
        icon="tyh-ui-cloes-02"
        @click="closeTips"
      />
    </div>

    <p v-if="isHtml" v-html="message"></p>
    <p v-else class="tyh-tips-title-message">{{ message }}</p>
  </div>
</template>

<script>
import TyhIcon from '../../icon/src/icon'
export default {
  name: 'TyhTips',
  components: {
    TyhIcon
  },
  data () {
    return {
      title: '',
      message: '',
      times: null,
      isShow: false,
      position: null,
      showClose: true,
      isHtml: false,
      backgroundColor: '#fff'
    }
  },
  computed: {
    positionClass () {
      return this.position
        ? `tyh-tips-${this.position}`
        : 'tyh-tips-top-right'
    },
    backgroundColorStyle () {
      return { background: this.backgroundColor }
    }
  },
  mounted () {
    this.isShow = true
    if (this.times === null) {
      setTimeout(() => {
        this.isShow = false
      }, 3500)
      return
    }
    setTimeout(() => {
      this.isShow = false
    }, this.times)
  },
  methods: {
    closeTips () {
      this.isShow = false
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
