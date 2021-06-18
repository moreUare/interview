export default {
    p1: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject(new Error('fail'))
            }, 3000)
        })
    },
    p2: function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(_this.p1())
            }, 1000)
        })
    },
    p3: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("p3")
            }, 4000)
        })
    }

}
