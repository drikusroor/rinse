import { MetaTags } from '@redwoodjs/web'

import PlayDeckCell from 'src/components/PlayDeckCell'
import { DEFAULT_PLAY_CONFIGURATION } from 'src/components/PlayFlashcards/PlayFlashcards'
import PlayOverviewCell from 'src/components/PlayOverviewCell'

type PlayPageProps = {
  id: number
  answerMode: 'text' | 'manual'
}

const PlayPage = ({ id, answerMode = 'manual' }: PlayPageProps) => {
  const playConfiguration = {
    ...DEFAULT_PLAY_CONFIGURATION,
    answerMode,
  }

  return (
    <>
      <MetaTags title="Play" description="Play page" />

      {id ? (
        <PlayDeckCell id={id} playConfiguration={playConfiguration} />
      ) : (
        <PlayOverviewCell />
      )}
    </>
  )
}

export default PlayPage
