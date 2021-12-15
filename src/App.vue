<template>
  <div>
    <tyh-button @click="aaa" disabled>默认按钮</tyh-button>
    <tyh-button @click="aaa" type="primary">主要按钮</tyh-button>
    <tyh-button type="success">成功按钮</tyh-button>
    <tyh-button type="danger">危险按钮</tyh-button>
    <tyh-button type="warning">警告按钮</tyh-button>
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
