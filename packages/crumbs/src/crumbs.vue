<template>
  <div class="tyh-crumbs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TyhCrumbs',
  components: {},
  props: {
    // 分隔符
    separator: {
      type: String,
      default: 'tyh-ui-xiexian-01'
    }
  },
  data () {
    return {}
  },
  provide () {
    return {
      TyhCrumbs: this
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style src="../style/index.css" scoped></style>
