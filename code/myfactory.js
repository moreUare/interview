(function (global, factory) {
    "use strict";
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.gz = factory());
}(this, function () {
    var gz = {
        name: "initialization",
        getName: function () {
            return (this.name)
        }
    };
    gz.version = '1.0.1';

    gz.author = "gzw";

    var setting = {
        show: true
    }




    return gz
}));