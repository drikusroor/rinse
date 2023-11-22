/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react'

import classNames from 'src/lib/class-names'

interface ModalProps {
  isOpen: boolean
  children?: React.ReactNode
  title?: string
  confirmButtonText?: string
  cancelButtonText?: string
  onConfirm?: () => void
  onCancel: () => void
  hideCloseButton?: boolean
}

type RenderState = 'open' | 'opening' | 'closed' | 'closing'

const Modal = ({
  children,
  isOpen,
  title = '',
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  onConfirm,
  onCancel,
  hideCloseButton = false,
}: ModalProps) => {
  const [renderState, setRenderState] = useState<RenderState>('closed')

  const showButtonBar = onConfirm || (onCancel && !hideCloseButton)

  useEffect(() => {
    if (isOpen) {
      if (renderState !== 'closed') {
        return
      }
      setRenderState('opening')
      setTimeout(() => setRenderState('open'), 50)
    } else {
      if (renderState !== 'open') {
        return
      }
      setRenderState('closing')
      setTimeout(() => setRenderState('closed'), 300)
    }
  }, [isOpen, renderState])

  if (renderState === 'closed') {
    return null
  }

  return (
    <div
      className={classNames(
        'fixed inset-0 z-10 flex h-screen w-screen items-center justify-center overflow-y-auto bg-gray-600/50 transition-opacity',
        renderState === 'open' ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
      onClick={onCancel}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onCancel()
        }
      }}
      role="presentation"
    >
      <div
        className={classNames(
          'relative w-96 rounded-md border bg-white p-5 shadow-lg transition-transform',
          renderState === 'open' ? 'translate-y-0' : '-translate-y-4'
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {title && (
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>
          )}
          {children && <p className="text-sm text-gray-500">{children}</p>}
        </div>

        {showButtonBar && (
          <div className="mt-4 flex items-center justify-end gap-2">
            {onCancel && !hideCloseButton && (
              <button
                onClick={onCancel}
                className="mb-1 mr-1 rounded bg-red-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none hover:shadow-md focus:outline-none active:bg-red-600"
                style={{ transition: 'all .15s ease' }}
              >
                {cancelButtonText || 'Cancel'}
              </button>
            )}

            {onConfirm && (
              <button
                onClick={onConfirm}
                className="mb-1 mr-1 rounded bg-green-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none hover:shadow-md focus:outline-none active:bg-green-600"
                style={{ transition: 'all .15s ease' }}
              >
                {confirmButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
