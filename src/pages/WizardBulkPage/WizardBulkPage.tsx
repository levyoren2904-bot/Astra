import { useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { CloseIcon } from '../WizardPage/components/CloseIcon'
import {
  PageRoot,
  Backdrop,
  ModalBox,
  ModalHeaderRow,
  BulkTitle,
  BulkSubtitle,
  StepCircleOuter,
  StepRingBg,
  StepInnerCircle,
  StepInnerCircleInactive,
  StepNumActive,
  StepNumInactive,
  StepLabelWrap,
  StepText,
  ConnectorOuter,
  ConnectorLine,
  IdEntrySection,
  IdEntryTitle,
  RadioPill,
  RadioOpt,
  RadioOptText,
  RadioDot,
  RadioDotInner,
  IdRowLabel,
  IdEntryRow,
  IdTextField,
  TrashBtn,
  AddRowBtn,
  FileUploadRow,
  FileUploadBtns,
  FileIllustration,
  FileUploadInstruction,
  UploadActionBtn,
  UploadActionBtnLabel,
  TableWrap,
  TableEl,
  THead,
  THCell,
  THCellNum,
  THCellIcon,
  TRow,
  TCell,
  TCellNum,
  TCellIcon,
  DropdownSelect,
  StatusWrap,
  StatusDot,
  StatusText,
  EyeBtn,
  ModalOverlay,
  CompletionModalBox,
  CompletionHeaderRow,
  CompletionTitleArea,
  CompletionTitle,
  CompletionName,
  CompletionFieldsRow,
  CompletionFieldWrapper,
  CompletionFieldSelect,
  CompletionButtonArea,
  FieldLabel,
  FieldInput,
  SaveBtn,
  SaveBtnLabel,
  NextBtn,
  NextBtnLabel,
  BackBtn,
  BackBtnLabel,
  CancelBtn,
  CancelBtnLabel,
} from './WizardBulkPage.styles'

// ── Types ─────────────────────────────────────────────────────────────────────

type InputMode = 'manual' | 'file'
type RowStatus = 'תקין' | 'חסר מידע' | 'הושלם ידנית'

interface IdEntry {
  rowId: number
  value: string
}

interface BulkRow {
  rowId: number
  name: string
  idNum: string
  cardType: string
  template: string
  dataSource: string
  status: RowStatus
}

// ── Constants ─────────────────────────────────────────────────────────────────

const BULK_STEPS = [
  { num: 1, label: 'העלאת ת.ז' },
  { num: 2, label: 'סוג כרטיס' },
  { num: 3, label: 'דוח תוצרים' },
]

const STATUS_DOT_COLOR: Record<RowStatus, string> = {
  'תקין': '#70c969',
  'חסר מידע': '#f65e53',
  'הושלם ידנית': '#70c969',
}

const CARD_TYPE_OPTIONS = ['שם סוג', 'כר"ח שטחים', 'כר"ח מיוחד']
const TEMPLATE_OPTIONS = ['טמפלייט 1', 'טמפלייט 2', 'טמפלייט 3']
const DATA_SOURCE_OPTIONS = ['אסותרי', 'מקור 1', 'מקור 2']
const MARITAL_STATUS_OPTIONS = ['רווק/ה', 'נשוי/נשואה', 'גרוש/ה', 'אלמן/ה']

const INITIAL_ID_ENTRIES: IdEntry[] = [
  { rowId: 1, value: '' },
  { rowId: 2, value: '' },
  { rowId: 3, value: '' },
]

const MOCK_BULK_ROWS: BulkRow[] = Array.from({ length: 12 }, (_, i) => ({
  rowId: i + 1,
  name: 'מוחמד מוחמד בן סלמה',
  idNum: '123456789',
  cardType: 'שם סוג',
  template: 'טמפלייט 1',
  dataSource: 'אסותרי',
  status: i === 7 ? 'חסר מידע' : 'תקין',
}))

// ── BulkStepper ───────────────────────────────────────────────────────────────

const StepCircle: FC<{ num: number; state: 'active' | 'completed' | 'inactive' }> = ({
  num,
  state,
}) => {
  if (state === 'active') {
    return (
      <StepCircleOuter>
        <StepRingBg />
        <StepInnerCircle />
        <StepNumActive>{num}</StepNumActive>
      </StepCircleOuter>
    )
  }
  if (state === 'completed') {
    return (
      <StepCircleOuter className="flex items-center justify-center">
        <StepInnerCircle />
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <path
            d="M1 5L4.5 8.5L11 1.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StepCircleOuter>
    )
  }
  return (
    <StepCircleOuter className="flex items-center justify-center">
      <StepInnerCircleInactive />
      <StepNumInactive>{num}</StepNumInactive>
    </StepCircleOuter>
  )
}

const BulkStepper: FC<{ currentStep: number }> = ({ currentStep }) => {
  const stepsDesc = [...BULK_STEPS].reverse()
  return (
    <div className="flex items-center justify-center shrink-0 w-full overflow-clip">
      <div className="flex gap-3 items-center justify-center" dir="ltr">
        {stepsDesc.map((step, idx) => (
          <div key={step.num} className="flex items-center gap-3" dir="ltr">
            <StepLabelWrap>
              <StepText dir="auto" $active={step.num <= currentStep}>
                {step.label}
              </StepText>
            </StepLabelWrap>
            <StepCircle
              num={step.num}
              state={
                step.num < currentStep
                  ? 'completed'
                  : step.num === currentStep
                    ? 'active'
                    : 'inactive'
              }
            />
            {idx < stepsDesc.length - 1 && (
              <ConnectorOuter>
                <ConnectorLine />
              </ConnectorOuter>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── SVG Icons (inline, no external assets) ────────────────────────────────────

const IconCirclePlus = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 5.5V12.5M5.5 9H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconTrash = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 4h12M5 4V2.5A.5.5 0 0 1 5.5 2h5a.5.5 0 0 1 .5.5V4M6 7v5M10 7v5M3 4l1 9.5A.5.5 0 0 0 4.5 14h7a.5.5 0 0 0 .5-.5L13 4"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconEye = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M1 9C1 9 4 3 9 3C14 3 17 9 17 9C17 9 14 15 9 15C4 15 1 9 1 9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const IconUpload = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M9 2v10M6 5L9 2l3 3M2 13v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconFormat = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="3" y="2" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 6h4M6 9h4M6 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconFile = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="6" y="4" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="12" y="8" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 16h9M15 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// ── Step1Content ──────────────────────────────────────────────────────────────

interface Step1ContentProps {
  inputMode: InputMode
  onInputModeChange: (m: InputMode) => void
  idEntries: IdEntry[]
  onAddRow: () => void
  onRemoveRow: (id: number) => void
  onChangeRow: (id: number, value: string) => void
}

const Step1Content: FC<Step1ContentProps> = ({
  inputMode,
  onInputModeChange,
  idEntries,
  onAddRow,
  onRemoveRow,
  onChangeRow,
}) => (
  <div className="flex flex-1 min-h-0 w-full items-start justify-end" dir="ltr">
    <IdEntrySection className="flex flex-col gap-4">
      <IdEntryTitle dir="auto">הזנת ת.ז</IdEntryTitle>

      {/* Radio mode selector — dir="rtl": first DOM item = right side */}
      <RadioPill dir="rtl">
        <RadioOpt onClick={() => onInputModeChange('manual')}>
          <RadioOptText $selected={inputMode === 'manual'} dir="auto">
            לפי ת.ז.
          </RadioOptText>
          <RadioDot $selected={inputMode === 'manual'}>
            {inputMode === 'manual' && <RadioDotInner />}
          </RadioDot>
        </RadioOpt>
        <RadioOpt onClick={() => onInputModeChange('file')}>
          <RadioOptText $selected={inputMode === 'file'} dir="auto">
            מתוך קובץ
          </RadioOptText>
          <RadioDot $selected={inputMode === 'file'}>
            {inputMode === 'file' && <RadioDotInner />}
          </RadioDot>
        </RadioOpt>
      </RadioPill>

      {inputMode === 'manual' && (
        <div className="flex flex-col gap-3">
          <AddRowBtn onClick={onAddRow} dir="auto">
            <IconCirclePlus />
            הוסף ת.ז.
          </AddRowBtn>
          {idEntries.map((entry) => (
            <div key={entry.rowId} className="flex flex-col gap-1">
              <IdRowLabel>ת.ז.</IdRowLabel>
              <IdEntryRow className="flex items-center" dir="ltr">
                <TrashBtn
                  onClick={() => onRemoveRow(entry.rowId)}
                  disabled={idEntries.length <= 1}
                  title="מחק שורה"
                >
                  <IconTrash />
                </TrashBtn>
                <IdTextField
                  type="text"
                  placeholder="000000000"
                  value={entry.value}
                  onChange={(e) => onChangeRow(entry.rowId, e.target.value)}
                  maxLength={9}
                  dir="ltr"
                />
              </IdEntryRow>
            </div>
          ))}
        </div>
      )}

      {inputMode === 'file' && (
        <FileUploadRow dir="ltr">
          {/* Buttons on the left */}
          <FileUploadBtns>
            <UploadActionBtn onClick={() => {}}>
              <UploadActionBtnLabel dir="auto">העלאה</UploadActionBtnLabel>
              <IconUpload />
            </UploadActionBtn>
            <UploadActionBtn onClick={() => {}}>
              <UploadActionBtnLabel dir="auto">פורמט</UploadActionBtnLabel>
              <IconFormat />
            </UploadActionBtn>
          </FileUploadBtns>
          {/* Instruction text in the middle */}
          <FileUploadInstruction dir="auto">
            יש להעלות קבצים בפורמטים הבאים בלבד: XLSX, XLS, CSV
          </FileUploadInstruction>
          {/* Illustration on the right */}
          <FileIllustration>
            <IconFile />
          </FileIllustration>
        </FileUploadRow>
      )}
    </IdEntrySection>
  </div>
)

// ── Step2Content ──────────────────────────────────────────────────────────────

interface Step2ContentProps {
  rows: BulkRow[]
  onChangeRow: (rowId: number, field: 'cardType' | 'template' | 'dataSource', value: string) => void
}

const Step2Content: FC<Step2ContentProps> = ({ rows, onChangeRow }) => (
  <TableWrap dir="rtl">
    <TableEl>
      <THead>
        <tr>
          <THCellNum>#</THCellNum>
          <THCell>שם תושב</THCell>
          <THCell>ת.ז</THCell>
          <THCell>סוג כרטיס להנפקה</THCell>
          <THCell>טמפלייט</THCell>
          <THCell>מקור מידע להזנה</THCell>
        </tr>
      </THead>
      <tbody>
        {rows.map((row) => (
          <TRow key={row.rowId}>
            <TCellNum>{row.rowId}</TCellNum>
            <TCell>{row.name}</TCell>
            <TCell>{row.idNum}</TCell>
            <TCell>
              <DropdownSelect
                value={row.cardType}
                onChange={(e) => onChangeRow(row.rowId, 'cardType', e.target.value)}
                dir="rtl"
              >
                {CARD_TYPE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </DropdownSelect>
            </TCell>
            <TCell>
              <DropdownSelect
                value={row.template}
                onChange={(e) => onChangeRow(row.rowId, 'template', e.target.value)}
                dir="rtl"
              >
                {TEMPLATE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </DropdownSelect>
            </TCell>
            <TCell>
              <DropdownSelect
                value={row.dataSource}
                onChange={(e) => onChangeRow(row.rowId, 'dataSource', e.target.value)}
                dir="rtl"
              >
                {DATA_SOURCE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </DropdownSelect>
            </TCell>
          </TRow>
        ))}
      </tbody>
    </TableEl>
  </TableWrap>
)

// ── Step3Content ──────────────────────────────────────────────────────────────

interface Step3ContentProps {
  rows: BulkRow[]
  onOpenCompletion: (rowId: number) => void
}

const Step3Content: FC<Step3ContentProps> = ({ rows, onOpenCompletion }) => (
  <TableWrap dir="rtl">
    <TableEl>
      <THead>
        <tr>
          <THCellNum>#</THCellNum>
          <THCell>שם תושב</THCell>
          <THCell>ת.ז</THCell>
          <THCell>סוג כרטיס להנפקה</THCell>
          <THCell>טמפלייט</THCell>
          <THCell>מקור מידע להזנה</THCell>
          <THCell>סטטוס כרטיס</THCell>
          <THCellIcon />
        </tr>
      </THead>
      <tbody>
        {rows.map((row) => (
          <TRow key={row.rowId}>
            <TCellNum>{row.rowId}</TCellNum>
            <TCell>{row.name}</TCell>
            <TCell>{row.idNum}</TCell>
            <TCell>{row.cardType}</TCell>
            <TCell>{row.template}</TCell>
            <TCell>{row.dataSource}</TCell>
            <TCell>
              <StatusWrap>
                <StatusDot $color={STATUS_DOT_COLOR[row.status]} />
                <StatusText>{row.status}</StatusText>
              </StatusWrap>
            </TCell>
            <TCellIcon>
              {row.status === 'חסר מידע' && (
                <EyeBtn onClick={() => onOpenCompletion(row.rowId)} title="השלם פרטים">
                  <IconEye />
                </EyeBtn>
              )}
            </TCellIcon>
          </TRow>
        ))}
      </tbody>
    </TableEl>
  </TableWrap>
)

// ── CompletionModal ───────────────────────────────────────────────────────────

interface CompletionModalProps {
  row: BulkRow
  onSave: (rowId: number) => void
  onClose: () => void
}

const CompletionModal: FC<CompletionModalProps> = ({ row, onSave, onClose }) => {
  const [maritalStatus, setMaritalStatus] = useState('')
  const [extraField, setExtraField] = useState('')

  return (
    <ModalOverlay onClick={onClose}>
      <CompletionModalBox dir="ltr" onClick={(e) => e.stopPropagation()}>
        {/* Header: X on left | name + title on right */}
        <CompletionHeaderRow>
          <button onClick={onClose} className="shrink-0 hover:opacity-70 transition-opacity">
            <CloseIcon />
          </button>
          <CompletionTitleArea>
            <CompletionName dir="auto">
              {row.name} {row.idNum}
            </CompletionName>
            <CompletionTitle dir="auto">השלמת פרטים</CompletionTitle>
          </CompletionTitleArea>
        </CompletionHeaderRow>

        {/* Fields: עוד שדה (left) | מצב משפחתי (right) — LTR order */}
        <CompletionFieldsRow>
          <CompletionFieldWrapper>
            <FieldLabel dir="auto">עוד שדה</FieldLabel>
            <FieldInput
              value={extraField}
              onChange={(e) => setExtraField(e.target.value)}
              dir="auto"
            />
          </CompletionFieldWrapper>
          <CompletionFieldWrapper>
            <FieldLabel dir="auto">מצב משפחתי</FieldLabel>
            <CompletionFieldSelect
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              dir="rtl"
            >
              <option value="">בחר...</option>
              {MARITAL_STATUS_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </CompletionFieldSelect>
          </CompletionFieldWrapper>
        </CompletionFieldsRow>

        {/* Button area — button naturally at left in LTR */}
        <CompletionButtonArea>
          <SaveBtn onClick={() => onSave(row.rowId)}>
            <SaveBtnLabel>שמור</SaveBtnLabel>
          </SaveBtn>
        </CompletionButtonArea>
      </CompletionModalBox>
    </ModalOverlay>
  )
}

// ── WizardBulkPage ────────────────────────────────────────────────────────────

export const WizardBulkPage: FC = () => {
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)
  const [inputMode, setInputMode] = useState<InputMode>('manual')
  const [idEntries, setIdEntries] = useState<IdEntry[]>(INITIAL_ID_ENTRIES)
  const [bulkRows, setBulkRows] = useState<BulkRow[]>(MOCK_BULK_ROWS)
  const [completionRowId, setCompletionRowId] = useState<number | null>(null)

  let nextRowId = idEntries.length > 0 ? Math.max(...idEntries.map((e) => e.rowId)) + 1 : 1

  function handleAddRow() {
    setIdEntries((prev) => [...prev, { rowId: nextRowId++, value: '' }])
  }

  function handleRemoveRow(id: number) {
    setIdEntries((prev) => (prev.length > 1 ? prev.filter((e) => e.rowId !== id) : prev))
  }

  function handleChangeRow(id: number, value: string) {
    setIdEntries((prev) => prev.map((e) => (e.rowId === id ? { ...e, value } : e)))
  }

  function handleChangeStep2Row(
    rowId: number,
    field: 'cardType' | 'template' | 'dataSource',
    value: string,
  ) {
    setBulkRows((prev) => prev.map((r) => (r.rowId === rowId ? { ...r, [field]: value } : r)))
  }

  function handleOpenCompletion(rowId: number) {
    setCompletionRowId(rowId)
  }

  function handleSaveCompletion(rowId: number) {
    setBulkRows((prev) =>
      prev.map((r) => (r.rowId === rowId ? { ...r, status: 'הושלם ידנית' } : r)),
    )
    setCompletionRowId(null)
  }

  function handleNext() {
    if (currentStep < 3) setCurrentStep((s) => (s + 1) as 1 | 2 | 3)
    else navigate('/')
  }

  function handleBack() {
    if (currentStep > 1) setCurrentStep((s) => (s - 1) as 1 | 2 | 3)
    else navigate('/')
  }

  function handleCancel() {
    navigate('/')
  }

  const allComplete = bulkRows.every((r) => r.status !== 'חסר מידע')
  const atStep3 = currentStep === 3
  const completionRow = completionRowId !== null ? bulkRows.find((r) => r.rowId === completionRowId) : null

  return (
    <PageRoot className="relative w-full overflow-hidden">
      <VideoBackground />
      <Backdrop className="absolute inset-0 z-10" />

      {/* Modal — LTR layout to match Figma */}
      <ModalBox className="absolute z-20 flex flex-col" dir="ltr">
        {/* ── Header — LTR: X(left) | flex-1 | [subtitle + title](right) ── */}
        <ModalHeaderRow className="flex gap-10 items-center overflow-clip shrink-0 w-full">
          <button onClick={handleCancel} className="shrink-0 hover:opacity-70 transition-opacity">
            <CloseIcon />
          </button>
          <div className="flex flex-1 items-center justify-end gap-2 min-w-0">
            <BulkSubtitle dir="auto">דרישה מיוחדת</BulkSubtitle>
            <BulkTitle dir="auto">הנפקת כר"חים</BulkTitle>
          </div>
        </ModalHeaderRow>

        {/* ── Stepper ── */}
        <BulkStepper currentStep={currentStep} />

        {/* ── Step content ── */}
        {currentStep === 1 && (
          <Step1Content
            inputMode={inputMode}
            onInputModeChange={setInputMode}
            idEntries={idEntries}
            onAddRow={handleAddRow}
            onRemoveRow={handleRemoveRow}
            onChangeRow={handleChangeRow}
          />
        )}

        {currentStep === 2 && (
          <Step2Content rows={bulkRows} onChangeRow={handleChangeStep2Row} />
        )}

        {currentStep === 3 && (
          <Step3Content rows={bulkRows} onOpenCompletion={handleOpenCompletion} />
        )}

        {/* ── Completion modal ── */}
        {completionRow && (
          <CompletionModal
            row={completionRow}
            onSave={handleSaveCompletion}
            onClose={() => setCompletionRowId(null)}
          />
        )}

        {/* ── Action bar — LTR: הבא/סיום(left) | חזור | ביטול ── */}
        <div className="flex gap-4 items-start shrink-0 w-full" dir="ltr">
          <NextBtn
            $disabled={atStep3 && !allComplete}
            disabled={atStep3 && !allComplete}
            onClick={handleNext}
            className="flex items-center justify-center overflow-clip rounded shrink-0"
          >
            <NextBtnLabel dir="auto">{atStep3 ? 'סיום תהליך' : 'הבא'}</NextBtnLabel>
          </NextBtn>
          <BackBtn
            $disabled={false}
            onClick={handleBack}
            className="flex items-center justify-center overflow-clip rounded shrink-0"
          >
            <BackBtnLabel dir="auto">חזור</BackBtnLabel>
          </BackBtn>
          <CancelBtn
            onClick={handleCancel}
            className="flex items-center justify-center overflow-clip rounded shrink-0"
          >
            <CancelBtnLabel dir="auto">ביטול</CancelBtnLabel>
          </CancelBtn>
        </div>
      </ModalBox>
    </PageRoot>
  )
}
