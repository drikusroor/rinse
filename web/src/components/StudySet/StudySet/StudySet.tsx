import type {
  DeleteStudySetMutationVariables,
  FindStudySetById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_STUDY_SET_MUTATION = gql`
  mutation DeleteStudySetMutation($id: Int!) {
    deleteStudySet(id: $id) {
      id
    }
  }
`

interface Props {
  studySet: NonNullable<FindStudySetById['studySet']>
}

const StudySet = ({ studySet }: Props) => {
  const [deleteStudySet] = useMutation(DELETE_STUDY_SET_MUTATION, {
    onCompleted: () => {
      toast.success('StudySet deleted')
      navigate(routes.studySets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStudySetMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete studySet ' + id + '?')) {
      deleteStudySet({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StudySet {studySet.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{studySet.id}</td>
            </tr>
            <tr>
              <th>Deck id</th>
              <td>{studySet.deckId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{studySet.name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(studySet.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(studySet.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudySet({ id: studySet.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(studySet.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StudySet
