<template>
  <div>
    <tyh-table :data="tableData" :columns="columns" />
    <br />
    <tyh-table :data="tableData" :columns="columns" trHeight="50px" />

    <br />
    <tyh-table :data="tableData" :columns="columns" align="center" />
    <br />
    <tyh-table
      :data="tableData"
      :columns="columns"
      align="center"
      border
      zebra
    />
    <br />
    <tyh-table
      :data="tableData"
      :columns="columns"
      align="center"
      width="500px"
      height="200px"
    />
    <br />
    <tyh-table :data="tableData" :columns="columns" align="center" num />
    <br />
    <tyh-table
      :data="tableData"
      :columns="columns"
      align="center"
      num
      :important="[2, 4]"
      importantColor="red"
    />
    <br />
    <tyh-table :data="tableData" :columns="columns" align="center" />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      tableData: [
        {
          date: '2021-11-02',
          name: '张三',
          address: '浙江省杭州市上城区 231 号'
        },
        {
          date: '2021-12-04',
          name: '李四',
          address: '浙江省杭州市西湖区 12 号'
        },
        {
          date: '2021-10-01',
          name: '王英',
          address: '浙江省杭州市临平区 2 号'
        },
        {
          date: '2021-11-03',
          name: '李逵',
          address: '浙江省杭州市拱墅区 199 号'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {

    aaa () {
      console.log(12)
    }
  }
}
</script>

<style lang='less' scoped>
</style>
