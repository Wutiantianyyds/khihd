<template>
  <div class="box">
    <my-head></my-head>
    <my-nav></my-nav>
    <my-foot></my-foot>
 </div>
</template>

<script>
import myHead from "../components/myHead.vue"
import myNav from "../components/myNav.vue"
import myFoot from "../components/myFoot.vue"
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {
    myHead,
    myNav,
    myFoot
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
.box{
  width: 100vw;
  height: 100vh;
  background-color: #1d2b56;
  overflow: hidden;
}

</style>
