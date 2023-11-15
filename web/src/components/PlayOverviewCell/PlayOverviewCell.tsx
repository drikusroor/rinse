import { FaPlus } from 'react-icons/fa'
import type {
  FindPlayOverviewQuery,
  FindPlayOverviewQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlayOverview from '../PlayOverview/PlayOverview'

export const QUERY = gql`
  query FindPlayOverviewQuery($userId: Int!) {
    decks: userDecks(userId: $userId) {
      id
      name
      description
      flashcards {
        id
        front
        back
      }
    }
    studySets {
      id
      name
      studySetDecks {
        id
        deck {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <p className="text-sand">
    You haven&apos;t created any decks or study sets yet. Get started by
    clicking creating a
    <Link
      to={routes.newDeck()}
      className="group ml-3 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-semibold text-sand transition-colors hover:text-salmon-light"
    >
      <span className="inline-flex items-center gap-2 rounded bg-forest p-3 drop-shadow-lg transition">
        <FaPlus />
        New Deck
      </span>
    </Link>
  </p>
)

export const Failure = ({
  error,
}: CellFailureProps<FindPlayOverviewQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  decks,
  studySets,
}: CellSuccessProps<FindPlayOverviewQuery, FindPlayOverviewQueryVariables>) => {
  return <PlayOverview decks={decks} studySets={studySets} />
}
