import styled from 'styled-components'

const F = 'Rubik, sans-serif'

export const FallbackRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  minHeight: '100dvh',
  width: '100%',
  padding: 24,
  boxSizing: 'border-box',
  background: 'rgba(236,236,236,0.95)',
})

export const FallbackTitle = styled.h1({
  fontFamily: F,
  fontSize: 20,
  fontWeight: 700,
  color: '#242424',
  margin: 0,
  textAlign: 'center',
})

export const FallbackDetail = styled.p({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#666666',
  margin: 0,
  textAlign: 'center',
  maxWidth: 480,
})
