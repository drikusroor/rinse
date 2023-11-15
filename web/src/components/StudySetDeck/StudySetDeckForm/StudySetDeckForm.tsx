import type {
  EditStudySetDeckById,
  UpdateStudySetDeckInput,
} from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStudySetDeck = NonNullable<EditStudySetDeckById['studySetDeck']>

interface StudySetDeckFormProps {
  studySetDeck?: EditStudySetDeckById['studySetDeck']
  onSave: (data: UpdateStudySetDeckInput, id?: FormStudySetDeck['id']) => void
  error: RWGqlError
  loading: boolean
}

const StudySetDeckForm = (props: StudySetDeckFormProps) => {
  const onSubmit = (data: FormStudySetDeck) => {
    props.onSave(data, props?.studySetDeck?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStudySetDeck> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="studySetId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Study set id
        </Label>

        <NumberField
          name="studySetId"
          defaultValue={props.studySetDeck?.studySetId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="studySetId" className="rw-field-error" />

        <Label
          name="deckId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deck id
        </Label>

        <NumberField
          name="deckId"
          defaultValue={props.studySetDeck?.deckId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="deckId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StudySetDeckForm
