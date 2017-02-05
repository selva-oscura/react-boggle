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

let testArray = ['cat', 'car', 'cab', 'bat'];
arrayToTrie(testArray);
console.log('trie', trie);
