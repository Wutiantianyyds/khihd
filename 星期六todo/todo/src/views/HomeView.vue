<template>
  <div>
    <!-- 点击添加 -->
    <el-button type="primary" @click="dialogVisible = true"
      >新建todolist</el-button
    >
    <!-- 添加到日历页面 -->
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{  data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
        <ul>
          <li
            :class="item.status == '已完成' ? 'redcolor' : 'bluecolor'"
            v-for="(item, index) in $store.state.list"
            :key="index"
            v-show="item.date==data.day"
          >
          {{item.name}}
          </li>
        </ul>
      </template>
    </el-calendar>

    <!-- 弹出框 -->
    <el-dialog title="添加趣事" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="事件名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="日期选择">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="事件状态">
          <el-radio-group v-model="form.status">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add()">立即创建</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        date: "",
        status: "",
      },
    };
  },
  methods: {
    add() {
      console.log(this.form.date);
      //把时间格式从 / 转化成 -
      let str = this.form.date
        .toLocaleString()
        .split(" ")[0]
        .split("/")
        .join("-");
      //数字补0判断
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, "0");
        this.form.date = newtime;
      } else {
        this.form.date = str;
      }
      console.log(this.form);
      this.$store.commit("add",this.form)
      this.dialogVisible = false;
    },
    //在指定的位置插入一个字符串
    insertStr(source, start, newStr) {
      return source.slice(0, start) + newStr + source.slice(start);
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.is-selected {
  color: #1989fa;
}
.redcolor {
  width: 50px;
  height: 20px;
  background-color: red;
  text-align: center;
  line-height: 20px;
}
.bluecolor {
  width: 50px;
  height: 20px;
 background-color: blue;
  text-align: center;
  line-height: 20px;
}
</style>
