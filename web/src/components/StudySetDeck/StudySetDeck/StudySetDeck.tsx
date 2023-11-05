import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteStudySetDeckMutationVariables,
  FindStudySetDeckById,
} from 'types/graphql'

const DELETE_STUDY_SET_DECK_MUTATION = gql`
  mutation DeleteStudySetDeckMutation($id: Int!) {
    deleteStudySetDeck(id: $id) {
      id
    }
  }
`

interface Props {
  studySetDeck: NonNullable<FindStudySetDeckById['studySetDeck']>
}

const StudySetDeck = ({ studySetDeck }: Props) => {
  const [deleteStudySetDeck] = useMutation(DELETE_STUDY_SET_DECK_MUTATION, {
    onCompleted: () => {
      toast.success('StudySetDeck deleted')
      navigate(routes.studySetDecks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStudySetDeckMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete studySetDeck ' + id + '?')) {
      deleteStudySetDeck({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StudySetDeck {studySetDeck.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{studySetDeck.id}</td>
            </tr>
            <tr>
              <th>Study set id</th>
              <td>{studySetDeck.studySetId}</td>
            </tr>
            <tr>
              <th>Deck id</th>
              <td>{studySetDeck.deckId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(studySetDeck.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(studySetDeck.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudySetDeck({ id: studySetDeck.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(studySetDeck.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StudySetDeck
