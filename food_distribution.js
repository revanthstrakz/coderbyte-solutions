

function ArrayChallenge(arr) {
	var sandwiches = arr.shift();
	function notAllSame(arr){
		var sorted = arr.slice().sort();
		return sorted[0] != sorted[arr.length -1];
	}
	function biggestDiff(arr){
		var differences = [];
		for (var i = 0; i < arr.length - 1; i++){
			differences.push(Math.abs(arr[i] - arr[i+1]));
		}
		return differences.sort(function(a,b){return b-a;})[0];
	}
	function bigReducer(arr, num){
		//console.log("bdiff = " + biggestDiff(arr), "sw = " + sandwiches, arr);
		for (var i = 0; i < arr.length - 1; i++){
			if (Math.abs(arr[i] - arr[i+1]) >= num ){
				arr[i] > arr[i+1] ? arr[i]-- : arr[i+1]--;
				sandwiches--;
				//console.log(sandwiches,arr);
			}
			if (sandwiches === 0 || !notAllSame(arr))
				break;
		}
	}
	for (var i = sandwiches; i > 0 && notAllSame(arr); i--){
		if (biggestDiff(arr) >= 3) 
			bigReducer(arr, 3);
		else if (biggestDiff(arr) == 2) 
			bigReducer(arr, 2);
		else if (biggestDiff(arr) == 1) 
			bigReducer(arr, 1);
	}
	
	return arr.map(function(x,i,arr){return arr[i+1] === undefined ? 0 : Math.abs(x-arr[i+1])}).reduce(function(a,b){return a+b;});
}

// keep this function call here 
console.log(ArrayChallenge(readline()));



