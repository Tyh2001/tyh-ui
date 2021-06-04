<template>
  <button
    class="tyh-button"
    :class="[
      types ? 'tyh-button--' + types : 'tyh-button--',
      round ? 'tyh-buttom--round' : '',
    ]"
  >
    <span class="tyh-button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "TyhButton",
  components: {},
  props: {
    // 按钮的类型
    types: {
      type: String,
    },

    // 圆角按钮
    round: {
      type: Boolean,
    },
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

<style src="../../../style/button/index.css" scoped></style>
