export const schema = gql`
  type TeacherStudent {
    id: Int!
    teacher: User!
    teacherId: Int!
    student: User!
    studentId: Int!
  }

  type Query {
    teacherStudents: [TeacherStudent!]! @requireAuth
    teacherStudent(id: Int!): TeacherStudent @requireAuth
  }

  input CreateTeacherStudentInput {
    teacherId: Int!
    studentId: Int!
  }

  input UpdateTeacherStudentInput {
    teacherId: Int
    studentId: Int
  }

  input RequestConnectToTeacherInput {
    id: Int!
    email: String!
  }

  type Mutation {
    createTeacherStudent(input: CreateTeacherStudentInput!): TeacherStudent!
      @requireAuth
    updateTeacherStudent(
      id: Int!
      input: UpdateTeacherStudentInput!
    ): TeacherStudent! @requireAuth
    deleteTeacherStudent(id: Int!): TeacherStudent! @requireAuth
    requestConnectToTeacher(input: RequestConnectToTeacherInput!): Notification
      @requireAuth
  }
`
