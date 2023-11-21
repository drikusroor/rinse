import type {
  QueryResolvers,
  MutationResolvers,
  PlaySessionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const playSessions: QueryResolvers['playSessions'] = () => {
  return db.playSession.findMany()
}

export const playSession: QueryResolvers['playSession'] = ({ id }) => {
  return db.playSession.findUnique({
    where: { id },
  })
}

export const createPlaySession: MutationResolvers['createPlaySession'] = ({
  input,
}) => {
  return db.playSession.create({
    data: input,
  })
}

export const updatePlaySession: MutationResolvers['updatePlaySession'] = ({
  id,
  input,
}) => {
  return db.playSession.update({
    data: input,
    where: { id },
  })
}

export const deletePlaySession: MutationResolvers['deletePlaySession'] = ({
  id,
}) => {
  return db.playSession.delete({
    where: { id },
  })
}

export const PlaySession: PlaySessionRelationResolvers = {
  user: (_obj, { root }) => {
    return db.playSession.findUnique({ where: { id: root?.id } }).user()
  },
  deck: (_obj, { root }) => {
    return db.playSession.findUnique({ where: { id: root?.id } }).deck()
  },
  studySet: (_obj, { root }) => {
    return db.playSession.findUnique({ where: { id: root?.id } }).studySet()
  },
  flashcardInteractions: (_obj, { root }) => {
    return db.playSession
      .findUnique({ where: { id: root?.id } })
      .flashcardInteractions()
  },
}
