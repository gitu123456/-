console.log("login加载成功！");
require.config({
    paths:{
        require: "./require",
        jquery_cookie: "./jquery.cookie",
        login: "./login"
    },
    shim:{
        "jquery_cookie": ["require"]
    }
});
require(["login"],function(loginObj){
    loginObj.outLogin();
});