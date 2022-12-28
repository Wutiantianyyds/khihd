<template>
  <div class="tend">
    <ul>
      <li>订单量</li>
      <li>销售额</li>
      <li>用户数</li>
      <li>返单量</li>
    </ul>
    <div class="RealTime">
      <div>
        <div class="list"></div>
        <div class="box">
          <div class="left">
            <div class="text">实时订单趋势图</div>
            <div class="small">Number Of Real-time</div>
            <h3 class="h3">467,924</h3>
            <div class="lv">周间比增长率</div>
            <h4>46.79%</h4>
          </div>
          <div class="right">
            <div id="RealTime" style="width: 100%; height: 160px"></div>
          </div>
        </div>
        <img src="../../public/yuandian.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  mounted() {
    var chartDom = document.getElementById("RealTime")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    }

    option && myChart.setOption(option)
  }
}
</script>

<style lang="scss" scoped>

ul {
  width: 50%;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  font-weight: 900;
  height: 25px;
  line-height: 25px;
  background-color: #353941;
}
.RealTime {
  width: 50%;
  height: 200px;
  background-color: #424446;
  // padding: 10px;

  margin-top: 10px;
  box-sizing: border-box;
  .box {
    display: flex;
		width: 100%;
		height: 200px;
    justify-content: space-between;
    .left {
      width: 100%;
			height: 50%;
      text-align: center;
			margin-top: 50px;
			background-color: #424446;
    }
    .right {
      width: 100%;
			height: 50%;
			margin-top: 50px;
    }
  }
}
#RealTime {
  margin-top: -50px;
}
.text {
  font-size: 12px;
}
.small {
  font-size: 10px;
  transform: scale(0.8); // 缩放
}
.h3 {
  font-size: 24px;
  margin: 0;
  font-family: DIN;
}
.lv {
  font-size: 10px;
  margin-top: 6px;
}
h4 {
  margin: 0;
  color: #bcef76;
  font-family: DIN;
}
img {
  width: 100%;
  height: 130px;
  margin-top: 10px;
}
</style>
