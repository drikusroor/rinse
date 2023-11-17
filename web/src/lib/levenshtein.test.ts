import levenshtein from './levenshtein'

describe('levenshtein function', () => {
  test('returns 0 when both strings are empty', () => {
    expect(levenshtein('', '')).toBe(0)
  })

  test('calculates correct distance for empty vs non-empty', () => {
    expect(levenshtein('', 'abc')).toBe(3)
  })

  test('returns 0 when strings are identical', () => {
    expect(levenshtein('test', 'test')).toBe(0)
  })

  test('calculates correct distance for one character difference', () => {
    expect(levenshtein('test', 'test1')).toBe(1)
  })

  test('calculates correct distance for same length different strings', () => {
    expect(levenshtein('test', 'abcd')).toBe(4)
  })

  test('calculates correct distance for different length strings', () => {
    expect(levenshtein('testing', 'test')).toBe(3)
  })

  test('is case sensitive', () => {
    expect(levenshtein('Test', 'test')).toBe(1)
  })

  test('handles special characters correctly', () => {
    expect(levenshtein('tëst!', 'test')).toBe(2)
  })
})
