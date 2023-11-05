import StudySetDeckCell from 'src/components/StudySetDeck/StudySetDeckCell'

type StudySetDeckPageProps = {
  id: number
}

const StudySetDeckPage = ({ id }: StudySetDeckPageProps) => {
  return <StudySetDeckCell id={id} />
}

export default StudySetDeckPage
