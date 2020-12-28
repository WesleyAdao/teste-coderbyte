var arr = [1, 2, 3, 4];

maior2 = 0;


var maior1 = arr.reduce(function(a, b) {
	
  return Math.max(a, b);
  
});

for (var i = 0; i < arr.length; i++) { 

	if((arr[i] < maior1) && (arr[i] > maior2)) {
		
		maior2 = arr[i];
	
	}
}


document.writeln(arr+"<br><br>");
document.writeln(maior1 + " " + maior2);