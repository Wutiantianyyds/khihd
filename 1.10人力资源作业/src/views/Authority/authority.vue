<template>
<!-- 权限管理 -->
	<el-card class="box-card">

			<div class='permiss'>
    <el-button type="primary" size="small" class="add" :icon="Edit">添加菜单</el-button>
    <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="name" label="菜单名称"/>
    <el-table-column prop="list" label="权限标识"/>
    <el-table-column prop="listname" label="描述"/>
    <el-table-column fixed="right" label="操作">
      <template #default>
        <el-button link type="primary" size="small"
          >添加权限点</el-button
        >
        <el-button link type="primary" size="small">查看api权限</el-button>
        <el-button link type="primary" size="small">查看</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
		</div>
  </el-card>
<!-- </div> -->
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { getCurrentInstance } from "vue"
import * as ts from '../common/api/api'
import {  Edit } from '@element-plus/icons-vue'
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});


const tableData:ts.authority= [
{
    "id": 1,
    "name": "SAAS企业管理",

    "list": "saas-clients",
		"listname":"企业菜单"
}, {
    "id": 1063315016368918528,
    "name": "员工管理",

    "list": "employees",
    "listname": "用户管理菜单",

}, {
    "id": 1063327833876729856,
    "name": "组织架构",

    "list": "departments",
    "listname": "组织架构菜单",

}, {
    "id": 1063328114689576960,
    "name": "公司设置",

    "list": "settings",
    "listname": "公司设置菜单",

}, {
    "id": 1064104257952813056,
    "name": "权限管理",

    "list": "permissions",
    "listname": "权限菜单",

}, {
    "id": 1146308691438043136,
    "name": "社保",

    "list": "social_securitys",
    "listname": "社保菜单",

}, {
    "id": 1151424682926747648,
    "name": "考勤",

    "list": "attendances",
    "listname": "考勤",

}, {
    "id": 1151747519034093568,
    "name": "工资",

    "list": "salarys",
    "listname": "工资模块",

}, {
    "id": 1156085524669272064,
    "name": "员工自助",

    "list": "user12345",
    "listname": "员工自助",

}, {
    "id": 1172702828368498688,
    "name": "审批",

    "list": "approvals",
    "listname": "审批",

}, {
    "id": 1610963136628785152,
    "name": "123",

    "list": "123",
    "listname": "123",

}
]

</script>

<style lang='scss' scoped>
.box-card{
	width: 100%;
}
.add{
	margin-left: 1100px;
}
</style>
