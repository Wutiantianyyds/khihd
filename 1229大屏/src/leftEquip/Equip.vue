<template>
  <div style="width: 100%; height: 15%; background: #2a2b2d; padding: 10px; margin-top: 10px; display: flex">
    <div id="cake" style="flex: 1; height: 100%; width: 100%"></div>
    <div style="flex: 2">
      <div style="display: flex">
        <p style="flot: left; font-size: 13px">
          慕课外卖登录设备<br />
          <span style="font-size: 10px">takeaway device</span>
        </p>
        <h3 style="font-size: 23px; line-height: 40px">1,365,633</h3>
        <span style="font-size: 8px; line-height: 50px">台</span>
      </div>
      <ul style="width: 100%; display: flex; justify-content: space-between; align-items: center; font-size: 12px">
        <li style="text-align: center; margin-top: 10px">
          <h3>522,042</h3>
          <p style="margin-top: 10px">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #c3ee75; display: inline-block"></span
            >Andreid
          </p>
        </li>
        <li style="text-align: center; margin-top: 10px">
          <h3>471,645</h3>
          <p style="margin-top: 10px">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #c4ea8e; display: inline-block"></span
            >ios
          </p>
        </li>
        <li style="text-align: center; margin-top: 10px">
          <h3>371,947</h3>
          <p style="margin-top: 10px">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #f9fb9d; display: inline-block"></span
            >pc
          </p>
        </li>
      </ul>
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
    var chartDom = document.getElementById("cake")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      tooltip: {
        trigger: "item"
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "55%",
          data: [{ value: 335 }, { value: 310 }, { value: 274 }].sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)"
          },
          labelLine: {
            smooth: 0.2,
            length: -10,
            length2: -10
          },
          itemStyle: {
            color: "#89a455",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          },
          animationType: "scale", //动画类型
          animationEasing: "elasticOut",
          animationDelay: function (idx) {
            return Math.random() * 200
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
.a {
  display: flex;
}
</style>
