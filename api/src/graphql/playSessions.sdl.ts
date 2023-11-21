export const schema = gql`
  type PlaySession {
    id: Int!
    userId: Int!
    user: User!
    createdAt: DateTime!
    updatedAt: DateTime!
    startedAt: DateTime!
    endedAt: DateTime
    deckId: Int
    deck: Deck
    studySetId: Int
    studySet: StudySet
    flashcardInteractions: [FlashcardInteraction]!
  }

  type Query {
    playSessions: [PlaySession!]! @requireAuth
    playSession(id: Int!): PlaySession @requireAuth
  }

  input CreatePlaySessionInput {
    userId: Int!
    startedAt: DateTime!
    endedAt: DateTime
    deckId: Int
    studySetId: Int
  }

  input UpdatePlaySessionInput {
    userId: Int
    startedAt: DateTime
    endedAt: DateTime
    deckId: Int
    studySetId: Int
  }

  type Mutation {
    createPlaySession(input: CreatePlaySessionInput!): PlaySession! @requireAuth
    updatePlaySession(id: Int!, input: UpdatePlaySessionInput!): PlaySession!
      @requireAuth
    deletePlaySession(id: Int!): PlaySession! @requireAuth
  }
`
