import styled from 'styled-components'

export const PanelRoot = styled.div({
  padding: '16px 0',
})

export const FaceSection = styled.div({
  paddingInline: 48,
  gap: 48,
})

export const OpenQuestionnaireBtn = styled.button({
  border: '1px solid #5c5def',
  height: 32,
  padding: '0 16px',
  background: 'transparent',
  cursor: 'pointer',
})

export const OpenQuestionnaireBtnLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
})

export const FaceStatusText = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 24,
  fontWeight: 400,
  color: '#1e1f33',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const FaceStatusIconSm = styled.img({
  width: 24,
  height: 24,
  flexShrink: 0,
})

export const FaceStatusIconLg = styled.img({
  width: 38,
  height: 38,
  flexShrink: 0,
})

export const FaceCircle = styled.div({
  width: 253,
  height: 253,
  border: '3px dashed #56565d',
})

export const FaceNA = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 32,
  fontWeight: 700,
  color: '#1e1f33',
  margin: 0,
})

export const ScanSvg = styled.svg({
  position: 'absolute',
  top: -9,
  left: -3,
  transform: 'rotate(-90deg)',
})

export const FaceLabelTitle = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 32,
  fontWeight: 700,
  color: '#1e1f33',
  margin: 0,
  lineHeight: 'normal',
})

export const StartScanBtn = styled.button<{ $active: boolean }>(({ $active }) => ({
  background: $active ? '#5c5def' : '#f5f5f6',
  border: 'none',
  height: 32,
  padding: $active ? '4px 16px' : '8px 24px',
  boxShadow: $active ? '0px 2px 4px 0px rgba(0,0,0,0.3)' : 'none',
  cursor: $active ? 'pointer' : 'not-allowed',
}))

export const StartScanBtnLabel = styled.span<{ $active: boolean }>(({ $active }) => ({
  fontFamily: 'Rubik, sans-serif',
  fontSize: $active ? 16 : 18,
  fontWeight: 700,
  color: $active ? '#ffffff' : '#8c8c8c',
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
}))

export const PersonInfoPanel = styled.div({
  borderLeft: '1px solid #d7d7da',
  paddingLeft: 16,
  width: 728,
})

export const PersonInfoHeader = styled.div({
  width: 600,
  padding: '0 16px',
})

export const PersonNameHe = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 20,
  fontWeight: 700,
  color: '#1e1f33',
  margin: 0,
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
})

export const PersonNameAr = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  color: '#5d607a',
  margin: 0,
  lineHeight: '18px',
})

export const PersonFieldsGrid = styled.div({
  width: 440,
})

export const PersonFieldRow = styled.div({
  whiteSpace: 'nowrap',
})

export const PersonFieldValue = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 500,
  color: '#1e1f33',
})

export const PersonFieldLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  color: '#5d607a',
})

export const PersonPhoto = styled.div({
  width: 112,
  height: 112,
})

export const IconsGrid = styled.div({
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(8, 71px)',
  gap: 16,
  padding: 16,
  borderRadius: 4,
})

export const IconItem = styled.div({
  gap: 2,
  height: 54,
  width: 71,
})

export const IconImg = styled.img({
  width: 24,
  height: 24,
  objectFit: 'contain',
  flexShrink: 0,
})

export const IconLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  color: '#666',
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
})
