<template>
  <div>

    <!-- 用户列表 -->
    
    <el-table :data="userlist" style="width: 100%">
      <el-table-column type="index" width="50" label="#"> </el-table-column>
      <el-table-column prop="registe_time" label="注册日期" width="180">
      </el-table-column>
      <el-table-column prop="username" label="用户姓名" width="180">
      </el-table-column>
      <el-table-column prop="city" label="注册地址" style=" text-align=center"> </el-table-column>
    </el-table>

        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="69841">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userlist: [],
      pagesize:20,
      pagenum:1
    };
  },
  methods: {
    getList() {
      this.$axios
        .get(`https://elm.cangdu.org/v1/users/list?offset=${this.pagenum*this.pagesize}&limit=${this.pagesize}`)
        .then((res) => {
          console.log(res);
          this.userlist = res.data;
        });
    },
      handleSizeChange(val) {
        this.pagesize=val
        this.getList()
      },
      handleCurrentChange(val) {
        this.pagenum=val
        this.getList()
      }
  },
  created() {
    this.getList();
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>

</style>
