export function classNames(...args: string[]): string {
  return args.filter(Boolean).join(' ')
}

export default classNames
