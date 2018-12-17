const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
router.get('/login',function(req,res){ 
    var uname=req.query.uname,upwd=req.query.upwd;
    var sql=' SELECT count(id) as c, id FROM shope_login WHERE uname= ? AND upwd=md5(?) ';
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
   
         if(result[0].c==1){
              req.session.uname=uname;   
              req.session.uid=result[0].id; 
              //console.log(result[0].id)
             // console.log(req.session.uid)
            res.send({code:1,msg:'登陆成功',user:uname});
         }else{
             res.send({code:-1,msg:"登录失败"})
         }
    })

router.get('/signout',(req,res)=>{
    req.session.uid=undefined;
    res.end()
})


});
router.get('/getCart',(req,res)=>{
    var uid=req.session.uid;
    //console.log(uid)
     if(uid==undefined){res.send({code:-2,msg:"请先登录"});return;}
   //3:创建sql
    var sql =" SELECT c.id,c.user_id,c.count,c.product_id";
     sql +=" ,p.price,p.lname,p.mdpic,p.details";
     sql +=" FROM laptop p,";
     sql +=" shope_cart c";
     sql +=" WHERE p.id = c.product_id";
     sql +=" AND c.user_id = ?";
     uid = parseInt(uid);
     pool.query(sql,[uid],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
   });
})

router.get('/updateCart',(req,res)=>{
    var id=req.query.id,count=req.query.count,sql=' UPDATE shope_cart SET count=? WHERE id=? '
    pool.query(sql,[count,id],(err,result)=>{
        if(err) throw err
        if(result.affectedRows>0){res.send({code:1,msg:"修改成功"})}
    })
})
// router.post('/reg',function(req,res){ 
    
// });
router.get('/deletecart',(req,res)=>{
    var id=req.query.id,sql=' DELETE  FROM shope_cart WHERE id=?  '
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err
        if(result.affectedRows>0){res.send({code:1,msg:"修改成功"})}
        else{res.send({code:-1,msg:"修改失败"})}

    })
})
router.post('/reg',(req,res)=>{
    var uname=req.body.uname,upwd=req.body.upwd,uemail=req.body.uemail,uphone=req.body.uphone;
    var sql='INSERT INTO shope_login VALUES (null,?,md5(?),?,?)'
    pool.query(sql,[uname,upwd,uemail,uphone],(err,result)=>{
        if (err) throw err;
        if(result.affectedRows>0){res.send({code:1,msg:'注册成功'})}
        else{res.send({code:-1,msg:"注册失败"})}
    })

})


module.exports=router;