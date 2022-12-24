<template>
  <div class="head">
    <div class="leftbox">
      <div class="backa">
        <p class="fonta">公开数据展示</p>
        <div>
          <ul class="data1">
            <li class="onea">
              <p>500</p>
              <p>党务公开</p>
            </li>
            <li class="oneb">
              <p>400</p>
              <p>政务公开</p>
            </li>
            <li class="onec">
              <p>350</p>
              <p>财物公开</p>
            </li>
          </ul>
          <ul class="data2">
            <li class="oned">
              <p>363</p>
              <p>村务公开</p>
            </li>
            <li class="onee">
              <p>800</p>
              <p>居务公开</p>
            </li>
            <li class="onef">
              <p>0</p>
              <p>占位公开</p>
            </li>
            <li class="oneg">
              <p>0</p>
              <p>占位公开</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="backb">
        <p class="fontb">博肖信息员添加数据展示</p>
        <div id="echx1" style="width: 100%; height: 180px"></div>
      </div>
    </div>
    <div class="conterbox">
      <header>
        <div class="her-con-left">web网页</div>
        <div class="her-con-top-con">
          <h3>服务大数据可视化监听平台</h3>
        </div>
        <div class="her-con-left">管理系统</div>
      </header>
      <div class="her-con-con-con">
        <h2>xx公开数量</h2>
        <div class="her-con-con-con-one"></div>
        <div class="her-con-con-con-one"></div>
        <div class="her-con-con-con-one"></div>
        <div class="her-con-con-con-one"></div>
        <div class="her-con-con-con-one"></div>
      </div>
      <div class="her-con-con-bottom">
        <div class="her-con-con-bottom-left">
          <p>xxxx公开数量占比</p>
          <div id="echx3" style="width: 90%; height: 180px"></div>
        </div>
        <div class="her-con-con-bottom-right">
          <p>xxxx公开数量占比</p>
          <div id="echx4" style="width: 90%; height: 180px"></div>
        </div>
      </div>
    </div>
    <div class="rightbox">
      <div class="backc">
        <p class="fonta">xx数据展示</p>
        <div>
          <ul class="data1">
            <li class="onea">
              <p>304</p>
              <p>今日公开</p>
            </li>
            <li class="oneb">
              <p>2044</p>
              <p>本质公开</p>
            </li>
          </ul>
          <ul class="data2">
            <li class="oned">
              <p>909</p>
              <p>本月公开</p>
            </li>
            <li class="onee">
              <p>900</p>
              <p>办事指南</p>
            </li>
            <li class="onef">
              <p>200</p>
              <p>政策解读</p>
            </li>
          </ul>
        </div>
      </div>
        <div class="backd">
        <p class="fontb">博肖信息员添加数据展示</p>
        <div id="echx2" style="width: 100%; height: 180px"></div>
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
    var chartDom = document.getElementById("echx1");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {},
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

        data: ["测试1", "测试2", "测试3", "测试4", "测试5"],
        axisTick: {
          show: false,
        },
        axisLine: {
          /**这是x轴文字颜色**/
          lineStyle: {
            color: "#fff",
          },
        },
      },
      series: [
        {
          type: "bar",
          data: [200, 300, 400, 500, 300, 300],
          barWidth: 6,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "right",
                textStyle: {
                  color: "37d2d4",
                  fontSize: 12,
                },
              },
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  // 四个数字分别对应 数组中颜色的开始位置，分别为 右，下，左，上。例如（1,0,0,0 ）代表从右边开始渐
                  // 变。offset取值为0~1，0代表开始时的颜色，1代表结束时的颜色，柱子表现为这两种颜色的渐变。
                  offset: 0,
                  color: "#62fbf6",
                },
                {
                  offset: 1,
                  color: "#326d88",
                },
              ]),
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);

    var chartDom2 = document.getElementById("echx2");
    var myChart2 = echarts.init(chartDom2);
    var option2;
    option2 = {
      title: {
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        itemGap: 0,
        top: "25%",
        left: "55%",
        textStyle: {
          fontSize: 10,
          color: "#FFFFFF",
        },
      },

      series: [
        {
          type: "pie",
          radius: "50%",
          left: "-40%",
          data: [
            { value: 300, name: "测试11" },
            { value: 500, name: "测试22" },
            { value: 400, name: "测试33" },
            { value: 350, name: "测试44" },
            { value: 363, name: "测试55" },
            { value: 300, name: "测试66" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            normal: {
              show: false,
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
          },
        },
      ],
    };

    option2 && myChart2.setOption(option2);

     var chartDom3 = document.getElementById('echx3');
    var myChart3 = echarts.init(chartDom3);
    var option3;

    option3 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        itemGap: 2,
        top: '15%',
        left: '55%',
        textStyle: {
          fontSize: 10,
          color: '#FFFFFF',
        },
      },
      series: [
        {
          type: 'pie',
          left: '-50%',
          radius: ['30%', '40%'],
          avoidLabelOverlap: false,
          roseType: 'area',
          label: {
            show: false,
            position: 'center',

          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 300, name: '测试11' },
            { value: 500, name: '测试22' },
            { value: 400, name: '测试33' },
            { value: 350, name: '测试44' },
            { value: 363, name: '测试55' },
            { value: 300, name: '测试66' }
          ]
        }
      ]
    };

    option3 && myChart3.setOption(option3);

    var chartDom4 = document.getElementById('echx4');
    var myChart4 = echarts.init(chartDom4);
    var option4;

    option4 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        itemGap: 0,
        top: '20%',
        left: '45%',
        textStyle: {
          fontSize: 12,
          color: '#FFFFFF',
        },
      },
      series: [
        {
          type: 'pie',
          left: '-40%',
          radius: ['30%', '40%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 300, name: '测试11' },
            { value: 500, name: '测试22' },
            { value: 400, name: '测试33' },
            { value: 350, name: '测试44' },
            { value: 363, name: '测试55' },
            { value: 300, name: '测试66' }
          ]
        },
        {
          name: '内边框',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          left: '-40%',
          radius: ['20%', '20%'],
          label: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 9,
            name: '',
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: '#ccc'
              }
            }
          }]
        },
      ]
    };

    option4 && myChart4.setOption(option4);
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.head {
  width: 98%;
  height: 28%;
  // background-color: beige;
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.leftbox {
  width: 18%;
  height: 100%;
  //   background-color: rgba(0, 238, 255, 0.173);
}
.backa {
  background: url("../../public/images/main_top_left.png");
  width: 17.4%; //大小设置为100%
  height: 13.8%; //大小设置为100%
  position: fixed;
  background-size: 100% 100%;
}
.backc{
  background: url("../../public/images/main_top_left.png");
  width: 17.4%; //大小设置为100%
  height: 13.8%; //大小设置为100%
  position: fixed;
  background-size: 100% 100%;
}
.fonta {
  text-align: center;
  color: #11bcd0;
}
.backb {
  background: url("../../public/images/main_top_left.png");
  width: 17.4%; //大小设置为100%
  height: 13.5%; //大小设置为100%
  position: fixed;
  top: 160px;
  background-size: 100% 100%;
}
#echx1 {
  position: relative;
  left: 0;
  bottom: 50px;
}
.backd {
  background: url("../../public/images/main_top_left.png");
  width: 17.4%; //大小设置为100%
  height: 13.5%; //大小设置为100%
  position: fixed;
  top: 160px;
  background-size: 100% 100%;
}
#echx2 {
  position: relative;
  left: 0;
  bottom: 40px;
}
.fontb {
  text-align: center;
  color: #11bcd0;
}
.conterbox {
  width: 62%;
  height: 100%;
  // background-color: cadetblue;
}
.rightbox {
  width: 18%;
  height: 100%;
  // background-color: aqua;
}

