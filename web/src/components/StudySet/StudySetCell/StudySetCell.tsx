import type { FindStudySetById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StudySet from 'src/components/StudySet/StudySet'

export const QUERY = gql`
  query FindStudySetById($id: Int!) {
    studySet: studySet(id: $id) {
      id
      deckId
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StudySet not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ studySet }: CellSuccessProps<FindStudySetById>) => {
  return <StudySet studySet={studySet} />
}
