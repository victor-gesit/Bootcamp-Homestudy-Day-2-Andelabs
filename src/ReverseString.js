function ReverseString(){
	this.reverseString = function(input){
		if(typeof input != 'string'){
			return 'invalid input';
		}
		if(input.length === 0){
			return null;
		}
		// Split input into array
		var reversed = input.split("");
		// Reverse the array.
		reversed = reversed.reverse();
		// Join back the array to for a string.
		reversed = reversed.join("");
		if(reversed === input){
			return true;
		}else{
			return reversed;
		}
	}
}