//左边
.data1 {
  display: flex;
  padding: 5px;
  font-size: 12px;
  color: #fff;
  li {
    flex: 1;
    text-align: center;
    height: 47px;
    margin-left: 5px;
    margin-right: 5px;
    p {
      margin-top: 5px;
    }
  }
  .onea {
    background-color: #37d2d4;
  }
  .oneb {
    background-color: #19ca88;
  }
  .onec {
    background-color: #858ff8;
  }
}
.data2 {
  display: flex;
  padding-left: 7px;
  padding-right: 7px;
  font-size: 12px;
  color: #fff;
  li {
    flex: 1;
    text-align: center;
    height: 47px;
    margin-left: 5px;
    margin-right: 5px;
    p {
      margin-top: 5px;
    }
  }
  .oned {
    background-color: #fd9133;
  }
  .onee {
    background-color: #f6d10e;
  }
  .onef {
    background-color: #2e8cff;
  }
  .oneg {
    background-color: #f6580e;
  }
}
header {
  width: 100%;
  height: 80px;
  display: flex;
}
.her-con-left {
  text-align: center;
  margin-top: 5px;
  flex: 1;
  height: 35px;
  line-height: 35px;
  color: #37d2d4;
  border: 1px solid #37d2d4;
}

.her-con-top-con {
  flex: 8;
  height: 100%;
  background: url("../../public/images/title_bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  line-height: 60px;
  color: #37d2d4;
  font-size: 26px;
}

.her-con-con-con {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #37d2d4;

  .her-con-con-con-one {
    margin-left: 20px;
    width: 60px;
    height: 60px;
    background: url("../../public/images/nums.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 -600px;
  }
}

.her-con-con-bottom {
  margin-top: 5px;
  height: 65%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .her-con-con-bottom-left,
  .her-con-con-bottom-right {
    p {
      margin: 5px;
      color: #37d2d4;
    }
    width: 48%;
    height: 100%;
    background: url("../../public/images/main_top_bottom.png");
    background-repeat: no-repeat;
    background-size:100% 60%;
    
  }
}
#echx3{
  position: relative;
  left: 10px;
  bottom: 55px;
}
#echx4{
  position: relative;
  left: 10px;
  bottom: 55px;
}
</style>
