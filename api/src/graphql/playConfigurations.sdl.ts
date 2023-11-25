export const schema = gql`
  type PlayConfiguration {
    id: Int!
    userId: Int!
    user: User!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    timeUntilNextFlashcard: Int!
    amountOfFlashcards: Int
    firstFlashcardIndex: Boolean
    answerMode: AnswerMode!
    inverse: Boolean!
  }

  enum AnswerMode {
    Manual
    Text
  }

  type Query {
    playConfigurations: [PlayConfiguration!]! @requireAuth
    playConfiguration(id: Int!): PlayConfiguration @requireAuth
  }

  input CreatePlayConfigurationInput {
    userId: Int!
    name: String!
    timeUntilNextFlashcard: Int!
    amountOfFlashcards: Int
    firstFlashcardIndex: Boolean
    answerMode: AnswerMode!
    inverse: Boolean!
  }

  input UpdatePlayConfigurationInput {
    userId: Int
    name: String
    timeUntilNextFlashcard: Int
    amountOfFlashcards: Int
    firstFlashcardIndex: Boolean
    answerMode: AnswerMode
    inverse: Boolean
  }

  type Mutation {
    createPlayConfiguration(
      input: CreatePlayConfigurationInput!
    ): PlayConfiguration! @requireAuth
    updatePlayConfiguration(
      id: Int!
      input: UpdatePlayConfigurationInput!
    ): PlayConfiguration! @requireAuth
    deletePlayConfiguration(id: Int!): PlayConfiguration! @requireAuth
  }
`
