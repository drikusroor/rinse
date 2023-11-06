import type {
  QueryResolvers,
  MutationResolvers,
  DeckRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const decks: QueryResolvers['decks'] = () => {
  return db.deck.findMany()
}

export const deck: QueryResolvers['deck'] = ({ id }) => {
  return db.deck.findUnique({
    where: { id },
  })
}

export const createDeck: MutationResolvers['createDeck'] = ({ input }) => {
  return db.deck.create({
    data: input,
  })
}

export const createUserDeck: MutationResolvers['createUserDeck'] = ({
  input,
}) => {

  const { currentUser } = context

  return db.deck.create({
    data: {
      ...input,
      user: {
        connect: {
          id: currentUser?.id,
        },
      },
    }
  })
}

export const updateDeck: MutationResolvers['updateDeck'] = ({ id, input }) => {
  return db.deck.update({
    data: input,
    where: { id },
  })
}

export const deleteDeck: MutationResolvers['deleteDeck'] = ({ id }) => {
  return db.deck.delete({
    where: { id },
  })
}

export const Deck: DeckRelationResolvers = {
  user: (_obj, { root }) => {
    return db.deck.findUnique({ where: { id: root?.id } }).user()
  },
  Flashcard: (_obj, { root }) => {
    return db.deck.findUnique({ where: { id: root?.id } }).Flashcard()
  },
  StudySetDeck: (_obj, { root }) => {
    return db.deck.findUnique({ where: { id: root?.id } }).StudySetDeck()
  },
}
