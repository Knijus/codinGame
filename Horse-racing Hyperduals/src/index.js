function hyperduals(input) {
    const inputArray = input.split('\n');

    //Start of sulution for puzzle

    const horses  = [];

    const N = parseInt(readline());
    for (let i = 0; i < N; i++) {
        const [velocity, elegance] = readline().split(' ');
        horses.push({
            velocity,
            elegance,
        })
    }

    let smallestDiff = Math.abs(horses[1].velocity-horses[0].velocity) + Math.abs(horses[1].elegance - horses[0].elegance);

    for (let i = 0; i < N; i++){
        for (let j = i+1; j < N; j++) {
            const strengthDiff = Math.abs(horses[i].velocity-horses[j].velocity) + Math.abs(horses[i].elegance - horses[j].elegance);
            if (strengthDiff < smallestDiff) {
                smallestDiff = strengthDiff;
            }
        }
    }
    
    return smallestDiff; // console.log() instead of return

	// End of solution

    function readline() {
		return inputArray.shift();
	}
}

module.exports = hyperduals;