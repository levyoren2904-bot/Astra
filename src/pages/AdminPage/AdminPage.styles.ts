import styled from 'styled-components'

// ── Page root ──────────────────────────────────────────────────────────────────

export const PageRoot = styled.div({
  position: 'relative',
  height: '100dvh',
  background: '#f5f5f6',
  overflow: 'hidden',
})

// ── Title bar (0 – 68px) ──────────────────────────────────────────────────────

export const TitleBar = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 68,
  background: '#f5f5f6',
  display: 'flex',
  alignItems: 'center',
  padding: '14px 32px',
  gap: 16,
})

export const BackBtn = styled.button({
  width: 56,
  height: 56,
  borderRadius: 4,
  border: '1px solid #5c5def',
  background: '#5c5def',
  boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexShrink: 0,
  padding: 8,
  overflow: 'hidden',
})

export const BackBtnIcon = styled.img({
  width: 30,
  height: 21,
})

export const PageTitle = styled.p({
  flex: '1 0 0',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 32,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  textAlign: 'right',
  lineHeight: 'normal',
})

// ── Tabs bar (68px) ───────────────────────────────────────────────────────────

export const TabsBar = styled.div({
  position: 'absolute',
  top: 68,
  left: 24,
  right: 24,
  height: 56,
  background: 'rgba(255,255,255,0)',
  borderBottom: '1px solid #d7d7da',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  direction: 'ltr',
})

export const TabItem = styled.button<{ $active?: boolean }>(({ $active }) => ({
  width: 145,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px 8px',
  background: 'transparent',
  border: 'none',
  borderBottom: $active ? '2px solid #5c5def' : 'none',
  marginBottom: $active ? '-1px' : 0,
  cursor: 'pointer',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: $active ? 700 : 400,
  color: '#242424',
  flexShrink: 0,
  whiteSpace: 'nowrap',
}))

export const TabSeparator = styled.div({
  width: 2,
  height: 14,
  background: '#d7d7da',
  borderRadius: 2,
  flexShrink: 0,
})

// ── Table card ────────────────────────────────────────────────────────────────

export const TableCard = styled.div({
  position: 'absolute',
  top: 148,
  left: 24,
  right: 24,
  background: 'white',
  borderRadius: 16,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '24px 16px',
  direction: 'ltr',
})

// ── Table toolbar ─────────────────────────────────────────────────────────────

export const TableToolbar = styled.div({
  display: 'flex',
  height: 40,
  alignItems: 'center',
  width: '100%',
  flexShrink: 0,
})

export const AddBtn = styled.button({
  width: 40,
  height: 40,
  border: '1px solid #5c5def',
  borderRadius: 4,
  background: 'transparent',
  boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: 8,
  flexShrink: 0,
})

export const ToolbarRight = styled.div({
  flex: '1 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 8,
})

export const FilterBtn = styled.button({
  width: 40,
  height: 40,
  border: '1px solid #5c5def',
  borderRadius: 4,
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexShrink: 0,
})

export const DatePicker = styled.div({
  width: 256,
  height: 40,
  border: '1px solid #242424',
  borderRadius: 4,
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: 8,
  flexShrink: 0,
})

export const DatePickerText = styled.p({
  flex: '1 0 0',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  color: '#242424',
  margin: 0,
  textAlign: 'center',
  lineHeight: 'normal',
})

// ── Table divider ─────────────────────────────────────────────────────────────

export const TableDivider = styled.div({
  width: '100%',
  height: 1,
  background: '#d7d7da',
  flexShrink: 0,
  marginTop: -12,
})

// ── Table ─────────────────────────────────────────────────────────────────────

export const TableContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flexShrink: 0,
})

export const TableHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
})

export const ThCell = styled.div<{ $flex?: boolean; $width?: number; $center?: boolean }>(
  ({ $flex, $width, $center }) => ({
    background: '#f5f5f6',
    display: 'flex',
    gap: 8,
    height: 42,
    alignItems: 'center',
    justifyContent: $center ? 'center' : 'flex-end',
    padding: 8,
    ...($flex ? { flex: '1 0 0', minWidth: 0 } : { flexShrink: 0, width: $width }),
  }),
)

