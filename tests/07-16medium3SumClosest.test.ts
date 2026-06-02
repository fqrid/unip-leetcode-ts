import { threeSumClosest } from '../src/07-16medium3SumClosest';

describe('threeSumClosest', () => {
  it('should return the sum closest to the target', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
  });
});
