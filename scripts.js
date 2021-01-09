
function MathChallenge(num) { 

	var fibonacci = [0,1];

	for (var i=0; i<num; i++ ) {

		fibonacci.push(fibonacci[i]+fibonacci[i+1]);

	}
	
	if (fibonacci.indexOf(num)!=-1) {
	
		return "yes";
	
	}else{
	
		return "no";
	
	}
	
}


function ArrayChallenge(arr) { 
  
	const somaA = (a, b) => a + b;
	var totalArray = 0, totalMaior = 0, maior2 = 0;
	var somaArray = arr.reduce(somaA);
	var maior1 = arr.reduce(function(a, b) {
	  
	  return Math.max(a, b);
	  
	});
	
	for (var i = 0; i < arr.length; i++) { 
  
	  if((arr[i] < maior1) && (arr[i] > maior2)) {
		
		maior2 = arr[i];
	  
	  }
	}
  
	totalArray = somaArray * 2;
	totalMaior = maior1 * maior2;
  
	if (totalMaior > totalArray) {
  
	  return true;
  
	}else{
	  
	  return false;
  
	}
  
  }

  function RecursionChallenge(num) { 
	  

	if (num == 0){
	
	  return 1;
	
	}else{
	
	  return num * RecursionChallenge(num - 1);
  
	}
  
  }

  function teste(){

	var txt = document.getElementById("nome").value;
	document.getElementById("resultado").innerHTML = txt;

  }