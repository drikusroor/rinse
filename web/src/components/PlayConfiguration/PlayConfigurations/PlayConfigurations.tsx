import type {
  DeletePlayConfigurationMutationVariables,
  FindPlayConfigurations,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PlayConfiguration/PlayConfigurationsCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

const DELETE_PLAY_CONFIGURATION_MUTATION = gql`
  mutation DeletePlayConfigurationMutation($id: Int!) {
    deletePlayConfiguration(id: $id) {
      id
    }
  }
`

const PlayConfigurationsList = ({
  playConfigurations,
}: FindPlayConfigurations) => {
  const [deletePlayConfiguration] = useMutation(
    DELETE_PLAY_CONFIGURATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlayConfiguration deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (
    id: DeletePlayConfigurationMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete playConfiguration ' + id + '?')
    ) {
      deletePlayConfiguration({ variables: { id } })
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
            <th>Created at</th>
            <th>Updated at</th>
            <th>Time until next flashcard</th>
            <th>Amount of flashcards</th>
            <th>First flashcard index</th>
            <th>Answer mode</th>
            <th>Inverse</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {playConfigurations.map((playConfiguration) => (
            <tr key={playConfiguration.id}>
              <td>{truncate(playConfiguration.id)}</td>
              <td>{truncate(playConfiguration.userId)}</td>
              <td>{truncate(playConfiguration.name)}</td>
              <td>{timeTag(playConfiguration.createdAt)}</td>
              <td>{timeTag(playConfiguration.updatedAt)}</td>
              <td>{truncate(playConfiguration.timeUntilNextFlashcard)}</td>
              <td>{truncate(playConfiguration.amountOfFlashcards)}</td>
              <td>{checkboxInputTag(playConfiguration.firstFlashcardIndex)}</td>
              <td>{formatEnum(playConfiguration.answerMode)}</td>
              <td>{checkboxInputTag(playConfiguration.inverse)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.playConfiguration({ id: playConfiguration.id })}
                    title={
                      'Show playConfiguration ' +
                      playConfiguration.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlayConfiguration({
                      id: playConfiguration.id,
                    })}
                    title={'Edit playConfiguration ' + playConfiguration.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete playConfiguration ' + playConfiguration.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(playConfiguration.id)}
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

export default PlayConfigurationsList
