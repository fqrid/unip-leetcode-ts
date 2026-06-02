export function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const phoneMap: { [key: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result: string[] = [];

    const backtrack = (index: number, currentStr: string) => {

        if (index === digits.length) {
            result.push(currentStr);
            return;
        }

        const currentDigit = digits[index];
        const letters = phoneMap[currentDigit];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, currentStr + letters[i]);
        }
    };

    backtrack(0, "");

    return result;
} 
