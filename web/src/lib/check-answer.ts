import levenshtein from './levenshtein'

function trimAndLowercase(str: string) {
  return str.trim().toLowerCase()
}

export function checkAnswer(
  userAnswer: string,
  possibleAnswers: string[] = [],
  allowedDistance = 2
) {
  const trimmedUserAnswer = trimAndLowercase(userAnswer)

  return possibleAnswers.some((answer) => {
    const trimmedAnswer = trimAndLowercase(answer)

    if (trimmedUserAnswer === trimmedAnswer) {
      return true
    }

    const distance = levenshtein(trimmedUserAnswer, trimmedAnswer)

    // levenshtein distance should be equal or lower than x (default 2)
    return distance <= allowedDistance
  })
}

export default checkAnswer
