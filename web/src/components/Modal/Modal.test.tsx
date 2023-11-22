import { fireEvent, render, screen, waitFor } from '@redwoodjs/testing/web'

import Modal from './Modal'

describe('Modal', () => {
  it('renders successfully', () => {
    const onCancel = jest.fn()
    expect(() => {
      render(<Modal isOpen onCancel={onCancel} />)
    }).not.toThrow()
  })

  it('renders the modal when `isOpen` is true', () => {
    render(<Modal isOpen onCancel={() => {}} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('does not render the modal when `isOpen` is false', () => {
    render(<Modal isOpen={false} onCancel={() => {}} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the title when provided', () => {
    const title = 'Test Modal Title'
    render(<Modal isOpen title={title} onCancel={() => {}} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('calls `onCancel` when the backdrop is clicked', () => {
    const onCancel = jest.fn()
    render(<Modal isOpen onCancel={onCancel} />)
    fireEvent.click(screen.getByRole('presentation'))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('calls `onCancel` when the escape key is pressed', () => {
    const onCancel = jest.fn()
    render(<Modal isOpen onCancel={onCancel} />)
    fireEvent.keyDown(screen.getByRole('presentation'), {
      key: 'Escape',
      code: 'Escape',
    })
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('does not call `onCancel` when the modal content is clicked', () => {
    const onCancel = jest.fn()
    render(<Modal isOpen onCancel={onCancel} />)
    fireEvent.click(screen.getByRole('dialog'))
    expect(onCancel).not.toHaveBeenCalled()
  })

  it('calls `onConfirm` when the confirm button is clicked', () => {
    const onConfirm = jest.fn()
    render(<Modal isOpen onConfirm={onConfirm} onCancel={() => {}} />)
    fireEvent.click(screen.getByText('Confirm'))
    expect(onConfirm).toHaveBeenCalledTimes(1)
  })

  it('displays custom button texts when provided', () => {
    const confirmText = 'Yes, I’m sure'
    const cancelText = 'No, cancel'
    render(
      <Modal
        isOpen
        confirmButtonText={confirmText}
        cancelButtonText={cancelText}
        onConfirm={jest.fn()}
        onCancel={jest.fn()}
      />
    )
    expect(screen.getByText(confirmText)).toBeInTheDocument()
    expect(screen.getByText(cancelText)).toBeInTheDocument()
  })

  it('transitions to closed state after a delay when `isOpen` is set to false', async () => {
    jest.useFakeTimers()
    const { rerender } = render(<Modal isOpen onCancel={() => {}} />)
    rerender(<Modal isOpen={false} onCancel={() => {}} />)

    fireEvent.transitionEnd(screen.getByRole('presentation'))
    jest.advanceTimersByTime(300) // Advance timers by the length of your transition

    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    )
    jest.useRealTimers()
  })

  it('adds an "-translate-y-4" class to the modal when it is in the process of opening', () => {
    render(<Modal isOpen onCancel={() => {}} />)
    expect(screen.getByRole('dialog')).toHaveClass('-translate-y-4')
  })

  it('adds a "-translate-y-4" class to the modal when it is in the process of closing', () => {
    jest.useFakeTimers()
    const { rerender } = render(<Modal isOpen onCancel={() => {}} />)
    rerender(<Modal isOpen={false} onCancel={() => {}} />)
    jest.advanceTimersByTime(50)

    expect(screen.getByRole('dialog')).toHaveClass('-translate-y-4')

    jest.useRealTimers()
  })
})
