<template>
  <div style="width: 100%; height: 16%; background: #2a2b2d; padding: 10px; margin-top: 10px">
    <p>慕课外卖骑手概况</p>
    <div id="exchover" style="width: 100%; height: 150px"></div>
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
    var chartDom = document.getElementById("exchover")
    var myChart = echarts.init(chartDom)
    var option

    setTimeout(function () {
      option = {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: true
        },
        dataset: {
          source: [

            ["Milk Tea", "1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
            ["Matcha Latte", 10.1, 51.4, 55.1, 53.3, 73.8, 68.7]
          ]
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "7%" },
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" }
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" }
          },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            emphasis: {
              focus: "self"
            },
            label: {
              formatter: "{b}: {@2012} ({d}%)"
            },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012"
            }
          }
        ]
      }
      // myChart.on("updateAxisPointer", function (event) {
      //   const xAxisInfo = event.axesInfo[0]
      //   if (xAxisInfo) {
      //     const dimension = xAxisInfo.value + 1
      //     myChart.setOption({
      //       series: {
      //         id: "pie",
      //         label: {
      //           formatter: "{b}: {@[" + dimension + "]} ({d}%)"
      //         },
      //         encode: {
      //           value: dimension,
      //           tooltip: dimension
      //         }
      //       }
      //     })
      //   }
      // })
      myChart.setOption(option)
    })

    option && myChart.setOption(option)
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
