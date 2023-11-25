import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeletePlayConfigurationMutationVariables,
  FindPlayConfigurationById,
} from 'types/graphql'

const DELETE_PLAY_CONFIGURATION_MUTATION = gql`
  mutation DeletePlayConfigurationMutation($id: Int!) {
    deletePlayConfiguration(id: $id) {
      id
    }
  }
`

interface Props {
  playConfiguration: NonNullable<FindPlayConfigurationById['playConfiguration']>
}

const PlayConfiguration = ({ playConfiguration }: Props) => {
  const [deletePlayConfiguration] = useMutation(
    DELETE_PLAY_CONFIGURATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlayConfiguration deleted')
        navigate(routes.playConfigurations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PlayConfiguration {playConfiguration.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{playConfiguration.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{playConfiguration.userId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{playConfiguration.name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(playConfiguration.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(playConfiguration.updatedAt)}</td>
            </tr>
            <tr>
              <th>Time until next flashcard</th>
              <td>{playConfiguration.timeUntilNextFlashcard}</td>
            </tr>
            <tr>
              <th>Amount of flashcards</th>
              <td>{playConfiguration.amountOfFlashcards}</td>
            </tr>
            <tr>
              <th>First flashcard index</th>
              <td>{checkboxInputTag(playConfiguration.firstFlashcardIndex)}</td>
            </tr>
            <tr>
              <th>Answer mode</th>
              <td>{formatEnum(playConfiguration.answerMode)}</td>
            </tr>
            <tr>
              <th>Inverse</th>
              <td>{checkboxInputTag(playConfiguration.inverse)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlayConfiguration({ id: playConfiguration.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(playConfiguration.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PlayConfiguration
