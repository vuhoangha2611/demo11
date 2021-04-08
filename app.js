var express = require('express')
var hbs = require('hbs')

var app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'hbs')

app.get('/',(req,res)=>{ // chỗ này để tạo một trang index
    res.render('index')
})

app.listen(3000);
console.log('server is running at 3000')