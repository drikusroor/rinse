import type { EditStudySetById, UpdateStudySetInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStudySet = NonNullable<EditStudySetById['studySet']>

interface StudySetFormProps {
  studySet?: EditStudySetById['studySet']
  onSave: (data: UpdateStudySetInput, id?: FormStudySet['id']) => void
  error: RWGqlError
  loading: boolean
}

const StudySetForm = (props: StudySetFormProps) => {
  const onSubmit = (data: FormStudySet) => {
    props.onSave(data, props?.studySet?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStudySet> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.studySet?.deckId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="deckId" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.studySet?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StudySetForm
