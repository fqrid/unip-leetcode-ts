function TripleSuma(nums: number[]): number[][] {
    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        
        // Optimización: Si el número actual es mayor a 0, 
        if (nums[i] > 0) break;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let izquierda = i + 1;
        let derecha = nums.length - 1;

        while (izquierda < derecha) {
            const sum = nums[i] + nums[izquierda] + nums[derecha];

            if (sum === 0) {
                result.push([nums[i], nums[izquierda], nums[derecha]]);
                
                izquierda++;
                derecha--;

                while (izquierda < derecha && nums[izquierda] === nums[izquierda - 1]) {
                    izquierda++;
                }
                while (izquierda < derecha && nums[derecha] === nums[derecha + 1]) {
                    derecha--;
                }
            } else if (sum < 0) {
                izquierda++;
            } else {
                derecha--;
            }
        }
    }

    return result;
}

console.log(TripleSuma([-1, 0, 1, 2, -1, -4])); 
console.log(TripleSuma([0, 1, 1])); 
console.log(TripleSuma([0, 0, 0])); 


