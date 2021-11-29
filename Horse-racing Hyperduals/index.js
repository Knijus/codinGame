/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 let horses  = [];

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
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(smallestDiff);