export const ThText = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 18,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  textAlign: 'right',
  whiteSpace: 'nowrap',
})

export const TableBody = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.15)',
})

export const TableRow = styled.div({
  display: 'flex',
  height: 48,
  alignItems: 'center',
  width: '100%',
})

export const TdCell = styled.div<{ $flex?: boolean; $width?: number; $center?: boolean }>(
  ({ $flex, $width, $center }) => ({
    background: 'white',
    borderBottom: '1px solid #d7d7da',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: $center ? 'center' : 'flex-end',
    padding: '8px 8px 9px 8px',
    overflow: 'hidden',
    ...($flex ? { flex: '1 0 0', minWidth: 0 } : { flexShrink: 0, width: $width }),
  }),
)

export const TdText = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  color: '#242424',
  margin: 0,
  textAlign: 'right',
  lineHeight: 'normal',
})

export const StatusCell = styled.div({
  background: 'white',
  borderBottom: '1px solid #d7d7da',
  display: 'flex',
  flex: '1 0 0',
  gap: 8,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '8px 8px 9px 8px',
  overflow: 'hidden',
  minWidth: 0,
})

export const StatusDot = styled.div({
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: '#70c969',
  flexShrink: 0,
})

export const StatusText = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  color: '#242424',
  margin: 0,
  textAlign: 'right',
  lineHeight: 'normal',
  flex: '1 0 0',
  minWidth: 0,
})

// Same width/padding as ActionCell but with header background
export const ThActionCell = styled.div({
  background: '#f5f5f6',
  display: 'flex',
  height: 42,
  alignItems: 'center',
  gap: 8,
  padding: 8,
  flexShrink: 0,
})

export const ActionCell = styled.div({
  background: 'white',
  borderBottom: '1px solid #d7d7da',
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  gap: 8,
  padding: '8px 8px 9px 8px',
  flexShrink: 0,
})

export const ActionIconBtn = styled.button({
  width: 24,
  height: 24,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  overflow: 'hidden',
})

// ── Edit Station Modal ────────────────────────────────────────────────────────

export const ModalOverlay = styled.div({
  position: 'fixed',
  inset: 0,
  background: 'rgba(236,236,236,0.6)',
  zIndex: 100,
})

export const ModalContainer = styled.div({
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 548,
  background: '#f5f5f6',
  borderRadius: 8,
  boxShadow: '0px 0px 31.6px 2px rgba(0,0,0,0.25)',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'flex-end',
  overflow: 'hidden',
  zIndex: 101,
})

export const ModalHeader = styled.div({
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '16px 32px',
  width: '100%',
  flexShrink: 0,
})

export const ModalCloseBtn = styled.button({
  width: 24,
  height: 24,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const ModalTitle = styled.p({
  flex: '1 0 0',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  margin: 0,
  textAlign: 'right',
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
})

export const FormFieldContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: '100%',
  flexShrink: 0,
})

export const FormRow = styled.div({
  display: 'flex',
  gap: 10,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  padding: '0 32px',
  width: '100%',
})

export const TextField = styled.div<{ $width?: number }>(({ $width }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  height: 60,
  alignItems: 'flex-end',
  overflow: 'hidden',
  borderRadius: 4,
  ...($width ? { width: $width, flexShrink: 0 } : { flex: '1 0 0', minWidth: 0 }),
}))

export const FieldLabel = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  color: '#666666',
  margin: 0,
  textAlign: 'right',
  lineHeight: 'normal',
  height: 16,
  flexShrink: 0,
  width: '100%',
})

export const FieldInputBox = styled.div({
  background: 'white',
  border: '1px solid #666666',
  borderRadius: 4,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '4px 8px',
  gap: 8,
  flexShrink: 0,
  width: '100%',
  position: 'relative',
})

