import { useEffect } from 'react'

import { Flashcard } from 'types/graphql'

import { Form, InputField } from '@redwoodjs/forms'

import checkAnswer from 'src/lib/check-answer'
import classNames from 'src/lib/class-names'

import correctAudio from '../../../public/audio/correct.wav'
import incorrectAudio from '../../../public/audio/incorrect.wav'

type PlayTextQuestionProps = {
  index?: number
  flashcard: Flashcard
  onCorrect: () => void
  onIncorrect: () => void
  inverse?: boolean
}

const PlayTextQuestion = ({
  flashcard,
  onCorrect,
  onIncorrect,
  inverse = false,
}: PlayTextQuestionProps) => {
  const front = inverse ? flashcard.back : flashcard.front
  const back = inverse ? flashcard.front : flashcard.back

  const [answered, setAnswered] = React.useState(false)
  const [state, setState] = React.useState<'correct' | 'incorrect' | 'none'>(
    'none'
  )
  const formRef = React.useRef<HTMLFormElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  useEffect(() => {
    setAnswered(false)
    setState('none')
    // wait 1ms to focus the input
    setTimeout(() => {
      inputRef.current?.focus()
    }, 1)
  }, [flashcard])

  const isCorrect = (answer, back) => checkAnswer(answer, back)

  const onSubmit = (data) => {
    if (isCorrect(data.answer, back)) {
      setState('correct')
      onCorrect()
    } else {
      setState('incorrect')
      onIncorrect()
    }
    setAnswered(true)
    formRef.current?.reset()
  }

  const getStateClassNames = () => {
    if (answered) {
      if (state === 'correct') {
        return 'bg-gradient-to-br from-aqua to-green-200'
      } else if (state === 'incorrect') {
        return 'bg-gradient-to-br from-salmon to-red-200'
      }
    }
    return 'bg-gradient-to-br from-sand to-salmon-light'
  }

  return (
    <div
      className={classNames(
        'mx-auto flex min-h-[16rem] max-w-lg flex-col justify-center rounded-lg p-5 drop-shadow-lg transition-colors',
        getStateClassNames()
      )}
    >
      <h2
        className={classNames(
          'relative text-center',
          !answered ? 'mt-5 text-2xl font-bold' : 'text-sm text-gray-500'
        )}
      >
        {front.join(' / ')}
        {answered && (
          <div className="absolute left-1/2 top-full h-1/2 w-[1px] translate-x-1/2 bg-gray-500 text-xs"></div>
        )}
      </h2>

      {answered && (
        <h2 className="text-center text-2xl font-bold">{back.join(' / ')}</h2>
      )}

      {answered && (
        <audio
          src={state === 'correct' ? correctAudio : incorrectAudio}
          autoPlay
          hidden
        >
          <track kind="captions" />
        </audio>
      )}

      <Form
        onSubmit={onSubmit}
        className={classNames('mt-4', answered ? 'hidden' : 'block')}
        ref={formRef}
      >
        <InputField
          type="text"
          name="answer"
          ref={inputRef}
          placeholder='Type the answer here and press "Enter"'
          className="mx-auto block rounded bg-forest px-4 py-2 text-center font-bold text-white transition-colors hover:bg-aqua"
        />
        <button className="mx-auto mt-4 block rounded bg-forest px-4 py-2 text-center font-bold text-white transition-colors hover:bg-aqua">
          Submit
        </button>
      </Form>
    </div>
  )
}

export default PlayTextQuestion
