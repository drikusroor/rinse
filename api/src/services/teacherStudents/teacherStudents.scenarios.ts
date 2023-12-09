import type { Prisma, TeacherStudent } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeacherStudentCreateArgs>({
  teacherStudent: {
    one: {
      data: {
        teacher: {
          create: {
            email: 'String4763123',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        student: {
          create: {
            email: 'String4789002',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        teacher: {
          create: {
            email: 'String567052',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        student: {
          create: {
            email: 'String7335800',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TeacherStudent, 'teacherStudent'>
