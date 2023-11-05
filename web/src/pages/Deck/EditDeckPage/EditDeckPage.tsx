import EditDeckCell from 'src/components/Deck/EditDeckCell'

type DeckPageProps = {
  id: number
}

const EditDeckPage = ({ id }: DeckPageProps) => {
  return <EditDeckCell id={id} />
}

export default EditDeckPage
