import type { Flashcard } from 'types/graphql'

type FlashCardFormItemProps = {
  flashcard?: Partial<Flashcard>
}

const FlashCardFormItem = ({ flashcard }: FlashCardFormItemProps) => {
  return (
    <div className="min-w-[120px] rounded-lg border bg-amber-500 p-3">
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
    </div>
  )
}

export default FlashCardFormItem
