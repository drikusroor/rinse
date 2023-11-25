import type { FindPlayConfigurations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlayConfigurations from 'src/components/PlayConfiguration/PlayConfigurations'

export const QUERY = gql`
  query FindPlayConfigurations {
    playConfigurations {
      id
      userId
      name
      createdAt
      updatedAt
      timeUntilNextFlashcard
      amountOfFlashcards
      firstFlashcardIndex
      answerMode
      inverse
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No playConfigurations yet. '}
      <Link to={routes.newPlayConfiguration()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  playConfigurations,
}: CellSuccessProps<FindPlayConfigurations>) => {
  return <PlayConfigurations playConfigurations={playConfigurations} />
}
