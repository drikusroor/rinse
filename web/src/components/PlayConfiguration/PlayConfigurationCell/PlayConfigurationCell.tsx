import type { FindPlayConfigurationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlayConfiguration from 'src/components/PlayConfiguration/PlayConfiguration'

export const QUERY = gql`
  query FindPlayConfigurationById($id: Int!) {
    playConfiguration: playConfiguration(id: $id) {
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

export const Empty = () => <div>PlayConfiguration not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  playConfiguration,
}: CellSuccessProps<FindPlayConfigurationById>) => {
  return <PlayConfiguration playConfiguration={playConfiguration} />
}
