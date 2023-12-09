export const schema = gql`
  type User {
    id: Int!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    # credentials: [UserCredential]!
    deck: [Deck]!
    PlaySession: [PlaySession]!
    firstName: String
    lastName: String
    layConfigurations: [PlayConfiguration]!
    createdAt: DateTime!
    updatedAt: DateTime!
    teachers: [TeacherStudent]!
    students: [TeacherStudent]!
    notifications: [Notification]!
  }

  type EditUser {
    id: Int!
    email: String!
    firstName: String
    lastName: String
    teachers: [TeacherStudent]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
    editUser(id: Int!): EditUser @requireAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    firstName: String
    lastName: String
  }

  input UpdateUserInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    firstName: String
    lastName: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
