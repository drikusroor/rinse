import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditPlayConfigurationById,
  UpdatePlayConfigurationInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPlayConfiguration = NonNullable<
  EditPlayConfigurationById['playConfiguration']
>

interface PlayConfigurationFormProps {
  playConfiguration?: EditPlayConfigurationById['playConfiguration']
  onSave: (
    data: UpdatePlayConfigurationInput,
    id?: FormPlayConfiguration['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const PlayConfigurationForm = (props: PlayConfigurationFormProps) => {
  const onSubmit = (data: FormPlayConfiguration) => {
    props.onSave(data, props?.playConfiguration?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPlayConfiguration> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.playConfiguration?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
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
          defaultValue={props.playConfiguration?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="timeUntilNextFlashcard"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Time until next flashcard
        </Label>

        <NumberField
          name="timeUntilNextFlashcard"
          defaultValue={props.playConfiguration?.timeUntilNextFlashcard}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="timeUntilNextFlashcard" className="rw-field-error" />

        <Label
          name="amountOfFlashcards"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Amount of flashcards
        </Label>

        <NumberField
          name="amountOfFlashcards"
          defaultValue={props.playConfiguration?.amountOfFlashcards}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="amountOfFlashcards" className="rw-field-error" />

        <Label
          name="firstFlashcardIndex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First flashcard index
        </Label>

        <CheckboxField
          name="firstFlashcardIndex"
          defaultChecked={props.playConfiguration?.firstFlashcardIndex}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="firstFlashcardIndex" className="rw-field-error" />

        <Label
          name="answerMode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answer mode
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="playConfiguration-answerMode-0"
            name="answerMode"
            defaultValue="Manual"
            defaultChecked={props.playConfiguration?.answerMode?.includes(
              'Manual'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Manual</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="playConfiguration-answerMode-1"
            name="answerMode"
            defaultValue="Text"
            defaultChecked={props.playConfiguration?.answerMode?.includes(
              'Text'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Text</div>
        </div>

        <FieldError name="answerMode" className="rw-field-error" />

        <Label
          name="inverse"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Inverse
        </Label>

        <CheckboxField
          name="inverse"
          defaultChecked={props.playConfiguration?.inverse}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="inverse" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlayConfigurationForm
