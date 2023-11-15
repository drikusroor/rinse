import type {
  DeleteFlashcardMutationVariables,
  FindFlashcards,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Flashcard/FlashcardsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_FLASHCARD_MUTATION = gql`
  mutation DeleteFlashcardMutation($id: Int!) {
    deleteFlashcard(id: $id) {
      id
    }
  }
`

const FlashcardsList = ({ flashcards }: FindFlashcards) => {
  const [deleteFlashcard] = useMutation(DELETE_FLASHCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Flashcard deleted')
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

  const onDeleteClick = (id: DeleteFlashcardMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete flashcard ' + id + '?')) {
      deleteFlashcard({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Deck id</th>
            <th>Front</th>
            <th>Back</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {flashcards.map((flashcard) => (
            <tr key={flashcard.id}>
              <td>{truncate(flashcard.id)}</td>
              <td>{truncate(flashcard.deckId)}</td>
              <td>{truncate(flashcard.front)}</td>
              <td>{truncate(flashcard.back)}</td>
              <td>{timeTag(flashcard.createdAt)}</td>
              <td>{timeTag(flashcard.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.flashcard({ id: flashcard.id })}
                    title={'Show flashcard ' + flashcard.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFlashcard({ id: flashcard.id })}
                    title={'Edit flashcard ' + flashcard.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete flashcard ' + flashcard.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(flashcard.id)}
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

export default FlashcardsList
