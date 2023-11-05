import DeckCell from 'src/components/Deck/DeckCell'

type DeckPageProps = {
  id: number
}

const DeckPage = ({ id }: DeckPageProps) => {
  return <DeckCell id={id} />
}

export default DeckPage
