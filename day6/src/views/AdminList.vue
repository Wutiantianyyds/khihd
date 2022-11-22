<template>
  <div>
    <!-- 管理员列表 -->

     <el-table
    :data="list"
    style="width: 100%"
    border
    >
    <el-table-column
      prop="user_name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="注册日期"
     >
    </el-table-column>
    <el-table-column
      prop="city"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="admin"
      label="权限">
    </el-table-column>
  </el-table>

  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="3224"
    >
    </el-pagination>
 </div>
</template>

<script>
export default {
  data () {
    return {
        list:[],
        pagesize: 20,
      pagenum: 1,
    }
  },
  methods: {
    getlist(){
        this.$axios.get(`https://elm.cangdu.org/admin/all?offset=${
            this.pagenum * this.pagesize
          }&limit=${this.pagesize}`).then(res=>{
            console.log(res);
        this.list=res.data.data
        })
    },
     handleSizeChange(val) {
      this.pagesize = val;
      this.getlist();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getlist();
    },
  },
  created () {
    this.getlist()
  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
