export const schema = gql`
  type StudySetDeck {
    id: Int!
    studySetId: Int!
    studySet: StudySet!
    deckId: Int!
    deck: Deck!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    studySetDecks: [StudySetDeck!]! @requireAuth
    studySetDeck(id: Int!): StudySetDeck @requireAuth
  }

  input CreateStudySetDeckInput {
    studySetId: Int!
    deckId: Int!
  }

  input UpdateStudySetDeckInput {
    studySetId: Int
    deckId: Int
  }

  type Mutation {
    createStudySetDeck(input: CreateStudySetDeckInput!): StudySetDeck!
      @requireAuth
    updateStudySetDeck(
      id: Int!
      input: UpdateStudySetDeckInput!
    ): StudySetDeck! @requireAuth
    deleteStudySetDeck(id: Int!): StudySetDeck! @requireAuth
  }
`
