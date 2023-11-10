import { FaGamepad, FaHome } from 'react-icons/fa'

import { Link, routes, useLocation } from '@redwoodjs/router'

type PlayFlashcardsResultsProps = {
  correctCount: number
  answerCount: number
  timeElapsed: number
  streak: number
}

const PlayFlashcardsResults = ({
  correctCount,
  answerCount,
  timeElapsed,
  streak,
}: PlayFlashcardsResultsProps) => {
  const readableTimeElapsed = timeElapsed / 1000

  const { pathname } = useLocation()

  const playAgain = () => {
    document.location.reload()
  }

  return (
    <div className="mx-auto flex min-h-[16rem] max-w-lg flex-col justify-center rounded-lg bg-gradient-to-br from-sand to-salmon-light p-5 text-center text-forest shadow-lg">
      <h1 className="text-4xl font-bold">Results</h1>
      <p className="mt-3">
        You got {correctCount} out of {answerCount} correct.
      </p>
      <p className="mt-1">
        That&apos;s {Math.round((correctCount / answerCount) * 100)}% correct!
      </p>
      <p className="mt-1">You got {streak} in a row correct. Keep it up!</p>
      <p className="mt-1">You took {readableTimeElapsed} seconds.</p>
      <p className="mt-1">
        That&apos;s an average of{' '}
        {Math.round(readableTimeElapsed / answerCount)} seconds per question.
      </p>

      <div className="mx-auto mt-5 flex flex-row items-center justify-center gap-5">
        <Link
          to={routes.playOverview()}
          className="flex flex-row items-center gap-2 rounded-lg bg-blue-600 p-2 px-3 text-center text-white drop-shadow transition-colors hover:bg-blue-700"
        >
          <FaHome />
          Go back
        </Link>
        <Link
          to={pathname}
          onClick={playAgain}
          className="flex flex-row items-center gap-2 rounded-lg bg-green-600 p-2 px-3 text-center text-white drop-shadow transition-colors hover:bg-green-700"
        >
          <FaGamepad />
          Play Again
        </Link>
      </div>
    </div>
  )
}

export default PlayFlashcardsResults
