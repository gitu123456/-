define(["require"],function(){
    function Confirm(){
        var oRGT = document.getElementById("register_a");
        var oRGT_N = document.getElementsByClassName("confirm_next");
        var oMask = document.getElementById("Mask");
        var oCha = document.getElementsByClassName("icon-cha");
        oRGT.onmousedown = function(){
            oRGT_N[0].style.display = "block";
            oMask.style.display = "block";
        }
        oCha[0].onclick = function(){
            oRGT_N[0].style.display = "none";
            oMask.style.display = "none";
        }
    }
    return{
        outConfirm: Confirm
    }
});