function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum === target) {
                return currentSum; // Retornamos inmediatamente
            } 
            else if (currentSum < target) {
                left++;
            } 
            else {
                right--;
            }
        }
    }

    return closestSum;
}


console.log(threeSumClosest([-1, 2, 1, -4], 1)); 
console.log(threeSumClosest([0, 0, 0], 1)); 
