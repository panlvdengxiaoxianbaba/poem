const express=require('express');
const userRouter=require('./routes/user.js');
const bodyParser=require('body-parser');
var app=express();
app.listen(3000,function(){console.log('端口以开放')});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/user',userRouter);













