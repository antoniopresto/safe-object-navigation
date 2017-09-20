module.exports = function _(o, qs) {
  var qa = qs.replace(/\[([0-9]*)]/gim, '.$1').split('.');
  return qa.reduce(function(prev, next) {
    if (!prev) return undefined;
    return prev[next];
  }, o);
};
