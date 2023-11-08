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
    },
  })
}

export const updateDeck: MutationResolvers['updateUserDeck'] = ({
  id,
  input,
}) => {
  return db.deck.update({
    data: input,
    where: { id },
  })
}

export const updateUserDeck: MutationResolvers['updateUserDeck'] = ({
  id,
  input,
}) => {
  return db.deck.update({
    data: {
      ...input,
      flashcards: {
        upsert: input.flashcards.map((flashcard) => ({
          where: { id: flashcard.id ? flashcard.id : 0 },
          create: flashcard,
          update: flashcard,
        })),
      },
    },
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
  flashcards: (_obj, { root }) => {
    return db.deck.findUnique({ where: { id: root?.id } }).flashcards()
  },
  studySetDecks: (_obj, { root }) => {
    return db.deck.findUnique({ where: { id: root?.id } }).studySetDecks()
  },
}
