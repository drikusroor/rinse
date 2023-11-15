import type { CreateStudySetDeckInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StudySetDeckForm from 'src/components/StudySetDeck/StudySetDeckForm'

const CREATE_STUDY_SET_DECK_MUTATION = gql`
  mutation CreateStudySetDeckMutation($input: CreateStudySetDeckInput!) {
    createStudySetDeck(input: $input) {
      id
    }
  }
`

const NewStudySetDeck = () => {
  const [createStudySetDeck, { loading, error }] = useMutation(
    CREATE_STUDY_SET_DECK_MUTATION,
    {
      onCompleted: () => {
        toast.success('StudySetDeck created')
        navigate(routes.studySetDecks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStudySetDeckInput) => {
    createStudySetDeck({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New StudySetDeck</h2>
      </header>
      <div className="rw-segment-main">
        <StudySetDeckForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStudySetDeck
