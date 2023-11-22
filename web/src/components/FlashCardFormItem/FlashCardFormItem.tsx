import { useState } from 'react'

import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import type { Flashcard } from 'types/graphql'

import Modal from '../Modal/Modal'

type FlashCardFormItemProps = {
  flashcard: Partial<Flashcard>
  index: number
  onDelete: (index: number) => void
  onSave: (index: number, flashcard: Partial<Flashcard>) => void
}

const FlashCardFormItem = ({
  flashcard,
  index,
  onDelete,
  onSave,
}: FlashCardFormItemProps) => {
  const formRef = React.useRef<HTMLFormElement>(null)

  const [modalOpen, setModalOpen] = useState(false)

  const [updateFlashcardFormData, setUpdateFlashcardFormData] = useState({
    front: flashcard?.front || [''],
    back: flashcard?.back || [''],
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSave(index, updateFlashcardFormData)
    setModalOpen(false)
  }

  return (
    <div className="group relative break-inside-avoid rounded-lg border bg-amber-500 p-3">
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
      <div className="absolute right-0 top-0 flex flex-row items-center gap-2 p-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button className="" onClick={() => setModalOpen(true)}>
          <FaPencilAlt className="text-amber-100 hover:text-amber-300" />
        </button>
        <button className="" onClick={() => onDelete(index)}>
          <FaTrash className="text-amber-100 hover:text-amber-300" />
        </button>
      </div>
      <Modal
        isOpen={modalOpen}
        title="Edit Flashcard"
        hideCloseButton={true}
        onCancel={() => setModalOpen(false)}
      >
        <form
          className="mt-3 flex flex-col gap-3"
          onSubmit={onSubmit}
          ref={formRef}
        >
          <div className="flex flex-col gap-1">
            <label className="" htmlFor="front">
              Front
            </label>
            <input
              name="front"
              className="rounded-lg border p-3"
              defaultValue={flashcard?.front.join('\n')}
              onChange={(e) => {
                const front = e.target.value.split('\n')
                setUpdateFlashcardFormData({
                  ...updateFlashcardFormData,
                  front,
                })
              }}
              placeholder="Front of the flashcard"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="" htmlFor="back">
              Back
            </label>
            <input
              name="back"
              className="rounded-lg border p-3"
              defaultValue={flashcard?.back.join('\n')}
              onChange={(e) => {
                const back = e.target.value.split('\n')
                setUpdateFlashcardFormData({ ...updateFlashcardFormData, back })
              }}
              placeholder="Back of the flashcard"
              type="text"
            />
          </div>

          <div className="flex flex-row justify-end gap-2">
            <button
              className="rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default FlashCardFormItem
