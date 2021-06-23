<template>
  <fieldset class="tyh-division">
    <legend class="tyh-division-text" :class="[positionClass]">
      <slot></slot>
    </legend>
  </fieldset>
</template>

<script>
export default {
  name: 'TyhDivision',
  components: {},
  props: {
    // 文字位置
    position: {
      type: String,
      required: false,
      default: 'left'
    }
  },
  data () {
    return {}
  },
  computed: {
    // 文字位置
    positionClass () {
      return this.position
        ? `tyh-division-text--${this.position}`
        : 'tyh-division-text--left'
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style src="../style/index.css" scoped></style>
