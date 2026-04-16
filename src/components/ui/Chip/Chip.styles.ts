import styled from 'styled-components'

export const ChipRoot = styled.div<{ $bg: string }>(({ $bg }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  borderRadius: 4,
  flexShrink: 0,
  background: $bg,
}))

export const ChipInner = styled.div<{ $width?: number }>(({ $width }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  flexShrink: 0,
  padding: '1.5px 3px',
  ...($width != null ? { width: $width } : {}),
}))

export const ChipLabel = styled.span<{ $color: string }>(({ $color }) => ({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1.4,
  whiteSpace: 'nowrap',
  color: $color,
}))
