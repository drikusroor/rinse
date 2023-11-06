type FlashCardFormItemProps = {
  flashcard?: FlashCard
}

const FlashCardFormItem = ({ flashcard }: FlashCardFormItemProps) => {
  return (
    <div className="bg-amber-500 p-3 mt-3 border rounded-lg">
      <h3 className="bg-amber-400 p-3 border rounded-lg">
        {flashcard?.front}
        </h3>
      <h3 className="bg-amber-400 p-3 mt-3 border rounded-lg">
        {flashcard?.back}
        </h3>
    </div>
  )
}

export default FlashCardFormItem
