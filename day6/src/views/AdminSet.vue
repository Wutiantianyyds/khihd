<template>
  <div>
    <!-- 管理员设置 -->
    <p>管理员信息</p>
    <div class="box">
        <ul>
            <li>姓名：</li>
            <li>注册时间：</li>
            <li>管理员权限：</li>
            <li>管理员ID：</li>
            <li>更换头像：
                <div class="img"></div>
            </li>
        </ul>
    </div>
 </div>
</template>

<script>
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

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
p{
    text-align: center;
    font-size: 30px;
    height: 60px;
    line-height: 60px;
}
.box{
    width: 1000px;
    height: 400px;
    margin: 0 auto;
    background-color: #f9fafc;
    padding: 20px;
}
ul{
    li{
        height: 50px;
        line-height: 50px;
    }
}
.img{
    width: 100px;
    height: 100px;
    background-color: pink;
}
</style>
