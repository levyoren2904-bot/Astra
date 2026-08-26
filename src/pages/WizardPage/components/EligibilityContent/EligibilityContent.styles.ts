import styled from 'styled-components'

export const EligibilityRoot = styled.div({
  position: 'relative',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 0,
  width: '100%',
})

// Figma 11:4893 — border #bdbdc2, radius 8, padding 16, gap 16 between all three children.
export const EligibilityCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 16,
  padding: 16,
  borderRadius: 8,
  flexShrink: 0,
  border: '1px solid #bdbdc2',
})

// Body/Bold — Rubik 16/700, lineHeight 100%.
export const EligibilityLabel = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  lineHeight: 'normal',
  color: '#242424',
  margin: 0,
})

// Body small/Regular — Rubik 14/400, lineHeight 100%.
export const EligibilityValue = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 'normal',
  color: '#242424',
  margin: 0,
})

export const EligibilityBoldNote = styled.span({
  fontWeight: 700,
})

// ── Dev-only card-variant switcher (never shown in a normal user build) ────────

export const CardVariantDevBar = styled.div({
  position: 'absolute',
  bottom: 12,
  left: 12,
  display: 'flex',
  gap: 8,
})

export const CardVariantDevBtn = styled.button<{ $active: boolean }>(({ $active }) => ({
  fontSize: 11,
  padding: '2px 6px',
  background: $active ? '#5c5def' : '#eee',
  color: $active ? '#fff' : '#333',
  borderRadius: 4,
  border: 'none',
  cursor: 'pointer',
}))
