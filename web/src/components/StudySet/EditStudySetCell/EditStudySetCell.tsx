import type { EditStudySetById, UpdateStudySetInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StudySetForm from 'src/components/StudySet/StudySetForm'

export const QUERY = gql`
  query EditStudySetById($id: Int!) {
    studySet: studySet(id: $id) {
      id
      deckId
      name
      createdAt
      updatedAt
    }
  }
`
const UPDATE_STUDY_SET_MUTATION = gql`
  mutation UpdateStudySetMutation($id: Int!, $input: UpdateStudySetInput!) {
    updateStudySet(id: $id, input: $input) {
      id
      deckId
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ studySet }: CellSuccessProps<EditStudySetById>) => {
  const [updateStudySet, { loading, error }] = useMutation(
    UPDATE_STUDY_SET_MUTATION,
    {
      onCompleted: () => {
        toast.success('StudySet updated')
        navigate(routes.studySets())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStudySetInput,
    id: EditStudySetById['studySet']['id']
  ) => {
    updateStudySet({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StudySet {studySet?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudySetForm
          studySet={studySet}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
