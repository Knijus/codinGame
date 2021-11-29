/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const w = parseInt(inputs[0]);
 let numbersOnXAxis = [0,w];
 const h = parseInt(inputs[1]);
 let numbersOnYAxis = [0,h];
 const countX = parseInt(inputs[2]);
 const countY = parseInt(inputs[3]);
 var inputs = readline().split(' ');
 
 let allPointsCoordinates = [];
 let answer = 0;

 for (let i = 0; i < countX; i++) {
	 numbersOnXAxis.push(parseInt(inputs[i]));
 }

 var inputs = readline().split(' ');
 for (let i = 0; i < countY; i++) {
	 numbersOnYAxis.push(parseInt(inputs[i]));
 }
 
 for (let x of numbersOnXAxis) {
	 for (let y of numbersOnYAxis){
		 allPointsCoordinates.push({x, y});
	 }
 }
 
 for (let i = 0; i < allPointsCoordinates.length - 1; i++) {
	 for (let j = i+1; j < allPointsCoordinates.length; j++) {
		 //All 4 square sides are equal. Cheking 2 rectangle sides to be equal.
		 //If condition is satisfied, added 0,5 to final answer. 
		 if (Math.abs(allPointsCoordinates[i].x - allPointsCoordinates[j].x) === Math.abs(allPointsCoordinates[i].y - allPointsCoordinates[j].y)) { 
			 answer += 0.5;   
		 }
	 }
 }
 
 //console.log(coordinates);
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(answer);
 