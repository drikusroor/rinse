import type { FindFlashcardById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Flashcard from 'src/components/Flashcard/Flashcard'

export const QUERY = gql`
  query FindFlashcardById($id: Int!) {
    flashcard: flashcard(id: $id) {
      id
      deckId
      front
      back
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Flashcard not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ flashcard }: CellSuccessProps<FindFlashcardById>) => {
  return <Flashcard flashcard={flashcard} />
}
