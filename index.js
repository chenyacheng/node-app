const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// app.use(cors())
app.use(express.json()); // 配置获取body请求
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, "public"))); //配置静态资源


//app. ( get | post | put | delete  ) 请求
app.get('/',(req,res) => {
    // req.query 获取get请求参数 
    //req.body   获取body请求参数
    res.send("ok"); //返回数据
});

app.post('/post',(req,res) => {
    res.send('ok');
});

app.post('/system/test', (req, res) => {
    console.log("1111111111111111");
    res.send({msg: "请求成功", data: {a: "11",b: "22"},code: "200"});
})

app.post('/user/login', (req, res) => {
    console.log("1111111111111111");
    res.send({msg: "11111", data: "1111",code: "200"});
})

app.listen(3000,() => {
    console.log('服务器已开启端口号为' + 3000);
});