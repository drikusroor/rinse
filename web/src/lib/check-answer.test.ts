import checkAnswer from './check-answer'

describe('checkAnswer function', () => {
  const possibleAnswers = ['Correct Answer', 'Another Right Answer']

  test('returns true for exact answer', () => {
    expect(checkAnswer('Correct Answer', possibleAnswers)).toBe(true)
  })

  test('ignores leading/trailing whitespace', () => {
    expect(checkAnswer('  Correct Answer  ', possibleAnswers)).toBe(true)
  })

  test('is case insensitive', () => {
    expect(checkAnswer('correct answer', possibleAnswers)).toBe(true)
  })

  test('returns true for close incorrect answer (Levenshtein distance <= 2)', () => {
    expect(checkAnswer('Corret Answe', possibleAnswers)).toBe(true)
  })

  test('returns false for incorrect answer (Levenshtein distance > 2)', () => {
    expect(checkAnswer('Wrong Answer', possibleAnswers)).toBe(false)
  })

  test('returns false for empty user answer when correct answer is not empty', () => {
    expect(checkAnswer('', possibleAnswers)).toBe(false)
  })

  test('handles empty user answer and empty correct answer', () => {
    expect(checkAnswer('', [''])).toBe(true)
  })
})
