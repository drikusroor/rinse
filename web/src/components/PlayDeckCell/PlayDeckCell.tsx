import type {
  FindPlayDeckQuery,
  FindPlayDeckQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlayFlashcards from '../PlayFlashcards/PlayFlashcards'

export const QUERY = gql`
  query FindPlayDeckQuery($id: Int!) {
    deck(id: $id) {
      id
      name
      description
      flashcards {
        id
        front
        back
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPlayDeckQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  deck,
}: CellSuccessProps<FindPlayDeckQuery, FindPlayDeckQueryVariables>) => {
  return <PlayFlashcards flashcards={deck.flashcards} />
}
