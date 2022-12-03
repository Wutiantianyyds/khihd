<template>
  <div>
    <!-- 插槽 ：匿名插槽，具名插槽和作用域插槽 -->

    <my-head>
      <!-- 匿名插槽 -->
      <p>我是匿名插槽</p>
      <!-- 具名插槽 -->
      <template slot="header">
        <div>
            具名插槽
        </div>
      </template>
      <!-- 作用域插槽 -->
      <template slot-scope="user">
        <div v-for="item in user.list" :key="item">
            {{item}}
        </div>
      </template>
    </my-head>
  </div>
</template>

<script>
import myHead from "../components/myHead.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    myHead,
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
