<template>
  <div>
    <ul class="ul">
      <li class="li">ALL</li>
      <li>北京</li>
      <li>上海</li>
      <li>深圳</li>
      <li>杭州</li>
      <li>南京</li>
      <li>武汉</li>
    </ul>
    <div class="map">
      <div id="box" style="width: 100%; height: 300px">
        <h3>慕课外卖销售大盘</h3>
        <div class="text">User Total Count</div>
				<div id="box" style="width: 100%; height: 100%"></div>
      </div>
    </div>
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
.ul {
  list-style: none;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  justify-content: space-around;
  background-color: #353941;
  color: #fff;
}
.map {
  width: 50%;
  height: 400px;
  background-color: #424446;
  overflow: hidden;
	float: left;
  padding: 10px;
  box-sizing: border-box;
	margin-bottom: 10px;
}
h3{
  margin: 0;
}
.text{
  font-size: 12px;
}
</style>
