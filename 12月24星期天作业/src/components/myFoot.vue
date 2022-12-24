<template>
  <div class="foot">
    <div class="bottom" style="text-align: center">
      <div class="bottom-one">
        <p style="width: 75%" class="title">主要关注xxxx占比</p>
        <div id="echxa" style="width: 100%; height: 90%"></div>
      </div>
      <div class="bottom-two">
        <p style="width: 75%" class="title">关注xxxx占比</p>
        <div id="echxb" style="width: 90%; height: 90%"></div>
      </div>
      <div class="bottom-three">
        <p style="width: 75%" class="title">xxxx发布量</p>
        <div id="echxc" style="width: 90%; height: 90%"></div>
      </div>
      <div class="bottom-four">
        <p style="width: 75%" class="title">xxx公开数量</p>
        <div id="echxd" style="width: 85%; height: 90%"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {
    var chartDoma = document.getElementById("echxa");
    var myCharta = echarts.init(chartDoma);
    var optiona;

    optiona = {
      tooltip: {
        trigger: "axis",
      },

      radar: [
        {
          name: {
            show: true,
            formatter: null,
            textStyle: {
              //设置颜色
              color: "#37d2d4",
            },
          },
          indicator: [
            { text: "测试11", max: 500 },
            { text: "测试22", max: 500 },
            { text: "测试33", max: 500 },
            { text: "测试44", max: 500 },
            { text: "测试55", max: 500 },
            { text: "测试66", max: 500 },
          ],
          radius: 60,
          splitLine: {
            //配置雷达图的每一圈的网格线颜色
            lineStyle: {
              color: "#37d2d4",
            },
          },
          splitArea: {
            //配置雷达图的网格线背景
            show: false,
          },
          center: ["40%", "50%"],
        },
      ],
      series: [
        {
          type: "radar",
          tooltip: {
            trigger: "item",
          },
          itemStyle: {
            //此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
            color: "#37d2d4",
            borderColor: "#37d2d4",
          },
          areaStyle: {},
          data: [
            {
              value: [300, 500, 400, 350, 363, 300],
            },
          ],
        },
      ],
    };

    optiona && myCharta.setOption(optiona);
    var chartDomb = document.getElementById("echxb");
    var myChartb = echarts.init(chartDomb);
    var optionb;

    optionb = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["财务", "村务", "党务", "居务", "政务"],
        top: "5%",
        left: "20%",
        textStyle: {
          fontSize: 10,
          color: "#FFFFFF",
        },
      },

      calculable: true,
      xAxis: [
        {
          type: "category",
          // prettier-ignore
          data: ['测试11', '测试22', '测试55', '测试66'],
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "单位:%",
          nameTextStyle: {
            color: "#fff",
          },

          min: 0,
          max: 100,
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
      ],
      series: [
        {
          name: "财务",
          type: "bar",
          barWidth: 14,
          data: [30, 50, 80],
        },
        {
          name: "村务",
          type: "bar",
          barWidth: 16,
          data: [30, 50, 30, 80],
        },
        {
          name: "党务",
          type: "bar",
          barWidth: 16,
          data: [30, 50, 80],
        },
        {
          name: "居务",
          type: "bar",
          barWidth: 16,
          data: [30, 50, 30, 80],
        },
        {
          name: "政务",
          type: "bar",
          barWidth: 16,
          data: [50, 30, 80],
        },
      ],
    };

    optionb && myChartb.setOption(optionb);

    var chartDomc = document.getElementById("echxc");
    var myChartc = echarts.init(chartDomc);
    var optionc;

    optionc = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["巡查", "警示"],
        top: "5%",
        left: "20%",
        textStyle: {
          fontSize: 10,
          color: "#FFFFFF",
        },
      },

      calculable: true,
      xAxis: [
        {
          type: "category",
          data: ['测试11', '测试22', '测试33', '测试44', '测试55', '测试66'],
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "单位:%",
          nameTextStyle: {
            color: "#fff",
          },

          min: 0,
          max: 1000,
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
      ],
      series: [
        {
          name: "巡查",
          type: "bar",
          barWidth: 15,
          data: [300, 500, 400, 380, 390, 800],
        },
        {
          name: "警示",
          type: "bar",
          barWidth: 18,
          data: [300, 500, 400, 380, 390, 800],
        },
      ],
    };

    optionc && myChartc.setOption(optionc);
    var chartDomd = document.getElementById("echxd");
    var myChartd = echarts.init(chartDomd);
    var optiond;

    optiond = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // Use axis to trigger tooltip
          type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        show: false,
        type: "value",
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: "category",
        axisTick: {
          show: false,
        },
        axisLine: {
          //y轴线的配置
          show: true, //是否展示
          lineStyle: {
            color: "#ccc", //y轴线的颜色（若只设置了y轴线的颜色，未设置y轴文字的颜色，则y轴文字会默认跟设置的y轴线颜色一致）
            width: 0, //y轴线的宽度
            type: "solid", //y轴线为实线
          },
        },

        data: ["测试66", "测试55", "测试44", "测试33", "测试22", "测试11"],
      },
      series: [
        {
          name: "Direct",
          type: "bar",
          stack: "total",
          barWidth: 8,
          label: {
            show: false,
          },
          emphasis: {
            focus: "series",
          },
          data: [80, 36, 36, 40, 50, 30],
        },
        {
          name: "Mail Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: [80, 36, 35, 40, 50, 30],
        },
        {
          name: "Affiliate Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: [0, 36, 35, 40, 30, 30],
        },
        {
          name: "Video Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: [0, 20, 18, 10, 0, 30],
        },
      ],
    };

    optiond && myChartd.setOption(optiond);
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
p {
  color: #37d2d4;
}
.foot {
  width: 95%;
  height: 25%;
  // background-color: beige;
  padding: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.bottom {
  margin-top: 10px;
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bottom-one {
    flex: 2;
    height: 100%;
    background: url(../../public/images/main_bottom_bottom.png) no-repeat;
    background-size: contain;
  }

  .bottom-two {
    flex: 3;
    height: 100%;
    background: url(../../public/images/main_bootm_middle.png) no-repeat;
    background-size: contain;
  }

  .bottom-three {
    flex: 3;
    height: 100%;
    background: url(../../public/images/main_bootm_middle.png) no-repeat;
    background-size: contain;
  }

  .bottom-four {
    flex: 2;
    height: 100%;
    background: url(../../public/images/main_bottom_bottom.png) no-repeat;
    background-size: contain;
    color: #fff;
  }
}
</style>
