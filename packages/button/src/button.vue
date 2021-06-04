<template>
  <button
    class="tyh-button"
    :class="[
      type ? 'tyh-button--' + type : 'tyh-button--',
      round ? 'tyh-buttom--round' : '',
    ]"
    @click="onClick"
    @mousedown="onMousedown"
    @mouseup="onMouseup"
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
    type: String,

    // 圆角按钮
    round: Boolean,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 点击事件发生给父组件处理
    onClick(evt) {
      this.$emit("click", evt);
    },
    onMousedown(evt) {
      this.$emit("mousedown", evt);
    },
    onMouseup(evt) {
      this.$emit("mouseup", evt);
    },
  },
};
</script>

<style src="../../../style/button/index.css" scoped></style>
