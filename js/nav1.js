define(["require"],function(){
    function Time(){
        var oTime = document.getElementsByClassName("time");
        var oSpan = oTime[0].getElementsByTagName("span");
        var timer0 = null;
        var i = 0;
        var number = 0;
        oSpan[0].innerHTML = "24";
        oSpan[1].innerHTML = "00";
        oSpan[2].innerHTML = "00";
        localStorage.setItem("hour",24);
        localStorage.setItem("minute",0);
        localStorage.setItem("second",0);
        try{
            if(window.localStorage);
        }catch(error){
            alert("浏览器不支持localStorage");
        }
        number = localStorage.getItem("hour") * 3600 + localStorage.getItem("minute") * 60 + localStorage.getItem("second");
        clearInterval(timer0);
        timer0 = setInterval(funcT,1000);
        function funcT(){
            oSpan[0].innerHTML = parseInt((86400 - i) / 3600);
            oSpan[1].innerHTML = parseInt(((number - i) % 3600) / 60);
            oSpan[2].innerHTML = parseInt(((number - i) % 3600) % 60); 
            localStorage.setItem("hour",parseInt((86400 - i) / 3600));
            localStorage.setItem("minute",parseInt(((number - i) % 3600) / 60));
            localStorage.setItem("second",parseInt(((number - i) % 3600) % 60));
            i++;
            if( oSpan[0].innerHTML == 0 && oSpan[1].innerHTML == 0 && oSpan[2].innerHTML == 0){
                oSpan[0].innerHTML = "00";
                oSpan[1].innerHTML = "00";
                oSpan[2].innerHTML = "00";
                clearInterval(timer0);
            }
            if(oSpan[0].innerHTML < 10 ){
                oSpan[0].innerHTML = "0" + oSpan[0].innerHTML;
            }
            if(oSpan[1].innerHTML < 10 ){
                oSpan[1].innerHTML = "0" + oSpan[1].innerHTML;
            }
            if(oSpan[2].innerHTML < 10 ){
                oSpan[2].innerHTML = "0" + oSpan[2].innerHTML;
            }
        }
    }
    function banner(){
        var oTwoT = document.getElementsByClassName("banner1");
        var oL = document.getElementById("main_l");
        var oR = document.getElementById("main_r");
        var speed = -984;
        var speed1 = 984;
        var timer1 = null;
        clearInterval(timer1);
        timer1 = setInterval(funcT1,5000);
        function funcT1(){
            if(oTwoT[0].offsetLeft == -3936){
                speed *= -1;
            }
            oTwoT[0].style.left = oTwoT[0].offsetLeft + speed + "px";
            if(oTwoT[0].offsetLeft == 0){
                speed *= -1;
            }
        }
        oL.onclick = function(){
            clearInterval(timer1);
            if(oTwoT[0].offsetLeft == -3936){
                oTwoT[0].style.left = -3936 + "px";
            }else{
                oTwoT[0].style.left = oTwoT[0].offsetLeft - speed1 + "px";
            }
            timer1 = setInterval(funcT1,5000);
        }
        oR.onclick = function(){
            clearInterval(timer1);
            if(oTwoT[0].offsetLeft == 0){
                oTwoT[0].style.left = 0 + "px";
            }else{
                oTwoT[0].style.left = oTwoT[0].offsetLeft + speed1 + "px";
            }
            timer1 = setInterval(funcT1,5000);
        }
    }
    return{
        outTime: Time,
        outBanner: banner
    }
});