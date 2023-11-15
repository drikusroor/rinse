import type {
  DeleteStudySetMutationVariables,
  FindStudySets,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/StudySet/StudySetsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_STUDY_SET_MUTATION = gql`
  mutation DeleteStudySetMutation($id: Int!) {
    deleteStudySet(id: $id) {
      id
    }
  }
`

const StudySetsList = ({ studySets }: FindStudySets) => {
  const [deleteStudySet] = useMutation(DELETE_STUDY_SET_MUTATION, {
    onCompleted: () => {
      toast.success('StudySet deleted')
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

  const onDeleteClick = (id: DeleteStudySetMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete studySet ' + id + '?')) {
      deleteStudySet({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Deck id</th>
            <th>Name</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {studySets.map((studySet) => (
            <tr key={studySet.id}>
              <td>{truncate(studySet.id)}</td>
              <td>{truncate(studySet.deckId)}</td>
              <td>{truncate(studySet.name)}</td>
              <td>{timeTag(studySet.createdAt)}</td>
              <td>{timeTag(studySet.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.studySet({ id: studySet.id })}
                    title={'Show studySet ' + studySet.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStudySet({ id: studySet.id })}
                    title={'Edit studySet ' + studySet.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete studySet ' + studySet.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(studySet.id)}
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

export default StudySetsList
