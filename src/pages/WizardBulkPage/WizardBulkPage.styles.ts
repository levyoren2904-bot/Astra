import styled from 'styled-components'

const F = 'Rubik, sans-serif'

// ── Page shell (same as WizardPage) ─────────────────────────────────────────

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

export const BulkTitle = styled.p({
  fontFamily: F,
  fontSize: 24,
  fontWeight: 700,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
})

export const BulkSubtitle = styled.p({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#666',
  margin: 0,
  whiteSpace: 'nowrap',
})

// ── Stepper (mirrors WizardStepper styles) ───────────────────────────────────

export const StepCircleOuter = styled.div({
  width: 48,
  height: 48,
  position: 'relative',
  flexShrink: 0,
})

export const StepRingBg = styled.div({
  position: 'absolute',
  inset: 0,
  borderRadius: '50%',
  background: 'rgba(92,93,239,0.18)',
})

export const StepInnerCircle = styled.div({
  position: 'absolute',
  inset: 6,
  borderRadius: '50%',
  background: '#5c5def',
})

export const StepInnerCircleInactive = styled.div({
  position: 'absolute',
  inset: 6,
  borderRadius: '50%',
  border: '1px solid #878792',
})

export const StepNumActive = styled.span({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#fff',
})

export const StepNumInactive = styled.span({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#666',
})

export const StepLabelWrap = styled.div({
  width: 124,
})

export const StepText = styled.p<{ $active: boolean }>(({ $active }) => ({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.4,
  textAlign: 'right',
  margin: 0,
  color: $active ? '#242424' : '#666',
}))

