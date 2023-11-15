import type { FindDecks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Decks from 'src/components/Deck/Decks'

interface DecksCellProps {
  userId: number
}

export const QUERY = gql`
  query FindDecks($userId: Int!) {
    decks: userDecks(userId: $userId) {
      id
      userId
      name
      description
      createdAt
      updatedAt
      flashcards {
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No decks yet. '}
      <Link to={routes.newDeck()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  decks,
}: CellSuccessProps<FindDecks> & DecksCellProps) => {
  return <Decks decks={decks} />
}
