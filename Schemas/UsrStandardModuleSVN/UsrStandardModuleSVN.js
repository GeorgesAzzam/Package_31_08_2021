  define("UsrStandardModuleSVN", [],
    function () {
        return {
            config:{},
            init: function () {
                this.config.prop1 = 1;
            },
            render:function(){
                alert("Hellowzz,add Change From Instance 5000 to 5005 Test Alert");
            }
        };
    });
