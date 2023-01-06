<template>
	<div>
		<!-- asdasd -->
		<el-card class="box-cardd">
      <div>
				<h1>公告</h1>
				<ul>
					<li>
						<img src="@/assets/猫.png" alt="">
						<div class="text">
							<p><span>朱继柳</span> 发布了第一期"传智大讲堂"互动讨论获奖名单公布</p>
							<p class="item">2018-07-21 15:21:38</p>
						</div>
					</li>
					<li>
						<img src="@/assets/猫.png" alt="">
						<div class="text">
							<p><span>朱继柳</span> 发布了第一期"传智大讲堂"互动讨论获奖名单公布</p>
							<p class="item">2018-07-21 15:21:38</p>
						</div>
					</li>
					<li class="li">
						<img src="@/assets/猫.png" alt="">
						<div class="text">
							<p><span>朱继柳</span> 发布了第一期"传智大讲堂"互动讨论获奖名单公布</p>
							<p class="item">2018-07-21 15:21:38</p>
						</div>
					</li>
				</ul>
			</div>
    </el-card>
	</div>
</template>




<style lang="scss" scoped>
.box-cardd{
	margin-top: 100px;
	width: 700px;
}
h1{
	font-weight: normal;
}
ul{
	margin-top: 20px;
	li{
		height: 60px;
		width: 100%;
		// background-color: pink;
		border-top: 1px solid #ccc;
		display: flex;
		align-items: center;
		img{
			width: 50px;
			height: 50px;
			margin-left: 20px;
			margin-top: 5px;
		}
		.text{
			margin-left: 20px;
			span{
				color: #A1B5F9;
			}
			.item{
				margin-top: 5px;
			}
		}
	}
	.li{
		border-bottom: 1px solid #ccc;
	}
}
</style>
