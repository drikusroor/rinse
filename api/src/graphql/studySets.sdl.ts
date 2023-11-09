export const schema = gql`
  type StudySet {
    id: Int!
    deckId: Int!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    studySetDecks: [StudySetDeck]!
  }

  type Query {
    studySets: [StudySet!]! @requireAuth
    studySet(id: Int!): StudySet @requireAuth
  }

  input CreateStudySetInput {
    deckId: Int!
    name: String!
  }

  input UpdateStudySetInput {
    deckId: Int
    name: String
  }

  type Mutation {
    createStudySet(input: CreateStudySetInput!): StudySet! @requireAuth
    updateStudySet(id: Int!, input: UpdateStudySetInput!): StudySet!
      @requireAuth
    deleteStudySet(id: Int!): StudySet! @requireAuth
  }
`
