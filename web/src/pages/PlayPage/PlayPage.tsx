import { useEffect } from 'react'

import { PlaySession } from 'types/graphql'

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import PlayDeckCell from 'src/components/PlayDeckCell'
import {
  DEFAULT_PLAY_CONFIGURATION,
  PlayConfiguration,
} from 'src/components/PlayFlashcards/PlayFlashcards'
import PlayOverviewCell from 'src/components/PlayOverviewCell'
import { useBoundStore } from 'src/store'

type PlayPageProps = {
  id: number
  answerMode: 'text' | 'manual'
  inverse: boolean
}

const PlayPage = ({
  id,
  answerMode = 'manual',
  inverse = false,
}: PlayPageProps) => {
  const { currentUser } = useAuth()

  const setPlaySession = useBoundStore((state) => state.setPlaySession)

  const userId = currentUser?.id

  const playConfiguration: PlayConfiguration = {
    ...DEFAULT_PLAY_CONFIGURATION,
    answerMode,
    inverse,
  }

  useEffect(() => {
    const playSession: Partial<PlaySession> = {
      userId,
      deckId: id,
      flashcardInteractions: [],
    }

    setPlaySession(playSession)

    console.log('playSession', playSession)
  })

  return (
    <>
      <MetaTags title="Play" description="Play page" />

      {id ? (
        <PlayDeckCell id={id} playConfiguration={playConfiguration} />
      ) : (
        <PlayOverviewCell userId={userId} />
      )}
    </>
  )
}

export default PlayPage
