let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json')
let app = express() //实列化 express
const menus = require('./common/menus.json')
const user = require('./common/user.json')
const rolesData=require('./common/roles.json')
const rightsData=require('./common/rights.json')
const goodsData=require('./common/goods.json')
const ordersData=require('./common/orders.json')
const catesData=require('./common/cates.json')
/**登录接口 */
app.use('/login', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
// 侧边栏接口
app.use('/menus', function (req, res) {
  console.log(req, 'res')
  res.json(
    Mock.mock({
      ...menus
    })
  )
})
//用户列表接口
app.use('/user', function (req, res) {
  console.log(req, 'res')
  res.json(
    Mock.mock({
      ...user
    })
  )
})
/**登录日志 */
// app.use('/home/loginsearch',function(req,res){
// 	res.json(
// 		Mock.mock({
// 			status:200,
// 			msg:'登陆成功',
// 			loginsearch
// 		})
// 	)
// })
// 角色列表数据
app.use('/roles', function (req, res) {
	console.log(req, res)
	res.json(
		Mock.mock({
			// status: 200,
			// msg: '登录成功',
			...rolesData
		})
	)
})
// 权限列表数据
app.use('/rights', function (req, res) {
	console.log(req, res)
	res.json(
		Mock.mock({
			// status: 200,
			// msg: '登录成功',
			...rightsData
		})
	)
})
// 商品列表数据
app.use('/goods', function (req, res) {
	console.log(req, res)
	res.json(
		Mock.mock({
			// status: 200,
			// msg: '登录成功',
			...goodsData
		})
	)
})
// 订单列表数据
app.use('/orders', function (req, res) {
	console.log(req, res)
	res.json(
		Mock.mock({
			// status: 200,
			// msg: '登录成功',
			...ordersData
		})
	)
})
// 商品分类数据
app.use('/categories', function (req, res) {
	console.log(req, res)
	res.json(
		Mock.mock({
			// status: 200,
			// msg: '登录成功',
			...catesData
		})
	)
})
app.listen('8090', () => {
  //启动服务node
  console.log('监听端口 8090')
})
