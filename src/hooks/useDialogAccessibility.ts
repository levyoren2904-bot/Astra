import { useEffect, useRef, type RefObject } from 'react'

/** Focus dialog container and close on Escape (capture phase). */
export function useDialogAccessibility(
  dialogRef: RefObject<HTMLElement | null>,
  onEscape: () => void,
): void {
  const onEscapeRef = useRef(onEscape)
  onEscapeRef.current = onEscape

  useEffect(() => {
    const el = dialogRef.current
    el?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        onEscapeRef.current()
      }
    }

    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [dialogRef])
}
