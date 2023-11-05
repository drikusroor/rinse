import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditFlashcardById, UpdateFlashcardInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormFlashcard = NonNullable<EditFlashcardById['flashcard']>

interface FlashcardFormProps {
  flashcard?: EditFlashcardById['flashcard']
  onSave: (data: UpdateFlashcardInput, id?: FormFlashcard['id']) => void
  error: RWGqlError
  loading: boolean
}

const FlashcardForm = (props: FlashcardFormProps) => {
  const onSubmit = (data: FormFlashcard) => {
    props.onSave(data, props?.flashcard?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormFlashcard> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="deckId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deck id
        </Label>

        <NumberField
          name="deckId"
          defaultValue={props.flashcard?.deckId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="deckId" className="rw-field-error" />

        <Label
          name="front"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Front
        </Label>

        <TextField
          name="front"
          defaultValue={props.flashcard?.front}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
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
          defaultValue={props.flashcard?.back}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="back" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FlashcardForm
