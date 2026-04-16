import styled from 'styled-components'

const BF = 'Rubik, sans-serif'

export const PageRoot = styled.div({
  height: '100dvh',
})

export const Backdrop = styled.div({
  background: 'rgba(236,236,236,0.6)',
})

export const ModalBox = styled.div({
  left: '50%',
  transform: 'translateX(-50%)',
  top: 24,
  width: 1872,
  maxWidth: 'calc(100vw - 48px)',
  height: 'calc(100dvh - 48px)',
  background: '#fbfbfb',
  borderRadius: 16,
  boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
  padding: 16,
  gap: 24,
  overflow: 'hidden',
})

export const ModalHeaderRow = styled.div({
  padding: '0 16px 16px 16px',
  borderBottom: '1px solid #d7d7da',
})

export const ResidentInfoWrap = styled.div({
  width: 454,
})

export const ResidentId = styled.p({
  fontFamily: BF,
  fontSize: 14,
  fontWeight: 400,
  color: '#666',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const ResidentName = styled.p({
  fontFamily: BF,
  fontSize: 18,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const WizardTitle = styled.p({
  fontFamily: BF,
  fontSize: 24,
  fontWeight: 700,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const PersonalDetailsBox = styled.div({
  border: '1px solid #d7d7da',
  height: 285,
})

export const DevBarWizard = styled.div({
  position: 'absolute',
  bottom: 48,
  right: 8,
  zIndex: 50,
  display: 'flex',
  gap: 4,
})

export const DevBtnWizard = styled.button<{ $active: boolean; $activeBg: string }>(
  ({ $active, $activeBg }) => ({
    fontSize: 11,
    padding: '2px 8px',
    background: $active ? $activeBg : '#eee',
    color: $active ? '#fff' : '#000',
    border: '1px solid #ccc',
    borderRadius: 4,
    cursor: 'pointer',
  }),
)

export const NextBtn = styled.button({
  background: '#5c5def',
  height: 32,
  padding: '0 16px',
  minWidth: 109,
})

export const NextBtnLabel = styled.span({
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: 'white',
  whiteSpace: 'nowrap',
})

export const BackBtn = styled.button<{ $disabled: boolean }>(({ $disabled }) => ({
  border: '1px solid #5c5def',
  width: 70,
  height: 32,
  opacity: $disabled ? 0.4 : 1,
  cursor: $disabled ? 'not-allowed' : 'pointer',
}))

export const BackBtnLabel = styled.span({
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
})

export const CancelBtnWizard = styled.button({
  height: 32,
})

export const CancelBtnWizardLabel = styled.span({
  fontFamily: BF,
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
  padding: '0 16px',
})
