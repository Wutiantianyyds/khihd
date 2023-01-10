<template>
	<div>
		<!-- <p>日历</p> -->
		<el-card class="box-cardrl">
    <div >
			<el-calendar v-model="value" class="rl"/>
		</div>
  </el-card>
		<!-- 日历卡片 -->
	</div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
// import rili from './rili.vue'
const value = ref(new Date())

// components:{
// 	rili
// }
</script>


<style lang="scss" scoped>
.box-cardrl{
	margin-top: 20px;
	width: 700px;
	height: 500px;
}

</style>
