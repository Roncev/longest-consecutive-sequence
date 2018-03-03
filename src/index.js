module.exports = function longestConsecutiveLength(array) {
  var j = array.length;
  console.log(j);
  var count = 1;
  var res = 1;
  if (array.length < 2) { return array.length }

  array = array.sort(function (x, y) { return x - y });

  for (var i = 0; i < array.length-1; i++) {
    if (array[i] + 1 == array[i + 1]) {
      count++

      if (count > res) {
        res = count;
      } 
    } else if(array[i] != array[i + 1]) {
      count = 1;
    }
  }

  console.log(res)
  return res

}
