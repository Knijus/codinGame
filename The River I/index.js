/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 let r1 = parseInt(readline());
 let r2 = parseInt(readline());
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 while (r1!==r2) {
	 if (r1 < r2) {
		 r1 = r1 + numDigitsSum(r1);
	 } else {
		 r2 = r2 + numDigitsSum(r2);
	 }
 } 
 
 console.log(r1);
 
 function numDigitsSum(num) {
	 let numStr = num.toString().split("");
	 let digitSum = 0;
	 for (let i in numStr) {
		 digitSum += parseInt(numStr[i]);
	 }
	 return digitSum;
 }