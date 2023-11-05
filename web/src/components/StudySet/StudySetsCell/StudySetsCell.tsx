import type { FindStudySets } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StudySets from 'src/components/StudySet/StudySets'

export const QUERY = gql`
  query FindStudySets {
    studySets {
      id
      deckId
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No studySets yet. '}
      <Link to={routes.newStudySet()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ studySets }: CellSuccessProps<FindStudySets>) => {
  return <StudySets studySets={studySets} />
}
