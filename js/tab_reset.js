define(["require"],function(){
    function judgment(oBnt,oShow1,oShow2,oShow3){
        if(oBnt.length == 2){
            for(let i = 0; i < oBnt.length; i++){
                oBnt[i].onclick = function(){
                    for(let j = 0; j < oBnt.length; j++){
                        oBnt[j].style.color = "#B0B0B0";
                        oBnt[j].style.borderBottom = "none";
                    }
                    oShow1[0].style.display = "none";
                    oShow2[0].style.display = "none";
                    switch(i){
                        case 0: 
                            oShow1[0].style.display = "block";
                            this.style.color = "orangered";
                            this.style.borderBottom = "1px solid orangered";
                            break;
                        case 1: 
                            oShow2[0].style.display = "block";
                            this.style.color = "orangered";
                            this.style.borderBottom = "1px solid orangered";
                            break;
                    }
                }
            }
        }else{
            for(let i = 0; i < oBnt.length; i++){
                oBnt[i].onclick = function(){
                    for(let j = 0; j < oBnt.length; j++){
                            oBnt[j].style.color = "#B0B0B0";
                            oBnt[j].style.borderBottom = "none";
                        }
                    oShow1[0].style.display = "none";
                    oShow2[0].style.display = "none";
                    oShow3[0].style.display = "none";
                    switch(i){
                        case 0: 
                            oShow1[0].style.display = "block";
                            this.style.color = "orangered";
                            this.style.borderBottom = "1px solid orangered";
                            break;
                        case 1: 
                            oShow2[0].style.display = "block";
                            this.style.color = "orangered";
                            this.style.borderBottom = "1px solid orangered";
                            break;
                        case 2: 
                            oShw3[0].style.display = "block";
                            this.style.color = "orangered";
                            this.style.borderBottom = "1px solid orangered";
                            break;
                    }
                }
            }
        }
    }
    function show(){
        alert(1);
    }
    return{
        outJud: judgment,
        outShow: show
    }
});