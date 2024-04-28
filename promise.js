function Promise(executor) {
    var onResolve;
    var onReject;
    var isFulfilled = false;
    var isRejected = false;
    var isCalled = false;
    var value;
    var error;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function' && !isCalled) {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(err) {
        isFulfilled = true;
        error = err;
        if (typeof onReject === 'function' && !isCalled) {
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function (thenHandler) {
        onResolve = thenHandler;
        if (!isCalled & isFulfilled) {
            onResolve(value);
            isCalled = true;
        }

        return this;
    };


    this.catch = function (catchHandler) {
        onReject = catchHandler;
        if (!isCalled && isRejected) {
            onReject(error);
            isCalled = true;
        }
        return this;

    };

    executor(resolve, reject);
}

Promise.resolve = function (val) {
    return new Promise(function executor(resolve, reject) {
        resolve(val);
    };
}

Promise.reject = function (reason) {
    return new Promise(function executor(resolve, reject) {
        reject(reason);
    });
}

Promise.all = function (promises) {
    return new Promise(function executor(resolve, reject) {
        var cnt = 0;
        var res = [];
        if (promises.length === 0) {
            resolve(promises);
            return;
        }

        for (var i = 0; i < promises.length; i++) {

            promises[i].then(function (val) {
                return done(val, i);
            }).catch(function (err) {
                return reject(err)
            });
        }

        function done(val, i) {
            res[i] = val;
            ++cnt;
            if (promises.length === cnt) {
                resolve(res);
            }
        }
    });
};

