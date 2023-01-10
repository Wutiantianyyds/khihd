<template>
	<div>
		<!-- <p>社保</p> -->
		<el-card class="box-card">
    <div class="card">
			<el-tag class="tag"><el-icon color="#409EFF"><InfoFilled /></el-icon>本月：社保再缴 公积金在缴 增员 减员 入职 离职</el-tag>
			<p>历史归档    202001月报表</p>
		</div>

		<ul>
				<li>
					<h3 class="h3">部门:</h3>
					<div>
    				<el-checkbox v-model="checked1" label="总裁办" size="large" />
    				<el-checkbox v-model="checked2" label="行政部" size="large" />
    				<el-checkbox v-model="checked3" label="人事部" size="large" />
    				<el-checkbox v-model="checked4" label="财务部" size="large" />
    				<el-checkbox v-model="checked5" label="技术部" size="large" />
    				<el-checkbox v-model="checked6" label="运营部" size="large" />
    				<el-checkbox v-model="checked7" label="市场部" size="large" />
    				<el-checkbox v-model="checked8" label="财务核算部" size="large" />
    				<el-checkbox v-model="checked9" label="税务管理部" size="large" />
    				<el-checkbox v-model="checked11" label="薪资管理部" size="large" />
						<br/>
						<el-checkbox v-model="checked12" label="Java研发部" size="large" />
						<el-checkbox v-model="checked13" label="Python研发部" size="large" />
						<el-checkbox v-model="checked14" label="Php研发部" size="large" />
						<el-checkbox v-model="checked15" label="北京事业部" size="large" />
						<el-checkbox v-model="checked16" label="上海事业部" size="large" />
						<el-checkbox v-model="checked17" label="23415" size="large" />
						<el-checkbox v-model="checked18" label="1234" size="large" />
  				</div>
				</li>
				<li>
					<h3>社保城市:</h3>
					<el-checkbox v-model="beijing" label="北京" size="large" />
				</li>
				<li>
					<h3>公积金城市:</h3>
					<el-checkbox v-model="beijing1" label="北京" size="large" />
				</li>
			</ul>
  </el-card>

	<!-- 表格 -->
	 <el-card class="box-cardd">
    <div>
			<!-- 表格 -->
			<el-table
    :data="tableData"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%"
  >
    <el-table-column type="index" label="序号" sortable />
    <el-table-column prop="name" label="姓名" sortable />
    <el-table-column prop="date" label="手机" sortable />
    <el-table-column prop="address" label="工号" sortable />
    <el-table-column prop="department" label="部门" sortable />
    <el-table-column prop="tiem" label="入职时间" sortable />
    <el-table-column prop="gotiem" label="离职时间" sortable />
    <el-table-column prop="dz" label="社保城市" sortable />
    <el-table-column prop="gjzdz" label="公积金城市" sortable />
    <el-table-column prop="num" label="社保基数" sortable />
    <el-table-column prop="numtow" label="公积金基数" sortable />
  </el-table>
			<!-- 表格 -->
		</div>

		<!-- 分页 -->
		<div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
		<!-- 分页 -->
  </el-card>
	<!-- 表格 -->
	</div>
</template>


<script lang="ts" setup>
	import {InfoFilled} from '@element-plus/icons-vue'
	import { ref } from 'vue'
	import type { TableColumnCtx } from 'element-plus'


	const checked1 = ref(true)
	const checked2 = ref(false)
	const checked3 = ref(false)
	const checked4 = ref(false)
	const checked5 = ref(false)
	const checked6 = ref(false)
	const checked7 = ref(false)
	const checked8 = ref(false)
	const checked9 = ref(false)
	const checked11 = ref(false)
	const checked12 = ref(false)
	const checked13 = ref(false)
	const checked14 = ref(false)
	const checked15 = ref(false)
	const checked16 = ref(false)
	const checked17 = ref(false)
	const checked18 = ref(false)
	const beijing = ref(false)
	const beijing1 = ref(false)

	interface User {
  date: string
  name: string
  address: string
	department:string
	tiem:string
	gotiem:string
	dz:string
	gjzdz:string
	num:string
	numtow:string
}
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}

const tableData: User[] = [
  {
    date: '13800000001',
    name: 'cgx',
    address: '1010',
		department:'总裁部',
		tiem:'2018-11-01',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'10000',
		numtow:'10000',
  },
  {
    date: '13800000002',
    name: '管理员',
    address: '1011',
		department:'市场部',
		tiem:'2018-11-02',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'10000',
		numtow:'10000',
  },
  {
    date: '13800000003',
    name: '孙财',
    address: '1012',
		department:'人事部',
		tiem:'2018-12-02',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'10000',
		numtow:'2277',
  },
  {
    date: '13800000004',
    name: '罗晓晓',
    address: '1013',
		department:'人事部',
		tiem:'2018-01-01',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'3000',
		numtow:'5000',
  },
  {
    date: '13400000005',
    name: '文吉星',
    address: '1014',
		department:'人事部',
		tiem:'2018-01-01',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'3388',
		numtow:'5900',
  },
  {
    date: '13400000006',
    name: '巴思慧',
    address: '1015',
		department:'总裁办',
		tiem:'2018-01-01',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'5000',
		numtow:'5000',
  },
  {
    date: '13500000007',
    name: '乔海',
    address: '1016',
		department:'总裁办',
		tiem:'2018-01-01',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'5900',
		numtow:'5900',
  },
  {
    date: '13500000008',
    name: '董昊空',
    address: '1017',
		department:'财务部',
		tiem:'2018-01-01',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'5600',
		numtow:'5600',
  },
  {
    date: '13500000009',
    name: '周乐天',
    address: '1018',
		department:'财务部',
		tiem:'2018-01-01',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'5600',
		numtow:'5600',
  },
  {
    date: '1360000001',
    name: '吕勇锐',
    address: '1019',
		department:'总裁办',
		tiem:'1992-08-04',
		gotiem:'---',
		dz:'北京',
		gjzdz:'北京',
		num:'5600',
		numtow:'5600',
  },
]


const currentPage4 = ref(4)
const pageSize4 = ref(100)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>


<style lang="scss" scoped>

.tag{
	color: #605992;
}
.card{
	display: flex;
	justify-content: space-between;
}
.box-card{
	ul{
		margin-top: 20px;
		li{
			display: flex;
			align-items: center;
			.h3{
				margin-top: -40px;
			}
		}
	}
}
.box-cardd{
	margin-top: 20px;
}

.demo-pagination-block{
	margin-left: 660px;
	margin-top: 10px;
}
</style>
