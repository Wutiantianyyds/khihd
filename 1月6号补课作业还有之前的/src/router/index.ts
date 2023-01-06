import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Logina/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home/AboutView.vue'),
			children:[
				{
					path: '/authority',
					name: 'authority',
					component: () => import("../views/Authority/authority.vue")
				},
				{
					path: '/homeview',
					name: 'homeview',
					component: () => import("../views/Home/HomeView.vue")
				},
				{
					path: '/structure',
					name: 'structure',
					component: () => import("../views/structure/StructureView.vue")
				},
				{
					path: '/staff',
					name: 'staff',
					component: () => import("../views/staff/StaffView.vue")
				},
				{
					path: '/company',
					name: 'company',
					component: () => import("../views/company/CompanyView.vue")
				},
				{
					path: '/security',
					name: 'security',
					component: () => import("../views/security/SecurityView.vue")
				},
				{
					path: '/attendance',
					name: 'attendance',
					component: () => import("../views/attendance/AttendanceView.vue")
				},
				{
					path: '/salary',
					name: 'salary',
					component: () => import("../views/salary/SalaryView.vue")
				},
				{
					path: '/approve',
					name: 'approve',
					component: () => import("../views/approve/ApproveView.vue")
				},
			]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
