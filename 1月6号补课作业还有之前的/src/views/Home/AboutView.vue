<template>
  <div class="home">

      <el-container>
        <el-aside :width="isCollapse==true?'60px':'200px'">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
						background-color="#5484FE"
						text-color="#FBFCFF"
						router
          >
           <img src="@/assets/title.png" alt="">
            <el-menu-item index="homeview">
              <el-icon><Odometer /></el-icon>
              <template #title>首页</template>
            </el-menu-item>
            <el-menu-item index="structure">
              <el-icon><Menu /></el-icon>
              <template #title>组织架构</template>
            </el-menu-item>
            <el-menu-item index="staff">
              <el-icon><UserFilled /></el-icon>
              <template #title>员工</template>
            </el-menu-item>
            <el-menu-item index="company">
              <el-icon><Tools /></el-icon>
              <template #title>公司设置</template>
            </el-menu-item>
            <el-menu-item index="authority">
              <el-icon><Tools /></el-icon>
              <template #title>权限设置</template>
            </el-menu-item>
            <el-menu-item index="security">
              <el-icon><Grid /></el-icon>
              <template #title>社保</template>
            </el-menu-item>
            <el-menu-item index="attendance">
              <el-icon><DocumentCopy /></el-icon>
              <template #title>考勤</template>
            </el-menu-item>
            <el-menu-item index="salary">
              <el-icon><Present /></el-icon>
              <template #title>工资</template>
            </el-menu-item>
            <el-menu-item index="approve">
              <el-icon><Checked /></el-icon>
              <template #title>审批</template>
            </el-menu-item>

          </el-menu>
          <!-- 菜单 -->
        </el-aside>
        <el-container>
          <el-header>
						<div class="left">
							<el-icon :size="30" color="#fff" @click="isCollapse=!isCollapse"><Fold /></el-icon>
							<h1>江苏传智播客教育科技股份有限公司</h1>
							<span>体验版</span>
						</div>
						<div class="right">
							<div class="right-Search">
								<el-icon :size="30" color="#fff"><Search /></el-icon>
							</div>
							<div class="right-Search">
								<el-icon :size="30" color="#fff"><QuestionFilled /></el-icon>
							</div>
							<div class="right-Search">
								<el-icon :size="30" color="#fff"><Rank /></el-icon>
							</div>
							<div class="right-Search">
								<!-- <el-icon :size="30" color="#fff"> <Rank /></el-icon> -->
								<img src="@/assets/中英文.png" alt="">
							</div>
							<div class="right-Search">
								<el-button type="primary" :icon="ArrowDown"  class="xia"/>
							</div>
							<div class="right-Searchh">
								<img src="@/assets/猫.png" alt="">
								<p>彭于晏</p>
								<el-icon :size="30" color="#fff"><ArrowDown /></el-icon>
							</div>
						</div>
					</el-header>
          <el-main>
						<router-view></router-view>
					</el-main>
        </el-container>
      </el-container>

  </div>
</template>



<script lang="ts" setup>
import {Checked,Present,Fold ,Search,QuestionFilled,Rank,ArrowDown,Odometer,Menu,UserFilled,Tools,Grid,DocumentCopy,} from '@element-plus/icons-vue'
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>


<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.home{
	height: 100%;
}
.common-layout{
	height: 100%;
}
.el-container{
	height: 100%;
}
.el-menu{
	height: 100%;
}
.el-header{
	display: flex;
	justify-content: space-between;
	background-color: #4D7EFC;
	.left{
		width: 40%;
		height: 100%;
		// background-color: pink;
		display: flex;
		align-items: center;
		justify-content: space-between;
		h1{
			color: #fff;
			font-weight: normal;
			font-size: 25px;
		}
		span{
			width: 60px;
			height: 35px;
			background-color: #84A9FE;
			color: #fff;
			text-align: center;
			line-height: 35px;
			border-radius: 10px;
		}
	}
	.right{
		display: flex;
		align-items: center;
		justify-content: space-between;
		// background-color: pink;
		.right-Search{
			width: 50px;
			height: 30px;
			// background-color: khaki;
			margin-left: 20px;
			img{
				width: 60%;
				height: 100%;
			}
			.xia{
				width: 30px;
				border: 1px solid #fff;
				border-radius: 5px;
			}
		}
	}
	.right-Searchh{
		width: 130px;
		display: flex;
		align-items: center;
		justify-content: space-between;
			height: 30px;
			// background-color: khaki;
			margin-left: 20px;
			img{
				width: 30%;
				height: 100%;
				border-radius: 50%;
			}
			.xia{
				width: 30px;
				border: 1px solid #fff;
				border-radius: 5px;
			}
	}
}
</style>
