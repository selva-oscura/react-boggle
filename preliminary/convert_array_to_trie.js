const trie = {};
const arrayToTrie = (array) => {
	array.forEach((word) => {
		let node = trie;
		let wordLength = word.length;
		word.split("").forEach((letter, i) => {
			if(!node[letter]){
				node[letter] = {};
			}
			node = node[letter];
			if(i === wordLength-1){
				node['complete'] = true;
			}
		});
	});
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
			console.log('exceeded')
			return response;
		}
	}
	return response;
}
let testArray = ['cat', 'car', 'cab', 'bat'];
arrayToTrie(testArray);
console.log('trie', trie);

console.log('isInDictionary for cat', isInDictionary(trie, 'cat'));
console.log('isInDictionary for ca', isInDictionary(trie, 'ca'));
console.log('isInDictionary for cay', isInDictionary(trie, 'cay'));
console.log('isInDictionary for catamount', isInDictionary(trie, 'catamount'));