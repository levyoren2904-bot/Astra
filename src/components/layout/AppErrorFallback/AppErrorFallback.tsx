import type { FC } from 'react'
import { FallbackRoot, FallbackTitle, FallbackDetail } from './AppErrorFallback.styles'

export const AppErrorFallback: FC = () => (
  <FallbackRoot role="alert">
    <FallbackTitle dir="auto">אירעה שגיאה בטעינת המערכת</FallbackTitle>
    <FallbackDetail dir="auto">רענן את הדף או פנה לתמיכה טכנית אם הבעיה נמשכת.</FallbackDetail>
  </FallbackRoot>
)
