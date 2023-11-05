import type {
  EditStudySetDeckById,
  UpdateStudySetDeckInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StudySetDeckForm from 'src/components/StudySetDeck/StudySetDeckForm'

export const QUERY = gql`
  query EditStudySetDeckById($id: Int!) {
    studySetDeck: studySetDeck(id: $id) {
      id
      studySetId
      deckId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_STUDY_SET_DECK_MUTATION = gql`
  mutation UpdateStudySetDeckMutation(
    $id: Int!
    $input: UpdateStudySetDeckInput!
  ) {
    updateStudySetDeck(id: $id, input: $input) {
      id
      studySetId
      deckId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  studySetDeck,
}: CellSuccessProps<EditStudySetDeckById>) => {
  const [updateStudySetDeck, { loading, error }] = useMutation(
    UPDATE_STUDY_SET_DECK_MUTATION,
    {
      onCompleted: () => {
        toast.success('StudySetDeck updated')
        navigate(routes.studySetDecks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStudySetDeckInput,
    id: EditStudySetDeckById['studySetDeck']['id']
  ) => {
    updateStudySetDeck({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StudySetDeck {studySetDeck?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudySetDeckForm
          studySetDeck={studySetDeck}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
