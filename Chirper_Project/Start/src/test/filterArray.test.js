const { filterArray } = require('../jest/filterArray');

describe('filterArray', () => {
    it('will verify that if null is passed to this function', () => {
        expect(filterArray(null)).toBeNull();
    });

    it('will verify that if [1, 2, 3, 4] is passed, an array with a length of 4 is returned and each of the values match', () => {
        expect(filterArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('will verify that if [50, 75, 100, 125] is passed, the array will not contain 125', () => {
        expect(filterArray([50, 75, 100, 125])).not.toContain(125);
    });
});

