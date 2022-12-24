<template>
  <div class="nav">
    <ul class="con">
      <li>
        <p>测试11</p>
        <h2>300</h2>
      </li>
      <li>
        <p>测试22</p>
        <h2>500</h2>
      </li>
      <li>
        <p>测试33</p>
        <h2>400</h2>
      </li>
      <li>
        <p>测试44</p>
        <h2>350</h2>
      </li>
      <li>
        <p>测试55</p>
        <h2>363</h2>
      </li>
    </ul>
    <ul class="ul3">
      <li>
        <p>xx指南</p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
      </li>
      <li>
        <p>xxxx公开占比</p>
        <div id="echx" style="width: 100%; height: 90%"></div>
      </li>
      <li>
        <p>政策xx</p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
      </li>
    </ul>
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
    var chartDom = document.getElementById('echx');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        itemGap: 10,
        top: '5%',
        left: '20%',
        textStyle: {
          fontSize: 10,
          color: '#FFFFFF',
        },
      },
      series: [
        {
          type: 'pie',
          left: '40%',
          radius: ['50%', '70%'],
          center: ["50%", "41%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            normal: {
              textStyle: {
                color: '#37d2d4',	// 提示文字颜色
                fontSize: 12		// 提示文字大小
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true,
            normal: {
              length: 8,   	// 指示线长度
              lineStyle: {
                color: "#37d2d4"  // 指示线颜色
              }
            },
          },
          data: [
            { value: 300, name: '测试11' },
            { value: 500, name: '测试22' },
            { value: 400, name: '测试33' },
            { value: 350, name: '测试44' },
            { value: 363, name: '测试55' },

          ]
        }, {
          name: '外边框',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ["70%", "41%"],
          radius: ['75%', '75%'],
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
                borderColor: '#2985e0'
              }
            }
          }]
        },
        {
          name: '内边框',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ["70%", "41%"],
          radius: ['40%', '40%'],
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
                borderColor: '#2985e0'
              }
            }
          }]
        },

      ]
    };
    option && myChart.setOption(option);
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>

.nav {
  width: 100%;
  height: 32%;
  // background-color: pink;
  padding: 20px;
}
.con {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  li {
    padding-left: 10px;
    width: 18%;
    line-height: 38px;
    background: url(../../public/images/main_middle.png) no-repeat;
    background-size: 100%;
    margin-bottom: 30px;
    p {
      color: #37d2d4;
    }

    h2 {
      text-align: center;
      color: #fff;
    }
  }
}

.ul3 {
  width: 98%;
  display: flex;
  height: 180px;
  justify-content: space-between;
  align-items: center;

  li {
    width: 30%;
    height: 100%;
    background: url(../../public/images/main_bottopm_top2.png) no-repeat;
    background-size: 100% 90%;
    padding: 5px;
    padding-top: 28px;
    color: #fff;
    font-size: 14px;
    p {
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p:nth-child(1) {
      padding-left: 80px;
    }
  }
}
</style>
