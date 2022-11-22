<template>
  <div>
    <!-- 商品列表 -->
    <el-table :data="shoplist" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.recent_order_num }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="id"> </el-table-column>
      <el-table-column label="店铺地址" prop="address"> </el-table-column>
      <el-table-column label="店铺介绍" prop="category"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="jumpe(scope.row.id)" type="text" size="small" 
            >添加食品</el-button
          >
          <el-button type="text" size="small" @click="serve(scope.row, scope.$index)">编辑</el-button>
          <el-button type="danger" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

 <!-- 编辑对话框 -->

    <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="店铺名称" >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍" >
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类" >
          <el-input v-model="form.category" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </div>
    </el-dialog>


    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="3885"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoplist: [],
      pagesize: 20,
      pagenum: 1,
      form: {
        name: "",
        address: "",
        description:"",
        phone:"",
        category:"",

      },
      editIndex:-1,
      dialogFormVisible:false
    };
  },
  methods: {
    getShop() {
      this.$axios
        .get(
          `https://elm.cangdu.org/shopping/restaurants?latitude=35.747002&longitude=114.297447&offset=${
            this.pagenum * this.pagesize
          }&limit=${this.pagesize}`
        )
        .then((res) => {
          console.log(res);
          this.shoplist = res.data;
        });
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getShop();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getShop();
    },
    // 删除
     del(row){
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.shoplist.splice(row,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    },
    serve(row, i) {
      console.log(i);
      this.dialogFormVisible = true;
      this.form.name = row.name;
      this.form.address = row.address;
      this.form.description=row.description
      this.form.phone=row.phone
      this.form.category=row.category
      this.editIndex = i;
    },
    edit() {
      this.dialogFormVisible = false;
      this.shoplist[this.editIndex].name = this.form.name;
      this.shoplist[this.editIndex].address = this.form.address;
      this.shoplist[this.editIndex].description = this.form.description;
      this.shoplist[this.editIndex].phone = this.form.phone;
      this.shoplist[this.editIndex].category = this.form.category;
    },
    jumpe(id){
      this.$router.push({path:"/addShop",query:{id}})
    }
  },
  created() {
    this.getShop();
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
