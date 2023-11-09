import { Flashcard } from 'types/graphql'

import PlayFlashcard from '../PlayFlashcard/PlayFlashcard'

interface PlayConfiguration {
  timeUntilNextFlashcard: number
  amountOfFlashcards?: number
  firstFlashcardIndex?: boolean
}

const DEFAULT_PLAY_CONFIGURATION: PlayConfiguration = {
  timeUntilNextFlashcard: 2000,
}

type PlayFlashcardsProps = {
  playConfiguration: PlayConfiguration
  flashcards: Flashcard[]
}

const PlayFlashcards = ({
  playConfiguration = DEFAULT_PLAY_CONFIGURATION,
  flashcards,
}: PlayFlashcardsProps) => {
  const { firstFlashcardIndex } = playConfiguration

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = React.useState(
    firstFlashcardIndex ? 0 : Math.floor(Math.random() * flashcards.length)
  )

  const onCorrect = () => {
    setCurrentFlashcardIndex((currentFlashcardIndex + 1) % flashcards.length)
  }

  const onIncorrect = () => {
    setCurrentFlashcardIndex((currentFlashcardIndex + 1) % flashcards.length)
  }

  return (
    <PlayFlashcard
      flashcard={flashcards[currentFlashcardIndex]}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
    />
  )
}

export default PlayFlashcards
