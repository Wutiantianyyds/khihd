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
        
      </div>
    </div>
    <div class="conterbox"></div>
    <div class="rightbox"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.head {
  width: 98%;
  height: 28%;
  background-color: beige;
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
.fonta{
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
.fontb{
    text-align: center;
    color: #11bcd0;
}
.conterbox {
  width: 62%;
  height: 100%;
  background-color: cadetblue;
}
.rightbox {
  width: 18%;
  height: 100%;
  background-color: aqua;
}
//左边
.data1{
    display: flex;
    padding: 5px;
    font-size: 12px;
    color: #fff;
    li{
        flex: 1;
        text-align: center;
        height: 47px;
        margin-left: 5px;
        margin-right: 5px;
        p{
            margin-top: 5px;
        }
    }
    .onea{
        background-color: #37d2d4;
    }
    .oneb{
        background-color: #19ca88;
    }
    .onec{
        background-color: #858ff8;
    }
}
.data2{
    display: flex;
    padding-left: 7px;
    padding-right: 7px;
    font-size: 12px;
    color: #fff;
    li{
        flex: 1;
        text-align: center;
        height: 47px;
        margin-left: 5px;
        margin-right: 5px;
        p{
            margin-top: 5px;
        }
    }
    .oned{
        background-color: #fd9133;
    }
    .onee{
        background-color: #f6d10e;
    }
    .onef{
        background-color: #2e8cff;
    }
    .oneg{
        background-color: #f6580e;
    }
}
</style>
