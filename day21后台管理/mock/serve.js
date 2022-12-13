let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
const loginData = require("./common/login.json")
const menusData = require("./common/menus.json")
const usersData = require("./common/users.json")
const rolesData=require('./common/roles.json')
const rightsData=require('./common/rights.json')
const goodsData=require('./common/goods.json')
const ordersData=require('./common/orders.json')
const catesData=require('./common/cates.json')
let app = express() //实例化express

// 登陆接口
app.use("/login", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})

/**左侧导航**/
app.use("/menus", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})

app.use("/users", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...usersData
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
app.listen("3090", () => {
  console.log("监听端口 8080")
})
