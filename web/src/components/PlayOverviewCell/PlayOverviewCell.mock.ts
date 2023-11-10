import { makeDecks } from 'src/../fixtures/deck'
import { makeStudySets } from 'src/../fixtures/study-set'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  decks: makeDecks(),
  studySets: makeStudySets(),
})
