import styled from 'styled-components'

export const EligibilityRoot = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 0,
  width: '100%',
})

export const EligibilityCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 16,
  borderRadius: 8,
  flexShrink: 0,
  border: '1px solid #bdbdc2',
})

export const EligibilityCardHeader = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 4,
})

export const EligibilityLabel = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#242424',
  margin: 0,
})

export const EligibilityValue = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
})