export const FieldValue = styled.p({
  flex: '1 0 0',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  color: '#111122',
  margin: 0,
  textAlign: 'right',
  lineHeight: 'normal',
  minWidth: 0,
})

export const ChevronImg = styled.img({
  width: 17,
  height: 8,
  flexShrink: 0,
  transform: 'rotate(180deg)',
})

export const StatusContainer = styled.div({
  display: 'flex',
  gap: 8,
  height: 40,
  alignItems: 'center',
  flexShrink: 0,
})

export const StatusLabel = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  color: '#111122',
  margin: 0,
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
  flexShrink: 0,
})

export const ToggleBtn = styled.button<{ $active?: boolean }>(({ $active }) => ({
  background: $active ? '#5c5def' : '#d7d7da',
  border: 'none',
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  padding: '1px 2px',
  cursor: 'pointer',
  flexShrink: 0,
}))

export const ToggleLabel = styled.span({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  color: 'white',
  lineHeight: '20px',
  paddingLeft: 4,
  whiteSpace: 'nowrap',
})

export const ToggleKnob = styled.div({
  background: 'white',
  borderRadius: 16,
  width: 18,
  height: 18,
  flexShrink: 0,
})

export const ModalFooter = styled.div({
  display: 'flex',
  gap: 16,
  alignItems: 'flex-end',
  padding: 16,
  width: '100%',
  flexShrink: 0,
})

export const SaveBtn = styled.button({
  background: '#5c5def',
  border: 'none',
  borderRadius: 4,
  height: 32,
  padding: '4px 16px',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
  cursor: 'pointer',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: 'white',
  whiteSpace: 'nowrap',
  flexShrink: 0,
})

export const CancelBtn = styled.button({
  background: 'transparent',
  border: '1px solid #5c5def',
  borderRadius: 4,
  height: 32,
  width: 70,
  padding: '4px 16px',
  cursor: 'pointer',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
  flexShrink: 0,
})

// Invisible select overlay — covers entire FieldInputBox so chevron click also opens it
export const FieldSelectOverlay = styled.select({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  cursor: 'pointer',
  width: '100%',
  height: '100%',
})

export const FieldTextInput = styled.input({
  flex: '1 0 0',
  border: 'none',
  background: 'transparent',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  color: '#111122',
  textAlign: 'right',
  lineHeight: 'normal',
  minWidth: 0,
  outline: 'none',
})

// ── Edit Card Type Modal ──────────────────────────────────────────────────────

export const CardTypeModalContainer = styled(ModalContainer)({ gap: 16, width: 706 })

export const NationalityControl = styled.div({
  background: '#ccccfa',
  height: 40,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'stretch',
  gap: 8,
  padding: 4,
  flex: '1 0 0',
  minWidth: 0,
  overflow: 'hidden',
})

export const NationalityOption = styled.button<{ $active?: boolean }>(({ $active }) => ({
  flex: '1 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 16px',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  lineHeight: 'normal',
  color: '#111122',
  whiteSpace: 'nowrap',
  ...($active
    ? { background: '#fbfbfb', fontWeight: 700, boxShadow: '2px 2px 8px 0px rgba(0,0,0,0.15)' }
    : { background: 'transparent', fontWeight: 400 }),
}))

export const CheckboxSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  alignItems: 'flex-end',
  padding: '8px 32px',
  flexShrink: 0,
  width: '100%',
})

export const CheckboxGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 115px)',
  columnGap: 19,
  rowGap: 23,
})

export const CheckboxItemRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  justifyContent: 'flex-end',
  width: '100%',
})

export const CheckboxItemLabel = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  lineHeight: 1.4,
  whiteSpace: 'nowrap',
  flexShrink: 0,
})

export const CheckboxBox = styled.div<{ $checked?: boolean }>(({ $checked }) => ({
  width: 16,
  height: 16,
  flexShrink: 0,
  borderRadius: 4,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  ...($checked
    ? { backgroundImage: 'url(/icons/checkbox-checked.svg)', backgroundSize: 'cover' }
    : { border: '1px solid #878792' }),
}))

