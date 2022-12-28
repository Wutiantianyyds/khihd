<template>
  <div style="width: 100%; height: 17%; background: #2a2b2d; padding: 10px; margin-top: 10px">
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; height: 15%">
      <h3 style="">当前热卖品</h3>
      <p style="font-size: 12px">最后更新时间:2022-12-25 15:55:51</p>
    </div>
    <div id="cate" style="width: 100%; height: 250px; margin-top: 10px"></div>
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
    var chartDom = document.getElementById("cate")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          color: "#d7f595",
          showBackground: false,
          backgroundStyle: {
            color: "#363738"
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

<style lang="scss" scoped>
#cate {
  position: relative;
  bottom: 70px;
  left: 20px;
}
</style>
