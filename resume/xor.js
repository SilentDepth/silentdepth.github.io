(function () {
  var xor = function (str, s) {
    var _s = parseInt(s);
    var o = '';
    for (var i = 0, len = str.length; i < len; i++) {
      o += String.fromCharCode(_s + i ^ str.charCodeAt(i));
    }
    return o;
  };

  if (typeof window !== 'undefined') window.xor = xor;
  else if (typeof exports !== 'undefined') module.exports = xor;
  else {
    throw new Error('Current environment is not supported');
  }
}())