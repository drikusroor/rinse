import { FaBell } from 'react-icons/fa'
import { Notification } from 'types/graphql'

import { dateStringToTimeAgo } from 'src/lib/time-ago'

interface UserNotificationsProps {
  userNotifications: Pick<
    Notification,
    'id' | 'createdAt' | 'read' | 'title' | 'message' | 'url'
  >[]
}

const UserNotifications = ({
  userNotifications = [],
}: UserNotificationsProps) => {
  const unreadNotifications = userNotifications.filter(
    (notification) => !notification.read
  )

  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center rounded-full bg-gradient-to-br from-sand to-forest text-sm text-white transition hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        onClick={() => setOpen(!open)}
        aria-expanded="false"
        aria-haspopup="true"
        aria-label="Open notifications menu"
        title="Open notifications menu"
      >
        <FaBell className="h-8 w-8 p-2 text-white" />
        {unreadNotifications.length > 0 && (
          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-500 text-xs text-white">
            {unreadNotifications.length}
          </div>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-10 h-full w-full"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {open && (
        <div className="absolute right-0 top-full z-10 h-96 overflow-y-auto group-hover:block">
          <ul
            className="mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            {userNotifications.map((notification, i) => (
              <li
                key={notification.id}
                className="my-2 block px-4 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <a
                  href={notification.url}
                  className="block w-full text-gray-700 hover:text-gray-900"
                >
                  <div className="font-semibold">{notification.title}</div>
                  <div className="text-xs">{notification.message}</div>
                  <div className="text-xs text-gray-500">
                    {dateStringToTimeAgo(notification.createdAt)}
                  </div>
                </a>
                {i < userNotifications.length - 1 && (
                  <div className="mt-2 border-b border-gray-200"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default UserNotifications
