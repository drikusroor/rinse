import StudySetCell from 'src/components/StudySet/StudySetCell'

type StudySetPageProps = {
  id: number
}

const StudySetPage = ({ id }: StudySetPageProps) => {
  return <StudySetCell id={id} />
}

export default StudySetPage
