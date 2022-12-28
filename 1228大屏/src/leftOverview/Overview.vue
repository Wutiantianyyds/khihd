<template>
  <div style="width: 100%; height: 16%; background: #2a2b2d; padding: 10px; margin-top: 10px">
    <p>慕课外卖骑手概况</p>
    <div id="exchover" style="width: 100%; height: 160px"></div>
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

     option = {

      tooltip: {
        trigger: "axis",
      },
      grid: {
        // left: "3%",
        // right: "4%",
        bottom: "30%",
				top:"10%",
        containLabel: true,
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "01月",
          "02月",
          "03月",
          "04月",
          "05月",
          "06月"
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "今日接单骑手",
          type: "line",
          stack: "Total",
          data: [150, 30, 120, 24, 160, 16],
        },
        {
          name: "今日新增骑手",
          type: "line",
          stack: "Total",
          data: [30, 152, 136, 67, 134, 56],
        },
      ],
    };

    option && myChart.setOption(option);
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
