define(["require"],function(){
    function NAV(){
        var oUL = document.getElementById("head-ul");
        var oLi = oUL.getElementsByTagName("li");
        var oFlow = document.getElementsByClassName("flow");
        for(let i = 0; i < oLi.length; i++){
            oLi[i].onmouseenter = function(){
                if(oFlow[i]){
                    oFlow[i].style.display = "block";
                }
            }
            oLi[i].onmouseleave = function(){
                if(oFlow[i]){
                    oFlow[i].style.display = "none";
                }
            }
        }
        var oCarousel = document.getElementsByClassName("Carousel");
        var oMark = document.getElementsByClassName("mark");
        var oLi = oMark[0].getElementsByTagName("li");
        var oPre = document.getElementById("pre");
        var oNext = document.getElementById("next");
        var timer = null;
        var i = 0
        oLi[i].style.background = "gray";
        speed = -1220;
        clearInterval(timer); 
        timer = setInterval(func,5000);
        function func(){ 
            if(oCarousel[0].offsetLeft == -6100){
                oCarousel[0].style.left = 0 + "px";
            }
            oCarousel[0].style.left = oCarousel[0].offsetLeft +  speed + "px";
            for(var j = 0; j < oLi.length; j++){
                oLi[j].style.background = "white";
            }
            i += 1;
            if(i == 5){
                i = 0;
                oLi[i].style.background = "gray";
            }
            oLi[i].style.background = "gray";
        }  
        for(let b = 0; b < oLi.length; b++){
            oLi[b].onclick = function(){
                clearInterval(timer);
                oCarousel[0].style.left = speed * b + "px";
                for(var j = 0; j < oLi.length; j++){
                    oLi[j].style.background = "white";
                }
                oLi[b].style.background = "gray";
                i = b;
                timer = setInterval(func,5000);
            }
        } 
        oPre.onclick = function(){
            clearInterval(timer);
            --i;
            if(i == -1){
                i = 4;
            }
            oCarousel[0].style.left = speed * i + "px";
            for(var j = 0; j < oLi.length; j++){
                oLi[j].style.background = "white";
            }
            oLi[i].style.background = "gray";
            timer = setInterval(func,5000);   
        }
        oNext.onclick = function(){
            clearInterval(timer);
            ++i;
            if(i == 5){
                i = 0;
            }
            oCarousel[0].style.left = speed * i + "px";
            for(var j = 0; j < oLi.length; j++){
                oLi[j].style.background = "white";
            }
            oLi[i].style.background = "gray";
            timer = setInterval(func,5000);
        }  
    }
    return{
        outNav: NAV
    }
});