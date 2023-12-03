Object.create = function (proto) {
    function F() { }
    F.prototype = proto;
    return new F();
};

/**
 * Polyfill for Object.keys
 * MIT
 * @see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys
 */
Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
        if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

        var result = [];

        for (var prop in obj) {
            if (hasOwnProperty.call(obj, prop)) result.push(prop);
        }

        if (hasDontEnumBug) {
            for (var i = 0; i < dontEnumsLength; i++) {
                if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
            }
        }
        return result;
    }
})();

/**
 * MIT license
 */
Object.values = function(obj) {

	var allowedTypes = ["[object String]", "[object Object]", "[object Array]", "[object Function]"];
	var objType = Object.prototype.toString.call(obj);
	
    if (obj === null || typeof obj === "undefined") {
        WScript.Echo("1111111111111111");
		throw new TypeError("Cannot convert undefined or null to object");
	} else if(!~allowedTypes.indexOf(objType)) {
        WScript.Echo("2222222222");
		return [];
	} else {WScript.Echo("333333333333333333");
		// if ES6 is supported
		if (Object.keys) {
            WScript.Echo("entrou1");
			return Object.keys(obj).map(function (key) {
				return obj[key];
			});
		} else {
            WScript.Echo("entrou 2");
        }
		
		var result = [];
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				result.push(obj[prop]);
			}
		}
		
		return result;
	}
};

