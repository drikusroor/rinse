import PlayConfigurationCell from 'src/components/PlayConfiguration/PlayConfigurationCell'

type PlayConfigurationPageProps = {
  id: number
}

const PlayConfigurationPage = ({ id }: PlayConfigurationPageProps) => {
  return <PlayConfigurationCell id={id} />
}

export default PlayConfigurationPage
