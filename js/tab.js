define(["require"],function(){
    function judgment(oBnt,oH){
        var oShow = oH[0].getElementsByClassName("show_hidden");
        for(let i = 0; i < oBnt.length; i++){
            oBnt[i].onmouseenter = function(){
                for(var j = 0; j < oBnt.length; j++){
                    oBnt[j].style.color = "#B0B0B0";
                    oBnt[j].style.borderBottom = "none";
                    oShow[j].style.display = "none";
                }
                switch(i){
                    case 0: 
                        oShow[i].style.display = "flex";
                        this.style.color = "orangered";
                        this.style.borderBottom = "1px solid orangered";
                        break;
                    case 1: 
                        oShow[i].style.display = "flex";
                        this.style.color = "orangered";
                        this.style.borderBottom = "1px solid orangered";
                        break;
                    case 2: 
                        oShow[i].style.display = "flex";
                        this.style.color = "orangered";
                        this.style.borderBottom = "1px solid orangered";
                        break;
                }
            }
        }
    }
    function show(){
        var oHome = document.getElementById("home");
        var oHome1 = document.getElementById("home1");
        var oHome2 = document.getElementById("home2");
        var oHome3 = document.getElementById("home3");
        var oHome4 = document.getElementById("home4");
        var oH0 = document.getElementsByClassName("two_home0");
        var oH1 = document.getElementsByClassName("two_home1");
        var oH2 = document.getElementsByClassName("two_home2");
        var oH3 = document.getElementsByClassName("two_home3");
        var oH4 = document.getElementsByClassName("two_home4");
        var oBnt0 = oHome.getElementsByTagName("button");
        var oBnt1 = oHome1.getElementsByTagName("button");
        var oBnt2 = oHome2.getElementsByTagName("button");
        var oBnt3 = oHome3.getElementsByTagName("button");
        var oBnt4 = oHome4.getElementsByTagName("button");
        judgment(oBnt0,oH0);
        console.log(oBnt0,oH0);
        judgment(oBnt1,oH1);
        console.log(oBnt1,oH1);
        judgment(oBnt2,oH2);
        console.log(oBnt2,oH2);
        judgment(oBnt3,oH3);
        console.log(oBnt3,oH3);
        judgment(oBnt4,oH4);
        console.log(oBnt4,oH4);
    }
    return{
        outTabShow: show
    }
});