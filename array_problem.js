function rotacion(a) {
    
    var primero = a[0];
  
    for ( var i = 1; i < a.length; i++) {
        a[i - 1] = a[i]
    }
    a[a.length - 1] = primero;
}

function rotLeft(a, d) {
    for (var i = 0; i < d; i++) {
        rotacion(a)
    }
    return a;
}
console.log(rotLeft(['a','b','c', 'd','e'], 3));
