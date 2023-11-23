import classNames from 'src/lib/class-names'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  overrides?: string
  children: React.ReactNode
}

// style using tailwindcss
const getButtonClasses = (variant, size, overrides = '') =>
  classNames(
    'inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 transition',
    variant === 'primary' &&
      'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    variant === 'secondary' &&
      'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500',
    variant === 'danger' &&
      'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-base',
    size === 'lg' && 'text-lg',
    overrides
  )

const Button = ({
  variant = 'primary',
  size = 'md',
  overrides = '',
  children,
  ...props
}: ButtonProps) => (
  <button className={getButtonClasses(variant, size, overrides)} {...props}>
    {children}
  </button>
)

export default Button
