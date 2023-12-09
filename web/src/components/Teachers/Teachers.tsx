import { TeacherStudent, User } from 'types/graphql'

import ConnectToTeacherForm from '../ConnectToTeacherForm/ConnectToTeacherForm'

interface TeachersProps {
  teachers: Partial<TeacherStudent>[]
  onRequestConnectToTeacher: (email: string) => void
}

const Teachers = ({
  teachers: connections = [],
  onRequestConnectToTeacher,
}: TeachersProps) => {
  return (
    <div className="mt-8 space-y-6 rounded bg-white p-2 shadow sm:rounded-lg sm:px-10 sm:py-8">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Teachers</h2>
        <div className="flex flex-col space-y-4">
          {connections.length === 0 && (
            <div className="mt-1 text-sm text-gray-500">
              You have no teachers yet.
            </div>
          )}
          {connections.map((connection) => {
            const { accepted } = connection
            const teacher = connection.teacher as User

            return (
              <div
                key={teacher.email}
                className="flex flex-row items-center justify-between"
              >
                <div className="flex flex-row items-center space-x-2">
                  <div className="flex flex-col">
                    <div className="text-lg font-bold">
                      {teacher.firstName} {teacher.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{teacher.email}</div>
                  </div>
                  {accepted && (
                    <div className="rounded bg-green-500 px-2 py-1 text-sm">
                      Accepted
                    </div>
                  )}
                  {!accepted && (
                    <div className="rounded bg-yellow-500 px-2 py-1 text-sm">
                      Pending
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <ConnectToTeacherForm
            onRequestConnectToTeacher={onRequestConnectToTeacher}
          />
        </div>
      </div>
    </div>
  )
}

export default Teachers