export const CardImagesRow = styled.div({
  display: 'flex',
  gap: 20,
  alignItems: 'flex-start',
  padding: '0 32px',
  flexShrink: 0,
})

export const CardImageGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'flex-end',
  width: 311,
  flexShrink: 0,
})

// ── Mini ID card ──────────────────────────────────────────────────────────────

export const MiniCard = styled.div({
  width: 311,
  height: 182,
  background: '#a9e2d7',
  borderRadius: 8,
  padding: 10,
  overflow: 'hidden',
  position: 'relative',
  flexShrink: 0,
})

export const MiniCardCirclesGroup = styled.div({
  position: 'absolute',
  left: -37,
  top: 22,
  width: 141,
  height: 141,
  pointerEvents: 'none',
})

export const MiniCardCircle = styled.img<{ $size: number; $offset: number }>(
  ({ $size, $offset }) => ({
    position: 'absolute',
    width: $size,
    height: $size,
    left: $offset,
    top: $offset,
    opacity: 0.8,
    transform: 'rotate(90deg)',
  }),
)

export const MiniCardHeaderRow = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  position: 'relative',
  flexShrink: 0,
  gap: 0,
})

export const MiniCardFlagImg = styled.img({
  width: 14.81,
  height: 18.956,
  objectFit: 'cover',
  flexShrink: 0,
})

export const MiniCardOrgCol = styled.div({
  flex: '1 0 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 0,
})

export const MiniCardOrgTextHe = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 8.293,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  textAlign: 'center',
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
})

export const MiniCardOrgTextAr = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 8.293,
  fontWeight: 400,
  color: 'white',
  margin: 0,
  textAlign: 'center',
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
})

export const MiniCardLogoRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
})

export const MiniCardPersonThumb = styled.img({
  width: 14,
  height: 20,
  objectFit: 'cover',
  flexShrink: 0,
})

export const MiniCardMagStripe = styled.div({
  position: 'absolute',
  left: 0,
  top: 45,
  width: '100%',
  height: 24,
  background: '#242424',
})

// Front card data layout
export const MiniCardDataSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 1.185,
  alignItems: 'flex-end',
  width: '100%',
  paddingRight: 88,
  marginTop: 4,
})

export const MiniCardDataRow = styled.div({
  display: 'flex',
  gap: 4.739,
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
})

export const MiniCardDataLabel = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexShrink: 0,
  width: 40.282,
})

export const MiniCardDataLabelHe = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 8.293,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  lineHeight: 'normal',
})

export const MiniCardDataLabelAr = styled.p({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 5.924,
  fontWeight: 400,
  color: 'white',
  margin: 0,
  lineHeight: 'normal',
})

export const MiniCardDataValue = styled.p<{ $bold?: boolean }>(({ $bold }) => ({
  fontFamily: 'Rubik, sans-serif',
  fontSize: 8.293,
  fontWeight: $bold ? 500 : 400,
  color: '#242424',
  margin: 0,
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
  flexShrink: 0,
}))

export const MiniCardPhoto = styled.img({
  position: 'absolute',
  right: 10,
  top: 28,
  width: 79,
  height: 106,
  objectFit: 'cover',
})

export const MiniCardBarcodeImg = styled.img({
  position: 'absolute',
  left: 0,
  top: 155.76,
  width: 104.259,
  height: 26.657,
})

// ── Fees table ────────────────────────────────────────────────────────────────

export const FeeStatusCell = styled.div({
  background: '#f6f6fe',
  borderBottom: '1px solid #d7d7da',
  display: 'flex',
  flex: '1 0 0',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 8px 9px 8px',
  overflow: 'hidden',
  minWidth: 0,
  cursor: 'pointer',
  position: 'relative',
})

export const FeeStatusIconBox = styled.div({
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})
