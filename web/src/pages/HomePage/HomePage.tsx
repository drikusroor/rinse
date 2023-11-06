import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <p className="text-xl text-gray-700">
        Hello {currentUser?.email}!
      </p>
    </>
  )
}

export default HomePage
