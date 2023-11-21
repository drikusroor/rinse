export const schema = gql`
  type FlashcardInteraction {
    id: Int!
    flashcardId: Int!
    flashcard: Flashcard!
    createdAt: DateTime!
    updatedAt: DateTime!
    startedAt: DateTime!
    endedAt: DateTime
    correct: Boolean!
    playSessionId: Int!
    playSession: PlaySession!
  }

  type Query {
    flashcardInteractions: [FlashcardInteraction!]! @requireAuth
    flashcardInteraction(id: Int!): FlashcardInteraction @requireAuth
  }

  input CreateFlashcardInteractionInput {
    flashcardId: Int!
    startedAt: DateTime!
    endedAt: DateTime
    correct: Boolean!
    playSessionId: Int!
  }

  input UpdateFlashcardInteractionInput {
    flashcardId: Int
    startedAt: DateTime
    endedAt: DateTime
    correct: Boolean
    playSessionId: Int
  }

  type Mutation {
    createFlashcardInteraction(
      input: CreateFlashcardInteractionInput!
    ): FlashcardInteraction! @requireAuth
    updateFlashcardInteraction(
      id: Int!
      input: UpdateFlashcardInteractionInput!
    ): FlashcardInteraction! @requireAuth
    deleteFlashcardInteraction(id: Int!): FlashcardInteraction! @requireAuth
  }
`
