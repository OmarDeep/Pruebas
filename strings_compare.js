function compareStrings(a,b){

  var a = a;
  var b = b;
  var rep = [];

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if(a[i] == b[j]){
        var findChar = false;
        for (var k = 0; k < rep.length; k++) {
          if(rep[k] == a[i]){
            findChar = true;
          }
        }
        if(!findChar){
          rep.push(a[i]);
        }
      }
    }
  }
  if(rep.length > 0){
    console.log('las letras iguales son ' + rep.join());
  }
  else{
    console.log('No tienen letras iguales');
  }
}

console.log(compareStrings('Hello World', 'Hi World'))