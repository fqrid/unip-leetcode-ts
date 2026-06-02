import { climbStairs } from '../src/04-climbing-stairs';

describe('climbStairs', () => {
  it('should return the correct number of ways for 2 steps', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('should return the correct number of ways for 3 steps', () => {
    expect(climbStairs(3)).toBe(3);
  });

  it('should return the correct number of ways for 5 steps', () => {
    expect(climbStairs(5)).toBe(8);
  });
});
