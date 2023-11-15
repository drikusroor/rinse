import type {
  DeleteFlashcardMutationVariables,
  FindFlashcardById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_FLASHCARD_MUTATION = gql`
  mutation DeleteFlashcardMutation($id: Int!) {
    deleteFlashcard(id: $id) {
      id
    }
  }
`

interface Props {
  flashcard: NonNullable<FindFlashcardById['flashcard']>
}

const Flashcard = ({ flashcard }: Props) => {
  const [deleteFlashcard] = useMutation(DELETE_FLASHCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Flashcard deleted')
      navigate(routes.flashcards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteFlashcardMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete flashcard ' + id + '?')) {
      deleteFlashcard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Flashcard {flashcard.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{flashcard.id}</td>
            </tr>
            <tr>
              <th>Deck id</th>
              <td>{flashcard.deckId}</td>
            </tr>
            <tr>
              <th>Front</th>
              <td>{flashcard.front}</td>
            </tr>
            <tr>
              <th>Back</th>
              <td>{flashcard.back}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(flashcard.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(flashcard.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFlashcard({ id: flashcard.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(flashcard.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Flashcard
