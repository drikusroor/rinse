import type {
  QueryResolvers,
  MutationResolvers,
  StudySetDeckRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const studySetDecks: QueryResolvers['studySetDecks'] = () => {
  return db.studySetDeck.findMany()
}

export const studySetDeck: QueryResolvers['studySetDeck'] = ({ id }) => {
  return db.studySetDeck.findUnique({
    where: { id },
  })
}

export const createStudySetDeck: MutationResolvers['createStudySetDeck'] = ({
  input,
}) => {
  return db.studySetDeck.create({
    data: input,
  })
}

export const updateStudySetDeck: MutationResolvers['updateStudySetDeck'] = ({
  id,
  input,
}) => {
  return db.studySetDeck.update({
    data: input,
    where: { id },
  })
}

export const deleteStudySetDeck: MutationResolvers['deleteStudySetDeck'] = ({
  id,
}) => {
  return db.studySetDeck.delete({
    where: { id },
  })
}

export const StudySetDeck: StudySetDeckRelationResolvers = {
  studySet: (_obj, { root }) => {
    return db.studySetDeck.findUnique({ where: { id: root?.id } }).studySet()
  },
  deck: (_obj, { root }) => {
    return db.studySetDeck.findUnique({ where: { id: root?.id } }).deck()
  },
}
