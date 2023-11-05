import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DeckForm from 'src/components/Deck/DeckForm'

import type { CreateDeckInput } from 'types/graphql'

const CREATE_DECK_MUTATION = gql`
  mutation CreateDeckMutation($input: CreateDeckInput!) {
    createDeck(input: $input) {
      id
    }
  }
`

const NewDeck = () => {
  const [createDeck, { loading, error }] = useMutation(CREATE_DECK_MUTATION, {
    onCompleted: () => {
      toast.success('Deck created')
      navigate(routes.decks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateDeckInput) => {
    createDeck({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Deck</h2>
      </header>
      <div className="rw-segment-main">
        <DeckForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDeck
