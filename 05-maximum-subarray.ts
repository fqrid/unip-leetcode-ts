// Time: O(n), Space: O(1)
export function maxSubArray(nums: number[]): number {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let index = 1; index < nums.length; index += 1) {
    currentMax = Math.max(nums[index], currentMax + nums[index]);
    globalMax = Math.max(globalMax, currentMax);
  }

  return globalMax;
}