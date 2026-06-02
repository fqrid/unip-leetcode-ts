import { TripleSuma } from '../src/06-15medium3sum';

describe('TripleSuma', () => {
  it('should return all unique triplets that sum to zero', () => {
    const result = TripleSuma([-1, 0, 1, 2, -1, -4]);
    expect(result).toContainEqual([-1, -1, 2]);
    expect(result).toContainEqual([-1, 0, 1]);
    expect(result.length).toBe(2);
  });

  it('should return an empty array if no triplets found', () => {
    expect(TripleSuma([0, 1, 1])).toEqual([]);
  });

  it('should handle all zeros', () => {
    expect(TripleSuma([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});
