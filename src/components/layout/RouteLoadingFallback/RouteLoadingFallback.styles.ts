import styled from 'styled-components'

const F = 'Rubik, sans-serif'

export const FallbackRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100dvh',
  width: '100%',
  background: 'rgba(236,236,236,0.85)',
})

export const FallbackText = styled.p({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 500,
  color: '#242424',
  margin: 0,
})
