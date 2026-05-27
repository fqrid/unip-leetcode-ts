// Time: O(n), Space: O(n)
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const closingToOpening: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      continue;
    }

    const expectedOpening = closingToOpening[char];
    if (expectedOpening === undefined || stack.pop() !== expectedOpening) {
      return false;
    }
  }

  return stack.length === 0;
}