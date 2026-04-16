import styled from 'styled-components'
import { F } from '@/pages/WizardPage/constants'

export const CardRoot = styled.div<{ $variant: 'physical' | 'digital' }>(({ $variant }) => ({
  position: 'relative',
  width: 311,
  height: 182,
  minHeight: 182,
  maxHeight: 182,
  boxSizing: 'border-box',
  background:
    $variant === 'digital'
      ? 'linear-gradient(to left, rgba(169,226,215,0), #a9e2d7)'
      : '#a9e2d7',
  borderRadius: 8,
  padding: 10,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  alignItems: 'flex-start',
}))

export const DecoCircleGroup = styled.div({
  position: 'absolute',
  left: -36.73,
  top: 21.62,
  width: 140.987,
  height: 140.987,
  pointerEvents: 'none',
})

export const DecoCircleLg = styled.img({
  position: 'absolute',
  left: 0,
  top: 0,
  width: 140.987,
  height: 140.987,
  opacity: 0.8,
})

export const DecoCircleMd = styled.img({
  position: 'absolute',
  left: 7.72,
  top: 5.72,
  width: 129.263,
  height: 129.263,
  opacity: 0.8,
})

export const DecoCircleSm = styled.img({
  position: 'absolute',
  left: 16.45,
  top: 16.35,
  width: 108.284,
  height: 108.284,
  opacity: 0.8,
})

export const NoiseOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  borderRadius: 8,
  pointerEvents: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  opacity: 0.25,
  mixBlendMode: 'multiply',
})

export const CardHeaderRow = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
})

export const EmblemLeft = styled.img({
  width: 14.81,
  height: 18.956,
  opacity: 0.5,
  flexShrink: 0,
})

export const TitleCenter = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1,
})

export const TitleHe = styled.span({
  fontFamily: F,
  fontSize: 8.293,
  fontWeight: 400,
  color: '#242424',
  lineHeight: 1.2,
  textAlign: 'center',
})

export const TitleAr = styled.span({
  fontFamily: F,
  fontSize: 8.293,
  fontWeight: 400,
  color: '#fff',
  lineHeight: 1.2,
  textAlign: 'center',
})

export const LogoRow = styled.div({
  display: 'flex',
  gap: 2,
  alignItems: 'center',
  justifyContent: 'center',
})

export const LogoArSpan = styled.span({
  fontFamily: F,
  fontSize: 8.293,
  color: '#fff',
  lineHeight: 1.2,
})

export const LogoHeSpan = styled.span({
  fontFamily: F,
  fontSize: 8.293,
  color: '#242424',
  lineHeight: 1.2,
})

export const LogoImg = styled.img({
  width: 13,
  height: 13,
})

export const EmblemRight = styled.img({
  width: 14,
  height: 20,
  flexShrink: 0,
})

export const CardBodyRow = styled.div({
  display: 'flex',
  flex: 1,
  gap: 9,
  minHeight: 0,
  width: '100%',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
})

export const DataSection = styled.div({
  display: 'flex',
  gap: 14.217,
  alignItems: 'flex-end',
  paddingBottom: 6,
})

export const DateColumn = styled.div({
  width: 95.021,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  paddingBlock: 4.739,
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  marginBottom: 10,
})

export const DateFieldRow = styled.div({
  width: 95.021,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 5,
})

export const DateValue = styled.span({
  fontFamily: F,
  fontSize: 8.293,
  fontWeight: 500,
  color: '#242424',
  lineHeight: 'normal',
  flex: 1,
  whiteSpace: 'nowrap',
})

export const FieldLabelCol = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  width: 40,
  justifyContent: 'center',
  alignItems: 'flex-end',
})

export const FieldLabelHe = styled.span({
  fontFamily: F,
  fontSize: 8.293,
  fontWeight: 400,
  color: '#242424',
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
})

export const FieldLabelAr = styled.span({
  fontFamily: F,
  fontSize: 5.924,
  color: '#fff',
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
})

export const NameColumn = styled.div({
  width: 93.021,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  alignItems: 'flex-end',
})

export const NameFieldRow = styled.div({
  width: 93.021,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 5,
})

export const NameValues = styled.div({
  flex: '1 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 4,
  color: '#242424',
  fontSize: 8.293,
  whiteSpace: 'nowrap',
})

export const NameAr = styled.span({
  fontFamily: F,
  fontWeight: 400,
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
})

export const NameHe = styled.span({
  fontFamily: F,
  fontWeight: 500,
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
  flexShrink: 0,
})

export const PhotoSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  flexShrink: 0,
})

export const PhotoBox = styled.div({
  width: 79,
  height: 106,
  background: '#d9d9d9',
  overflow: 'hidden',
})

export const PhotoImg = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const IdRow = styled.div({
  width: 79,
  height: 17,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const IdNumber = styled.span({
  fontFamily: F,
  fontSize: 8.293,
  fontWeight: 500,
  color: '#242424',
  lineHeight: 1,
})

export const IdLabelCol = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
})

export const IdLabelHe = styled.span({
  fontFamily: F,
  fontSize: 8.293,
  color: '#242424',
  lineHeight: 1,
})

export const IdLabelAr = styled.span({
  fontFamily: F,
  fontSize: 5.924,
  color: '#fff',
  lineHeight: 1,
})

export const BarcodeImg = styled.img({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: 104,
  height: 28,
})

export const SerialSpan = styled.span({
  position: 'absolute',
  bottom: 6,
  left: 120,
  fontFamily: F,
  fontSize: 7.109,
  fontWeight: 400,
  color: '#242424',
  lineHeight: 1,
})
