const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,
"U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

function nameScore(name) {
	const score = [...name].reduce((sum, value) => sum + scores[value], 0);
	if (score <= 60)  return "NOT TOO GOOD";
	if (score <= 300) return "PRETTY GOOD";
	if (score <= 600) return "VERY GOOD";
	return "THE BEST";
}

console.log (nameScore("MUBASHIR"));
console.log (nameScore("YOU"));
console.log (nameScore("MATT"));
console.log (nameScore("PUBG"));