import type { FindStudySetDecks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StudySetDecks from 'src/components/StudySetDeck/StudySetDecks'

export const QUERY = gql`
  query FindStudySetDecks {
    studySetDecks {
      id
      studySetId
      deckId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No studySetDecks yet. '}
      <Link to={routes.newStudySetDeck()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  studySetDecks,
}: CellSuccessProps<FindStudySetDecks>) => {
  return <StudySetDecks studySetDecks={studySetDecks} />
}
