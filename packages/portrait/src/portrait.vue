<template>
  <div class="tyh-portrait">
    <img :src="url" />
  </div>
</template>

<script>
export default {
  name: 'TyhPortrait',
  components: {},
  props: {
    url: String
  },
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

<style src="../style/index.css" scoped></style>