export const ConnectorOuter = styled.div({
  width: 50,
  height: 2,
  overflow: 'hidden',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ConnectorLine = styled.div({
  width: 266,
  height: 1.5,
  background: '#878792',
})

// ── Step 1 — ID Entry ────────────────────────────────────────────────────────

export const IdEntrySection = styled.div({
  width: 496,
})

export const IdEntryTitle = styled.p({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 600,
  color: '#242424',
  margin: 0,
})

export const RadioPill = styled.div({
  border: '1px solid #bdbdc2',
  borderRadius: 8,
  padding: '8px 16px',
  gap: 16,
  display: 'flex',
  alignItems: 'center',
  height: 56,
})

export const RadioOpt = styled.label({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  cursor: 'pointer',
  userSelect: 'none',
})

export const RadioOptText = styled.span<{ $selected: boolean }>(({ $selected }) => ({
  fontFamily: F,
  fontSize: 14,
  fontWeight: $selected ? 600 : 400,
  color: $selected ? '#5c5def' : '#666',
}))

export const RadioDot = styled.div<{ $selected: boolean }>(({ $selected }) => ({
  width: 16,
  height: 16,
  borderRadius: '50%',
  border: `2px solid ${$selected ? '#5c5def' : '#bbb'}`,
  background: $selected ? '#5c5def' : 'transparent',
  position: 'relative',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const RadioDotInner = styled.div({
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: '#fff',
})

export const IdRowLabel = styled.p({
  fontFamily: F,
  fontSize: 12,
  fontWeight: 400,
  color: '#666',
  margin: 0,
  textAlign: 'right',
})

export const IdEntryRow = styled.div({
  gap: 8,
  height: 40,
})

export const IdTextField = styled.input({
  flex: 1,
  height: 40,
  border: '1px solid #666',
  borderRadius: 4,
  padding: '4px 8px',
  fontFamily: F,
  fontSize: 16,
  color: '#242424',
  outline: 'none',
  textAlign: 'right',
  '&:focus': {
    borderColor: '#5c5def',
  },
  '&::placeholder': {
    color: '#b3b3b3',
  },
})

export const CirclePlusBtn = styled.button({
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '#5c5def',
  padding: 0,
  flexShrink: 0,
  borderRadius: 4,
  '&:hover': { background: 'rgba(92,93,239,0.08)' },
})

export const TrashBtn = styled.button({
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '#999',
  padding: 0,
  flexShrink: 0,
  borderRadius: 4,
  '&:hover': { color: '#f65e53', background: 'rgba(246,94,83,0.08)' },
})

export const AddRowBtn = styled.button({
  fontFamily: F,
  fontSize: 13,
  fontWeight: 500,
  color: '#5c5def',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '4px 0',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  alignSelf: 'flex-end',
})

// File upload mode
export const FileUploadRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: 12,
})

export const FileUploadBtns = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  flexShrink: 0,
})

export const FileIllustration = styled.div({
  width: 76,
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: '#5c5def',
})

export const FileUploadInstruction = styled.p({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  width: 199,
  textAlign: 'right',
  lineHeight: '25px',
  flexShrink: 0,
})

export const UploadActionBtn = styled.button({
  height: 28,
  padding: '0 8px',
  borderRadius: 4,
  border: '1px solid #5c5def',
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  flexShrink: 0,
})

export const UploadActionBtnLabel = styled.span({
  fontFamily: F,
  fontSize: 14,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
})

// ── Table (steps 2 and 3) ────────────────────────────────────────────────────

export const TableWrap = styled.div({
  flex: 1,
  overflowY: 'auto',
  minHeight: 0,
  borderRadius: 8,
  border: '1px solid #d7d7da',
  width: '100%',
})

export const TableEl = styled.table({
  width: '100%',
  tableLayout: 'fixed',
  borderCollapse: 'collapse',
  fontFamily: F,
})

export const THead = styled.thead({
  background: '#f5f5f6',
  position: 'sticky',
  top: 0,
  zIndex: 1,
})

export const THCell = styled.th({
  padding: '12px 16px',
  fontSize: 13,
  fontWeight: 600,
  color: '#666',
  textAlign: 'right',
  borderBottom: '1px solid #d7d7da',
  whiteSpace: 'nowrap',
})

export const THCellNum = styled.th({
  padding: '12px 12px',
  fontSize: 13,
  fontWeight: 600,
  color: '#666',
  textAlign: 'center',
  borderBottom: '1px solid #d7d7da',
  width: 48,
})

export const THCellIcon = styled.th({
  padding: '12px 8px',
  borderBottom: '1px solid #d7d7da',
  width: 40,
})

export const TRow = styled.tr({
  borderBottom: '1px solid #ebebeb',
  '&:last-child': { borderBottom: 'none' },
  '&:hover': { background: '#fafafa' },
})

export const TCell = styled.td({
  padding: '10px 16px',
  fontSize: 14,
  color: '#242424',
  textAlign: 'right',
})

export const TCellNum = styled.td({
  padding: '10px 12px',
  fontSize: 13,
  color: '#666',
  textAlign: 'center',
  width: 48,
})

export const TCellIcon = styled.td({
  padding: '10px 8px',
  textAlign: 'center',
  width: 40,
})

export const DropdownSelect = styled.select({
  height: 30,
  border: '1px solid #999',
  borderRadius: 4,
  padding: '0 8px 0 28px',
  fontFamily: F,
  fontSize: 13,
  color: '#242424',
  background: '#fff',
  cursor: 'pointer',
  outline: 'none',
  minWidth: 110,
  textAlign: 'right',
  appearance: 'none',
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4L6 8L10 4' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 8px center',
  '&:focus': { borderColor: '#5c5def' },
})

// ── Step 3 — Status ──────────────────────────────────────────────────────────

export const StatusWrap = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 6,
})

export const StatusDot = styled.div<{ $color: string }>(({ $color }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: $color,
  flexShrink: 0,
}))

export const StatusText = styled.span({
  fontFamily: F,
  fontSize: 13,
  color: '#242424',
  whiteSpace: 'nowrap',
})

export const EyeBtn = styled.button({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '#5c5def',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { color: '#4445c7' },
})

// ── Completion modal ─────────────────────────────────────────────────────────

export const ModalOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 30,
})

