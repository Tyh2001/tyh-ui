<template>
  <div class="tyh-crumbs">
    <slot></slot>
  </div>
</template>

<script>
import Bus from '../../../utils/bus'
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
  computed: {},
  watch: {},
  created () { },
  mounted () {
    Bus.$emit('separatorIcon', this.separator)
  },
  methods: {}
}
</script>

<style src="../style/index.css" scoped></style>
