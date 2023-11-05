import type {
  QueryResolvers,
  MutationResolvers,
  StudySetRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const studySets: QueryResolvers['studySets'] = () => {
  return db.studySet.findMany()
}

export const studySet: QueryResolvers['studySet'] = ({ id }) => {
  return db.studySet.findUnique({
    where: { id },
  })
}

export const createStudySet: MutationResolvers['createStudySet'] = ({
  input,
}) => {
  return db.studySet.create({
    data: input,
  })
}

export const updateStudySet: MutationResolvers['updateStudySet'] = ({
  id,
  input,
}) => {
  return db.studySet.update({
    data: input,
    where: { id },
  })
}

export const deleteStudySet: MutationResolvers['deleteStudySet'] = ({ id }) => {
  return db.studySet.delete({
    where: { id },
  })
}

export const StudySet: StudySetRelationResolvers = {
  StudySetDeck: (_obj, { root }) => {
    return db.studySet.findUnique({ where: { id: root?.id } }).StudySetDeck()
  },
}
