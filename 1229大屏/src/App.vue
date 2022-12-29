<template>
  <div id="app">
    <h3 style="text-align: center; color: #fff; line-height: 40px">互联网产业全球布局看板</h3>
    <div class="con">
      <div class="left">
        <User />
        <Average />
        <Equip></Equip>
        <Eender></Eender>
        <Overview />
        <Category />
      </div>
      <div class="right">
        <Navtop />
        <Map />
        <From />
        <Trend />
        <Sale />
      </div>
    </div>
  </div>
</template>

<script>
// import http from "@/units/httpRequest.js"
/**用户**/
import User from "@/leftUser/User.vue"
/***平均**/
import Average from "@/leftAverage/Average.vue"
/**设备**/
import Equip from "@/leftEquip/Equip.vue"
/**性别**/
import Eender from "@/leftGender/Gender.vue"
/**概况***/
import Overview from "@/leftOverview/Overview.vue"
/***品类**/
import Category from "@/leftCategory/Category.vue"
/**今日数据**/
import Navtop from "@/rightNav/Navtop.vue"
/**地图**/
import Map from "@/rightMap/Map.vue"
/**区域**/
import From from "@/rightFrom/From.vue"
/**趋势**/
import Trend from "@/rightTrend/Trend.vue"
/**销售**/
import Sale from "@/rightSale/Sale.vue"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    User,
    Average,
    Equip,
    Eender,
    Overview,
    Category,
    Navtop,
    Map,
    From,
    Trend,
    Sale
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100vw;
  height: 100vh;
  background: #1c1c1c;
}

.con {
  width: 100%;
  height: 94%;
  display: flex;
  align-items: center;
  padding: 5px;
  color: #fff;
  .left {
    flex: 2;
    height: 100%;
    background-color: #3b3c40;
  }

  .right {
    flex: 8;
    height: 100%;
    margin-left: 10px;
  }
}

</style>
