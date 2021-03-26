define(["require"],function(){
    function Switch(){
        var oSpan = document.getElementsByClassName("bottom_images");
        var oImg = oSpan[0].getElementsByTagName("img");
        var mark = 0;
        var timer = null;
        timer = setInterval(func,3000);
        function func(){
            if(mark == 1){
                oImg[1].style.display = "block";
                mark--;
            }else{
                oImg[1].style.display = "none";
                mark++;
            }
        }
    }
    return{
        outSwitch: Switch
    }
});