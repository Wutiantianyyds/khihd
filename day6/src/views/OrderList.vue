<template>
  <div>
    <!-- 订单列表 -->

    <el-table :data="orderList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.restaurant_name }}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.category_id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.description }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单 ID" prop="unique_id"> </el-table-column>
      <el-table-column label="总价格" prop="total_amount"> </el-table-column>
      <el-table-column label="订单状态" prop="status_bar.title"> </el-table-column>
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
  data() {
    return {
      orderList: [],
      pagesize: 20,
      pagenum: 1,
    };
  },
  methods: {
    getorder() {
      this.$axios
        .get(
          `https://elm.cangdu.org/bos/orders?offset=${
            this.pagenum * this.pagesize
          }&limit=${this.pagesize}&restaurant_id=undefined`
        )
        .then((res) => {
          console.log(res);
          this.orderList = res.data;
        });
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getorder();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getorder();
    },
    
  },
  created() {
    this.getorder();
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
