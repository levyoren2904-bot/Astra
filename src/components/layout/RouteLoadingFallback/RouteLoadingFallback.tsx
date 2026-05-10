import type { FC } from 'react'
import { FallbackRoot, FallbackText } from './RouteLoadingFallback.styles'

export const RouteLoadingFallback: FC = () => (
  <FallbackRoot role="status" aria-live="polite">
    <FallbackText dir="auto">טוען…</FallbackText>
  </FallbackRoot>
)
