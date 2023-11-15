import { useAuth } from 'src/auth'
import DecksCell from 'src/components/Deck/DecksCell'

const DecksPage = () => {
  const { currentUser } = useAuth()
  const userId = currentUser?.id

  return <DecksCell userId={userId} />
}

export default DecksPage
