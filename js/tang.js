window.onload=function(){
    ajax({
        url:'http://127.0.0.1:3000/tang',
        type:'get',
        dataType:'json'
    })
    .then(res=>{
        for(var key in res){
        var p=res[key];
        var {lid,lname,lsubject,ltrans,ldiscuss,type}=p;
        //console.log(p);
         var html=`<div class="line2"></div>
         <h3>${lid}、<a href="http://www.shicimingju.com/chaxun/list/4868.html">${lname}</a></h3>
         <div class="summary">
             ${lsubject}
         </div>`;
         var $div=$('.tangP');
         $div.append(html);
        }
        
    })

}