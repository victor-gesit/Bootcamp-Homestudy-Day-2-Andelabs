function Words(){
	this.words = function(inputWord){
		var wordArray = inputWord.match(/\S+/g);
		var key = [];
		var value = [];
		var k = wordArray.length;
		for(var i = 0; i < k; i++){
			var word = wordArray[i];
			var counter = 1;
			if(word !== null){
			  key.push(word);
			}
			for(var j = i+1; j <= k; j++){
				if(wordArray[i] === wordArray[j] && wordArray[j] !== null){
					counter +=1;
					wordArray[j] = null;
				}
			}
			if(word !== null){
			  value.push(counter);
			}
			k = wordArray.length;
		}
		var output = {};
		for(var m = 0; m < key.length; m++){
			output[key[m]] = value[m];
		}
		return output;
	};
}