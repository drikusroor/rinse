import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlayConfigurationForm from 'src/components/PlayConfiguration/PlayConfigurationForm'

import type { CreatePlayConfigurationInput } from 'types/graphql'

const CREATE_PLAY_CONFIGURATION_MUTATION = gql`
  mutation CreatePlayConfigurationMutation(
    $input: CreatePlayConfigurationInput!
  ) {
    createPlayConfiguration(input: $input) {
      id
    }
  }
`

const NewPlayConfiguration = () => {
  const [createPlayConfiguration, { loading, error }] = useMutation(
    CREATE_PLAY_CONFIGURATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlayConfiguration created')
        navigate(routes.playConfigurations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePlayConfigurationInput) => {
    createPlayConfiguration({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New PlayConfiguration
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlayConfigurationForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewPlayConfiguration
