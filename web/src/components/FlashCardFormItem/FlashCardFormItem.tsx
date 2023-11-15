import { FaTrash } from 'react-icons/fa'
import type { Flashcard } from 'types/graphql'

type FlashCardFormItemProps = {
  flashcard: Partial<Flashcard>
  index: number
  onDelete: (index: number) => void
}

const FlashCardFormItem = ({
  flashcard,
  index,
  onDelete,
}: FlashCardFormItemProps) => {
  return (
    <div className="group relative min-w-[120px] rounded-lg border bg-amber-500 p-3">
      <h3 className="rounded-lg border bg-amber-400 p-3">
        {flashcard?.front.map((front) => (
          <div key={front}>{front}</div>
        ))}
      </h3>
      <h3 className="mt-3 rounded-lg border bg-amber-400 p-3">
        {flashcard?.back.map((back) => (
          <div key={back}>{back}</div>
        ))}
      </h3>
      <button
        className="absolute right-0 top-0 p-2 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() => onDelete(index)}
      >
        <FaTrash className="text-amber-100 hover:text-amber-300" />
      </button>
    </div>
  )
}

export default FlashCardFormItem
