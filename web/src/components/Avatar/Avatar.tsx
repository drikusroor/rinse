import { FaUserCircle } from 'react-icons/fa'
import { User } from 'types/graphql'

interface AvatarProps {
  user: Pick<User, 'firstName' | 'email'>
}

const Avatar = ({ user }: AvatarProps) => {
  if (!user) return <FaUserCircle className="h-8 w-8 text-gray-500" />

  const { firstName, email } = user

  const firstChar = firstName
    ? firstName.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase()

  return (
    <button
      type="button"
      className="flex rounded-full bg-sand text-sm transition hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      id="user-menu"
      aria-expanded="false"
      aria-haspopup="true"
      title={user?.email}
      aria-label={user?.email}
    >
      <span className="sr-only">Open user menu</span>
      {!user ? (
        <FaUserCircle className="h-8 w-8 text-gray-500" />
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-forest to-salmon text-white">
          {firstChar}
        </div>
      )}
    </button>
  )
}

export default Avatar
