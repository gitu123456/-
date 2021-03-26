define(["require"],function(){
    function Register(){
        var oCT = document.getElementsByClassName("text_city");
        var oSpan = oCT[0].getElementsByTagName("span");
        var oCAT = document.getElementsByClassName("cityAll_text");
        var oInput = oCAT[0].getElementsByTagName("input");
        var oWord = oCAT[0].getElementsByClassName("word");
        var oLi = oCAT[0].getElementsByTagName("li");

        var oPT = document.getElementsByClassName("text_phone");
        var oNumber = oPT[0].getElementsByClassName("number");
        var oPAT = document.getElementsByClassName("phoneAll_next");
        var oInput1 = oPAT[0].getElementsByTagName("input");
        var oWord1 = oPAT[0].getElementsByClassName("word");
        var oLi1 = oPAT[0].getElementsByTagName("li");
        var oSpanA = oPAT[0].getElementsByTagName("span");
        document.onclick = function(ev){
            var e = ev || window.event;
            // alert(e.screenX)
            // alert(e.screenY)
            if(e.screenY < 365 || e.screenY > 446 || e.screenX < 593 || e.screenX > 924){
                oCAT[0].style.display = "none";
            }else{
                oCAT[0].style.display = "block";
            }
            if(e.screenY < 467 || e.screenY > 560 || e.screenX < 592 || e.screenX > 659){
                oPAT[0].style.display = "none";
            }else{
                oPAT[0].style.display = "block";
            }
        }
        oCAT[0].onclick = function(ev){
            var e = ev || window.event;
            var target = e.target || window.event.srcElement;
            if(target.nodeName.toLowerCase() == "li"){
                oSpan[0].innerHTML = target.innerHTML
            }
        }
        oInput[0].onkeyup = function(){
            var supStr1 = oInput[0].value;
            var num1 = -1;
            if(supStr1){
                for(var i = 0; i < oWord.length; i++){
                    oWord[i].style.display = "none";
                }
                for(var i = 0; i < oLi.length; i++){
                    num1 = oLi[i].innerHTML.search(supStr1);
                    if(num1 == -1){
                        oLi[i].style.display = "none";
                    }
                }
            }else{
                for(var i = 0; i < oWord.length; i++){
                    oWord[i].style.display = "block";
                }
                for(var i = 0; i < oLi.length; i++){
                    oLi[i].style.display = "block";
                }
            }
        }


        oPAT[0].onclick = function(ev){
            var e = ev || window.event;
            var target = e.target || window.event.srcElement;
            if(target.nodeName.toLowerCase() == "span"){
                oNumber[0].innerHTML = target.innerHTML;
                // alert(oNumber[0].innerHTML)
                // alert(target.innerHTML)
            }
        }
        oInput1[0].onkeyup = function(){
            var supStr = oInput1[0].value;
            var num = -1;
            if(supStr){
                for(var i = 0; i < oWord1.length; i++){
                    oWord1[i].style.display = "none";
                }
                for(var i = 0; i < oLi1.length; i++){
                    num = oLi1[i].innerHTML.search(supStr);
                    if(num == -1){
                        oLi1[i].style.display = "none";
                    }else{
                        oLi1[0].style.display = "block";
                    }
                }
            }else{
                for(var i = 0; i < oWord1.length; i++){
                    oWord1[i].style.display = "block";
                }
                for(var i = 0; i < oLi1.length; i++){
                    oLi1[i].style.display = "block";
                }
            }
        }
    }
    function Test(){
        var oTel = document.getElementById("tel");
        var oTS1 = document.getElementsByClassName("text_show1");
        var oTS2 = document.getElementsByClassName("text_show2");
        var ser  = 1;
        oTel.value.split();
        oTel.onblur = function(){
            oTS1[0].style.display = "none";
            oTS2[0].style.display = "none";
            if(oTel.value.length != 0){
                ser = oTel.value.length;
            }
            for(var i = 0; i <= (ser - 1); i++){
                if(oTel.value[i] >= 0 && oTel.value[i] <= 9 && oTel.value[0] != 0 && ser == 11){
                    oTS1[0].style.display = "none";
                    oTS2[0].style.display = "none";
                }
                else if(ser == 1 || !oTel.value){
                    oTS1[0].style.display = "block";
                }else{
                    oTS2[0].style.display = "block";
                }
            }
        }
    }
    return{
        outRegister: Register,
        outTest: Test
    }
});