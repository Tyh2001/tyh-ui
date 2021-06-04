<template>
  <div class="tyh-input">
    <input
      class="tyh-input_inp"
      :class="[size ? 'tyh-input_inp--' + size : 'tyh-input_inp--medium']"
      v-model="contentText"
      :type="inpType"
      :placeholder="innerText"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "TyhInput",
  components: {},
  props: {
    // 通过父组件 v-model 默认监听 value 事件
    value: [String, Number],

    // 文字中显示的文字
    innerText: String,

    // 文本框类型
    inpType: {
      type: String,
      default: "text",
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["text", "password"].indexOf(value) !== -1;
      },
    },

    // 文本框尺寸
    size: {
      type: String,
      default: "medium",
    },
  },
  data() {
    return {
      contentText: this.value, // 文本框输入的内容
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 输入时触发 input 事件 将新的值再传递给父组件 实现双向绑定
    handleInput(evt) {
      // 通过input标签的原生事件input将值emit出去，以达到值得改变实现双向绑定
      this.$emit("input", evt.target.value);
    },
  },
};
</script>

<style src="../../../style/input/index.css" scoped></style>
