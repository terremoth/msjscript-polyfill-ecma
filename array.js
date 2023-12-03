Array.prototype.indexOf = (function (Object, max, min) {
    
    "use strict"
    
    return function indexOf(member, fromIndex) {

        if (this === null || this === undefined) {
            throw TypeError("Array.prototype.indexOf called on null or undefined");
        }

        var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
        
        if (i < 0) { 
            i = max(0, Len + i); 
        } else if (i >= Len) { 
            return -1; 
        }

        if (member === void 0) {        // undefined
            for (; i !== Len; ++i) {
                if (that[i] === void 0 && i in that) { 
                    return i; 
                }
            }
        } else if (member !== member) { // NaN
            return -1; // Since NaN !== NaN, it will never be found. Fast-path it.
        } else {                    // all else
            for (; i !== Len; ++i) {
                if (that[i] === member) { 
                    return i };
                }
        }

        return -1; // if the value was not found, then return -1
    }
})(Object, Math.max, Math.min);

Array.prototype.reduce = function (callbackFn, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
};

Array.prototype.map = function (callbackFn) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        arr.push(callbackFn(this[i], i, this));
    }
    return arr;
};

Array.prototype.filter = function (callbackFn) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callbackFn.call(this, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
};

Array.prototype.forEach = function (callBack) {
    for (var i = 0; i < this.length; i++) {
        callBack(this[i]);
    }
};
