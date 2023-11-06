import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
  ButtonField,
} from '@redwoodjs/forms'

import type { EditDeckById, UpdateDeckInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'
import FlashCardFormItem from 'src/components/FlashCardFormItem/FlashCardFormItem'
import FlashcardForm from 'src/components/Flashcard/FlashcardForm/FlashcardForm'
import FlashcardFormInputs from 'src/components/DeckFlashcardForm/DeckFlashcardForm'

type FormDeck = NonNullable<EditDeckById['deck']>

interface DeckFormProps {
  deck?: EditDeckById['deck']
  onSave: (data: UpdateDeckInput, id?: FormDeck['id']) => void
  error: RWGqlError
  loading: boolean
}

const DeckForm = (props: DeckFormProps) => {

  const [flashcards, setFlashcards] = React.useState<FormDeck['flashcards']>(props.deck?.flashcards || [])

  const onAddFlashCard = (data) => {

    const flashcard = {
      ...data,
    }

    const deckId = props.deck?.id

    if (deckId) {
      flashcard.deckId = deckId
    }

    setFlashcards([...flashcards, data])
  }

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

        <div className="bg-gray-200 p-5 mt-5 border rounded-lg">

          <h3 className="text-xl font-bold mt-5">
            Flashcards
          </h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {flashcards.map((flashcard, index) => (
              <FlashCardFormItem key={index} flashcard={flashcard} setFlashcards={setFlashcards} />
            ))}
          </div>

          <FlashcardFormInputs onSave={onAddFlashCard} error={null} loading={false} />

        </div>

        <div className="mt-5">
          <Submit disabled={props.loading} className="rw-button rw-button-blue mx-auto">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DeckForm
