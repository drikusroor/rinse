import type {
  QueryResolvers,
  MutationResolvers,
  PlayConfigurationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const playConfigurations: QueryResolvers['playConfigurations'] = () => {
  return db.playConfiguration.findMany()
}

export const playConfiguration: QueryResolvers['playConfiguration'] = ({
  id,
}) => {
  return db.playConfiguration.findUnique({
    where: { id },
  })
}

export const createPlayConfiguration: MutationResolvers['createPlayConfiguration'] =
  ({ input }) => {
    if (input.userId !== context.currentUser.id) {
      throw new Error('Unauthorized')
    }

    return db.playConfiguration.create({
      data: input,
    })
  }

export const updatePlayConfiguration: MutationResolvers['updatePlayConfiguration'] =
  ({ id, input }) => {
    if (input.userId !== context.currentUser.id) {
      throw new Error('Unauthorized')
    }

    return db.playConfiguration.update({
      data: input,
      where: { id },
    })
  }

export const deletePlayConfiguration: MutationResolvers['deletePlayConfiguration'] =
  ({ id }) => {
    return db.playConfiguration.delete({
      where: { id },
    })
  }

export const PlayConfiguration: PlayConfigurationRelationResolvers = {
  user: (_obj, { root }) => {
    return db.playConfiguration.findUnique({ where: { id: root?.id } }).user()
  },
}
