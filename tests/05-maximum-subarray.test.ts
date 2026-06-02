import { maxSubArray } from '../src/05-maximum-subarray';

describe('maxSubArray', () => {
  it('should return the sum of the maximum subarray', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray([1])).toBe(1);
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });
});
