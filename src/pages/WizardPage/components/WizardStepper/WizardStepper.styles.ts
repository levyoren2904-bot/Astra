import styled from 'styled-components'

// ── StepCircle ────────────────────────────────────────────────────────────────

export const StepCircleOuter = styled.div({
  width: 48,
  height: 48,
})

export const StepRingBg = styled.div({
  background: 'rgba(92,93,239,0.18)',
})

export const StepInnerCircle = styled.div({
  inset: 6,
})

export const StepInnerCircleInactive = styled.div({
  inset: 6,
  border: '1px solid #878792',
})

export const StepNumActive = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.4,
})

export const StepNumInactive = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.4,
  color: '#666',
})

// ── WizardStepper ─────────────────────────────────────────────────────────────

export const StepLabelWrap = styled.div({
  width: 124,
})

export const StepText = styled.p<{ $active: boolean }>(({ $active }) => ({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.4,
  textAlign: 'right',
  margin: 0,
  color: $active ? '#242424' : '#666',
}))

export const ConnectorOuter = styled.div({
  width: 50,
  height: 2,
})

export const ConnectorLine = styled.div({
  width: 266,
  height: 1.5,
  background: '#878792',
})
