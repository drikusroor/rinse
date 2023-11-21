import type {
  FindPlayDeckQuery,
  FindPlayDeckQueryVariables,
} from 'types/graphql'

type PlayDeckCellProps = {
  id: number
  playConfiguration?: PlayConfiguration
}

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'

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

const CREATE_PLAY_SESSION_MUTATION = gql`
  mutation CreatePlaySessionMutation($input: CreatePlaySessionInput!) {
    createPlaySession(input: $input) {
      id
      userId
      deckId
      createdAt
      updatedAt
      startedAt
      endedAt
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
  playConfiguration,
}: CellSuccessProps<FindPlayDeckQuery, FindPlayDeckQueryVariables> &
  PlayDeckCellProps) => {
  const [onSavePlaySession] = useMutation(CREATE_PLAY_SESSION_MUTATION, {
    onCompleted: () => {
      console.log('Play session saved')
    },
  })

  return (
    <PlayFlashcards
      flashcards={deck.flashcards}
      playConfiguration={playConfiguration}
      onSavePlaySession={(createPlaySessionInput) => {
        onSavePlaySession({
          variables: {
            input: createPlaySessionInput,
          },
        })
      }}
    />
  )
}
