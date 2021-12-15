<template>
  <div>
    <tyh-input type="password" v-model="text1" clear />
    <tyh-input disabled  type="password" v-model="text1" clear @onfocus="aaa" />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      text1: ''
    }
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
