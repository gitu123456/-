define(["require"],function(){
    function Login(){
        var oLogin = document.getElementsByClassName("login_head");
        var oA = oLogin[0].getElementsByTagName("a");
        var oLoginTab = document.getElementsByClassName("login_tab");
        for(let i = 0; i < oA.length; i++){
            oA[i].onclick = function(){
                for(var j = 0; j < oA.length; j++){
                    oA[j].style.color = "#666666";
                    oLoginTab[j].style.display = "none";
                }
                this.style.color = "orangered";
                oLoginTab[i].style.display = "block";
            }
        }
    }
    return{
        outLogin: Login
    }
});