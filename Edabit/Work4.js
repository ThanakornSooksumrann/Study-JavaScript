function firstRepeat(chars) {
	let total = [];
	for (let char of chars.split("")){
		if (total.indexOf(char) !== -1){
			return char;
		}
		total.push(char);
		
	}
	return '-1';
}

console.log (firstRepeat("legolas"));
console.log (firstRepeat("Gandalf"));
console.log (firstRepeat("Balrog"));
console.log (firstRepeat("Isildur"));