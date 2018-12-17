const express=require('express');
const session=require('express-session');
const IndexRouter=require('./routes/index.js');
const ProductsRouter=require('./routes/products.js');
const UserRouter=require('./routes/user.js');
const bodyParser=require('body-parser');
const cors=require('cors')
var app=express();
app.listen(3000,function(){console.log('端口已开放')});
app.use(express.static(__dirname+"/public"));
app.use(session({
    secret:'128位随机字符',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000 * 60 * 60 * 24
    }
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({origin:['http://127.0.0.1:8080','http://localhost:8080'],credentials:true}));//必须携带cookie
app.use('/',IndexRouter);
app.use('/',ProductsRouter);
app.use('/',UserRouter);