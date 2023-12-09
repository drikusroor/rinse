import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

// user query that does not return sensitive information
export const editUser: QueryResolvers['editUser'] = ({ id }) => {
  const { currentUser } = context

  console.log('currentUser', currentUser, id, currentUser?.id === id)

  if (currentUser?.id !== id) {
    throw new ForbiddenError('You are not authorized to access this user.')
  }

  return db.user.findUnique({
    where: { id },
    include: {
      teachers: true,
    },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  deck: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).deck()
  },
  PlaySession: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).PlaySession()
  },
  layConfigurations: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).layConfigurations()
  },
  teachers: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).teachers()
  },
  students: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).students()
  },
  notifications: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).notifications()
  },
}
