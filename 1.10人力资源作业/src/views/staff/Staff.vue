<!-- 员工模块 -->
<template>
  <div class="Staff">
    <!-- 表格 -->
    <el-card class="card">
      <el-table :data="tableData.rows" style="width: 100%" border>
        <el-table-column prop="date" type="index" label="序号" width="60" />
        <el-table-column prop="username" label="姓名" sortable />
        <el-table-column prop="mobile" label="手机号" sortable width="120" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column
          prop="formOfEmployment"
          label="聘用形式"
          sortable
          width="110"
        />
        <el-table-column prop="departmentName" label="部门" sortable />
        <el-table-column
          prop="timeOfEntry"
          label="入职时间"
          sortable
          width="200"
        />
        <el-table-column
          prop="inServiceStatus"
          label="是否在职"
          sortable
          width="110"
        >
          <template #default="scope">
            {{ scope.row.inServiceStatus == 1 ? '在职' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="enableState" label="状态" sortable>
          <template #default="scope">
            {{ scope.row.enableState == 1 ? '启用' : '' }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="270">
          <template #default>
            <el-button link type="primary" size="small">查看</el-button>
            <el-button link type="primary" size="small">转正</el-button>
            <el-button link type="primary" size="small">调岗</el-button>
            <el-button link type="primary" size="small">离职</el-button>
            <el-button link type="primary" size="small">角色</el-button>
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        small
        background
        layout="total, prev, pager, next"
        :total="50"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const tableData = {
    rows: [
      {
        id: '1063705989926227968',
        mobile: '13800000002',
        username: '管理员',
        password: 'c8b7722b1139bb9b346409e503302e82',
        enableState: 1,
        createTime: '2018-11-17T16:10:45.000+0000',
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175310929766055936',
        timeOfEntry: '2018-11-02T08:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '9002',
        formOfManagement: null,
        workingCity: null,
        correctionTime: '2018-11-30T00:00:00.000+0000',
        inServiceStatus: 1,
        departmentName: '总裁办',
        level: 'coAdmin',
        staffPhoto:
          'http://q6cu3t6jv.bkt.clouddn.com/1063705989926227968?t=1582797590950'
      },
      {
        id: '1066370498633486336',
        mobile: '13800000003',
        username: '我儿生生有大帝之姿',
        password: '14af10ffa3798486632a79cbbf469376',
        enableState: 1,
        createTime: null,
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175311466846683136',
        timeOfEntry: '2018-11-04T08:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '111',
        formOfManagement: null,
        workingCity: null,
        correctionTime: '2018-11-20T00:00:00.000+0000',
        inServiceStatus: 1,
        departmentName: '市场部',
        level: 'user',
        staffPhoto:
          'http://pkbivgfrm.bkt.clouddn.com/1066370498633486336?t=1545812322518'
      },
      {
        id: '1071632760222810112',
        mobile: '13800000004',
        username: '罗晓晓',
        password: '456134d471010ecba14c6f89cac349ff',
        enableState: 1,
        createTime: null,
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175311267684352000',
        timeOfEntry: '2018-12-02T08:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '1111',
        formOfManagement: null,
        workingCity: null,
        correctionTime: '2018-12-31T00:00:00.000+0000',
        inServiceStatus: 1,
        departmentName: '人事部',
        level: 'user',
        staffPhoto: 'http://geek.itheima.net/uploads/1673363720288.png'
      },
      {
        id: '1074238801330704384',
        mobile: '13400000001',
        username: '文吉星',
        password: '80069fc2872ce3cf269053f4a84b2f0d',
        enableState: 1,
        createTime: '2018-12-16T17:44:22.000+0000',
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175311267684352000',
        timeOfEntry: '2018-01-01T00:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '1001',
        formOfManagement: null,
        workingCity: null,
        correctionTime: null,
        inServiceStatus: 1,
        departmentName: '人事部',
        level: 'user',
        staffPhoto: null
      },
      {
        id: '1074238801402007552',
        mobile: '13400000002',
        username: '巴思慧',
        password: 'a4f6437f96466ff2ad41dc8c46317e7f',
        enableState: 1,
        createTime: '2018-12-16T17:44:23.000+0000',
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175311267684352000',
        timeOfEntry: '2018-01-01T00:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '1002',
        formOfManagement: null,
        workingCity: null,
        correctionTime: null,
        inServiceStatus: 1,
        departmentName: '人事部',
        level: 'user',
        staffPhoto: null
      },
      {
        id: '1075383133106425856',
        mobile: '13500000001',
        username: '乔海',
        password: 'aa824c0d32d9725482e58a7503a20521',
        enableState: 1,
        createTime: null,
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175310929766055936',
        timeOfEntry: '2018-01-01T00:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '2001',
        formOfManagement: null,
        workingCity: null,
        correctionTime: null,
        inServiceStatus: 1,
        departmentName: '总裁办',
        level: 'user',
        staffPhoto: null
      },
      {
        id: '1075383135371350016',
        mobile: '13500000002',
        username: '董昊空',
        password: 'becc21ed8df7975fc845c6c70f46c2dd',
        enableState: 1,
        createTime: null,
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175310929766055936',
        timeOfEntry: '2018-01-01T00:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '2002',
        formOfManagement: null,
        workingCity: null,
        correctionTime: null,
        inServiceStatus: 1,
        departmentName: '总裁办',
        level: 'user',
        staffPhoto: null
      },
      {
        id: '1075383135459430400',
        mobile: '13500000003',
        username: '周乐天',
        password: '7321b9c9cfaa938abc7408147fc29441',
        enableState: 1,
        createTime: null,
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175311325720936448',
        timeOfEntry: '2018-01-01T00:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '2003',
        formOfManagement: null,
        workingCity: null,
        correctionTime: null,
        inServiceStatus: 1,
        departmentName: '财务部',
        level: 'user',
        staffPhoto: null
      },
      {
        id: '1235396724497268736',
        mobile: '13600000001',
        username: '吕勇锐',
        password: '6975b023cef25b8d92c3dd0e825c31fe',
        enableState: 1,
        createTime: null,
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175310929766055936',
        timeOfEntry: '1992-08-04T08:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '0001',
        formOfManagement: null,
        workingCity: null,
        correctionTime: '2020-01-01T00:00:00.000+0000',
        inServiceStatus: 1,
        departmentName: '总裁办',
        level: 'user',
        staffPhoto: null
      },
      {
        id: '1235396819959627776',
        mobile: '13600000002',
        username: '袁永安',
        password: 'fba7500f73ab5ff34fa13092b34cd7e3',
        enableState: 1,
        createTime: null,
        companyId: '1',
        companyName: '传智播客',
        departmentId: '1175310929766055936',
        timeOfEntry: '1993-08-04T08:00:00.000+0000',
        formOfEmployment: 1,
        workNumber: '0002',
        formOfManagement: null,
        workingCity: null,
        correctionTime: '2020-01-01T00:00:00.000+0000',
        inServiceStatus: 1,
        departmentName: '总裁办',
        level: 'user',
        staffPhoto: null
      }
    ]

}
</script>

<style lang="scss" scoped>
.Staff {
  margin: 15px;
}
.card {
  margin-top: 10px;
  .el-pagination {
    margin-top: 20px;
  }
}
</style>
