import { CreatePlaySessionInput, Flashcard } from 'types/graphql'

import wait from 'src/lib/wait'
import { useBoundStore } from 'src/store'

import PlayFlashcard from '../PlayFlashcard/PlayFlashcard'
import PlayFlashcardsResults from '../PlayFlashcardsResults/PlayFlashcardsResults'
import PlayTextQuestion from '../PlayTextQuestion/PlayTextQuestion'

export interface PlayConfiguration {
  timeUntilNextFlashcard: number
  amountOfFlashcardsToPlay?: number
  firstFlashcardIndex?: boolean
  answerMode?: 'text' | 'manual'
  inverse?: boolean
}

export const DEFAULT_PLAY_CONFIGURATION: PlayConfiguration = {
  timeUntilNextFlashcard: 2000,
  answerMode: 'text',
  inverse: false,
}

type PlayFlashcardsProps = {
  playConfiguration?: PlayConfiguration
  flashcards: Flashcard[]
  onSavePlaySession?: (createPlaySessionInput: CreatePlaySessionInput) => void
}

const PlayFlashcards = (props: PlayFlashcardsProps) => {
  const { flashcards = [], onSavePlaySession } = props

  const { playSession, setPlaySession } = useBoundStore((state) => state)

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
  const [streak, setStreak] = React.useState(0)
  const [maxStreak, setMaxStreak] = React.useState(0)
  const [startTime] = React.useState(Date.now())
  const [timeElapsed, setTimeElapsed] = React.useState(0)

  const nextQuestion = () => {
    if (streak > maxStreak) {
      setMaxStreak(streak)
    }

    if (answerCount + 1 === amountOfFlashcardsToPlay) {
      const endTime = Date.now()
      const endedAt = new Date(endTime).toISOString()
      setTimeElapsed(endTime - startTime)

      setPlaySession({
        ...playSession,
        endedAt,
      })

      if (onSavePlaySession) {
        const createPlaySessionInput: CreatePlaySessionInput = {
          userId: playSession.userId,
          deckId: playSession.deckId,
          startedAt: playSession.startedAt,
          endedAt,
        }
        onSavePlaySession(createPlaySessionInput)
      }
    }

    setCurrentFlashcardIndex((currentFlashcardIndex + 1) % flashcards.length)
  }

  const onCorrect = async () => {
    setAnswerCount(answerCount + 1)
    setCorrectCount(correctCount + 1)
    setStreak(streak + 1)

    if (answerMode === 'text') {
      await wait(playConfiguration.timeUntilNextFlashcard)
    }
    nextQuestion()
  }

  const onIncorrect = async () => {
    setAnswerCount(answerCount + 1)
    setStreak(0)

    if (answerMode === 'text') {
      await wait(playConfiguration.timeUntilNextFlashcard)
    }
    nextQuestion()
  }

  if (answerCount === amountOfFlashcardsToPlay) {
    return (
      <PlayFlashcardsResults
        correctCount={correctCount}
        answerCount={answerCount}
        timeElapsed={timeElapsed}
        streak={maxStreak}
      />
    )
  }

  if (answerMode === 'manual') {
    return (
      <PlayFlashcard
        inverse={inverse}
        flashcard={flashcards[currentFlashcardIndex]}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />
    )
  }

  return (
    <PlayTextQuestion
      inverse={inverse}
      flashcard={flashcards[currentFlashcardIndex]}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
    />
  )
}

export default PlayFlashcards
