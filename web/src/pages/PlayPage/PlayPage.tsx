import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import PlayDeckCell from 'src/components/PlayDeckCell'
import {
  DEFAULT_PLAY_CONFIGURATION,
  PlayConfiguration,
} from 'src/components/PlayFlashcards/PlayFlashcards'
import PlayOverviewCell from 'src/components/PlayOverviewCell'

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

  const userId = currentUser?.id

  const playConfiguration: PlayConfiguration = {
    ...DEFAULT_PLAY_CONFIGURATION,
    answerMode,
    inverse,
  }

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
