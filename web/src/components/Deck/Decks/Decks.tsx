import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Deck/DecksCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteDeckMutationVariables, FindDecks } from 'types/graphql'

const DELETE_DECK_MUTATION = gql`
  mutation DeleteDeckMutation($id: Int!) {
    deleteDeck(id: $id) {
      id
    }
  }
`

const DecksList = ({ decks }: FindDecks) => {
  const [deleteDeck] = useMutation(DELETE_DECK_MUTATION, {
    onCompleted: () => {
      toast.success('Deck deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteDeckMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete deck ' + id + '?')) {
      deleteDeck({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {decks.map((deck) => (
            <tr key={deck.id}>
              <td>{truncate(deck.id)}</td>
              <td>{truncate(deck.userId)}</td>
              <td>{truncate(deck.name)}</td>
              <td>{truncate(deck.description)}</td>
              <td>{timeTag(deck.createdAt)}</td>
              <td>{timeTag(deck.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.deck({ id: deck.id })}
                    title={'Show deck ' + deck.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDeck({ id: deck.id })}
                    title={'Edit deck ' + deck.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete deck ' + deck.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(deck.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DecksList
