<template>
  <span
    class="tyh-tag"
    :class="[
      color ? 'tyh-tag--' + color : 'tyh-tag--',
      size ? 'tyh-tag--' + size : '',
    ]"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "TyhTag",
  components: {},
  props: {
    // 标签颜色
    color: {
      type: String,
    },

    // 标签大小
    size: {
      type: String,
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style src="../../../style/tag/index.css" scoped></style>
