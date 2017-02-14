function ReverseString(){
	this.reverseString = function(input){
		if(typeof input != 'string'){
			return 'invalid input';
		}
		if(input.length === 0){
			return null;
		}
		var reversed = input.split("");
		reversed = reversed.reverse();
		reversed = reversed.join("");
		if(reversed === input){
			return true;
		}else{
			return reversed;
		}
	}
}