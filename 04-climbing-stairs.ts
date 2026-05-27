// Time: O(n), Space: O(1)
export function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  let prevTwo = 1;
  let prevOne = 2;

  for (let step = 3; step <= n; step += 1) {
    const current = prevOne + prevTwo;
    prevTwo = prevOne;
    prevOne = current;
  }

  return prevOne;
}