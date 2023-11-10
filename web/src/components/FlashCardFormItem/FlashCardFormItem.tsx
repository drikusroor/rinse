import type { Flashcard } from 'types/graphql'

type FlashCardFormItemProps = {
  flashcard?: Flashcard
}

const FlashCardFormItem = ({ flashcard }: FlashCardFormItemProps) => {
  return (
    <div className="mt-3 rounded-lg border bg-amber-500 p-3">
      <h3 className="rounded-lg border bg-amber-400 p-3">{flashcard?.front}</h3>
      <h3 className="mt-3 rounded-lg border bg-amber-400 p-3">
        {flashcard?.back}
      </h3>
    </div>
  )
}

export default FlashCardFormItem
