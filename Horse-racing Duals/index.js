/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var horses = [];

 const N = parseInt(readline());
 
 for (let i = 0; i < N; i++) {
	 horses.push(parseInt(readline()));
 }
	
 horses.sort((a, b) => a-b);
 
 var smallestDiff = horses[1] - horses[0];
 
 for (let j = 2; j < N; j++){
	 var newDiff = horses[j] - horses[j-1];
	 if (newDiff < smallestDiff) {
		 smallestDiff = newDiff;
	 }
 }
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 console.log(smallestDiff);
 