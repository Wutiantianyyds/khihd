<template>
  <div>
    <ul>
      <li style="display: flex">
        <img src="../../public/one.png" alt="" style="margin-left: 10px; margin-right: 10px" />
        <div style="margin-top: 10px">
          <p style="color: #fff; font-size: 16px">今日销售额</p>
          <p style="color: #fff; font-size: 10px">today's states Amount</p>
          <h3>56,998,472</h3>
        </div>
      </li>
      <li style="display: flex">
        <img src="../../public/two.png" alt="" style="margin-left: 10px; margin-right: 10px" />
        <div style="margin-top: 10px">
          <p style="color: #fff; font-size: 16px">今日订单量</p>
          <p style="color: #fff; font-size: 10px">today's total Orders</p>
          <h3>3,496,490</h3>
        </div>
      </li>
      <li style="display: flex">
        <img src="../../public/wtree.png" alt="" style="margin-left: 10px; margin-right: 10px" />
        <div style="margin-top: 10px">
          <p style="color: #fff; font-size: 16px">今日交易用户数</p>
          <p style="color: #fff; font-size: 10px">today's Fayed Users</p>
          <h3>758,349</h3>
        </div>
      </li>
      <li style="display: flex">
        <img src="../../public/four.png" alt="" style="margin-left: 10px; margin-right: 10px" />
        <div style="margin-top: 10px">
          <p style="color: #fff; font-size: 16px">今日新增用户数</p>
          <p style="color: #fff; font-size: 10px">today's New Users</p>
          <h3>1,739,919</h3>
        </div>
      </li>
      <li style="display: flex">
        <div class="box" style="margin-right: 10px">
          <img src="../../public/dui.png" alt="" style="width: 50px; height: 40px;" />
          <div style="font-size: 12px">转化率</div>
          <div style="font-size: 10px">10.14%</div>
        </div>
				<div class="box" style="margin-right: 10px">
                    <img src="../../public/heng.png" alt="" style="width: 50px; height: 40px;">
                    <div style="font-size: 12px">退单率</div>
                    <div style="font-size: 10px">5.14%</div>
                </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #424345;
}
</style>
