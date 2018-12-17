const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
router.get('/products',function(req,res){ 
    var typeid=req.query.typeid;
	var sql=' SELECT * FROM laptop WHERE typeid=? ';
	pool.query(sql,[typeid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	});	
});
router.get('/details',function(req,res){ 
    var id=req.query.id;
	var sql=' SELECT * FROM laptop WHERE id=? ';
	pool.query(sql,[id],(err,result)=>{
		if(err) throw err;
		res.send(result);
	});	
});
router.get('/getpic',function(req,res){ 
	var sql=' SELECT * FROM laptop_pic ';
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
	});	
});
router.get('/addCart',(req,res)=>{
	var uid=req.session.uid;
	if(uid==undefined){res.send({code:-2,msg:'请先登录'});return;}
	var pid=req.query.pid;
	var c=req.query.count;
	var sql=' INSERT INTO shope_cart (id,user_id,product_id,count,is_checked) VALUES(null,?,?,?,0) ';
	pool.query(sql,[uid,pid,c],(err,result)=>{
		if(err) throw err;
		res.send({code:1,msg:"购物车添加成功"})
		console.log(uid)
	})
})
router.get('/searchif',(req,res)=>{
	var lname=req.query.lname,details=req.query.details;
	var sql=' SELECT * FROM laptop WHERE lname LIKE ? OR details LIKE ? ';
	pool.query(sql,[`%${lname}%`,`%${details}%`],(err,result)=>{
		if(err) throw err;
		if(result.length==0){res.send({code:-1,msg:"无此查询商品"})}
		else{res.send({code:1,result})}
	})


})
module.exports=router;