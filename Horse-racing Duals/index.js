function smallestDifference(input) {
	const inputArray = input.split('/n');

	// Start of solution for puzzle
	
	let horses = [];
	const N = parseInt(readline());

	for (let i = 0; i < N; i++) {
		horses.push(parseInt(readline()));
	}

	horses.sort((a, b) => a-b);

	let smallestDiff = horses[1] - horses[0];

	for (let j = 2; j < N; j++){
		const newDiff = horses[j] - horses[j-1];
		if (newDiff < smallestDiff) {
			smallestDiff = newDiff;
		}
	}

	return smallestDiff; // console.log() instead of return

	// End of solution

	function readline() {
		return inputArray.shift();
	}
}