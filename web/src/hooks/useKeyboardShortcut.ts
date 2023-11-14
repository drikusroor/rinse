import { useCallback, useEffect } from 'react'

const useKeyboardShortcuts = (shortcuts) => {
  const handleKeyDown = useCallback(
    (event) => {
      shortcuts.forEach(({ keys, action }) => {
        const isShortcutPressed = keys.every((key) => {
          switch (key) {
            case 'Ctrl':
              return event.ctrlKey || event.metaKey // Allows for both Ctrl and Cmd
            case 'Cmd':
              return event.metaKey
            case 'Shift':
              return event.shiftKey
            case 'Alt':
              return event.altKey
            default:
              return event.key.toUpperCase() === key.toUpperCase()
          }
        })

        if (isShortcutPressed) {
          event.preventDefault()
          action()
        }
      })
    },
    [shortcuts]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return null
}

export const useKeyboardShortcut = (keys, action) => {
  return useKeyboardShortcuts([{ keys, action }])
}

export default useKeyboardShortcut
