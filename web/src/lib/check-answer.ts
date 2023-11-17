import levenshtein from './levenshtein'

function trimAndLowercase(str: string) {
  return str.trim().toLowerCase()
}

export function checkAnswer(
  userAnswer: string,
  possibleAnswers: string[] = []
) {
  const trimmedUserAnswer = trimAndLowercase(userAnswer)

  possibleAnswers.map((answer) => {
    const trimmedAnswer = trimAndLowercase(answer)

    if (trimmedUserAnswer === trimmedAnswer) {
      return true
    }

    const distance = levenshtein(trimmedUserAnswer, trimmedAnswer)

    // levenshtein distance should be equal or lower than 2
    if (distance <= 2) {
      return true
    }
  })

  return false
}

export default checkAnswer
