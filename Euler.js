function solveProblem1() {
	var sum = 0;
    for (var i = 1; i < 1000; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }
	document.getElementById("answerProblem1").innerHTML = sum;
}

function solveProblem2(){
	var numA = 1;
	var numB = 2;
	var numC = 0;
	var sum = 0;
	
	while(numA < 4000000){
		if(numA % 2 === 0){
			sum += numA;
		}
		var numC = numA + numB;
		numA = numB;
		numB = numC;
}
console.log(sum);
document.getElementById("answerProblem2").innerHTML = sum;
	}
	



var solveProblem3 = function() {
    var answer = 0;
	var num = 600851475143;
	var i = 2;

	while ( num > i)
	{
		if (num % i === 0)
		{
			num = num/i;
			i = 2;
		}
		else 
		{
			i += 1;
		}
	}
	answer = i;
	document.getElementById("answerProblem3").innerHTML = answer;
};
