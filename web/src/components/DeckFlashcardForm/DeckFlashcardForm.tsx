import {
  Label,
  TextField,
  FieldError,
  ButtonField,
  Form,
} from '@redwoodjs/forms'

type FlashcardFormProps = {
  flashcard?: Flashcard
  onSave: (data: Flashcard) => void
  error: any
  loading: boolean
}

const DeckFlashcardForm = ({
  flashcard,
  onSave,
  error,
  loading,
}: FlashcardFormProps) => {
  const [state, setState] = React.useState<FlashcardFormProps>(
    flashcard || {
      front: '',
      back: '',
    }
  )

  return (
    <Form onSubmit={onSave}>
      <Label
        name="front"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Front
      </Label>

      <TextField
        name="front"
        defaultValue={flashcard?.front}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
        onChange={(e) => setState({ ...state, front: e.target.value })}
      />

      <FieldError name="front" className="rw-field-error" />

      <Label
        name="back"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Back
      </Label>

      <TextField
        name="back"
        defaultValue={flashcard?.back}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
        onChange={(e) => setState({ ...state, back: e.target.value })}
      />

      <FieldError name="back" className="rw-field-error" />

      <button className="rw-button rw-button-blue my-3">Add flashcard</button>
    </Form>
  )
}

export default DeckFlashcardForm
