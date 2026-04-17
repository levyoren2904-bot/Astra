import { useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { CloseIcon } from '../WizardPage/components/CloseIcon'
import {
  BIO_HEADER_BG,
  BIO_FP_ICON,
  BIO_FP_SCAN_BG,
  BIO_FP_SYMBOL,
  BIO_CAM_BG,
  BIO_CAM_ICON,
  BIO_LIGHT_ICON,
  BIO_ANGLE_ICON,
  BIO_FACE_GREEN,
  BIO_DOT_GREEN,
  BIO_CAPTURED_PHOTO,
} from '@/pages/WizardPage/constants'
import {
  PageRoot,
  Backdrop,
  ModalBox,
  ModalHeaderRow,
  PageTitle,
  HeaderResidentInfo,
  HeaderResidentName,
  HeaderResidentId,
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
  IdSection,
  IdSectionTitle,
  IdInput,
  PersonalPanel,
  PersonalInner,
  DemographicsSection,
  ResidentName,
  ResidentNameAr,
  DemoGrid,
  DemoCell,
  DemoLabel,
  DemoValue,
  PhotoSection,
  PhotoCircle,
  BadgeRow,
  BadgeItem,
  BadgeLabel,
  BottomRow,
  InfoPanel,
  InfoPanelHeader,
  InfoPanelTitle,
  InfoPanelBadge,
  InfoPanelCards,
  CardEntry,
  CardChip,
  CardChipText,
  CardDetails,
  CardTitle,
  CardValidityRow,
  CardDate,
  CardValidityLabel,
  BioPanelsRow,
  BioPanel,
  BioPanelHeaderRow,
  BioHeaderBgImg,
  BioPanelTitle,
  FpHeaderIconWrap,
  BioIconImg,
  FpScannerWrapper,
  FpScannerImage,
  FpSetLabel,
  FpSetDotImg,
  FpSetText,
  FpBottomBar,
  FpFrostedOverlay,
  FpOverlayCard,
  FpOverlayTitle,
  FpOverlaySub,
  FpIconArea,
  CamBgWrapper,
  CamBgImage,
  CamOverlayDiv,
  FaceHeaderIconsLeft,
  FaceAngleChip,
  FaceAngleDotImg,
  FaceAngleIconImg,
  FaceHint,
  FaceCircleWrap,
  FaceCircleImage,
  FaceCapturedThumb,
  FaceCapturedThumbImg,
  BioCaptureBar,
  CaptureBtnCircle,
  NextBtn,
  OutlinedBtn,
  GhostBtn,
  DisabledBtn,
  BtnLabel,
  DevBar,
  DevBtn,
} from './WizardAcquisitionPage.styles'

// ── Types ─────────────────────────────────────────────────────────────────────

type AcqStep = 1 | 2 | 3
type FaceState = 'idle' | 'captured'

// ── Constants ─────────────────────────────────────────────────────────────────

const ACQ_STEPS = [
  { num: 1, label: 'ת.ז' },
  { num: 2, label: 'פרטי תושב' },
  { num: 3, label: 'ביומטריה' },
]

const MOCK_RESIDENT = {
  nameHe: 'חאמד אל חמיסי מרוואן',
  nameAr: 'حامد الحميصي مروان',
  id: '1000000098',
  birthdate: '12/04/1984',
  age: 'בן 37',
  marital: 'נשוי + 3',
  city: "ג'נין",
  street: "שקר 2",
}

const CHIP_ACTIVE = { bg: '#d5f3ea', color: '#2fc198', label: 'פעיל' }
const CHIP_FROZEN = { bg: '#fcdbde', color: '#f24959', label: 'מוקפא' }
const CHIP_INACTIVE = { bg: '#f5f5f6', color: '#878792', label: 'לא פעיל' }

const MOCK_HISTORY = [
  { chip: CHIP_ACTIVE, title: 'כר"ח שטחים', date: '2.1.2023 - 1.1.2023' },
  { chip: CHIP_FROZEN, title: 'כר"ח שטחים', date: '2.1.2023 - 1.1.2023' },
  { chip: CHIP_INACTIVE, title: 'כר"ח שטחים', date: '2.1.2023 - 1.1.2023' },
  { chip: CHIP_INACTIVE, title: 'כר"ח שטחים', date: '2.1.2023 - 1.1.2023' },
]

const MOCK_PROHIBITIONS = [
  { chip: CHIP_ACTIVE, title: 'מניעת שב"כ סירוב מעבר', date: '2.1.2023 - 1.1.2023' },
  { chip: CHIP_ACTIVE, title: 'מניעת שב"כ סירוב מעבר', date: '2.1.2023 - 1.1.2023' },
  { chip: CHIP_ACTIVE, title: 'מניעת שב"כ סירוב מעבר', date: '2.1.2023 - 1.1.2023' },
  { chip: CHIP_ACTIVE, title: 'מניעת שב"כ סירוב מעבר', date: '2.1.2023 - 1.1.2023' },
]

const MOCK_LICENSES = [
  { chip: CHIP_FROZEN, title: 'רישיון לגובה', date: '12.4.2025 - 13.4.2025' },
  { chip: CHIP_ACTIVE, title: 'היתר עבודה', date: '12.4.2025 - 13.4.2025' },
  { chip: CHIP_ACTIVE, title: 'היתר עבודה', date: '12.4.2025 - 13.4.2025' },
]



// ── Stepper ───────────────────────────────────────────────────────────────────

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

const AcqStepper: FC<{ currentStep: AcqStep }> = ({ currentStep }) => {
  const stepsDesc = [...ACQ_STEPS].reverse()
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

// ── Step 1 — ID Entry ─────────────────────────────────────────────────────────

const Step1Content: FC<{ value: string; onChange: (v: string) => void }> = ({
  value,
  onChange,
}) => (
  <div className="flex flex-1 min-h-0 w-full items-start justify-end" dir="ltr">
    <IdSection>
      <IdSectionTitle dir="auto">הזנת ת.ז</IdSectionTitle>
      <IdInput
        type="text"
        placeholder="000000000"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={9}
        dir="ltr"
      />
    </IdSection>
  </div>
)

// ── Step 2 — Personal Details ─────────────────────────────────────────────────

const InfoCard: FC<{
  chip: { bg: string; color: string; label: string }
  title: string
  date: string
}> = ({ chip, title, date }) => (
  <CardEntry dir="ltr">
    {/* LTR: chip on left, details on right */}
    <CardChip $bg={chip.bg}>
      <CardChipText $color={chip.color} dir="auto">
        {chip.label}
      </CardChipText>
    </CardChip>
    <CardDetails>
      <CardTitle dir="auto">{title}</CardTitle>
      <CardValidityRow dir="rtl">
        <CardDate dir="ltr">{date}</CardDate>
        <CardValidityLabel dir="auto">תוקף</CardValidityLabel>
        <img src="/icons/calendar-union.svg" alt="" width={24} height={24} />
      </CardValidityRow>
    </CardDetails>
  </CardEntry>
)

const Step2Content: FC = () => (
  <>
    {/* Personal details panel */}
    <PersonalPanel dir="ltr">
      {/* Photo + demographics row — LTR: demographics left, photo right */}
      <PersonalInner>
        <DemographicsSection>
          <div className="flex flex-col items-end gap-0">
            <ResidentName dir="auto">{MOCK_RESIDENT.nameHe}</ResidentName>
            <ResidentNameAr dir="auto">{MOCK_RESIDENT.nameAr}</ResidentNameAr>
          </div>
          <DemoGrid dir="rtl">
            {/* Row 1 col 2: ID */}
            <DemoCell>
              <DemoValue dir="ltr">{MOCK_RESIDENT.id}</DemoValue>
              <DemoLabel dir="auto">ת.ז</DemoLabel>
            </DemoCell>
            {/* Row 1 col 1: Age + Birthdate */}
            <DemoCell>
              <DemoValue dir="auto">{MOCK_RESIDENT.age}</DemoValue>
              <DemoValue dir="ltr">{MOCK_RESIDENT.birthdate}</DemoValue>
              <DemoLabel dir="auto">תאריך לידה</DemoLabel>
            </DemoCell>
            {/* Row 2 col 2: Address */}
            <DemoCell>
              <DemoValue dir="auto">{`${MOCK_RESIDENT.city}, ${MOCK_RESIDENT.street}`}</DemoValue>
              <DemoLabel dir="auto">מגורים</DemoLabel>
              <DemoValue dir="auto">{MOCK_RESIDENT.city}</DemoValue>
              <DemoLabel dir="auto">נפה</DemoLabel>
            </DemoCell>
            {/* Row 2 col 1: Marital */}
            <DemoCell>
              <DemoValue dir="auto">{MOCK_RESIDENT.marital}</DemoValue>
            </DemoCell>
          </DemoGrid>
        </DemographicsSection>
        <PhotoSection>
          <PhotoCircle>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="18" r="8" fill="#b0b0c0" />
              <path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="#b0b0c0" />
            </svg>
          </PhotoCircle>
        </PhotoSection>
      </PersonalInner>

      {/* 8 badge icons */}
      <BadgeRow dir="rtl">
        <BadgeItem>
          <img src="/icons/card-tick.svg" alt="" width={24} height={24} />
          <BadgeLabel dir="auto">כר"ח בתוקף</BadgeLabel>
        </BadgeItem>
        <BadgeItem>
          <img src="/icons/arrest-vector.svg" alt="" width={24} height={24} />
          <BadgeLabel dir="auto">מעצר</BadgeLabel>
        </BadgeItem>
        <BadgeItem>
          <img src="/icons/user-octagon.svg" alt="" width={24} height={24} />
          <BadgeLabel dir="auto">{'בכיר רש"פ\n1'}</BadgeLabel>
        </BadgeItem>
        <BadgeItem>
          <img src="/icons/book.svg" alt="" width={24} height={24} />
          <BadgeLabel dir="auto">{'בקשת היתר\nפתוחה'}</BadgeLabel>
        </BadgeItem>
        <BadgeItem>
          <img src="/icons/user-octagon-broken.svg" alt="" width={24} height={24} />
          <BadgeLabel dir="auto">{'חבר במנגנונים\nפלסטיניים'}</BadgeLabel>
        </BadgeItem>
        <BadgeItem>
          <img src="/icons/user-octagon-broken.svg" alt="" width={24} height={24} />
          <BadgeLabel dir="auto">אבחון בתוקף</BadgeLabel>
        </BadgeItem>
        <BadgeItem>
          <img src="/icons/user-octagon.svg" alt="" width={24} height={24} />
          <BadgeLabel dir="auto">{'בכיר רש"פ\n1'}</BadgeLabel>
        </BadgeItem>
        <BadgeItem>
          <img src="/icons/passport-group.svg" alt="" width={24} height={24} />
          <BadgeLabel dir="auto">דרכונים</BadgeLabel>
        </BadgeItem>
      </BadgeRow>
    </PersonalPanel>

    {/* 3 bottom info panels */}
    <BottomRow dir="ltr">
      {/* LTR: licenses (left) | prohibitions (center) | history (right) */}
      <InfoPanel>
        <InfoPanelHeader dir="rtl">
          <InfoPanelTitle dir="auto">היתרים ורישיונות (9)</InfoPanelTitle>
          <InfoPanelBadge>
            <img src="/icons/panel-licenses.png" alt="" width={24} height={24} />
          </InfoPanelBadge>
        </InfoPanelHeader>
        <InfoPanelCards>
          {MOCK_LICENSES.map((c, i) => (
            <InfoCard key={i} {...c} />
          ))}
        </InfoPanelCards>
      </InfoPanel>

      <InfoPanel>
        <InfoPanelHeader dir="rtl">
          <InfoPanelTitle dir="auto">מניעות (8)</InfoPanelTitle>
          <InfoPanelBadge>
            <img src="/icons/panel-history.png" alt="" width={24} height={24} />
          </InfoPanelBadge>
        </InfoPanelHeader>
        <InfoPanelCards>
          {MOCK_PROHIBITIONS.map((c, i) => (
            <InfoCard key={i} {...c} />
          ))}
        </InfoPanelCards>
      </InfoPanel>

      <InfoPanel>
        <InfoPanelHeader dir="rtl">
          <InfoPanelTitle dir="auto">היסטורית כר"חים</InfoPanelTitle>
          <InfoPanelBadge>
            <img src="/icons/panel-history.png" alt="" width={24} height={24} />
          </InfoPanelBadge>
        </InfoPanelHeader>
        <InfoPanelCards>
          {MOCK_HISTORY.map((c, i) => (
            <InfoCard key={i} {...c} />
          ))}
        </InfoPanelCards>
      </InfoPanel>
    </BottomRow>
  </>
)

// ── Step 3 — Biometrics ───────────────────────────────────────────────────────

interface Step3ContentProps {
  fpAcquired: boolean
  faceState: FaceState
  onAcquireFp: () => void
  onCaptureFace: () => void
  onRetakePhoto: () => void
}

const Step3Content: FC<Step3ContentProps> = ({
  fpAcquired,
  faceState,
  onAcquireFp,
  onCaptureFace,
  onRetakePhoto,
}) => (
  <BioPanelsRow dir="ltr">
    {/* ── Left — Fingerprints ── */}
    <BioPanel>
      {/* Header */}
      <BioPanelHeaderRow>
        <BioHeaderBgImg src={BIO_HEADER_BG} alt="" loading="lazy" />
        <FpHeaderIconWrap>
          <BioIconImg src={BIO_FP_ICON} alt="" loading="lazy" />
        </FpHeaderIconWrap>
        <BioPanelTitle dir="auto">טביעות אצבעות</BioPanelTitle>
      </BioPanelHeaderRow>

      {/* Scanner image */}
      <FpScannerWrapper>
        <FpScannerImage src={BIO_FP_SCAN_BG} alt="" loading="lazy" />
      </FpScannerWrapper>

      {/* Set label */}
      <FpSetLabel>
        <FpSetDotImg src={BIO_DOT_GREEN} alt="" />
        <FpSetText dir="auto">4 אצבעות - יד ימין</FpSetText>
      </FpSetLabel>

      {/* Bottom bar */}
      <FpBottomBar dir="ltr">
        <NextBtn
          onClick={onAcquireFp}
          disabled={fpAcquired}
          $disabled={fpAcquired}
          className="flex items-center justify-center rounded shrink-0"
        >
          <BtnLabel dir="auto">{fpAcquired ? 'הושלם ✓' : 'נעל ועבור לסט הבא'}</BtnLabel>
        </NextBtn>
        <OutlinedBtn className="flex items-center justify-center rounded shrink-0">
          <BtnLabel $color="#5c5def" dir="auto">חזור לסט קודם</BtnLabel>
        </OutlinedBtn>
      </FpBottomBar>

      {/* Frosted overlay + acquisition card when not yet acquired */}
      {!fpAcquired && (
        <>
          <FpFrostedOverlay />
          <FpOverlayCard>
            <FpOverlayTitle dir="auto">טביעות אצבעות</FpOverlayTitle>
            <FpOverlaySub dir="auto">(לא חובה)</FpOverlaySub>
            <FpIconArea>
              <img src={BIO_FP_SYMBOL} alt="" width={60} height={60} style={{ opacity: 0.5 }} />
            </FpIconArea>
            <NextBtn
              onClick={onAcquireFp}
              className="flex items-center justify-center rounded shrink-0"
            >
              <BtnLabel dir="auto">בצע הרכשה</BtnLabel>
            </NextBtn>
          </FpOverlayCard>
        </>
      )}
    </BioPanel>

    {/* ── Right — Face Camera ── */}
    <BioPanel>
      {/* Camera background */}
      <CamBgWrapper>
        <CamBgImage src={BIO_CAM_BG} alt="" loading="lazy" />
        <CamOverlayDiv />
      </CamBgWrapper>

      {/* Header */}
      <BioPanelHeaderRow>
        <BioHeaderBgImg src={BIO_HEADER_BG} alt="" loading="lazy" />
        <FaceHeaderIconsLeft>
          <BioIconImg src={BIO_CAM_ICON} alt="" loading="lazy" />
          <BioIconImg src={BIO_LIGHT_ICON} alt="" loading="lazy" />
          <FaceAngleChip>
            <FaceAngleDotImg src={BIO_DOT_GREEN} alt="" loading="lazy" />
            <FaceAngleIconImg src={BIO_ANGLE_ICON} alt="" loading="lazy" />
          </FaceAngleChip>
        </FaceHeaderIconsLeft>
        <BioPanelTitle dir="auto">צילום פנים</BioPanelTitle>
      </BioPanelHeaderRow>

      {/* Resident instruction */}
      <FaceHint dir="auto">*לתושב - אנא עמוד מול המצלמה.</FaceHint>

      {/* Face detection circle */}
      {faceState === 'idle' && (
        <FaceCircleWrap>
          <FaceCircleImage src={BIO_FACE_GREEN} alt="" />
        </FaceCircleWrap>
      )}

      {/* Capture bar */}
      <BioCaptureBar>
        <CaptureBtnCircle onClick={onCaptureFace} title="צלם" />
      </BioCaptureBar>

      {/* Captured overlay */}
      {faceState === 'captured' && (
        <>
          <FpFrostedOverlay />
          <FpOverlayCard>
            <FpOverlayTitle dir="auto">צילום פנים</FpOverlayTitle>
            <FpIconArea>
              <FaceCapturedThumb>
                <FaceCapturedThumbImg src={BIO_CAPTURED_PHOTO} alt="" />
              </FaceCapturedThumb>
            </FpIconArea>
            <NextBtn
              onClick={onRetakePhoto}
              className="flex items-center justify-center rounded shrink-0"
            >
              <BtnLabel dir="auto">צלם שנית</BtnLabel>
            </NextBtn>
          </FpOverlayCard>
        </>
      )}
    </BioPanel>
  </BioPanelsRow>
)

// ── WizardAcquisitionPage ─────────────────────────────────────────────────────

export const WizardAcquisitionPage: FC = () => {
  const navigate = useNavigate()

  const [step, setStep] = useState<AcqStep>(1)
  const [idInput, setIdInput] = useState('')
  const [fpAcquired, setFpAcquired] = useState(false)
  const [faceState, setFaceState] = useState<FaceState>('idle')

  function handleNext() {
    if (step < 3) setStep((s) => (s + 1) as AcqStep)
    else navigate('/')
  }

  function handleBack() {
    if (step > 1) setStep((s) => (s - 1) as AcqStep)
    else navigate('/')
  }

  function handleCancel() {
    navigate('/')
  }

  function handleNextResident() {
    // Point of no return passed — reset to step 1 for next resident
    setStep(1)
    setIdInput('')
    setFpAcquired(false)
    setFaceState('idle')
  }

  const atStep3 = step === 3
  const step3Done = fpAcquired || faceState === 'captured'

  return (
    <PageRoot className="relative w-full overflow-hidden">
      <VideoBackground />
      <Backdrop className="absolute inset-0 z-10" />

      <ModalBox className="absolute z-20" dir="ltr">
        {/* ── Header ── */}
        <ModalHeaderRow>
          <button onClick={handleCancel} className="shrink-0 hover:opacity-70 transition-opacity">
            <CloseIcon />
          </button>
          <div className="flex flex-1 items-center justify-end gap-6 min-w-0">
            {step === 3 ? (
              <>
                <HeaderResidentInfo>
                  <HeaderResidentId dir="auto">{MOCK_RESIDENT.id}</HeaderResidentId>
                  <HeaderResidentName dir="auto">{MOCK_RESIDENT.nameHe}</HeaderResidentName>
                </HeaderResidentInfo>
                <PageTitle dir="auto">הנפקת כר"ח</PageTitle>
              </>
            ) : (
              <PageTitle dir="auto">הרכשה ייעודית</PageTitle>
            )}
          </div>
        </ModalHeaderRow>

        {/* ── Stepper ── */}
        <AcqStepper currentStep={step} />

        {/* ── Step content ── */}
        {step === 1 && <Step1Content value={idInput} onChange={setIdInput} />}
        {step === 2 && <Step2Content />}
        {step === 3 && (
          <Step3Content
            fpAcquired={fpAcquired}
            faceState={faceState}
            onAcquireFp={() => setFpAcquired(true)}
            onCaptureFace={() => setFaceState('captured')}
            onRetakePhoto={() => setFaceState('idle')}
          />
        )}

        {/* ── Action bar ── */}
        <div className="flex gap-4 items-center shrink-0 w-full" dir="ltr">
          {atStep3 ? (
            <>
              <NextBtn
                $disabled={!step3Done}
                disabled={!step3Done}
                onClick={handleNext}
                className="flex items-center justify-center rounded shrink-0"
              >
                <BtnLabel dir="auto">סיום תהליך</BtnLabel>
              </NextBtn>
              <OutlinedBtn
                onClick={handleNextResident}
                className="flex items-center justify-center rounded shrink-0"
              >
                <BtnLabel $color="#5c5def" dir="auto">
                  סיום ומעבר לתושב הבא
                </BtnLabel>
              </OutlinedBtn>
              {faceState === 'captured' ? (
                <DisabledBtn disabled>
                  <BtnLabel $color="#8c8c8c" dir="auto">חזור</BtnLabel>
                </DisabledBtn>
              ) : (
                <OutlinedBtn
                  onClick={handleBack}
                  className="flex items-center justify-center rounded shrink-0"
                  style={{ width: 70 }}
                >
                  <BtnLabel $color="#5c5def" dir="auto">חזור</BtnLabel>
                </OutlinedBtn>
              )}
              {faceState !== 'captured' && (
                <GhostBtn onClick={handleCancel} className="flex items-center justify-center rounded">
                  <BtnLabel $color="#5c5def" dir="auto">ביטול</BtnLabel>
                </GhostBtn>
              )}
            </>
          ) : (
            <>
              <NextBtn
                $disabled={step === 1 && idInput.trim() === ''}
                disabled={step === 1 && idInput.trim() === ''}
                onClick={handleNext}
                className="flex items-center justify-center rounded shrink-0"
              >
                <BtnLabel dir="auto">הבא</BtnLabel>
              </NextBtn>
              <OutlinedBtn
                onClick={handleBack}
                className="flex items-center justify-center rounded shrink-0"
                style={{ width: 70 }}
              >
                <BtnLabel $color="#5c5def" dir="auto">חזור</BtnLabel>
              </OutlinedBtn>
              <GhostBtn onClick={handleCancel} className="flex items-center justify-center rounded">
                <BtnLabel $color="#5c5def" dir="auto">ביטול</BtnLabel>
              </GhostBtn>
            </>
          )}
        </div>
      </ModalBox>

      {import.meta.env.DEV && (
        <DevBar>
          <DevBtn onClick={() => { setStep(1); setIdInput(''); setFpAcquired(false); setFaceState('idle') }}>
            reset
          </DevBtn>
          <DevBtn onClick={() => setStep(2)}>step 2</DevBtn>
          <DevBtn onClick={() => setStep(3)}>step 3</DevBtn>
          <DevBtn onClick={() => setFpAcquired(true)}>fp done</DevBtn>
          <DevBtn onClick={() => setFaceState('captured')}>face done</DevBtn>
        </DevBar>
      )}
    </PageRoot>
  )
}
