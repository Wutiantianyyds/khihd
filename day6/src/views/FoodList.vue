<template>
  <div>
    <!-- 食品列表 -->
    <el-table :data="foodList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="食品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="食品 ID">
              <span>{{ props.row.category_id }}</span>
            </el-form-item>
            <el-form-item label="餐馆 ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="餐馆地址">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="食品评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
             <el-form-item label="食品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
             <el-form-item label="月销量">
              <span>{{ props.row.month_sales }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="食品名称" prop="name"> </el-table-column>
      <el-table-column label="食品介绍" prop="description"> </el-table-column>
      <el-table-column label="评分" prop="rating"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="del(scope.row)" type="text" size="small"
            >删除</el-button
          >
          <el-button type="text" size="small"  @click="serve(scope.row, scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
<!-- 编辑对话框 -->

    <el-dialog title="修改食品信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="食品名称" >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="食品介绍" >
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="食品分类" >
          <el-input v-model="form.category" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </div>
    </el-dialog>
    
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
      foodList: [],
      pagesize: 20,
      pagenum: 1,
      editIndex:-1,
      dialogFormVisible:false,
      form: {
        name: "",
        description:"",
        category:"",

      },
    };
  },
  methods: {
    getFood() {
      this.$axios
        .get(
          `https://elm.cangdu.org/shopping/v2/foods?offset=${
            this.pagenum * this.pagesize
          }&limit=${this.pagesize}&restaurant_id=undefined`
        )
        .then((res) => {
          console.log(res);
          this.foodList = res.data;
        });
    },
     handleSizeChange(val) {
      this.pagesize = val;
      this.getFood();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getFood();
    },
    //删除
    del(row){
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.foodList.splice(row,1)
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
      this.form.description=row.description
      this.form.category=row.category
      this.editIndex = i;
    },
    edit() {
      this.dialogFormVisible = false;
      this.foodList[this.editIndex].name = this.form.name;
      this.foodList[this.editIndex].description = this.form.description;
      this.foodList[this.editIndex].category = this.form.category;
    },
  },
  created() {
    this.getFood();
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
