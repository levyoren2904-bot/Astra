import { useState, Fragment, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './AdminPage.styles'

// ── Types ─────────────────────────────────────────────────────────────────────

type TabId = 'stations' | 'card-types' | 'fees'

interface StationRow {
  id: number
  name: string
  site: string
  ip: string
  status: string
}

// ── Mock data ─────────────────────────────────────────────────────────────────

interface CardTypeRow {
  id: number
  name: string
  nationality: string
  description: string
  status: string
}

const MOCK_CARD_TYPES: CardTypeRow[] = [
  { id: 1, name: 'שם כלשהו', nationality: 'פלסטינאי', description: 'תיאור כלשהו', status: 'פעיל' },
  { id: 2, name: 'שם כלשהו', nationality: 'פלסטינאי', description: 'תיאור כלשהו', status: 'פעיל' },
]

interface FeeRow {
  id: number
  residentName: string
  idNumber: string
  feeNumber: string
  status: string
}

const MOCK_FEES: FeeRow[] = [
  { id: 1, residentName: 'חמודי מוחמד בן סעמק', idNumber: '123456789', feeNumber: '987654321', status: 'שולם' },
  { id: 2, residentName: 'שם תושב',              idNumber: '987654321', feeNumber: '123456789', status: 'שולם' },
  { id: 3, residentName: 'שם תושב',              idNumber: '987654321', feeNumber: '123456789', status: 'שולם' },
  { id: 4, residentName: 'שם תושב',              idNumber: '987654321', feeNumber: '123456789', status: 'שולם' },
  { id: 5, residentName: 'שם תושב',              idNumber: '987654321', feeNumber: '123456789', status: 'שולם' },
]

// ── Card type fields ──────────────────────────────────────────────────────────

const CARD_FIELDS = [
  { key: 'lastName',   label: 'שם משפחה' },
  { key: 'grandName',  label: 'שם הסב' },
  { key: 'fatherName', label: 'שם האב' },
  { key: 'firstName',  label: 'שם פרטי' },
  { key: 'expiry',     label: 'תום תוקף' },
  { key: 'issueDate',  label: 'תאריך הנפקה' },
  { key: 'birthDate',  label: 'תאריך לידה' },
  { key: 'address',    label: 'כתובת' },
] as const

type FieldKey = (typeof CARD_FIELDS)[number]['key']

// ── Card preview assets (replace with bundled files before production) ────────

const CARD_STROKE_1 = 'https://www.figma.com/api/mcp/asset/dd77cd91-fa9a-4371-97a2-765378308669'
const CARD_STROKE_2 = 'https://www.figma.com/api/mcp/asset/7e8d6ace-40fb-4e9e-a693-f482c8e22559'
const CARD_STROKE_3 = 'https://www.figma.com/api/mcp/asset/10efb80e-913f-49bf-8e07-f0d61f36b29a'
const CARD_FLAG = 'https://www.figma.com/api/mcp/asset/fcd19e71-54a2-4dc7-a221-bcc075f832e3'
const CARD_PERSON_THUMB = 'https://www.figma.com/api/mcp/asset/78068f88-5544-44fd-b113-e484a43afd27'
const CARD_PHOTO_RECT = 'https://www.figma.com/api/mcp/asset/539bbf65-047b-4c74-8371-6c353fa739e7'
const CARD_BARCODE = 'https://www.figma.com/api/mcp/asset/eaed97e0-682a-43b6-b3e0-e73d032043a0'

const MOCK_STATIONS: StationRow[] = [
  { id: 1, name: 'AYVERTUL150', site: 'נציגות קלנדיה', ip: '100.0.1.1', status: 'פעיל' },
  { id: 2, name: 'AYVERTUL151', site: 'מת״ק עזה', ip: '100.0.1.1', status: 'פעיל' },
  { id: 3, name: 'AYVERTUL152', site: 'מת״ק עזה', ip: '100.0.1.1', status: 'פעיל' },
  { id: 4, name: 'AYVERTUL153', site: 'מת״ק עזה', ip: '100.0.1.1', status: 'פעיל' },
  { id: 5, name: 'AYVERTUL154', site: 'מת״ק עזה', ip: '100.0.1.1', status: 'פעיל' },
]

// ── Tabs config ───────────────────────────────────────────────────────────────

// DOM order is right-to-left (עמדות rightmost in LTR flex-end layout)
const TABS: { id: TabId; label: string }[] = [
  { id: 'fees', label: 'אגרות' },
  { id: 'card-types', label: 'סוגי כרטיסים' },
  { id: 'stations', label: 'עמדות' },
]

// ── EditStationModal ──────────────────────────────────────────────────────────

const STATION_NAMES = MOCK_STATIONS.map((s) => s.name)
const SITE_OPTIONS = ['נציגות קלנדיה', 'מת״ק עזה']

interface EditStationModalProps {
  station: StationRow
  onClose: () => void
}

const EditStationModal: FC<EditStationModalProps> = ({ station, onClose }) => {
  const [active, setActive] = useState(station.status === 'פעיל')
  const [name, setName] = useState(station.name)
  const [ip, setIp] = useState(station.ip)
  const [site, setSite] = useState(station.site)

  return (
    <>
      <S.ModalOverlay onClick={onClose} />
      {/* dir="ltr": close left, title right; form fields left-to-right matching Figma */}
      <S.ModalContainer dir="ltr">
        <S.ModalHeader>
          <S.ModalCloseBtn onClick={onClose} aria-label="סגור">
            <img src="/icons/close.svg" alt="" width={11} height={11} />
          </S.ModalCloseBtn>
          <S.ModalTitle dir="auto">עריכת פרטי עמדה</S.ModalTitle>
        </S.ModalHeader>

        <S.FormFieldContainer>
          {/* Row 1: Status toggle (left) + Station name dropdown (right) */}
          <S.FormRow>
            <S.StatusContainer>
              <S.ToggleBtn $active={active} onClick={() => setActive((v) => !v)}>
                {active ? (
                  <>
                    <S.ToggleLabel>פעיל</S.ToggleLabel>
                    <S.ToggleKnob />
                  </>
                ) : (
                  <>
                    <S.ToggleKnob />
                    <S.ToggleLabel>כבוי</S.ToggleLabel>
                  </>
                )}
              </S.ToggleBtn>
              <S.StatusLabel dir="auto">סטטוס</S.StatusLabel>
            </S.StatusContainer>
            <S.TextField $width={237}>
              <S.FieldLabel dir="auto">שם עמדה</S.FieldLabel>
              {/* Visual layer + invisible select overlay covering full box incl. chevron */}
              <S.FieldInputBox>
                <S.ChevronImg src="/icons/chevron-down.svg" alt="" />
                <S.FieldValue dir="auto">{name}</S.FieldValue>
                <S.FieldSelectOverlay
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                >
                  {STATION_NAMES.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </S.FieldSelectOverlay>
              </S.FieldInputBox>
            </S.TextField>
          </S.FormRow>

          {/* Row 2: IP text input (left) + Site dropdown (right) */}
          <S.FormRow>
            <S.TextField>
              <S.FieldLabel dir="auto">מדפסת IP</S.FieldLabel>
              <S.FieldInputBox>
                <S.FieldTextInput
                  dir="ltr"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                />
              </S.FieldInputBox>
            </S.TextField>
            <S.TextField>
              <S.FieldLabel dir="auto">אתר</S.FieldLabel>
              <S.FieldInputBox>
                <S.ChevronImg src="/icons/chevron-down.svg" alt="" />
                <S.FieldValue dir="auto">{site}</S.FieldValue>
                <S.FieldSelectOverlay
                  value={site}
                  onChange={(e) => setSite(e.target.value)}
                >
                  {SITE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </S.FieldSelectOverlay>
              </S.FieldInputBox>
            </S.TextField>
          </S.FormRow>
        </S.FormFieldContainer>

        <S.ModalFooter>
          <S.SaveBtn dir="auto" onClick={onClose}>שמור</S.SaveBtn>
          <S.CancelBtn dir="auto" onClick={onClose}>ביטול</S.CancelBtn>
        </S.ModalFooter>
      </S.ModalContainer>
    </>
  )
}

// ── Mini card preview helpers ─────────────────────────────────────────────────

const CardCircles: FC = () => (
  <S.MiniCardCirclesGroup>
    <S.MiniCardCircle src={CARD_STROKE_3} alt="" $size={141} $offset={0} />
    <S.MiniCardCircle src={CARD_STROKE_2} alt="" $size={129} $offset={6} />
    <S.MiniCardCircle src={CARD_STROKE_1} alt="" $size={108} $offset={16} />
  </S.MiniCardCirclesGroup>
)

const BackCardPreview: FC = () => (
  <S.MiniCard>
    <CardCircles />
    <S.MiniCardHeaderRow>
      <S.MiniCardFlagImg src={CARD_FLAG} alt="" />
    </S.MiniCardHeaderRow>
    <S.MiniCardMagStripe />
  </S.MiniCard>
)

const FrontCardPreview: FC = () => (
  <S.MiniCard>
    <CardCircles />
    <S.MiniCardHeaderRow>
      <S.MiniCardFlagImg src={CARD_FLAG} alt="" />
      <S.MiniCardOrgCol>
        <S.MiniCardOrgTextHe dir="auto">מנהלת התיאום והקישור האזרחית - איו״ש</S.MiniCardOrgTextHe>
        <S.MiniCardOrgTextAr dir="auto">مديرة التنسيق والربط المدني - أيوش</S.MiniCardOrgTextAr>
        <S.MiniCardLogoRow>
          <S.MiniCardOrgTextAr dir="auto">أسترا</S.MiniCardOrgTextAr>
          <S.MiniCardOrgTextHe dir="auto">אסטרה</S.MiniCardOrgTextHe>
        </S.MiniCardLogoRow>
      </S.MiniCardOrgCol>
      <S.MiniCardPersonThumb src={CARD_PERSON_THUMB} alt="" />
    </S.MiniCardHeaderRow>

    <S.MiniCardDataSection>
      <S.MiniCardDataRow>
        <S.MiniCardDataValue $bold dir="auto">חמודי</S.MiniCardDataValue>
        <S.MiniCardDataLabel>
          <S.MiniCardDataLabelHe dir="auto">שם פרטי</S.MiniCardDataLabelHe>
          <S.MiniCardDataLabelAr dir="auto">اسم خاص</S.MiniCardDataLabelAr>
        </S.MiniCardDataLabel>
      </S.MiniCardDataRow>
      <S.MiniCardDataRow>
        <S.MiniCardDataValue $bold dir="auto">מוחמד</S.MiniCardDataValue>
        <S.MiniCardDataLabel>
          <S.MiniCardDataLabelHe dir="auto">שם האב</S.MiniCardDataLabelHe>
          <S.MiniCardDataLabelAr dir="auto">اسم الأب</S.MiniCardDataLabelAr>
        </S.MiniCardDataLabel>
      </S.MiniCardDataRow>
      <S.MiniCardDataRow>
        <S.MiniCardDataValue $bold dir="auto">יוסוף</S.MiniCardDataValue>
        <S.MiniCardDataLabel>
          <S.MiniCardDataLabelHe dir="auto">שם הסב</S.MiniCardDataLabelHe>
          <S.MiniCardDataLabelAr dir="auto">اسم الجد</S.MiniCardDataLabelAr>
        </S.MiniCardDataLabel>
      </S.MiniCardDataRow>
      <S.MiniCardDataRow>
        <S.MiniCardDataValue $bold dir="auto">ימין</S.MiniCardDataValue>
        <S.MiniCardDataLabel>
          <S.MiniCardDataLabelHe dir="auto">שם משפחה</S.MiniCardDataLabelHe>
          <S.MiniCardDataLabelAr dir="auto">اسم العائلة</S.MiniCardDataLabelAr>
        </S.MiniCardDataLabel>
      </S.MiniCardDataRow>
      <S.MiniCardDataRow>
        <S.MiniCardDataValue $bold dir="auto">ג׳נין</S.MiniCardDataValue>
        <S.MiniCardDataLabel>
          <S.MiniCardDataLabelHe dir="auto">כתובת</S.MiniCardDataLabelHe>
          <S.MiniCardDataLabelAr dir="auto">عنوان</S.MiniCardDataLabelAr>
        </S.MiniCardDataLabel>
      </S.MiniCardDataRow>
      <S.MiniCardDataRow>
        <S.MiniCardDataValue $bold dir="auto">08/07/1987</S.MiniCardDataValue>
        <S.MiniCardDataLabel>
          <S.MiniCardDataLabelHe dir="auto">תאריך לידה</S.MiniCardDataLabelHe>
          <S.MiniCardDataLabelAr dir="auto">تاريخ الميلاد</S.MiniCardDataLabelAr>
        </S.MiniCardDataLabel>
      </S.MiniCardDataRow>
    </S.MiniCardDataSection>

    <S.MiniCardPhoto src={CARD_PHOTO_RECT} alt="" />
    <S.MiniCardBarcodeImg src={CARD_BARCODE} alt="" />
  </S.MiniCard>
)

// ── EditCardTypeModal ─────────────────────────────────────────────────────────

const CARD_NAME_OPTIONS = ['שם כלשהו', 'AYVERTUL150']
const TEMPLATE_OPTIONS = ['כרטיס מיתר']

interface EditCardTypeModalProps {
  cardType: CardTypeRow
  onClose: () => void
}

const EditCardTypeModal: FC<EditCardTypeModalProps> = ({ cardType, onClose }) => {
  const [nationality, setNationality] = useState<'פלסטינאי' | 'ישראלי'>(
    cardType.nationality as 'פלסטינאי' | 'ישראלי',
  )
  const [cardName, setCardName] = useState(cardType.name)
  const [description, setDescription] = useState(cardType.description)
  const [template, setTemplate] = useState('כרטיס מיתר')
  const [fields, setFields] = useState<Record<FieldKey, boolean>>({
    lastName: true,
    grandName: true,
    fatherName: true,
    firstName: true,
    expiry: true,
    issueDate: true,
    birthDate: true,
    address: true,
  })

  const toggleField = (key: FieldKey) =>
    setFields((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <>
      <S.ModalOverlay onClick={onClose} />
      <S.CardTypeModalContainer dir="ltr">
        <S.ModalHeader>
          <S.ModalCloseBtn onClick={onClose} aria-label="סגור">
            <img src="/icons/close.svg" alt="" width={11} height={11} />
          </S.ModalCloseBtn>
          <S.ModalTitle dir="auto">כרטיס חדש</S.ModalTitle>
        </S.ModalHeader>

        <S.FormFieldContainer>
          {/* Row 1: Nationality segmented control + Card name */}
          <S.FormRow>
            <S.NationalityControl>
              <S.NationalityOption
                $active={nationality === 'פלסטינאי'}
                onClick={() => setNationality('פלסטינאי')}
                dir="auto"
              >
                פלסטינאי
              </S.NationalityOption>
              <S.NationalityOption
                $active={nationality === 'ישראלי'}
                onClick={() => setNationality('ישראלי')}
                dir="auto"
              >
                ישראלי
              </S.NationalityOption>
            </S.NationalityControl>
            <S.TextField $width={237}>
              <S.FieldLabel dir="auto">שם כרטיס</S.FieldLabel>
              <S.FieldInputBox>
                <S.ChevronImg src="/icons/chevron-down.svg" alt="" />
                <S.FieldValue dir="auto">{cardName}</S.FieldValue>
                <S.FieldSelectOverlay value={cardName} onChange={(e) => setCardName(e.target.value)}>
                  {CARD_NAME_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </S.FieldSelectOverlay>
              </S.FieldInputBox>
            </S.TextField>
          </S.FormRow>

          {/* Row 2: Description (free text, full width) */}
          <S.FormRow>
            <S.TextField>
              <S.FieldLabel dir="auto">תיאור</S.FieldLabel>
              <S.FieldInputBox>
                <S.FieldTextInput
                  dir="auto"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </S.FieldInputBox>
            </S.TextField>
          </S.FormRow>

          {/* Row 3: Template (237px, right-aligned) */}
          <S.FormRow>
            <S.TextField $width={237}>
              <S.FieldLabel dir="auto">טמפלייט</S.FieldLabel>
              <S.FieldInputBox>
                <S.ChevronImg src="/icons/chevron-down.svg" alt="" />
                <S.FieldValue dir="auto">{template}</S.FieldValue>
                <S.FieldSelectOverlay value={template} onChange={(e) => setTemplate(e.target.value)}>
                  {TEMPLATE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </S.FieldSelectOverlay>
              </S.FieldInputBox>
            </S.TextField>
          </S.FormRow>
        </S.FormFieldContainer>

        {/* Checkbox field selector */}
        <S.CheckboxSection>
          <S.FieldLabel dir="auto">שדות</S.FieldLabel>
          <S.CheckboxGrid>
            {CARD_FIELDS.map(({ key, label }) => (
              <S.CheckboxItemRow key={key}>
                <S.CheckboxItemLabel dir="auto">{label}</S.CheckboxItemLabel>
                <S.CheckboxBox $checked={fields[key]} onClick={() => toggleField(key)} />
              </S.CheckboxItemRow>
            ))}
          </S.CheckboxGrid>
        </S.CheckboxSection>

        {/* Card image previews */}
        <S.CardImagesRow>
          <S.CardImageGroup>
            <S.FieldLabel dir="auto">תמונה אחורית</S.FieldLabel>
            <BackCardPreview />
          </S.CardImageGroup>
          <S.CardImageGroup>
            <S.FieldLabel dir="auto">תמונה קדמית</S.FieldLabel>
            <FrontCardPreview />
          </S.CardImageGroup>
        </S.CardImagesRow>

        <S.ModalFooter>
          <S.SaveBtn dir="auto" onClick={onClose}>שמור</S.SaveBtn>
          <S.CancelBtn dir="auto" onClick={onClose}>ביטול</S.CancelBtn>
        </S.ModalFooter>
      </S.CardTypeModalContainer>
    </>
  )
}

// ── CardTypesTable ────────────────────────────────────────────────────────────

interface CardTypesTableProps {
  onEdit: (row: CardTypeRow) => void
}

const CardTypesTable: FC<CardTypesTableProps> = ({ onEdit }) => (
  <S.TableContainer>
    <S.TableHeader>
      {/* LTR order: פעולות | סטטוס | תיאור | ישראלי/פלסטינאי | שם כרטיס | # */}
      <S.ThActionCell>
        <S.ThText>פעולות</S.ThText>
      </S.ThActionCell>
      <S.ThCell $flex>
        <S.ThText>סטטוס</S.ThText>
      </S.ThCell>
      <S.ThCell $flex>
        <S.ThText>תיאור</S.ThText>
      </S.ThCell>
      <S.ThCell $flex>
        <S.ThText>ישראלי/פלסטינאי</S.ThText>
      </S.ThCell>
      <S.ThCell $flex>
        <S.ThText>שם כרטיס</S.ThText>
      </S.ThCell>
      <S.ThCell $width={39} $center>
        <S.ThText>#</S.ThText>
      </S.ThCell>
    </S.TableHeader>
    <S.TableBody>
      {MOCK_CARD_TYPES.map((row) => (
        <S.TableRow key={row.id}>
          <S.ActionCell>
            <S.ActionIconBtn aria-label="ערוך" onClick={() => onEdit(row)}>
              <img src="/icons/edit.svg" alt="" width={20} height={22} />
            </S.ActionIconBtn>
            <S.ActionIconBtn aria-label="מחק">
              <img src="/icons/trash.svg" alt="" width={17} height={18} />
            </S.ActionIconBtn>
          </S.ActionCell>
          <S.StatusCell>
            <S.StatusText dir="auto">{row.status}</S.StatusText>
            <S.StatusDot />
          </S.StatusCell>
          <S.TdCell $flex>
            <S.TdText dir="auto">{row.description}</S.TdText>
          </S.TdCell>
          <S.TdCell $flex>
            <S.TdText dir="auto">{row.nationality}</S.TdText>
          </S.TdCell>
          <S.TdCell $flex>
            <S.TdText dir="auto">{row.name}</S.TdText>
          </S.TdCell>
          <S.TdCell $width={39} $center>
            <S.TdText>{row.id}</S.TdText>
          </S.TdCell>
        </S.TableRow>
      ))}
    </S.TableBody>
  </S.TableContainer>
)

// ── StationsTable ─────────────────────────────────────────────────────────────

interface StationsTableProps {
  onEdit: (row: StationRow) => void
}

const StationsTable: FC<StationsTableProps> = ({ onEdit }) => (
  <S.TableContainer>
    <S.TableHeader>
      {/* LTR order: פעולות | סטטוס | מדפסת IP | אתר | שם עמדה | # */}
      <S.ThActionCell>
        <S.ThText>פעולות</S.ThText>
      </S.ThActionCell>
      <S.ThCell $flex>
        <S.ThText>סטטוס</S.ThText>
      </S.ThCell>
      <S.ThCell $flex>
        <S.ThText>מדפסת IP</S.ThText>
      </S.ThCell>
      <S.ThCell $flex>
        <S.ThText>אתר</S.ThText>
      </S.ThCell>
      <S.ThCell $flex>
        <S.ThText>שם עמדה</S.ThText>
      </S.ThCell>
      <S.ThCell $width={39} $center>
        <S.ThText>#</S.ThText>
      </S.ThCell>
    </S.TableHeader>
    <S.TableBody>
      {MOCK_STATIONS.map((row) => (
        <S.TableRow key={row.id}>
          <S.ActionCell>
            <S.ActionIconBtn aria-label="ערוך" onClick={() => onEdit(row)}>
              <img src="/icons/edit.svg" alt="" width={20} height={22} />
            </S.ActionIconBtn>
            <S.ActionIconBtn aria-label="מחק">
              <img src="/icons/trash.svg" alt="" width={17} height={18} />
            </S.ActionIconBtn>
          </S.ActionCell>
          <S.StatusCell>
            <S.StatusText dir="auto">{row.status}</S.StatusText>
            <S.StatusDot />
          </S.StatusCell>
          <S.TdCell $flex>
            <S.TdText>{row.ip}</S.TdText>
          </S.TdCell>
          <S.TdCell $flex>
            <S.TdText dir="auto">{row.site}</S.TdText>
          </S.TdCell>
          <S.TdCell $flex>
            <S.TdText>{row.name}</S.TdText>
          </S.TdCell>
          <S.TdCell $width={39} $center>
            <S.TdText>{row.id}</S.TdText>
          </S.TdCell>
        </S.TableRow>
      ))}
    </S.TableBody>
  </S.TableContainer>
)

// ── FeesTable ─────────────────────────────────────────────────────────────────

const FEE_STATUS_OPTIONS = ['שולם', 'לא שולם', 'נוצל'] as const
type FeeStatus = (typeof FEE_STATUS_OPTIONS)[number]

const FeesTable: FC = () => {
  const [statuses, setStatuses] = useState<Record<number, FeeStatus>>(
    Object.fromEntries(MOCK_FEES.map((r) => [r.id, r.status as FeeStatus])),
  )

  return (
    <S.TableContainer>
      <S.TableHeader>
        {/* LTR order: סטטוס | מספר אגרה | ת.ז | שם תושב | # */}
        <S.ThCell $flex>
          <S.ThText>סטטוס</S.ThText>
        </S.ThCell>
        <S.ThCell $flex>
          <S.ThText>מספר אגרה</S.ThText>
        </S.ThCell>
        <S.ThCell $flex>
          <S.ThText>ת.ז</S.ThText>
        </S.ThCell>
        <S.ThCell $flex>
          <S.ThText>שם תושב</S.ThText>
        </S.ThCell>
        <S.ThCell $width={39} $center>
          <S.ThText>#</S.ThText>
        </S.ThCell>
      </S.TableHeader>
      <S.TableBody>
        {MOCK_FEES.map((row) => (
          <S.TableRow key={row.id}>
            <S.FeeStatusCell>
              <S.FeeStatusIconBox>
                <S.ChevronImg src="/icons/chevron-down.svg" alt="" />
              </S.FeeStatusIconBox>
              <S.TdText dir="auto">{statuses[row.id]}</S.TdText>
              <S.FieldSelectOverlay
                value={statuses[row.id]}
                onChange={(e) =>
                  setStatuses((prev) => ({ ...prev, [row.id]: e.target.value as FeeStatus }))
                }
              >
                {FEE_STATUS_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </S.FieldSelectOverlay>
            </S.FeeStatusCell>
            <S.TdCell $flex>
              <S.TdText>{row.feeNumber}</S.TdText>
            </S.TdCell>
            <S.TdCell $flex>
              <S.TdText>{row.idNumber}</S.TdText>
            </S.TdCell>
            <S.TdCell $flex>
              <S.TdText dir="auto">{row.residentName}</S.TdText>
            </S.TdCell>
            <S.TdCell $width={39} $center>
              <S.TdText>{row.id}</S.TdText>
            </S.TdCell>
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.TableContainer>
  )
}

// ── AdminPage ─────────────────────────────────────────────────────────────────

export const AdminPage: FC = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabId>('stations')
  const [editingStation, setEditingStation] = useState<StationRow | null>(null)
  const [editingCardType, setEditingCardType] = useState<CardTypeRow | null>(null)

  return (
    <S.PageRoot>
      <S.TitleBar dir="ltr">
        <S.BackBtn onClick={() => navigate('/')}>
          <S.BackBtnIcon src="/icons/back-arrow.svg" alt="חזור" />
        </S.BackBtn>
        <S.PageTitle dir="auto">ניהול מערכת</S.PageTitle>
      </S.TitleBar>

      <S.TabsBar>
        {TABS.map((tab, idx) => (
          <Fragment key={tab.id}>
            {idx > 0 && <S.TabSeparator />}
            <S.TabItem $active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} dir="auto">
              {tab.label}
            </S.TabItem>
          </Fragment>
        ))}
      </S.TabsBar>

      <S.TableCard>
        <S.TableToolbar>
          <S.AddBtn aria-label="הוסף">
            <img src="/icons/plus.svg" alt="" width={24} height={24} />
          </S.AddBtn>
          <S.ToolbarRight>
            <S.FilterBtn aria-label="סנן">
              <img src="/icons/filter.svg" alt="" width={24} height={24} />
            </S.FilterBtn>
            <S.DatePicker>
              <img src="/icons/calendar-union.svg" alt="" width={24} height={24} />
              <S.DatePickerText dir="auto">היום 14/01/2023</S.DatePickerText>
            </S.DatePicker>
          </S.ToolbarRight>
        </S.TableToolbar>

        <S.TableDivider />

        {activeTab === 'stations' && <StationsTable onEdit={setEditingStation} />}
        {activeTab === 'card-types' && <CardTypesTable onEdit={setEditingCardType} />}
        {activeTab === 'fees' && <FeesTable />}
      </S.TableCard>

      {editingStation && (
        <EditStationModal
          station={editingStation}
          onClose={() => setEditingStation(null)}
        />
      )}
      {editingCardType && (
        <EditCardTypeModal
          cardType={editingCardType}
          onClose={() => setEditingCardType(null)}
        />
      )}
    </S.PageRoot>
  )
}
