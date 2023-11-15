import { FaPlus, FaServicestack, FaStackpath } from 'react-icons/fa'
import type { DeleteDeckMutationVariables, FindDecks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Deck/DecksCell'
import { timeTag, truncate } from 'src/lib/formatters'

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
    <>
      <div className="rw-segment rw-table-wrapper-responsive bg-sand drop-shadow-2xl">
        <table className="rw-table">
          <thead>
            <tr>
              <th className="!bg-transparent">Id</th>
              <th className="!bg-transparent">User id</th>
              <th className="!bg-transparent">Name</th>
              <th className="!bg-transparent">Description</th>
              <th className="!bg-transparent">Flashcards</th>
              <th className="!bg-transparent">Created at</th>
              <th className="!bg-transparent">Updated at</th>
              <th className="!bg-transparent">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {decks.map((deck) => (
              <tr key={deck.id}>
                <td className="!bg-transparent">{truncate(deck.id)}</td>
                <td className="!bg-transparent">{truncate(deck.userId)}</td>
                <td className="!bg-transparent">{truncate(deck.name)}</td>
                <td className="!bg-transparent">
                  {truncate(deck.description)}
                </td>
                <td className="!bg-transparent">
                  <span
                    title={deck.flashcards?.length.toString()}
                    className="rounded-full bg-blue-500 px-2 text-white"
                  >
                    {truncate(deck.flashcards?.length)}
                  </span>
                </td>
                <td className="!bg-transparent">{timeTag(deck.createdAt)}</td>
                <td className="!bg-transparent">{timeTag(deck.updatedAt)}</td>
                <td className="!bg-transparent">
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
      <Link
        to={routes.newDeck()}
        className="mt-5 inline-block rounded-lg bg-forest p-2 text-sand drop-shadow transition-colors hover:text-salmon"
      >
        <div className="flex flex-row items-center gap-2">
          <div>Add new deck</div>
          <FaPlus />
        </div>
      </Link>
    </>
  )
}

export default DecksList
