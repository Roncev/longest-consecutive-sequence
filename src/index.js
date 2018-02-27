module.exports = function longestConsecutiveLength(array) {
var j = array.length;
var count=1;;
var res = 1;
if(array.length<2) {return array.length}

array = array.sort(function(x, y) {return x-y})
//console.log(array);


  

  while (j>0) {
   // console.log('while');
    for (var i=0; i<array.length; i++) {
     
      if (array[i]+1 == array[i+1]) {
        count++
      //console.log(count);
        if (count > res) {
        res = count;
       //  console.log("res=count")
        console.log(res, "newres")
        }
       
      }
      if (array[i+1] != array[i]+1) {
        count=1;
      }
    //  console.log(res)
j--
  }
}
console.log(res)
return res

}
