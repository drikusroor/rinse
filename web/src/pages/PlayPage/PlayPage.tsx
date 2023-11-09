import { MetaTags } from '@redwoodjs/web'

import PlayDeckCell from 'src/components/PlayDeckCell'
import PlayOverviewCell from 'src/components/PlayOverviewCell'

type PlayPageProps = {
  id: number
}

const PlayPage = ({ id }: PlayPageProps) => {
  return (
    <>
      <MetaTags title="Play" description="Play page" />

      {id ? <PlayDeckCell id={id} /> : <PlayOverviewCell />}
    </>
  )
}

export default PlayPage
