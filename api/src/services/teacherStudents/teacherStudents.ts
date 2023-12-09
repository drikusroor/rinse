import type {
  QueryResolvers,
  MutationResolvers,
  TeacherStudentRelationResolvers,
} from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const teacherStudents: QueryResolvers['teacherStudents'] = () => {
  return db.teacherStudent.findMany()
}

export const teacherStudent: QueryResolvers['teacherStudent'] = ({ id }) => {
  return db.teacherStudent.findUnique({
    where: { id },
  })
}

export const createTeacherStudent: MutationResolvers['createTeacherStudent'] =
  ({ input }) => {
    return db.teacherStudent.create({
      data: input,
    })
  }

export const updateTeacherStudent: MutationResolvers['updateTeacherStudent'] =
  ({ id, input }) => {
    return db.teacherStudent.update({
      data: input,
      where: { id },
    })
  }

export const deleteTeacherStudent: MutationResolvers['deleteTeacherStudent'] =
  ({ id }) => {
    return db.teacherStudent.delete({
      where: { id },
    })
  }

export const requestConnectToTeacher: MutationResolvers['requestConnectToTeacher'] =
  async ({ input }) => {
    const { id, email } = input

    if (context.currentUser?.id !== id) {
      throw new ForbiddenError('You are not authorized to access this user.')
    }

    const teacher = await db.user.findUnique({
      where: { email },
    })

    if (!teacher) {
      throw new Error('Teacher not found')
    }

    const user = await db.user.findUnique({
      where: { id },
    })

    if (!user) {
      throw new Error('User not found')
    }

    const exists = await db.teacherStudent.findFirst({
      where: {
        teacherId: teacher.id,
        studentId: user.id,
      },
    })

    if (exists) {
      throw new Error('Connection request already exists')
    }

    const name =
      user.firstName && user.lastName
        ? `${user.firstName} ${user.lastName}`
        : user.email

    await db.notification.create({
      data: {
        title: 'New connection request',
        message: `${name} has requested to connect to you. Go to your profile to accept or reject the request.`,
        url: '/account',
        user: {
          connect: {
            id: teacher.id,
          },
        },
      },
    })

    return db.teacherStudent.create({
      data: {
        teacherId: teacher.id,
        studentId: user.id,
        accepted: false,
      },
    })
  }

export const TeacherStudent: TeacherStudentRelationResolvers = {
  teacher: (_obj, { root }) => {
    return db.teacherStudent.findUnique({ where: { id: root?.id } }).teacher()
  },
  student: (_obj, { root }) => {
    return db.teacherStudent.findUnique({ where: { id: root?.id } }).student()
  },
}
