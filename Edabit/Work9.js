function zipIt(women, men) {
	return women.length === men.length ? women.map((elsement, index) => [elsement, men[index]]) : "sizes don't match";
}

console.log (zipIt(["Elise", "Mary"], ["John", "Rick"]));
console.log (zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
console.log (zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));