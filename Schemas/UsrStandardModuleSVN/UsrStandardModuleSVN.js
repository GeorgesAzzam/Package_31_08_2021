  define("UsrStandardModuleSVN", [],
    function () {
        return {
            config:{},
            init: function () {
                this.config.prop1 = 1;
            },
            render:function(){
                alert("Hello, Test Alert");
            }
        };
    });
