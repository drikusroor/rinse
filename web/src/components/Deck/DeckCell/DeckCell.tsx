import type { FindDeckById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Deck from 'src/components/Deck/Deck'

export const QUERY = gql`
  query FindDeckById($id: Int!) {
    deck: deck(id: $id) {
      id
      userId
      name
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Deck not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ deck }: CellSuccessProps<FindDeckById>) => {
  return <Deck deck={deck} />
}
