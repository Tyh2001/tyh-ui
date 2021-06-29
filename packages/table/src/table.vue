<template>
  <!-- <table class="tyh-table" border="0" cellspacing="0" cellpadding="0"> -->
  <table class="tyh-table">
    <!-- 表头 -->
    <tr>
      <th v-for="(headerItem, index) in header" :key="index">
        {{ headerItem.title }}
      </th>
    </tr>

    <!-- 表体 -->
    <template v-if="list.length">
      <tr v-for="(bodyItem, index) in list" :key="index">
        <td v-for="(item, i) in header" :key="i">
          <span class="tyh-table-td-item">{{ bodyItem[headerList[i]] }}</span>
        </td>
      </tr>
    </template>

    <p v-else>暂无数据</p>
  </table>
</template>

<script>
export default {
  name: 'TyhTable',
  props: {
    // 表格数据的数组
    list: {
      type: Array,
      default () {
        return []
      }
    },
    // 表头
    header: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // 表头
      headerList: []
    }
  },
  computed: {},
  watch: {},
  created () {
    // 将表头的说明文字放到数组中去
    this.header.forEach(item => {
      this.headerList.push(item.key)
    })
  },
  mounted () { },
  methods: {}
}
</script>

<style src="../style/index.css" scoped></style>
