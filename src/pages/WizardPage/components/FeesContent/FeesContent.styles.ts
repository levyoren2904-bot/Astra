import styled from 'styled-components'

export const DevBar = styled.div({
  position: 'absolute',
  bottom: 48,
  right: 8,
  zIndex: 50,
  display: 'flex',
  gap: 4,
})

export const DevBtn = styled.button<{ $active: boolean }>(({ $active }) => ({
  fontSize: 11,
  padding: '2px 8px',
  background: $active ? '#f65e53' : '#eee',
  color: $active ? '#fff' : '#000',
  border: '1px solid #ccc',
  borderRadius: 4,
  cursor: 'pointer',
}))

export const CheckingSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  padding: 16,
})

export const FeeStatusTitle = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#242424',
  margin: 0,
})

export const CheckingAnim = styled.img({
  width: 300,
  height: 300,
  objectFit: 'cover',
  pointerEvents: 'none',
})

export const PaidSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
})

export const PaidInner = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  padding: 16,
})

export const FeeTick = styled.img({
  width: 40,
  height: 40,
})

export const FeeNote = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
})

export const FeeDisclaimer = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
})

export const CardTypeRow = styled.div({
  display: 'flex',
  gap: 24,
  alignItems: 'flex-start',
})

export const CardTypeCard = styled.div({
  background: '#f5f5f6',
  borderRadius: 8,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  alignItems: 'flex-end',
})

export const CardTypeHeader = styled.div({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  justifyContent: 'flex-end',
})

export const CardTypeLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  color: '#242424',
})

export const RadioBtn = styled.button({
  width: 16,
  height: 16,
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  flexShrink: 0,
})

export const RadioImg = styled.img({
  width: 16,
  height: 16,
})

export const RadioCircle = styled.div({
  width: 16,
  height: 16,
  borderRadius: '50%',
  border: '1px solid #666',
})

export const UnpaidSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  padding: 16,
})

export const UnpaidIconBox = styled.div({
  width: 160,
  height: 161,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const FeeWarn = styled.img({
  width: 60,
  height: 60,
})

export const QueueBtn = styled.button({
  background: '#5c5def',
  borderRadius: 4,
  height: 38,
  padding: '0 24px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.3)',
})

export const QueueBtnLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 18,
  fontWeight: 700,
  color: 'white',
  whiteSpace: 'nowrap',
})

export const ReCheckBtn = styled.button({
  background: 'transparent',
  borderRadius: 4,
  height: 32,
  width: '100%',
  border: '1px solid #5c5def',
  cursor: 'pointer',
})

export const ReCheckBtnLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
})

export const ExclusionBtn = styled.button({
  background: 'transparent',
  borderRadius: 4,
  height: 38,
  width: '100%',
  border: 'none',
  cursor: 'pointer',
})

export const ExclusionBtnInner = styled.div({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  justifyContent: 'center',
})

export const ExclusionBtnLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
})

export const ExclusionIcon = styled.img({
  width: 24,
  height: 24,
})
