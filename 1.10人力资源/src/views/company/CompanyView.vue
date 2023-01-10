<template>
  <div class="Company">
    <div class="top">
      <h3 @click="flag = 0" :class="flag == 0 ? 'color' : ''">角色管理</h3>
      <h3 @click="flag = 1" :class="flag == 1 ? 'color' : ''">公司管理</h3>
    </div>
    <div class="br"></div>
    <!-- 角色管理模块 -->
    <div class="role" v-show="flag == 0">
      <el-button type="primary" size="small" @click="dialogVisible = true"
        >+ 新增角色</el-button
      >
      <!-- 表格 -->
      <el-table :data="tableData.rows" style="width: 100%" border>
        <el-table-column label="序号" type="index" width="150" />
        <el-table-column prop="name" label="角色名" sortable />
        <el-table-column prop="description" label="描述" sortable />
        <el-table-column fixed="right" label="操作" width="200">
          <template #default>
            <el-button link type="primary" size="small">分配权限</el-button>
            <el-button link type="primary" size="small">修改</el-button>
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 新增弹框 -->
      <el-dialog v-model="dialogVisible" title="编辑角色" width="40%">
        <el-form :model="form" label-width="100px">
          <el-form-item label="角色名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="角色描述">
            <el-input v-model="form.description" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <!-- 公司管理模块 -->
    <div class="com" v-show="flag == 1">
      <div class="box">
        <span>企业名称</span>
        <input class="input" v-model="Information.name" type="text" disabled />
      </div>
      <div class="box">
        <span>公司地址</span>
        <input
          class="input"
          v-model="Information.companyAddress"
          type="text"
          disabled
        />
      </div>
      <div class="box">
        <span>公司电话</span>
        <input
          class="input"
          v-model="Information.companyPhone"
          type="text"
          disabled
        />
      </div>
      <div class="box">
        <span>邮箱</span>
        <input
          class="input"
          v-model="Information.mailbox"
          type="text"
          disabled
        />
      </div>
      <div class="box">
        <span>备注</span>
        <input
          class="input"
          v-model="Information.remarks"
          type="text"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const flag = ref<Number>(0) //切换状态
const dialogVisible = ref<Boolean>(false) // 控制弹框

/*定义表格数据*/

/*定义表单数据*/
const form = reactive({
  name: '',
  description: ''
})

/*信息数据*/
let Information = reactive({
  name: '',
  companyAddress: '',
  companyPhone: '',
  mailbox: '',
  remarks: ''
})
const tableData = {
    rows: [
      {
        id: '1062944989845262336',
        name: '销售经理',
        description: '负责对接',
        companyId: '1'
      },
      {
        id: '1064098829009293312',
        name: '系统管理员',
        description: '管理整合平台，可以操作企业所有功能',
        companyId: '1'
      },
      {
        id: '1064098935443951616',
        name: '人事专员',
        description: '只能操作员工菜单',
        companyId: '1'
      },
      {
        id: '1064099035536822272',
        name: '薪资专员',
        description: '绩效管理',
        companyId: '1'
      },
      {
        id: '1064099035536822276',
        name: '员工',
        description: '员工',
        companyId: '1'
      },
      {
        id: '1612796514907312128',
        name: 'thank?very',
        description: 'again',
        companyId: '1'
      },
      {
        id: '1612814391908311040',
        name: 'who r u ',
        description: null,
        companyId: '1'
      },
      {
        id: '1612815581874298880',
        name: '奇奇怪怪',
        description: '有bug怎么办',
        companyId: '1'
      },
      {
        id: '1612830455786446848',
        name: '部门经理',
        description: '负责',
        companyId: '1'
      },
      {
        id: '1612830516536745984',
        name: '11',
        description: null,
        companyId: '1'
      }
    ]

}
</script>

<style lang="scss" scoped>
.Company {
  margin: 15px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
}
.top {
  width: 300px;
  display: flex;
  justify-content: space-around;
  h3 {
    margin: 0;
    padding: 0 15px;
    padding-bottom: 10px;
    font-weight: 500;
  }
}
.color {
  border-bottom: 3px solid #409eff;
  color: #409eff;
}
.br {
  width: 100%;
  height: 3px;
  background-color: #ddd;
}
.role {
  padding: 40px 50px;
}
.el-table {
  margin-top: 15px;
}
.com {
  margin-top: 30px;
  margin-left: 150px;
  .box {
    line-height: 60px;
    display: flex;
    align-items: center;
    span {
      width: 100px;
      text-align: right;
    }
    .input {
      margin-left: 10px;
      width: 320px;
      height: 40px;
      background-color: #f5f7fa;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 0 6px;
      color: #aaa;
    }
  }
}
</style>
