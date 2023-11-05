import type { FindStudySetDeckById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StudySetDeck from 'src/components/StudySetDeck/StudySetDeck'

export const QUERY = gql`
  query FindStudySetDeckById($id: Int!) {
    studySetDeck: studySetDeck(id: $id) {
      id
      studySetId
      deckId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StudySetDeck not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  studySetDeck,
}: CellSuccessProps<FindStudySetDeckById>) => {
  return <StudySetDeck studySetDeck={studySetDeck} />
}
