import { Flashcard } from 'types/graphql'

import wait from 'src/lib/wait'

import PlayFlashcard from '../PlayFlashcard/PlayFlashcard'

interface PlayConfiguration {
  timeUntilNextFlashcard: number
  amountOfFlashcards?: number
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
  playConfiguration: PlayConfiguration
  flashcards: Flashcard[]
}

const PlayFlashcards = (props: PlayFlashcardsProps) => {
  const { flashcards = [] } = props

  const playConfiguration = {
    ...DEFAULT_PLAY_CONFIGURATION,
    ...props.playConfiguration,
  }

  const { answerMode, firstFlashcardIndex, inverse } = playConfiguration

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = React.useState(
    firstFlashcardIndex ? 0 : Math.floor(Math.random() * flashcards.length)
  )

  const onCorrect = async () => {
    if (answerMode === 'text') {
      await wait(playConfiguration.timeUntilNextFlashcard)
    }
    setCurrentFlashcardIndex((currentFlashcardIndex + 1) % flashcards.length)
  }

  const onIncorrect = async () => {
    if (answerMode === 'text') {
      await wait(playConfiguration.timeUntilNextFlashcard)
    }
    setCurrentFlashcardIndex((currentFlashcardIndex + 1) % flashcards.length)
  }

  return (
    <PlayFlashcard
      inverse={inverse}
      flashcard={flashcards[currentFlashcardIndex]}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
    />
  )
}

export default PlayFlashcards
