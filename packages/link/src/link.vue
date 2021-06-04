<template>
  <a
    class="tyh-link"
    :class="[
      color ? 'tyh-link--' + color : 'tyh-link--',
      hoverline
        ? color
          ? 'tyh-link--hoverline--' + color
          : 'tyh-link--hoverline'
        : '',
      underline
        ? color
          ? 'tyh-link--underline--' + color
          : 'tyh-link--underline'
        : '',
    ]"
    :href="url"
    :target="target"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "TyhLink",
  components: {},
  props: {
    // 跳转的路径参数
    url: {
      type: String,
      default: "#",
    },

    // 字体颜色
    color: {
      type: String,
    },

    // 移入显示下划线
    hoverline: {
      type: Boolean,
      default: false,
    },

    // 显示下划线
    underline: {
      type: Boolean,
      default: false,
    },

    // 是否以一个新的标签页打开
    target: {
      type: String,
      default: "",
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

<style src="../../../style/link/index.css" scoped></style>
