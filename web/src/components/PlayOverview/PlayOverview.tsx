import { FaRecycle, FaTerminal } from 'react-icons/fa'

import { Link, routes } from '@redwoodjs/router'

import { truncate } from 'src/lib/formatters'

type PlayOverviewProps = {
  decks: Deck[]
  studySets: StudySet[]
}

const PlayOverview = ({ decks, studySets }: PlayOverviewProps) => {
  const getUniqueStudySetFlashcards = (studySet: StudySet) => {
    const flashcards: Flashcard[] = []
    studySet.studySetDecks.forEach((studySetDeck) => {
      studySetDeck.deck.flashcards.forEach((flashcard) => {
        flashcards.push(flashcard)
      })
    })
    return flashcards
  }

  return (
    <div>
      <section>
        <h2 className="text-2xl font-bold text-sand">Decks</h2>
        <ul className="mt-3 flex flex-wrap gap-4">
          {decks.map((deck) => (
            <li key={deck.id} className="group relative">
              <Link
                to={routes.playDeck({ id: deck.id, answerMode: 'text' })}
                className="block rounded-lg bg-gradient-to-br from-sand to-salmon-light p-5 drop-shadow-lg"
              >
                <h3 className="text-2xl font-bold">
                  {deck.name}
                  <span className="ml-2 rounded-full bg-forest px-2 py-1 text-sm text-sand">
                    {deck.flashcards.length}
                  </span>
                </h3>
                <p className="mt-1 text-xs text-gray-700">
                  {truncate(deck.description)}
                </p>
              </Link>

              <div className="absolute bottom-0 right-0 grid grid-cols-2 gap-1 p-1 opacity-0 transition-opacity group-hover:opacity-100">
                <Link
                  title="Play in manual flashcard mode (inverse)"
                  to={routes.playDeck({
                    id: deck.id,
                    answerMode: 'manual',
                    inverse: true,
                  })}
                  className="rounded bg-gradient-to-br from-sand to-aqua p-2 text-forest drop-shadow-lg transition hover:-translate-y-1"
                >
                  <FaRecycle />
                </Link>

                <Link
                  title="Play in text question mode (inverse)"
                  to={routes.playDeck({
                    id: deck.id,
                    answerMode: 'text',
                    inverse: true,
                  })}
                  className="rounded bg-gradient-to-br from-sand to-aqua p-2 text-forest drop-shadow-lg transition hover:-translate-y-1"
                >
                  <FaTerminal />
                </Link>

                <Link
                  title="Play in manual flashcard mode"
                  to={routes.playDeck({ id: deck.id, answerMode: 'manual' })}
                  className="rounded bg-gradient-to-br from-forest to-aqua p-2 text-sand drop-shadow-lg transition hover:-translate-y-1"
                >
                  <FaRecycle />
                </Link>

                <Link
                  title="Play in text question mode"
                  to={routes.playDeck({ id: deck.id, answerMode: 'text' })}
                  className="rounded bg-gradient-to-br from-forest to-aqua p-2 text-sand drop-shadow-lg transition hover:-translate-y-1"
                >
                  <FaTerminal />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* Hidden until we have study sets working */}
      <section className="mt-8 hidden">
        <h2 className="text-2xl font-bold text-sand">Study Sets</h2>
        <ul className="mt-3 flex flex-wrap gap-4">
          {studySets.map((studySet) => (
            <li key={studySet.id}>
              <Link
                to={routes.playStudySet({ id: studySet.id })}
                className="block rounded-lg bg-gradient-to-br from-sand to-salmon-light p-5 drop-shadow-lg"
              >
                <h3 className="text-2xl font-bold">
                  {studySet.name}
                  <span className="ml-2 rounded-full bg-forest px-2 py-1 text-sm text-sand">
                    {getUniqueStudySetFlashcards(studySet).length}
                  </span>
                </h3>
                <ul>
                  {studySet.studySetDecks.map((studySetDeck) => (
                    <li key={studySetDeck.id}>
                      <h4 className="text-xl font-bold">
                        {studySetDeck.deck.name}
                      </h4>
                      <p className="text-gray-500">
                        {studySetDeck.deck.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default PlayOverview
