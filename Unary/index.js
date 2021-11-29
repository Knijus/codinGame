
 /**
 * uto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline().toString();
let binaryMsg = "";
let unaryMsg = "";

for (let char of MESSAGE) {
    let charBinary = char.charCodeAt(0).toString(2);
    if (charBinary.length === 6) {
        binaryMsg += "0"
    }
    binaryMsg += charBinary;
    }

for (let i = 0; i < binaryMsg.length; i++) {
    if (binaryMsg[i] !== binaryMsg[i-1] && i !==0 ) {
        unaryMsg += " ";
    }
    if (binaryMsg[i] === binaryMsg[i-1] && i !==0 ) {
        unaryMsg += "0";
    } 
    else if (binaryMsg[i] == 1) {
        unaryMsg += "0 0";
    }
    else  {
        unaryMsg += "00 0";
    }
}

console.log(unaryMsg);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');



 function numDigitsSum(num) {
	 let numStr = num.toString().split("");
	 let digitSum = 0;
	 for (let i in numStr) {
		 digitSum += parseInt(numStr[i]);
	 }
	 return digitSum;
 }