const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
router.get('/swapInfo',function(req,res){
	var sql=' SELECT * FROM slaptop';
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
router.get('/index',function(req,res){ 
	var sql=' SELECT * FROM type ';
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
	});	
});
router.get('/indexCom',function(req,res){
	var sql=' SELECT * FROM alaptop ';
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
 router.get('/indexInfo',function(req,res){
 	var sql=' SELECT * FROM laptop WHERE recom=1';
 	pool.query(sql,[],(err,result)=>{
 		if(err) throw err;
 		res.send(result);
 	})
 });

module.exports=router;