import styled from 'styled-components'

export const ModalOverlay = styled.div({
  background: 'rgba(0,0,0,0.4)',
})

export const ModalBox = styled.div({
  width: 548,
  height: 246,
  background: '#f5f5f6',
  borderRadius: 8,
  boxShadow: '0px 0px 31.6px 2px rgba(0,0,0,0.25)',
  gap: 8,
  overflow: 'hidden',
})

export const ModalHeaderRow = styled.div({
  gap: 24,
  padding: 16,
})

export const ModalTitle = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 24,
  fontWeight: 600,
  lineHeight: 1,
  color: '#242424',
  margin: 0,
})

export const ModalFooter = styled.div({
  gap: 16,
  padding: 16,
})

export const PrimaryBtn = styled.button<{ $active: boolean }>(({ $active }) => ({
  background: $active ? '#5c5def' : '#f5f5f6',
  height: 32,
  padding: '4px 16px',
  boxShadow: $active ? '0px 2px 4px 0px rgba(0,0,0,0.3)' : 'none',
  border: 'none',
  borderRadius: 4,
  cursor: $active ? 'pointer' : 'not-allowed',
}))

export const PrimaryBtnLabel = styled.span<{ $active: boolean }>(({ $active }) => ({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: $active ? '#fff' : '#8c8c8c',
  whiteSpace: 'nowrap',
}))

export const CancelBtn = styled.button({
  border: '1px solid #5c5def',
  width: 70,
  height: 32,
  background: 'transparent',
  cursor: 'pointer',
  borderRadius: 4,
})

export const CancelBtnLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
})

export const ResultBody = styled.div({
  gap: 12,
})

export const ResultIconLg = styled.img({
  width: 56,
  height: 56,
})

export const ResultIconSm = styled.img({
  width: 40,
  height: 40,
})

export const ResultMessage = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1,
  color: '#242424',
  margin: 0,
  textAlign: 'center',
})

export const FailureMessages = styled.div({
  gap: 4,
})

export const QuestionBody = styled.div({
  padding: 16,
  gap: 8,
})

export const QuestionText = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 24,
  fontWeight: 400,
  lineHeight: 1,
  color: '#1e1f33',
  margin: 0,
})

export const OptionBtn = styled.button<{ $bg: string; $answered: boolean }>(
  ({ $bg, $answered }) => ({
    flex: 1,
    background: $bg,
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
    padding: 8,
    cursor: $answered ? 'default' : 'pointer',
    border: 'none',
    transition: 'background 0.2s',
  }),
)

export const OptionLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 18,
  fontWeight: 400,
  lineHeight: 1,
  color: '#1e1f33',
  whiteSpace: 'nowrap',
})
