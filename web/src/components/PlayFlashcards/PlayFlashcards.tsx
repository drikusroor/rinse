import { Flashcard } from 'types/graphql'

import wait from 'src/lib/wait'

import PlayFlashcard from '../PlayFlashcard/PlayFlashcard'
import PlayFlashcardsResults from '../PlayFlashcardsResults/PlayFlashcardsResults'

interface PlayConfiguration {
  timeUntilNextFlashcard: number
  amountOfFlashcardsToPlay?: number
  firstFlashcardIndex?: boolean
  answerMode?: 'text' | 'manual'
  inverse?: boolean
}

const DEFAULT_PLAY_CONFIGURATION: PlayConfiguration = {
  timeUntilNextFlashcard: 2000,
  answerMode: 'manual',
  inverse: false,
}

type PlayFlashcardsProps = {
  playConfiguration?: PlayConfiguration
  flashcards: Flashcard[]
}

const PlayFlashcards = (props: PlayFlashcardsProps) => {
  const { flashcards = [] } = props

  const playConfiguration = {
    amountOfFlashcardsToPlay: flashcards.length,
    ...DEFAULT_PLAY_CONFIGURATION,
    ...props.playConfiguration,
  }

  const { answerMode, amountOfFlashcardsToPlay, firstFlashcardIndex, inverse } =
    playConfiguration

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = React.useState(
    firstFlashcardIndex ? 0 : Math.floor(Math.random() * flashcards.length)
  )
  const [answerCount, setAnswerCount] = React.useState(0)
  const [correctCount, setCorrectCount] = React.useState(0)
  const [startTime, setStartTime] = React.useState(Date.now())
  const [endTime, setEndTime] = React.useState(Date.now())
  const [timeElapsed, setTimeElapsed] = React.useState(0)

  const nextQuestion = () => {
    if (answerCount + 1 === amountOfFlashcardsToPlay) {
      setEndTime(Date.now())
      setTimeElapsed(endTime - startTime)
    }

    setCurrentFlashcardIndex((currentFlashcardIndex + 1) % flashcards.length)
  }

  const onCorrect = async () => {
    setAnswerCount(answerCount + 1)
    setCorrectCount(correctCount + 1)

    if (answerMode === 'text') {
      await wait(playConfiguration.timeUntilNextFlashcard)
    }
    nextQuestion()
  }

  const onIncorrect = async () => {
    setAnswerCount(answerCount + 1)

    if (answerMode === 'text') {
      await wait(playConfiguration.timeUntilNextFlashcard)
    }
    nextQuestion()
  }

  return answerCount < amountOfFlashcardsToPlay ? (
    <PlayFlashcard
      inverse={inverse}
      flashcard={flashcards[currentFlashcardIndex]}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
    />
  ) : (
    <PlayFlashcardsResults
      correctCount={correctCount}
      answerCount={answerCount}
      timeElapsed={timeElapsed}
    />
  )
}

export default PlayFlashcards
