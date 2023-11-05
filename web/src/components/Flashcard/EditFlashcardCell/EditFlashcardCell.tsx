import type { EditFlashcardById, UpdateFlashcardInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FlashcardForm from 'src/components/Flashcard/FlashcardForm'

export const QUERY = gql`
  query EditFlashcardById($id: Int!) {
    flashcard: flashcard(id: $id) {
      id
      deckId
      front
      back
      createdAt
      updatedAt
    }
  }
`
const UPDATE_FLASHCARD_MUTATION = gql`
  mutation UpdateFlashcardMutation($id: Int!, $input: UpdateFlashcardInput!) {
    updateFlashcard(id: $id, input: $input) {
      id
      deckId
      front
      back
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ flashcard }: CellSuccessProps<EditFlashcardById>) => {
  const [updateFlashcard, { loading, error }] = useMutation(
    UPDATE_FLASHCARD_MUTATION,
    {
      onCompleted: () => {
        toast.success('Flashcard updated')
        navigate(routes.flashcards())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateFlashcardInput,
    id: EditFlashcardById['flashcard']['id']
  ) => {
    updateFlashcard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Flashcard {flashcard?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FlashcardForm
          flashcard={flashcard}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
