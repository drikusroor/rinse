export const schema = gql`
  type Flashcard {
    id: Int!
    deckId: Int!
    deck: Deck!
    front: [String]!
    back: [String]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    flashcards: [Flashcard!]! @requireAuth
    flashcard(id: Int!): Flashcard @requireAuth
  }

  input CreateFlashcardInput {
    deckId: Int!
    front: [String]!
    back: [String]!
  }

  input CreateDeckFlashcardInput {
    front: [String]!
    back: [String]!
  }

  input UpdateFlashcardInput {
    deckId: Int
    front: [String]!
    back: [String]!
  }

  input UpdateDeckFlashcardInput {
    id: Int
    front: [String]!
    back: [String]!
  }

  type Mutation {
    createFlashcard(input: CreateFlashcardInput!): Flashcard! @requireAuth
    updateFlashcard(id: Int!, input: UpdateFlashcardInput!): Flashcard!
      @requireAuth
    deleteFlashcard(id: Int!): Flashcard! @requireAuth
  }
`
