<template>
	<div>
		<p>首页页面</p>
		<!-- 卡片 -->
		<el-card class="box-card">
    <div class="card">
			<div class="img">
				<img src="@/assets/猫.png" alt="">
			</div>
			<div class="text">
				<p>早安，管理员，祝你开心每一天！</p>
				<p class="gly">管理员 | 传智播客-总裁办</p>
			</div>
		</div>
  </el-card>
		<!-- 卡片 -->
		<!-- 日历卡片 -->
		<rili></rili>

		<!-- 流程申请  快速开始 -->
		<procedure></procedure>
		<!-- 流程申请  快速开始 -->

		<!-- 公告 -->
		<announcement></announcement>
		<!-- 公告 -->

		<!-- 帮助链接 -->
		<help></help>
		<!-- 帮助链接 -->
	</div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import rili from './rili.vue'
import procedure from './procedure.vue'
import announcement from './announcement.vue'
import help from './help.vue'
const value = ref(new Date())

components:{rili}
components:{procedure}
components:{announcement}
components:{help}
</script>

<style lang="scss" scoped>
.card{
	display: flex;
	align-items: center;
}
.img{
	width: 100px;
	height: 100px;
	img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
}
.text{
	margin-left: 20px;
	font-size: 25px;
	.gly{
		margin-top: 10px;
		color: #7F8C9C;
	}
}

.box-cardrl{
	margin-top: 20px;
	width: 600px;
	height: 500px;
}
.rl{
	height: 300px;
}
</style>