export const CompletionModalBox = styled.div({
  width: 620,
  background: '#f5f5f6',
  borderRadius: 8,
  boxShadow: '0px 0px 31.6px 2px rgba(0,0,0,0.25)',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'flex-end',
  overflow: 'hidden',
})

export const CompletionHeaderRow = styled.div({
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '16px 32px',
  width: '100%',
  flexShrink: 0,
})

export const CompletionTitleArea = styled.div({
  display: 'flex',
  flex: 1,
  gap: 8,
  alignItems: 'center',
  minWidth: 0,
})

export const CompletionTitle = styled.p({
  fontFamily: F,
  fontSize: 24,
  fontWeight: 600,
  color: '#242424',
  margin: 0,
  whiteSpace: 'nowrap',
  flexShrink: 0,
})

export const CompletionName = styled.p({
  fontFamily: F,
  fontSize: 18,
  fontWeight: 400,
  color: '#242424',
  margin: 0,
  flex: 1,
  textAlign: 'right',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const CompletionFieldsRow = styled.div({
  display: 'flex',
  gap: 10,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  padding: '0 32px',
  width: '100%',
  flexShrink: 0,
})

export const CompletionFieldWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  flex: 1,
  minWidth: 0,
})

export const FieldLabel = styled.label({
  fontFamily: F,
  fontSize: 12,
  fontWeight: 400,
  color: '#666',
  display: 'block',
  height: 16,
  textAlign: 'right',
  lineHeight: '16px',
})

export const FieldInput = styled.input({
  width: '100%',
  height: 40,
  border: '1px solid #666',
  borderRadius: 4,
  padding: '4px 8px',
  fontFamily: F,
  fontSize: 16,
  color: '#242424',
  background: '#fff',
  outline: 'none',
  textAlign: 'right',
  '&:focus': { borderColor: '#5c5def' },
  '&::placeholder': { color: '#b3b3b3' },
})

export const CompletionFieldSelect = styled.select({
  width: '100%',
  height: 40,
  border: '1px solid #666',
  borderRadius: 4,
  padding: '0 8px 0 28px',
  fontFamily: F,
  fontSize: 16,
  color: '#242424',
  background: '#fff',
  cursor: 'pointer',
  outline: 'none',
  textAlign: 'right',
  appearance: 'none',
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4L6 8L10 4' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 8px center',
  '&:focus': { borderColor: '#5c5def' },
})

export const CompletionButtonArea = styled.div({
  display: 'flex',
  flex: 1,
  alignItems: 'flex-end',
  padding: 16,
  width: '100%',
  minHeight: 0,
})

export const SaveBtn = styled.button({
  background: '#5c5def',
  height: 35,
  padding: '0 16px',
  borderRadius: 4,
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  flexShrink: 0,
})

export const SaveBtnLabel = styled.span({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 700,
  color: '#fff',
})

// ── Action bar (same pattern as WizardPage) ──────────────────────────────────

export const NextBtn = styled.button<{ $disabled?: boolean }>(({ $disabled }) => ({
  background: $disabled ? '#d7d7da' : '#5c5def',
  height: 32,
  padding: '0 16px',
  minWidth: 109,
  borderRadius: 4,
  border: 'none',
  cursor: $disabled ? 'not-allowed' : 'pointer',
}))

export const NextBtnLabel = styled.span({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 700,
  color: 'white',
  whiteSpace: 'nowrap',
})

export const BackBtn = styled.button<{ $disabled: boolean }>(({ $disabled }) => ({
  border: '1px solid #5c5def',
  width: 70,
  height: 32,
  borderRadius: 4,
  background: 'transparent',
  opacity: $disabled ? 0.4 : 1,
  cursor: $disabled ? 'not-allowed' : 'pointer',
}))

export const BackBtnLabel = styled.span({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
})

export const CancelBtn = styled.button({
  height: 32,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
})

export const CancelBtnLabel = styled.span({
  fontFamily: F,
  fontSize: 16,
  fontWeight: 700,
  color: '#5c5def',
  whiteSpace: 'nowrap',
  padding: '0 16px',
})
