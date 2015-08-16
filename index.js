exports = module.exports = function format() {
  var args = [].slice.call(arguments);
  var initial = args.shift();

  function replacer (text, replacement) {
    return text.replace('%s', replacement);
  }
  
  return args.reduce(replacer, initial);
}