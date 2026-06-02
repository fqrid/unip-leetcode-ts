import { fourSum } from '../src/09-18medium4Sum';

describe('fourSum', () => {
  it('should return all unique quadruplets that sum to target', () => {
    const result = fourSum([1, 0, -1, 0, -2, 2], 0);
    expect(result).toContainEqual([-2, -1, 1, 2]);
    expect(result).toContainEqual([-2, 0, 0, 2]);
    expect(result).toContainEqual([-1, 0, 0, 1]);
    expect(result.length).toBe(3);
  });

  it('should handle repetitive numbers', () => {
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
  });
});
