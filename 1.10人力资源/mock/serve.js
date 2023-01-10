let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
let app = express() //实列化 express

/**登录接口 */
app.use('/login', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})


app.listen('8090', () => {
  //启动服务node
  console.log('监听端口 8090')
})

