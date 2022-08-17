// Implement your exercise in this file.  If you need to implement additional functions,
// remember to export them as well, if you need to access them in your unit test.
function doAllTheThings() {
    console.log("Hi there");
    return true;
}

function createDrawers(size) {
    let array = Array(size);
    array = array.fill().map((element, index) => index);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function followCycle(drawers, myNumber) {
    let maxTries = drawers.length / 2;
    
    let currentPoint = myNumber;
    for(let numTries = 0; numTries < maxTries; numTries++ ) {
        if( drawers[currentPoint] == myNumber ) {
            return true;
        }
        else {
            currentPoint = drawers[currentPoint];
        }
    }
    return false;
}

function tryAllPrisoners(numPrisoners) {
    let drawers = createDrawers(numPrisoners);
    for( let i = 0; i < numPrisoners; i++ ) {
        if( !followCycle(drawers, i)) {
            return false;
        }
    }
    return true;
}

const NUM_ATTEMPTS = 10000;
const NUM_PRISONERS = 100;

let successCount = 0;
for( let attempt = 0; attempt < NUM_ATTEMPTS; attempt++ ) {

    if( tryAllPrisoners(NUM_PRISONERS) ) {
        successCount++;
    }
}

console.log(`Successes: ${successCount}`);
console.log(`Failures: ${NUM_ATTEMPTS - successCount}`);
console.log(`Success rate: ${successCount * 100 / NUM_ATTEMPTS }%`);


module.exports = { doAllTheThings, createDrawers, followCycle };

