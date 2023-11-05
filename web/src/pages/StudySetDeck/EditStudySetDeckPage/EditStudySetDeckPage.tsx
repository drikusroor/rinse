import EditStudySetDeckCell from 'src/components/StudySetDeck/EditStudySetDeckCell'

type StudySetDeckPageProps = {
  id: number
}

const EditStudySetDeckPage = ({ id }: StudySetDeckPageProps) => {
  return <EditStudySetDeckCell id={id} />
}

export default EditStudySetDeckPage
