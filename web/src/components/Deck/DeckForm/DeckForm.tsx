import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditDeckById, UpdateDeckInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormDeck = NonNullable<EditDeckById['deck']>

interface DeckFormProps {
  deck?: EditDeckById['deck']
  onSave: (data: UpdateDeckInput, id?: FormDeck['id']) => void
  error: RWGqlError
  loading: boolean
}

const DeckForm = (props: DeckFormProps) => {
  const onSubmit = (data: FormDeck) => {
    props.onSave(data, props?.deck?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormDeck> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.deck?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.deck?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DeckForm
