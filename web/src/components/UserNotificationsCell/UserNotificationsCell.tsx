import type { UserNotificationsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserNotifications from '../UserNotifications/UserNotifications'

export const QUERY = gql`
  query UserNotificationsQuery {
    userNotifications {
      id
      createdAt
      read
      title
      message
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <UserNotifications />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userNotifications,
}: CellSuccessProps<UserNotificationsQuery>) => {
  return <UserNotifications userNotifications={userNotifications} />
}
