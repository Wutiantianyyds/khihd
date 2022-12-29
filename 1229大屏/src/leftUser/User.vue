<template>
  <div class="tousers" style="width: 100%; height: 13%; background: #424345; padding: 10px">
    <h4 style="font-size: 16px">慕课外卖用户总数</h4>
    <p style="font-size: 8px; color: #fff">User Total Count</p>
    <h3 style="font-size: 30px; line-height: 40px">1,739,913</h3>
    <p
      style="
        font-size: 12px;
        background-image: linear-gradient(to right, #c5f177, #7ea345);
        margin-bottom: 10px;
        -webkit-background-clip: text;
        color: transparent;
      "
    >
      每日增长率:73.90% 每月增长率:117.37%
    </p>
    <div style="border: 2px solid #ccc; width: 100%; height: 8px">
			<div id="echx" style="width: 100%; height: 10px"></div>
		</div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {
    var chartDom = document.getElementById("echx")
    var myChart = echarts.init(chartDom)
    var option
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      legend: {},
      grid: {
        left: "0%",
        right: "0%",
        containLabel: false
      },
      xAxis: {
        show: false,
        type: "value",
        boundaryGap: [0, 0.1]
      },
      yAxis: {
        type: "category",
        data: ["用户总数"],
        axisTick: {
          show: true
        },
        axisLine: {
          //这是x轴文字颜色
          lineStyle: {
            color: "#fff"
          },
          lineStyle: {
            color: "#ccc", //y轴线的颜色（若只设置了y轴线的颜色，未设置y轴文字的颜色，则y轴文字会默认跟设置的y轴线颜色一致）
            width: 0, //y轴线的宽度
            type: "solid" //y轴线为实线
          }
        }
      },
      series: [
        {
          type: "bar",
          data: [2022039],
          barWidth: 10,
          itemStyle: {
            normal: {
              label: {
                show: false,
                position: "right",
                textStyle: {
                  color: "37d2d4",
                  fontSize: 12
                }
              },
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  // 四个数字分别对应 数组中颜色的开始位置，分别为 右，下，左，上。例如（1,0,0,0 ）代表从右边开始渐
                  // 变。offset取值为0~1，0代表开始时的颜色，1代表结束时的颜色，柱子表现为这两种颜色的渐变。
                  offset: 0,
                  color: "#eee"
                },
                {
                  offset: 1,
                  color: "#ccc"
                }
              ])
            }
          }
        }
      ]
    }

    option && myChart.setOption(option)
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
