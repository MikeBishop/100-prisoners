const { expect } = require('chai');
const { doAllTheThings, createDrawers, followCycle } = require('./app');

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information
test('exactly one instance per drawer', () => {
    let test = createDrawers(8);
    let result = Array(8).fill(0);
    for( let i = 0; i < 8; i++ ) {
        result[test[i]] += 1;
    }
    expect(result.every(count => count == 1)).to.equal(true);

}); 

test('can follow cycle', () => {
    expect(followCycle([3, 1, 2, 0, 4], 0)).to.equal(true);
})

test('can fail', () => {
    expect(followCycle([1, 2, 3, 4, 0], 0)).to.equal(false);
})
