<template>
  <div>
    <tyh-backTop>Top</tyh-backTop>
    <tyh-button>默认按钮</tyh-button>
    <tyh-button type="primary">主要按钮</tyh-button>
    <tyh-button type="success">成功按钮</tyh-button>
    <tyh-button type="danger">危险按钮</tyh-button>
    <tyh-button type="warning">警告按钮</tyh-button>

    <tyh-card>
      <template>
        <div slot="title">主标题</div>
        <div slot="subtitle">副标题</div>
      </template>
      <tyh-button icon="tyh-ui-setting-01" type="primary"></tyh-button>
      <tyh-button icon="tyh-ui-phone-01" type="success"></tyh-button>
      <tyh-button icon="tyh-ui-huojian-01" type="danger">火箭</tyh-button>
      <tyh-button icon="tyh-ui-PaperPlane-01" type="warning">飞机</tyh-button>
    </tyh-card>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
</style>
