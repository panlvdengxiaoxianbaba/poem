router.get('/index',function(req,res){ 
	var output={type:[],content:[]};
    var sql='select id,name from type';
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		output.type=result.body;
		var typeid=output.type.id;
		var sql='select *from laptop where typeid=?'
		pool.query(sql,[typeid],(err,result)=>{
			if(err) throw err;
			output.content=result.body
			res.send(output);
		})
	});
})