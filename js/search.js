define(["require"],function(){
    function Search(){
        var oSearch = document.getElementsByClassName("search");
        var oInput = oSearch[0].getElementsByTagName("input");
        var oSpan = oSearch[0].getElementsByTagName("span");
        var oST = document.getElementsByClassName("search_next");
        oInput[0].onfocus = function(){
            oInput[0].style.borderColor = "orangered";
            oSpan[0].style.borderColor = "orangered";
            oST[0].style.display = "block";
        }
        oInput[0].onblur = function(){
            oST[0].style.display = "none";
        }
    }
    return{
        outSearch: Search
    }
});