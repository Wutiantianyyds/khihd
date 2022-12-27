<template>
  <div class="">
    <div class="home"></div>
    <div>我是一个自定义的hook</div>
    <h3>{{ point }}</h3>
    <h3>横轴: {{ point.x }}</h3>
    <h3>纵轴: {{ point.y }}</h3>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import usePoint from "../hooks/usePoint.js";
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    const point = usePoint(); //复用打点hook(封装数据以及其要用的生命周console.log(point，"point");
    return {point};
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({});
  },
};
</script>

<style lang="scss"></style>
