function Words(){
	this.words = function(words){
		// Split the words into an array, using regular expressions
		wordArray = words.match(/\S+/g);
		// Create and empty JSON object
		var result = [];
		var k = wordArray.length;
		for(var i = 0; i < k; i++){
			var word = wordArray[i];
			var count = 0;
			for(var j = i; j < k; j++){
				if(wordArray[i])
			}
			k = wordArray.length;
		}
	};
}