import EditStudySetCell from 'src/components/StudySet/EditStudySetCell'

type StudySetPageProps = {
  id: number
}

const EditStudySetPage = ({ id }: StudySetPageProps) => {
  return <EditStudySetCell id={id} />
}

export default EditStudySetPage
