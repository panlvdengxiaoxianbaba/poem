var uphone=document.getElementsByName('uphone')[0];
var upassword=document.getElementsByName('upassword')[0];
var btnsub=document.getElementById('btnsub');
var form=document.getElementById('form1');
console.log(form)
uphone.onfocus=Click;
upassword.onfocus=Click;
uphone.onblur=Blur;
upassword.onblur=Blur1;
function Click(){
    var img=this.parentNode.nextElementSibling.children[0];
    var span=this.parentNode.nextElementSibling.children[1];
    img.className="hide";
    span.className='vis';
}
function Blur(){
    reg(this,/^1[3-8]\d{9}$/)
}
function Blur1(){
    reg(this,/^\w{1,11}$/)
}
function reg(name,reg){
    var img=name.parentNode.nextElementSibling.children[0];
    var span=name.parentNode.nextElementSibling.children[1];
    if(reg.test(name.value)){
        img.className="";
        img.src="img/ok.png"
        span.className="hiden";
        return true;
    }
    else{span.className='vis';img.src="img/err.png";img.className="";return false;}
}
btnsub.onclick=function(){

    if(reg(uphone,/^1[3-8]\d{9}$/) && reg(upassword,/^\w{1,11}$/))form.submit();
}

