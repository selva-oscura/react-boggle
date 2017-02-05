const fs = require('fs');
const {twl06} = require('./twl06_array.js');
console.log('dictionary word count', twl06.length);

const trie = {};
const arrayToTrie = (array) => {
	let wordCount = 0;
	array.forEach((word) => {
		let node = trie;
		let wordLength = word.length;
		if(wordLength>2){	
			wordCount++;	
			word.split("").forEach((letter, i) => {
				if(!node[letter]){
					node[letter] = {};
				}
				node = node[letter];
				if(i === wordLength-1){
					node['complete'] = true;
				}
			});
		}
	});
	console.log('word count after pruning out words <3 letters long', wordCount);
}

const isInDictionary = (dict, word) => {
	let response = false;
	let node = dict;
	let wordLength = word.length;
	for(let i = 0; i<wordLength; i++){
		if(node[word[i]]){
			node = node[word[i]];
			if(i === wordLength-1){
				if(node['complete']){
					response = true;
				}
			}
		}else{
			return response;
		}
	}
	return response;
}

arrayToTrie(twl06);

// console.log('trie', trie);

// console.log('isInDictionary for cat', isInDictionary(trie, 'cat'));
// console.log('isInDictionary for cab', isInDictionary(trie, 'cab'));
// console.log('isInDictionary for cb', isInDictionary(trie, 'cb'));
// console.log('isInDictionary for ca', isInDictionary(trie, 'ca'));
// console.log('isInDictionary for cay', isInDictionary(trie, 'cay'));
// console.log('isInDictionary for catamount', isInDictionary(trie, 'catamount'));

fs.writeFile("./twl06.json", JSON.stringify(trie), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 


// const testDict = require('./twl06.json');
// // console.log(testDict);

// console.log('isInDictionary for aa (should be false)', isInDictionary(testDict, 'aa'));
// console.log('isInDictionary for ca (should be false)', isInDictionary(testDict, 'ca'));
// console.log('isInDictionary for cab (should be true)', isInDictionary(testDict, 'cab'));
// console.log('isInDictionary for cat (should be true)', isInDictionary(testDict, 'cat'));
// console.log('isInDictionary for cb (should be false)', isInDictionary(testDict, 'cb'));
// console.log('isInDictionary for cay (should be true)', isInDictionary(testDict, 'cay'));
// console.log('isInDictionary for catamount (should be true)', isInDictionary(testDict, 'catamount'));
// console.log('isInDictionary for hi (should be false, due to pruning)', isInDictionary(testDict, 'hi'));