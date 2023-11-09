import { useEffect } from 'react'

import { FaRecycle } from 'react-icons/fa'
import { Flashcard } from 'types/graphql'

import classNames from 'src/lib/class-names'

type PlayFlashcardProps = {
  index?: number
  flashcard: Flashcard
  onCorrect: () => void
  onIncorrect: () => void
  inverse?: boolean
}

const PlayFlashcard = ({
  flashcard,
  onCorrect,
  onIncorrect,
  inverse = false,
}: PlayFlashcardProps) => {
  const [flipped, setFlipped] = React.useState(false)

  useEffect(() => {
    setFlipped(false)
  }, [flashcard])

  const front = inverse ? flashcard.back : flashcard.front
  const back = inverse ? flashcard.front : flashcard.back

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-gradient-to-br from-sand to-salmon-light p-5 drop-shadow-lg">
      <h2
        className={classNames(
          'relative text-center',
          !flipped ? 'text-2xl font-bold' : 'text-sm text-gray-500'
        )}
      >
        {front}
        {flipped && (
          <div className="absolute left-1/2 top-full h-1/2 w-[1px] translate-x-1/2 bg-gray-500 text-xs"></div>
        )}
      </h2>

      {flipped && <h2 className="text-center text-2xl font-bold">{back}</h2>}

      {!flipped && (
        <button
          type="button"
          onClick={() => setFlipped(!flipped)}
          className="mx-auto mt-4 block rounded bg-forest px-4 py-2 text-center font-bold text-white transition-colors hover:bg-aqua"
        >
          <FaRecycle className="mr-2 inline-block" />
          Flip
        </button>
      )}

      {flipped && (
        <div className="mt-4 flex justify-center gap-2">
          <button
            className="rounded bg-green-600 px-4 py-2 font-bold text-white transition-colors hover:bg-green-700"
            onClick={onCorrect}
          >
            Correct
          </button>
          <button
            className="rounded bg-red-600 px-4 py-2 font-bold text-white transition-colors hover:bg-red-700"
            onClick={onIncorrect}
          >
            Incorrect
          </button>
        </div>
      )}
    </div>
  )
}

export default PlayFlashcard
