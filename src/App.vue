<template>
  <div>
    <tyh-link url="">链接一</tyh-link>
    <tyh-link url="" type="primary">链接二</tyh-link>
    <tyh-link url="" type="success">链接三</tyh-link>
    <tyh-link url="" type="danger">链接四</tyh-link>
    <tyh-link url="" type="warning">链接五</tyh-link>

    <tyh-link url="" prohibit>禁用链接一</tyh-link>
    <tyh-link url="" prohibit type="primary">禁用链接二</tyh-link>
    <tyh-link url="" prohibit type="success">禁用链接三</tyh-link>
    <tyh-link url="" prohibit type="danger">禁用链接四</tyh-link>
    <tyh-link url="" prohibit type="warning">禁用链接五</tyh-link>
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
  methods: {

    aaa () {
      console.log(12)
    }
  }
}
</script>

<style lang='less' scoped>
</style>
