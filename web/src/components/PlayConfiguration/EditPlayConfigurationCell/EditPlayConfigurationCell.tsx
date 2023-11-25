import type {
  EditPlayConfigurationById,
  UpdatePlayConfigurationInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlayConfigurationForm from 'src/components/PlayConfiguration/PlayConfigurationForm'

export const QUERY = gql`
  query EditPlayConfigurationById($id: Int!) {
    playConfiguration: playConfiguration(id: $id) {
      id
      userId
      name
      createdAt
      updatedAt
      timeUntilNextFlashcard
      amountOfFlashcards
      firstFlashcardIndex
      answerMode
      inverse
    }
  }
`
const UPDATE_PLAY_CONFIGURATION_MUTATION = gql`
  mutation UpdatePlayConfigurationMutation(
    $id: Int!
    $input: UpdatePlayConfigurationInput!
  ) {
    updatePlayConfiguration(id: $id, input: $input) {
      id
      userId
      name
      createdAt
      updatedAt
      timeUntilNextFlashcard
      amountOfFlashcards
      firstFlashcardIndex
      answerMode
      inverse
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  playConfiguration,
}: CellSuccessProps<EditPlayConfigurationById>) => {
  const [updatePlayConfiguration, { loading, error }] = useMutation(
    UPDATE_PLAY_CONFIGURATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlayConfiguration updated')
        navigate(routes.playConfigurations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePlayConfigurationInput,
    id: EditPlayConfigurationById['playConfiguration']['id']
  ) => {
    updatePlayConfiguration({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PlayConfiguration {playConfiguration?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlayConfigurationForm
          playConfiguration={playConfiguration}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
