console.log("shopping加载成功！");
require.config({
    paths: {
        require: "./require",
        jquery_cookie: "./jquery.cookie",
        shopping: "./shopping",
        switch: "./img_switch"
    },
    shim: {
        "jquery_cookie": ["require"]
    }
});
require(["shopping","switch"],function(shopObj,switchObj){
    switchObj.outSwitch();
    shopObj.outShowP();
});