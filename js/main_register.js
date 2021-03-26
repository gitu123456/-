console.log("register加载成功！");
require.config({
    paths: {
        require: "./require",
        jquery_cookie: "./jquery.cookie",
        register: "./register"
    },
    shim: {
        "jquery_cookie": ["require"]
    }
});

require(["register"],function(registerObj){
    registerObj.outRegister();
    registerObj.outTest();
});