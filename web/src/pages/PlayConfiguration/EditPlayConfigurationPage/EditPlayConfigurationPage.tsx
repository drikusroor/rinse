import EditPlayConfigurationCell from 'src/components/PlayConfiguration/EditPlayConfigurationCell'

type PlayConfigurationPageProps = {
  id: number
}

const EditPlayConfigurationPage = ({ id }: PlayConfigurationPageProps) => {
  return <EditPlayConfigurationCell id={id} />
}

export default EditPlayConfigurationPage
