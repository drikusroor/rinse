import type {
  QueryResolvers,
  MutationResolvers,
  FlashcardRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const flashcards: QueryResolvers['flashcards'] = () => {
  return db.flashcard.findMany()
}

export const flashcard: QueryResolvers['flashcard'] = ({ id }) => {
  return db.flashcard.findUnique({
    where: { id },
  })
}

export const createFlashcard: MutationResolvers['createFlashcard'] = ({
  input,
}) => {
  return db.flashcard.create({
    data: input,
  })
}

export const updateFlashcard: MutationResolvers['updateFlashcard'] = ({
  id,
  input,
}) => {
  return db.flashcard.update({
    data: input,
    where: { id },
  })
}

export const deleteFlashcard: MutationResolvers['deleteFlashcard'] = ({
  id,
}) => {
  return db.flashcard.delete({
    where: { id },
  })
}

export const Flashcard: FlashcardRelationResolvers = {
  deck: (_obj, { root }) => {
    return db.flashcard.findUnique({ where: { id: root?.id } }).deck()
  },
}
