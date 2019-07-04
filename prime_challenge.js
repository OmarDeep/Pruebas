
function primos(valor){
	var valor=valor;
	var primo = true

	for(var i = 2; i<valor; i++){
		if(valor%i == 0){
		primo=false;
	}
}
if(primo == true){
	console.log("El valor " + valor + " es un numero Primo");
}
else{
	console.log("El valor " + valor + " no es un numero Primo");
}
}
console.log(primos(10));