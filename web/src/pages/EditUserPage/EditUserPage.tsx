import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import EditUserCell from 'src/components/EditUserCell/EditUserCell'

const EditUserPage = () => {
  const { currentUser } = useAuth()
  const id = currentUser?.id

  return (
    <>
      <MetaTags title="EditUser" description="EditUser page" />

      <EditUserCell id={id} />
    </>
  )
}

export default EditUserPage
