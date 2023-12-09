import type { TeacherStudent } from '@prisma/client'

import {
  teacherStudents,
  teacherStudent,
  createTeacherStudent,
  updateTeacherStudent,
  deleteTeacherStudent,
} from './teacherStudents'
import type { StandardScenario } from './teacherStudents.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('teacherStudents', () => {
  scenario(
    'returns all teacherStudents',
    async (scenario: StandardScenario) => {
      const result = await teacherStudents()

      expect(result.length).toEqual(Object.keys(scenario.teacherStudent).length)
    }
  )

  scenario(
    'returns a single teacherStudent',
    async (scenario: StandardScenario) => {
      const result = await teacherStudent({
        id: scenario.teacherStudent.one.id,
      })

      expect(result).toEqual(scenario.teacherStudent.one)
    }
  )

  scenario('creates a teacherStudent', async (scenario: StandardScenario) => {
    const result = await createTeacherStudent({
      input: {
        teacherId: scenario.teacherStudent.two.teacherId,
        studentId: scenario.teacherStudent.two.studentId,
      },
    })

    expect(result.teacherId).toEqual(scenario.teacherStudent.two.teacherId)
    expect(result.studentId).toEqual(scenario.teacherStudent.two.studentId)
  })

  scenario('updates a teacherStudent', async (scenario: StandardScenario) => {
    const original = (await teacherStudent({
      id: scenario.teacherStudent.one.id,
    })) as TeacherStudent
    const result = await updateTeacherStudent({
      id: original.id,
      input: { teacherId: scenario.teacherStudent.two.teacherId },
    })

    expect(result.teacherId).toEqual(scenario.teacherStudent.two.teacherId)
  })

  scenario('deletes a teacherStudent', async (scenario: StandardScenario) => {
    const original = (await deleteTeacherStudent({
      id: scenario.teacherStudent.one.id,
    })) as TeacherStudent
    const result = await teacherStudent({ id: original.id })

    expect(result).toEqual(null)
  })
})
