<template>
  <button class="tyh-button-aurora" ref="tyh-button-aurora" @click="onClick">
    <span class="tyh-button-aurora-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'TyhButtonAurora',
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
    onClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
