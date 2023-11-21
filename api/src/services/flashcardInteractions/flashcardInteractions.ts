import type {
  QueryResolvers,
  MutationResolvers,
  FlashcardInteractionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const flashcardInteractions: QueryResolvers['flashcardInteractions'] =
  () => {
    return db.flashcardInteraction.findMany()
  }

export const flashcardInteraction: QueryResolvers['flashcardInteraction'] = ({
  id,
}) => {
  return db.flashcardInteraction.findUnique({
    where: { id },
  })
}

export const createFlashcardInteraction: MutationResolvers['createFlashcardInteraction'] =
  ({ input }) => {
    return db.flashcardInteraction.create({
      data: input,
    })
  }

export const updateFlashcardInteraction: MutationResolvers['updateFlashcardInteraction'] =
  ({ id, input }) => {
    return db.flashcardInteraction.update({
      data: input,
      where: { id },
    })
  }

export const deleteFlashcardInteraction: MutationResolvers['deleteFlashcardInteraction'] =
  ({ id }) => {
    return db.flashcardInteraction.delete({
      where: { id },
    })
  }

export const FlashcardInteraction: FlashcardInteractionRelationResolvers = {
  flashcard: (_obj, { root }) => {
    return db.flashcardInteraction
      .findUnique({ where: { id: root?.id } })
      .flashcard()
  },
  playSession: (_obj, { root }) => {
    return db.flashcardInteraction
      .findUnique({ where: { id: root?.id } })
      .playSession()
  },
}
