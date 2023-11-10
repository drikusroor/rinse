import { Link, routes, useLocation } from '@redwoodjs/router'

type PlayFlashcardsResultsProps = {
  correctCount: number
  answerCount: number
  timeElapsed: number
}

const PlayFlashcardsResults = ({
  correctCount,
  answerCount,
  timeElapsed,
}: PlayFlashcardsResultsProps) => {
  const readableTimeElapsed = timeElapsed / 1000

  const { pathname } = useLocation()

  const playAgain = () => {
    document.location.reload()
  }

  return (
    <div className="mx-auto w-1/2 rounded-lg bg-gradient-to-br from-sand to-salmon-light p-5 text-center text-forest shadow-lg">
      <h1 className="text-4xl font-bold">Results</h1>
      <p className="mt-3">
        You got {correctCount} out of {answerCount} correct.
      </p>
      <p className="mt-1">
        That&apos;s {Math.round((correctCount / answerCount) * 100)}% correct!
      </p>
      <p className="mt-1">You took {readableTimeElapsed} seconds.</p>
      <p className="mt-1">
        That&apos;s an average of{' '}
        {Math.round(readableTimeElapsed / answerCount)} seconds per question.
      </p>

      <div className="mx-auto mt-5 flex flex-row items-center justify-center gap-5">
        <Link
          to={routes.playOverview()}
          className="rounded-lg bg-blue-600 p-2 text-center text-white shadow-lg transition-colors hover:bg-blue-700"
        >
          Go back
        </Link>
        <Link
          to={pathname}
          onClick={playAgain}
          className="rounded-lg bg-green-600 p-2 text-center text-white shadow-lg transition-colors hover:bg-green-700"
        >
          Play Again
        </Link>
      </div>
    </div>
  )
}

export default PlayFlashcardsResults
