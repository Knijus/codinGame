/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const r1 = parseInt(readline()); 
 
 /**
  * Auto-generated code below aims at helping you parse
  * the standard input according to the problem statement.
  **/
 let answer = "NO";
 
 let river = 0;
 for (let i = riverStartCheck(r1); i < r1; i++) {
	 river = i;
	 while (r1 > river) {
		 river = river + numDigitsSum(river);
		 if (river === r1) {
			 console.log("YES");
			 return;
		 }
	 }
 }
 
 console.log(answer);
 
 function riverStartCheck(num) {
	 let numberLenght= num.toString().length;
	 if (num - numberLenght * 9 <= 0) {
		 numberLenght = 1;
	 }
	 else numberLenght = num - numberLenght * 9;
	 return numberLenght;
 }
 
 function numDigitsSum(num) {
	 const numStr = num.toString().split("");
	 let digitSum = 0;
	 numStr.forEach(el => digitSum += parseInt(el)); 
	 return digitSum;
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
  