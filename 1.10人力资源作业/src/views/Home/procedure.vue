<template>
  <div>
		<!-- 流程申请 -->
    <el-card class="box-card">
      <div>
				<h1>流程申请</h1>
				<div class="xian"></div>

				<div class="btn">
					<el-button>加班离职</el-button>
					<el-button>请假调休</el-button>
					<el-button>审批列表</el-button>
				</div>
				<div class="btn">
					<el-button>我的信息</el-button>
				</div>
			</div>
    </el-card>
		<!-- 流程申请 -->

		<!-- 快速开始 -->
		 <el-card class="box-cardd">
      <div>
				<h1>快速开始/便捷导航</h1>
				<div class="xian"></div>

				<div class="btn">
					<el-button>认识月报</el-button>
					<el-button>考勤查询</el-button>
					<el-button>考勤统计</el-button>
				</div>
				<div class="btn">
					<el-button>员工审核</el-button>
					<el-button>组织架构</el-button>
				</div>
			</div>
    </el-card>
		<!-- 快速开始 -->
  </div>
</template>



<style lang="scss" scoped>
.box-card{
	width: 500px;
	height: 200px;
	// position: fixed;
	// top: 283px;
	// right: 70px;
	margin-left: 750px;
	margin-top: -500px;
	h1{
		font-weight: normal;
	}
	.xian{
		width: 76px;
		height: 5px;
		margin-top: 10px;
		background-color: #8A97F8;
	}
	.btn{
		width: 300px;
		margin-top: 20px;
	}
}

.box-cardd{
	width: 500px;
	height: 200px;
	// position: fixed;
	// top: 283px;
	// right: 70px;
	margin-left: 750px;
	margin-top: 20px;
	h1{
		font-weight: normal;
	}
	.xian{
		width: 155px;
		height: 5px;
		margin-top: 10px;
		background-color: #8A97F8;
	}
	.btn{
		width: 300px;
		margin-top: 20px;
	}
}
</style>
