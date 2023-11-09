import type {
  FindPlayOverviewQuery,
  FindPlayOverviewQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlayOverview from '../PlayOverview/PlayOverview'

export const QUERY = gql`
  query FindPlayOverviewQuery {
    decks {
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

export const Empty = () => <div>Empty</div>

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
