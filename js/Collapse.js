var click1=document.getElementById("btn1");
var dis1=document.getElementById("user1");
var img=document.querySelector("#btn1>img");
click1.onclick=function(){
    if(dis1.className=='hidener'){
    dis1.className='';
    img.src="img/biao3.png";
    }else if(dis1.className==''){
        dis1.className='hidener';
        img.src="img/biao2.png";
    }
}