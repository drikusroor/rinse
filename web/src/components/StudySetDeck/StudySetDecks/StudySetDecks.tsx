import type {
  DeleteStudySetDeckMutationVariables,
  FindStudySetDecks,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/StudySetDeck/StudySetDecksCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_STUDY_SET_DECK_MUTATION = gql`
  mutation DeleteStudySetDeckMutation($id: Int!) {
    deleteStudySetDeck(id: $id) {
      id
    }
  }
`

const StudySetDecksList = ({ studySetDecks }: FindStudySetDecks) => {
  const [deleteStudySetDeck] = useMutation(DELETE_STUDY_SET_DECK_MUTATION, {
    onCompleted: () => {
      toast.success('StudySetDeck deleted')
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

  const onDeleteClick = (id: DeleteStudySetDeckMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete studySetDeck ' + id + '?')) {
      deleteStudySetDeck({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Study set id</th>
            <th>Deck id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {studySetDecks.map((studySetDeck) => (
            <tr key={studySetDeck.id}>
              <td>{truncate(studySetDeck.id)}</td>
              <td>{truncate(studySetDeck.studySetId)}</td>
              <td>{truncate(studySetDeck.deckId)}</td>
              <td>{timeTag(studySetDeck.createdAt)}</td>
              <td>{timeTag(studySetDeck.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.studySetDeck({ id: studySetDeck.id })}
                    title={'Show studySetDeck ' + studySetDeck.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStudySetDeck({ id: studySetDeck.id })}
                    title={'Edit studySetDeck ' + studySetDeck.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete studySetDeck ' + studySetDeck.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(studySetDeck.id)}
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

export default StudySetDecksList
