/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const L = parseInt(readline());
 const H = parseInt(readline());
 const T = readline().toUpperCase().split("");
 const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?".split("");
 let ASCII = "";
 let textLetterIndexes = [];
 
 for (letter of T) {
	 if (alphabet.includes(letter)) {
		 textLetterIndexes.push(alphabet.findIndex(lttr => lttr === letter));// return letter`s index
	 } 
	 else {
		 textLetterIndexes.push(alphabet.findIndex(lttr => lttr === "?"));
	 }
 }
 
 for (let i = 0; i < H; i++) {
	 const ROW = readline();
	 ASCII = "";
	 for (let j of textLetterIndexes) {
		 ASCII += ROW.slice(j * L, j * L + L);
	 }
	 console.log(ASCII);  
 }
 
 
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 //console.log(L, H, T);
 