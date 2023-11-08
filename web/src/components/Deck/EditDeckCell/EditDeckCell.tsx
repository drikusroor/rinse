import type { EditDeckById, UpdateUserDeckInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DeckForm from 'src/components/Deck/DeckForm'

export const QUERY = gql`
  query EditDeckById($id: Int!) {
    deck: deck(id: $id) {
      id
      userId
      name
      description
      createdAt
      updatedAt
      flashcards {
        id
        front
        back
        createdAt
        updatedAt
      }
    }
  }
`
const UPDATE_USER_DECK_MUTATION = gql`
  mutation UpdateUserDeckMutation($id: Int!, $input: UpdateUserDeckInput!) {
    updateUserDeck(id: $id, input: $input) {
      id
      userId
      name
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ deck }: CellSuccessProps<EditDeckById>) => {
  const [updateDeck, { loading, error }] = useMutation(
    UPDATE_USER_DECK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Deck updated')
        navigate(routes.decks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: [{ query: QUERY }],
    }
  )

  const onSave = (
    input: UpdateUserDeckInput,
    id: EditDeckById['deck']['id']
  ) => {
    updateDeck({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Deck {deck?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DeckForm deck={deck} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
