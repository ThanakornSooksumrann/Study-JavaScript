const bbqSkewers = (grill)=> {
	arr = [0,0]
	grill.forEach(g=>g.includes('x') ? arr[1]++ : arr[0]++)
	return arr;
}

console.log (bbqSkewers( [
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
  ]));

  console.log (bbqSkewers([
    "--oooo-ooo--",
    "--xxxxxxxx--",
    "--o---",
    "-o-----o---x--",
    "--o---o-----"
  ]));