import classNames from 'src/lib/class-names'

export const getInputClasses = (overrides = '') =>
  classNames('block w-full p-2 rounded-md border border-gray-300', overrides)

export const getInputErrorClasses = (overrides = '') =>
  classNames(
    'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500',
    overrides
  )
