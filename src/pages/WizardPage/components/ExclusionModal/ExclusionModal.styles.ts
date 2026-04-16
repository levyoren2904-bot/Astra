import styled from 'styled-components'

export const ModalOverlay = styled.div({
  background: 'rgba(0,0,0,0.4)',
})

export const ModalBox = styled.div({
  width: 548,
  height: 246,
  overflow: 'hidden',
  background: '#f5f5f6',
  borderRadius: 8,
  boxShadow: '0px 0px 31.6px 2px rgba(0,0,0,0.25)',
  gap: 8,
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
  background: $active ? '#5c5def' : '#d7d7da',
  height: 32,
  padding: '4px 16px',
  border: 'none',
  borderRadius: 4,
  cursor: $active ? 'pointer' : 'not-allowed',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
}))

export const PrimaryBtnLabel = styled.span<{ $active: boolean }>(({ $active }) => ({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: $active ? '#fff' : '#b3b3b3',
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

export const WarningIcon = styled.img({
  width: 40,
  height: 40,
})

export const WarningText = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.4,
  color: '#242424',
  margin: 0,
  textAlign: 'center',
})

export const WarningBody = styled.div({
  gap: 12,
  padding: '0 16px',
})

export const CodeBody = styled.div({
  padding: 16,
  gap: 6,
})

export const FieldLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  color: '#666',
})

export const CodeInputRow = styled.div({
  gap: 10,
})

export const SubmitCodeBtn = styled.button({
  background: '#5c5def',
  height: 40,
  padding: '4px 16px',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
})

export const SubmitCodeBtnLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#fff',
  whiteSpace: 'nowrap',
})

export const CodeInput = styled.input<{ $error: boolean; $verified: boolean }>(
  ({ $error, $verified }) => ({
    height: 40,
    background: '#fff',
    borderRadius: 4,
    padding: '4px 8px',
    fontFamily: 'Rubik, sans-serif',
    fontSize: 14,
    color: '#242424',
    outline: 'none',
    textAlign: 'right',
    width: 320,
    border: `1px solid ${$error ? '#f65e53' : $verified ? '#70c969' : '#666'}`,
  }),
)

export const CodeStatusMsg = styled.p<{ $error: boolean; $verified: boolean }>(
  ({ $error, $verified }) => ({
    fontFamily: 'Rubik, sans-serif',
    fontSize: 12,
    lineHeight: 1,
    margin: 0,
    height: 12,
    color: $error ? '#f65e53' : $verified ? '#70c969' : '#aaa',
  }),
)

export const ReasonBody = styled.div({
  padding: 16,
  gap: 6,
})

export const ReasonFieldLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1,
  color: '#666',
})

export const ReasonTextarea = styled.textarea({
  flex: 1,
  width: '100%',
  background: '#fff',
  border: '1px solid #666',
  borderRadius: 4,
  padding: '4px 8px',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  color: '#242424',
  resize: 'none',
  outline: 'none',
  textAlign: 'right',
})
