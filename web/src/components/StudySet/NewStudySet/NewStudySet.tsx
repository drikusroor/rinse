import type { CreateStudySetInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StudySetForm from 'src/components/StudySet/StudySetForm'

const CREATE_STUDY_SET_MUTATION = gql`
  mutation CreateStudySetMutation($input: CreateStudySetInput!) {
    createStudySet(input: $input) {
      id
    }
  }
`

const NewStudySet = () => {
  const [createStudySet, { loading, error }] = useMutation(
    CREATE_STUDY_SET_MUTATION,
    {
      onCompleted: () => {
        toast.success('StudySet created')
        navigate(routes.studySets())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStudySetInput) => {
    createStudySet({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New StudySet</h2>
      </header>
      <div className="rw-segment-main">
        <StudySetForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStudySet
