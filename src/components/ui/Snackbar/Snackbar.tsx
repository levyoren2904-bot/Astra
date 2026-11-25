import { useEffect, useState, type FC } from 'react'
import { CloseIcon } from '@/components/ui/CloseIcon'
import { Root, Message, CloseBtn } from './Snackbar.styles'

const LEAVE_MS = 220

type SnackbarProps = {
  message: string
  onClose: () => void
  /** Auto-dismiss after this many ms. Default 4000. */
  duration?: number
}

/** Success snackbar: green check + message, auto-dismisses, closable. */
export const Snackbar: FC<SnackbarProps> = ({ message, onClose, duration = 4000 }) => {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setLeaving(true), duration)
    return () => window.clearTimeout(t)
  }, [duration])

  useEffect(() => {
    if (!leaving) return
    const t = window.setTimeout(onClose, LEAVE_MS)
    return () => window.clearTimeout(t)
  }, [leaving, onClose])

  return (
    <Root $leaving={leaving} role="status" aria-live="polite" dir="rtl">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="14" fill="#2fc198" />
        <path
          d="M8.5 14.5l3.6 3.6 7.4-7.6"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Message dir="auto">{message}</Message>
      <CloseBtn type="button" aria-label="סגור" onClick={() => setLeaving(true)}>
        <CloseIcon />
      </CloseBtn>
    </Root>
  )
}
