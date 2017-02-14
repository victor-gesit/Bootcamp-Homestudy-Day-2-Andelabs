function Words(){
	this.words = function(inputWord){
		// Split the words into an array, using a regular expression
		var wordArray = inputWord.match(/\S+/g);
		// Create and empty JSON object
		var result = [];
		var count = [];
		var k = wordArray.length;
		for(var i = 0; i < k; i++){
			var word = wordArray[i];
			var counter = 1;
			if(word !== null){
			  result.push(word);
			}
			for(var j = i+1; j <= k; j++){
				if(wordArray[i] === wordArray[j] && wordArray[j] !== null){
					counter +=1;
					wordArray[j] = null;
				}
			}
			if(word !== null){
			  count.push(counter);
			}
			k = wordArray.length;
		}
		var output = {};
		for(var m = 0; m < result.length; m++){
			var st = result[m];
			output.st = count[m];
		}
		return output;
		//console.log(result);
		//console.log(count);
	};
}