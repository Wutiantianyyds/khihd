<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          router
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/manage">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 数据管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/userList">用户列表</el-menu-item>
              <el-menu-item index="/shopList">商家列表</el-menu-item>
              <el-menu-item index="/foodList">食品列表</el-menu-item>
              <el-menu-item index="/orderList">订单列表</el-menu-item>
              <el-menu-item index="/adminList">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 添加数据 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/addShop">添加商铺</el-menu-item>
              <el-menu-item index="/addGoods">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 图表 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/visitor">用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 编辑 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/vueEdit">文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 设置 -->
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/adminSet">管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 说明 -->
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/explain">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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

<style lang='scss' scoped>
.el-header {
  background-color: #eff2f7;
  color: #c3cdda;
}

.el-aside {
  background-color: #1f2d3d;
  color: #bfcbd9;
  height: 100vh;
}

.el-main {
  background-color: #ffffff;
  color: #333;
}
</style>

