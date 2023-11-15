import { FaPlusSquare } from 'react-icons/fa'
import { CreateFlashcardInput, Flashcard } from 'types/graphql'

import {
  Label,
  TextField,
  FieldError,
  Form,
  RWGqlError,
} from '@redwoodjs/forms'

type FlashcardFormProps = {
  flashcard?: Flashcard
  onSave: (data: Flashcard) => void
  error: RWGqlError
  loading: boolean
}

const mapFlashcardToForm = (flashcard: Flashcard) => {
  return {
    front: flashcard.front.join(';'),
    back: flashcard.back.join(';'),
  }
}

const DeckFlashcardForm = ({ flashcard, onSave }: FlashcardFormProps) => {
  const [state, setState] = React.useState<{ front: string; back: string }>(
    flashcard
      ? mapFlashcardToForm(flashcard)
      : {
          front: '',
          back: '',
        }
  )

  const onSubmit = (data) => {
    // clear form
    setState({
      front: '',
      back: '',
    })

    const flashcardData: Pick<CreateFlashcardInput, 'front' | 'back'> = {
      front: data.front.split(';'),
      back: data.back.split(';'),
    }

    onSave(flashcardData)
  }

  return (
    <Form
      onSubmit={onSubmit}
      className="w-48 rounded-lg border bg-amber-500 p-3"
    >
      <Label
        name="front"
        className="rw-label sr-only"
        errorClassName="rw-label rw-label-error"
      >
        Front
      </Label>

      <TextField
        name="front"
        placeholder="Front"
        defaultValue={flashcard?.front}
        className="rw-input m-0 rounded-lg border bg-amber-50 p-3"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
        value={state.front}
        onChange={(e) => setState({ ...state, front: e.target.value })}
      />

      <FieldError name="front" className="rw-field-error" />

      <Label
        name="back"
        className="rw-label sr-only"
        errorClassName="rw-label rw-label-error"
      >
        Back
      </Label>

      <TextField
        name="back"
        placeholder="Back"
        defaultValue={flashcard?.back}
        className="rw-input m-0 mt-3 rounded-lg border bg-amber-50 p-3"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
        value={state.back}
        onChange={(e) => setState({ ...state, back: e.target.value })}
      />

      <FieldError name="back" className="rw-field-error" />

      <button className="rw-button rw-button-blue mt-3 inline-flex w-full items-center gap-2 rounded-lg p-3 text-base">
        <FaPlusSquare />
        Add
      </button>
    </Form>
  )
}

export default DeckFlashcardForm
