import { letterCombinations } from '../src/08-17mediumLetterCombinationsOfAPhoneNumber';

describe('letterCombinations', () => {
  it('should return all possible letter combinations', () => {
    expect(letterCombinations("23").sort()).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort());
    expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
  });

  it('should return empty array for empty input', () => {
    expect(letterCombinations("")).toEqual([]);
  });
});
