export const schema = gql`
  type Deck {
    id: Int!
    userId: Int!
    user: User!
    name: String!
    description: String
    createdAt: DateTime!
    updatedAt: DateTime!
    Flashcard: [Flashcard]!
    StudySetDeck: [StudySetDeck]!
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

  input UpdateDeckInput {
    userId: Int
    name: String
    description: String
  }

  type Mutation {
    createDeck(input: CreateDeckInput!): Deck! @requireAuth
    updateDeck(id: Int!, input: UpdateDeckInput!): Deck! @requireAuth
    deleteDeck(id: Int!): Deck! @requireAuth
  }
`
