$( document ).ready(function(){

$("span").on( "click", function() {
	var storeText = $(this).text();
		$("#screen").html(storeText);
		calcCounter ++;
		console.log(calcCounter);

		if (calcCounter === 1) {
			x = parseInt(storeText);
			console.log(x + "this is the first click");
		
		} else if (calcCounter === 2) {
			operator = (storeText);
			console.log(operator + "this is the second click");

		} else if (calcCounter === 3) {
			y = parseInt(storeText);
			console.log(y + "this is the third click");

		} else if (calcCounter === 4) { 
			sum = x + y;
			$("#screen").html(sum);
			console.log(sum + " this is the sum");
		};
});
})

var x; 
var y; 
var operator;
var sum;
var calcCounter = 0; 