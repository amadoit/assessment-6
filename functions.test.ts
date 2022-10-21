const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    expect(shuffleArray([]).toBe(true))
});

describe('shuffleArray should be the same length', () => {
    expect(shuffleArray([]).toEqual(shuffleArray.length))
});