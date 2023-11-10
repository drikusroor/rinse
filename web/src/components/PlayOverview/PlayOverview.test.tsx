import { render } from '@redwoodjs/testing/web'

import { makeDecks } from 'src/../fixtures/deck'
import { makeStudySets } from 'src/../fixtures/study-set'

import PlayOverview from './PlayOverview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayOverview', () => {
  it('renders successfully', () => {
    const decks = makeDecks(3)
    const studySets = makeStudySets(3)

    expect(() => {
      render(<PlayOverview decks={decks} studySets={studySets} />)
    }).not.toThrow()
  })
})
