function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
const x = {
    // i am some comment1
    hello () {
        return _asyncToGenerator(function*() {
            console.log("Hello");
        })();
    },
    // i am some comment2
    "hello" () {
        return _asyncToGenerator(function*() {
            console.log("Hello");
        })();
    },
    // i am some comment3
    1 () {
        return _asyncToGenerator(function*() {
            console.log("Hello");
        })();
    },
    // i am some comment4
    [Date.now()] () {
        return _asyncToGenerator(function*() {
            console.log("Hello");
        })();
    },
    // i am some comment5
    1n () {
        return _asyncToGenerator(function*() {
            console.log("Hello");
        })();
    }
};
