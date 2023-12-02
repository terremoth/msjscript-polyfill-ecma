// https://gist.github.com/rajatjain-21/02e2c5a30cf9d0190cb5503a25417fd1
var JSON = {};

JSON.stringify = function(data) {
    if (data === undefined)
      return undefined;
    if (data === null)
      return 'null';
    if (data.toString() === "NaN")
      return 'null';
    if (data === Infinity)
      return 'null';
    if (data.constructor === String)
      return '"' + data.replace(/"/g, '\\"') + '"';
    if (data.constructor === Number)
      return String(data);
    if (data.constructor === Boolean)
      return data ? 'true' : 'false';
    if (data.constructor === Array)
      return '[' + data.reduce((acc, v) => {
        if (v === undefined || v === NaN || v === Infinity)
          return [...acc, 'null']
        else
          return [...acc, JSON.stringify(v)];
      }, []).join(',') + ']';
    if (data.constructor === Object)
      return '{' + Object.keys(data).reduce((acc, k) => {
        if (data[k] === undefined)
          return acc;
        else
          return [...acc, JSON.stringify(k) + ':' + JSON.stringify(data[k])];
      }, []).join(',') + '}';
  
      return '{}';
  };