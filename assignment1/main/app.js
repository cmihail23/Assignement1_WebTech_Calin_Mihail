function hash(input, dictionary) {
	if (typeof input != "string") {
		throw new Error("Input should be a string");
	}
	for (let x of dictionary) {
		if (typeof x != "string") {
			throw new Error("Invalid dictionary format")
		}
	};
	let result = [];
	input.split(' ').forEach((element) => {
		let word = '';
		let found = false;
		for (let comparer of dictionary) {
			if (comparer.toLowerCase() === element.toLowerCase()) {
				word += element.slice(0, 1);
				element.slice(1, -1).split('').forEach(
					(letter) => {
						word += '#';
					}
				);
				word += element.slice(-1);
				found = true;
				break;
			} 
		}
		if(!found){
			word = element;
		}
		result.push(word)
	})
	return result.join(' ');
}

const app = {
	hash
};

module.exports = app;


let res = hash("The dog is walking fast", ['walking', 'fast', 'dog'])
console.log(res)