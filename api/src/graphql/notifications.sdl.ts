export const schema = gql`
  type Notification {
    id: Int!
    userId: Int!
    user: User!
    title: String!
    message: String!
    read: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    url: String
  }

  type Query {
    notifications: [Notification!]! @requireAuth
    userNotifications: [Notification!]! @requireAuth
    notification(id: Int!): Notification @requireAuth
  }

  input CreateNotificationInput {
    userId: Int!
    title: String!
    message: String!
    read: Boolean!
    url: String
  }

  input UpdateNotificationInput {
    userId: Int
    title: String
    message: String
    read: Boolean
    url: String
  }

  type Mutation {
    createNotification(input: CreateNotificationInput!): Notification!
      @requireAuth
    updateNotification(
      id: Int!
      input: UpdateNotificationInput!
    ): Notification! @requireAuth
    deleteNotification(id: Int!): Notification! @requireAuth
  }
`
