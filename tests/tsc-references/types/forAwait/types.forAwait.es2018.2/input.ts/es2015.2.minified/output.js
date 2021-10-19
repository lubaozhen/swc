function _asyncIterator(iterable) {
    var method;
    if ("function" == typeof Symbol) {
        if (Symbol.asyncIterator && null != (method = iterable[Symbol.asyncIterator])) return method.call(iterable);
        if (Symbol.iterator && null != (method = iterable[Symbol.iterator])) return method.call(iterable);
    }
    throw new TypeError("Object is not async iterable");
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg), value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
}
function _f() {
    return (_f = (function(fn) {
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
                _next(void 0);
            });
        };
    })(function*() {
        let y;
        var _iteratorError, _iteratorAbruptCompletion = !1, _didIteratorError = !1;
        try {
            for(var _step, _iterator = _asyncIterator({
            }); _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = !1);
        } catch (err) {
            _didIteratorError = !0, _iteratorError = err;
        } finally{
            try {
                _iteratorAbruptCompletion && null != _iterator.return && (yield _iteratorError.return());
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
        var _iteratorError1, _iteratorAbruptCompletion1 = !1, _didIteratorError1 = !1;
        try {
            for(var _step1, _iterator1 = _asyncIterator({
            }); _iteratorAbruptCompletion1 = !(_step1 = yield _iterator1.next()).done; _iteratorAbruptCompletion1 = !1);
        } catch (err1) {
            _didIteratorError1 = !0, _iteratorError1 = err1;
        } finally{
            try {
                _iteratorAbruptCompletion1 && null != _iterator1.return && (yield _iteratorError1.return());
            } finally{
                if (_didIteratorError1) throw _iteratorError1;
            }
        }
        var _iteratorError4, _iteratorAbruptCompletion3 = !1, _didIteratorError3 = !1;
        try {
            for(var _step2, _iterator3 = _asyncIterator(asyncIterable); _iteratorAbruptCompletion3 = !(_step2 = yield _iterator3.next()).done; _iteratorAbruptCompletion3 = !1);
        } catch (err2) {
            _didIteratorError3 = !0, _iteratorError4 = err2;
        } finally{
            try {
                _iteratorAbruptCompletion3 && null != _iterator3.return && (yield _iteratorError4.return());
            } finally{
                if (_didIteratorError3) throw _iteratorError4;
            }
        }
        var _iteratorError7, _iteratorAbruptCompletion5 = !1, _didIteratorError5 = !1;
        try {
            for(var _step3, _iterator5 = _asyncIterator(iterable); _iteratorAbruptCompletion5 = !(_step3 = yield _iterator5.next()).done; _iteratorAbruptCompletion5 = !1);
        } catch (err3) {
            _didIteratorError5 = !0, _iteratorError7 = err3;
        } finally{
            try {
                _iteratorAbruptCompletion5 && null != _iterator5.return && (yield _iteratorError7.return());
            } finally{
                if (_didIteratorError5) throw _iteratorError7;
            }
        }
        for (const x of asyncIterable);
        for (y of asyncIterable);
    })).apply(this, arguments);
}
