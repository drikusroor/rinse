import type { EditDeckById, UpdateDeckInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import FlashcardFormInputs from 'src/components/DeckFlashcardForm/DeckFlashcardForm'
import FlashCardFormItem from 'src/components/FlashCardFormItem/FlashCardFormItem'

type FormDeck = NonNullable<EditDeckById['deck']>

interface DeckFormProps {
  deck?: EditDeckById['deck']
  onSave: (data: UpdateDeckInput, id?: FormDeck['id']) => void
  error: RWGqlError
  loading: boolean
}

const DeckForm = (props: DeckFormProps) => {
  const [flashcards, setFlashcards] = React.useState<FormDeck['flashcards']>(
    props.deck?.flashcards || []
  )

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
    const { name, description } = data

    const inputData = {
      name,
      description,
      flashcards: flashcards.map((flashcard) => ({
        id: flashcard.id,
        front: flashcard.front,
        back: flashcard.back,
      })),
    }

    props.onSave(inputData, props?.deck?.id)
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

        <div className="mt-5 rounded-lg border bg-gray-200 p-5">
          <h3 className="mt-5 text-xl font-bold">Flashcards</h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {flashcards.map((flashcard, index) => (
              <FlashCardFormItem
                key={index}
                flashcard={flashcard}
                setFlashcards={setFlashcards}
              />
            ))}
          </div>

          <FlashcardFormInputs
            onSave={onAddFlashCard}
            error={null}
            loading={false}
          />
        </div>

        <div className="mt-5">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue mx-auto"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DeckForm
