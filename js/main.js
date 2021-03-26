console.log("加载成功！");
require.config({
    paths:{
        require: "./require",
        jquery_cookie: "./jquery.cookie",
        nav: "./nav",
        nav1: "./nav1",
        tab: "./tab",
        img_switch: "./img_switch",
        search: "./search",
        confirm: "./confirm_register"
    },
    //设置依赖关系
    shim:{
        "jquery_cookie": ["require"]
    }
});

require(["nav","nav1","tab","img_switch","search","confirm"],function(navObj,nav1Obj,tabObj,logoObj,searchObj,confirmObj){
    navObj.outNav();
    nav1Obj.outTime();
    nav1Obj.outBanner();
    tabObj.outTabShow();
    logoObj.outSwitch();
    searchObj.outSearch();
    confirmObj.outConfirm();
});