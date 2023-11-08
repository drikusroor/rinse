export const schema = gql`
  type Deck {
    id: Int!
    userId: Int!
    user: User!
    name: String!
    description: String
    createdAt: DateTime!
    updatedAt: DateTime!
    flashcards: [Flashcard]!
    studySetDecks: [StudySetDeck]!
  }

  type Query {
    decks: [Deck!]! @requireAuth
    deck(id: Int!): Deck @requireAuth
  }

  input CreateDeckInput {
    userId: Int!
    name: String!
    description: String
  }

  input CreateUserDeckInput {
    name: String!
    description: String
    flashcards: [CreateFlashcardInput!]
  }

  input UpdateDeckInput {
    userId: Int
    name: String
    description: String
  }

  input UpdateUserDeckInput {
    name: String
    description: String
    flashcards: [UpdateDeckFlashcardInput!]
  }

  type Mutation {
    createDeck(input: CreateDeckInput!): Deck! @requireAuth
    createUserDeck(input: CreateUserDeckInput!): Deck! @requireAuth
    updateDeck(id: Int!, input: UpdateDeckInput!): Deck! @requireAuth
    updateUserDeck(id: Int!, input: UpdateUserDeckInput!): Deck! @requireAuth
    deleteDeck(id: Int!): Deck! @requireAuth
  }
`
