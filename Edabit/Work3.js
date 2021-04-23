function insertWhitespace(s) {
	return s.split('').map(x=>x.toUpperCase()==x?` ${x}`:x).join('').trim();
}

console.log (insertWhitespace("SheWalksToTheBeach"));
console.log (insertWhitespace("MarvinTalksTooMuch"));
console.log (insertWhitespace("TheGreatestUpsetInHistory"));