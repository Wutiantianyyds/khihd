import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	/**路由的重定向*/
  { path: "/", redirect: "/login" },
	/** 登录页面路由*/
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")

  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("../views/Welcome.vue")
      },
			/***用户列表**/
      {
        path: "/users",
        name: "users",
        component: () => import("../views/Usermanage/Users.vue")

      },
			/**角色列表***/
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/Powermanage/Roles.vue")

      },
      {
        path: "/rights",
        name: "rights",
        component: () => import("../views/Powermanage/Rights.vue")
        /**权限列表***/
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/Shopmanage/Goods.vue"),
        /**商品列表***/
      },
			{
				path: "/add",
				name: "/add",
				component: () => import("../views/Shopmanage/Add.vue")
				/***商品列表添加**/
			},
      {
        path: "/params",
        name: "params",
        component: () => import("../views/Shopmanage/Params.vue")
        /**分类参数***/
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/Shopmanage/Categories.vue")
        /**商品分类***/
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/Ordermanage/Orders.vue")
        /***订单列表**/
      },
      {
        path: "/reports",
        name: "reports",
        component: () => import("../views/Reports/Reports.vue")
        /** 数据统计***/
      },
			{
        path: "/aboutview",
        name: "aboutview",
        component: () => import("../views/Aboutview.vue")
        /** 数据统计**/
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
