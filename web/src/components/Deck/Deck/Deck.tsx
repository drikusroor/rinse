import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type { DeleteDeckMutationVariables, FindDeckById } from 'types/graphql'

const DELETE_DECK_MUTATION = gql`
  mutation DeleteDeckMutation($id: Int!) {
    deleteDeck(id: $id) {
      id
    }
  }
`

interface Props {
  deck: NonNullable<FindDeckById['deck']>
}

const Deck = ({ deck }: Props) => {
  const [deleteDeck] = useMutation(DELETE_DECK_MUTATION, {
    onCompleted: () => {
      toast.success('Deck deleted')
      navigate(routes.decks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteDeckMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete deck ' + id + '?')) {
      deleteDeck({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Deck {deck.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{deck.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{deck.userId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{deck.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{deck.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(deck.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(deck.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDeck({ id: deck.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(deck.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Deck
