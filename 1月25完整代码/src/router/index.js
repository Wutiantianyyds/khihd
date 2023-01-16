import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/pageing",
    name: "Pageing",
    component: () => import("../views/Pageing"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/dashboard")
      },
      {
        path: "/employees",
        name: "employees",
        component: () => import("../views/employees")
      },
      {
        path: "/companyIn",
        name: "companyIn",
        component: () => import("../views/company/companyIn.vue")
      },
      {
      	path: "/permission",
      	name: "permission",
      	component: () => import("../views/permission/permission.vue")
      },
			{
      	path: "/security",
      	name: "security",
      	component: () => import("../views/security/Security.vue")
      },
			{
      	path: "/Approval",
      	name: "Approval",
      	component: () => import("../views/Approval/Approval.vue")
      },
			{
      	path: "/Attendance",
      	name: "Attendance",
      	component: () => import("../views/Attendance/Attendance.vue")
      },
			{
      	path: "/Wages",
      	name: "Wages",
      	component: () => import("../views/Wages/Wages.vue")
      },
			{
				path: "/tissueIn",
      	name: "tissueIn",
      	component: () => import("../views/tissueIn/tissueIn.vue")
			}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
