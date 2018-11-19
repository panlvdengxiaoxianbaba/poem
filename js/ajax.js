function ajax({url,type,data,dataType}){
    return new Promise(function(open,err){
          //1. 创建xhr对象
          var xhr=new XMLHttpRequest();
          //2.绑定监听事件
          xhr.onreadystatechange=function(){
              if(xhr.readyState==4&&xhr.status==200){
                  var res=xhr.responseText;
                  if(dataType==="json")
                      res=JSON.parse(res)
                  open(res);
              }
          }
          if(type=="get"&&data!=undefined){
              url+="?"+data;
          }
          //3.打开连接
          xhr.open(type,url,true);
          if(type==="post")
              //增加：设置请求消息头
              xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
          //4.发送请求
          if(type=="post"&&data!==undefined)
              xhr.send(data);
          else
              xhr.send(null);
    })
  }