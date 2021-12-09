
function rectangle(input) {
	const inputArray = input.split('\n');

	// Start of solution for puzzle
	
	let inputs = readline().split(' ');
	const w = parseInt(inputs[0]);
	let numbersOnXAxis = [0,w];
	const h = parseInt(inputs[1]);
	let numbersOnYAxis = [0,h];
	const countX = parseInt(inputs[2]);
	const countY = parseInt(inputs[3]);
	let allPointsCoordinates = [];
	let answer = 0;

	
	inputs = readline().split(' ');
	inputs.forEach(x => {
		numbersOnXAxis.push(parseInt(x));
	});

	inputs = readline().split(' ');
	inputs.forEach(y => {
		numbersOnXAxis.push(parseInt(y));
	});
	
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
	
	return answer; // console.log() instead of return

	// End of solution

	function readline() {
		return inputArray.shift();
	}
}

module.exports = rectangle;