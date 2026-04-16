import { useState, useRef, useEffect, type FC } from 'react'
import { MOCK_RESIDENT } from '@/pages/WizardPage/mockData'
import { CIRCUMFERENCE, SCAN_DURATION } from '@/pages/WizardPage/constants'
import {
  PanelRoot,
  FaceSection,
  OpenQuestionnaireBtn,
  OpenQuestionnaireBtnLabel,
  FaceStatusText,
  FaceStatusIconSm,
  FaceStatusIconLg,
  FaceCircle,
  FaceNA,
  ScanSvg,
  FaceLabelTitle,
  StartScanBtn,
  StartScanBtnLabel,
  PersonInfoPanel,
  PersonInfoHeader,
  PersonNameHe,
  PersonNameAr,
  PersonFieldsGrid,
  PersonFieldRow,
  PersonFieldValue,
  PersonFieldLabel,
  PersonPhoto,
  IconsGrid,
  IconItem,
  IconImg,
  IconLabel,
} from './PersonalDetailsPanel.styles'

type FaceIdState = 'idle' | 'scanning' | 'success' | 'fail'

const PersonIcon: FC = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5" />
      <path
        d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
        stroke="#aaa"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface PersonalDetailsPanelProps {
  noPhoto?: boolean
  mockFail?: boolean
  onOpenQuestionnaire?: () => void
}

export const PersonalDetailsPanel: FC<PersonalDetailsPanelProps> = ({
  noPhoto = false,
  mockFail = false,
  onOpenQuestionnaire,
}) => {
  const r = MOCK_RESIDENT
  const [faceIdState, setFaceIdState] = useState<FaceIdState>('idle')
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    },
    [],
  )

  function startScan() {
    setFaceIdState('scanning')
    setProgress(0)
    const start = Date.now()
    function tick() {
      const p = Math.min((Date.now() - start) / SCAN_DURATION, 1)
      setProgress(p)
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setFaceIdState(mockFail ? 'fail' : 'success')
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  const dashOffset = CIRCUMFERENCE * (1 - progress)
  const ringColor =
    faceIdState === 'success' ? '#70c969' : faceIdState === 'fail' ? '#f65e53' : '#5c5def'

  const active = !noPhoto && faceIdState === 'idle'

  return (
    <PanelRoot className="flex gap-2 items-center w-full h-full" dir="ltr">
      {/* LEFT: Face recognition */}
      <FaceSection className="flex flex-1 items-center justify-end" dir="ltr">
        {(noPhoto || faceIdState === 'fail') && (
          <OpenQuestionnaireBtn
            onClick={onOpenQuestionnaire}
            className="flex items-center justify-center shrink-0 rounded"
          >
            <OpenQuestionnaireBtnLabel dir="auto">פתח שאלון אימות</OpenQuestionnaireBtnLabel>
          </OpenQuestionnaireBtn>
        )}

        {noPhoto ? (
          <div className="flex flex-1 items-center justify-end gap-1">
            <FaceStatusText dir="auto">לא ניתן לבצע זיהוי פנים</FaceStatusText>
            <FaceStatusIconSm src="/icons/warning.svg" alt="" loading="lazy" />
          </div>
        ) : (
          <>
            {faceIdState === 'scanning' && (
              <FaceStatusText dir="auto" className="shrink-0">
                בתהליך
              </FaceStatusText>
            )}
            {faceIdState === 'success' && (
              <div className="flex gap-2 items-center shrink-0">
                <FaceStatusText dir="auto">זיהוי הצליח</FaceStatusText>
                <FaceStatusIconLg src="/icons/tick-circle.svg" alt="" loading="lazy" />
              </div>
            )}
            {faceIdState === 'fail' && (
              <div className="flex items-center justify-end gap-1 shrink-0">
                <FaceStatusText dir="auto">זיהוי נכשל</FaceStatusText>
                <FaceStatusIconSm src="/icons/warning.svg" alt="" loading="lazy" />
              </div>
            )}
          </>
        )}

        <FaceCircle className="relative rounded-full shrink-0 flex items-center justify-center bg-[#e8e8ea]">
          {noPhoto ? (
            <FaceNA dir="auto">N/A</FaceNA>
          ) : (
            <PersonIcon />
          )}
          {!noPhoto && faceIdState !== 'idle' && (
            <ScanSvg width="259" height="259" viewBox="0 0 259 259">
              <circle
                cx="126.5"
                cy="126.5"
                r="125"
                fill="none"
                stroke={ringColor}
                strokeWidth="3"
                strokeLinecap="butt"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
              />
            </ScanSvg>
          )}
        </FaceCircle>

        <div className="flex flex-col items-center gap-4 shrink-0">
          <FaceLabelTitle dir="auto">זיהוי פנים</FaceLabelTitle>
          <StartScanBtn
            $active={active}
            onClick={active ? startScan : undefined}
            disabled={!active}
            className="flex items-center justify-center rounded w-full"
          >
            <StartScanBtnLabel $active={active} dir="auto">
              החל זיהוי
            </StartScanBtnLabel>
          </StartScanBtn>
        </div>
      </FaceSection>

      {/* RIGHT: Personal info */}
      <PersonInfoPanel className="flex flex-col gap-2 h-full items-end shrink-0">
        <PersonInfoHeader className="flex gap-4 items-start shrink-0" dir="ltr">
          <div className="flex shrink-0 flex-col gap-4 items-end">
            <div className="flex flex-col items-end">
              <PersonNameHe dir="auto">{r.nameHe}</PersonNameHe>
              <PersonNameAr dir="auto">{r.nameAr}</PersonNameAr>
            </div>
            <PersonFieldsGrid className="grid grid-cols-2 gap-x-4 gap-y-4">
              <PersonFieldRow className="flex gap-4 items-center justify-end">
                <PersonFieldValue dir="auto">בן {r.age}</PersonFieldValue>
                <PersonFieldValue dir="auto">{r.birthDate}</PersonFieldValue>
                <PersonFieldLabel dir="auto">תאריך לידה</PersonFieldLabel>
              </PersonFieldRow>
              <PersonFieldRow className="flex gap-4 items-center justify-end">
                <PersonFieldValue dir="auto">{r.id}</PersonFieldValue>
                <PersonFieldLabel dir="auto">ת.ז</PersonFieldLabel>
              </PersonFieldRow>
              <div className="flex items-center justify-end">
                <PersonFieldValue dir="auto" className="whitespace-nowrap">
                  {r.maritalStatus}
                </PersonFieldValue>
              </div>
              <PersonFieldRow className="flex gap-2 items-center justify-end">
                <PersonFieldValue dir="auto">{r.city}, {r.street}</PersonFieldValue>
                <PersonFieldLabel dir="auto">מגורים</PersonFieldLabel>
                <PersonFieldValue dir="auto">{r.district}</PersonFieldValue>
                <PersonFieldLabel dir="auto">נפה</PersonFieldLabel>
              </PersonFieldRow>
            </PersonFieldsGrid>
          </div>
          <div className="flex flex-1 flex-col items-end justify-center min-w-0">
            <PersonPhoto className="rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[#e8e8ea]">
              <PersonIcon />
            </PersonPhoto>
          </div>
        </PersonInfoHeader>

        <IconsGrid dir="rtl">
          {[
            { label: 'כר״ח בתוקף', icon: '/icons/card-tick.svg' },
            { label: 'מעצר', icon: '/icons/map-icon.svg' },
            { label: 'בכיר רש״פ', sublabel: '1', icon: '/icons/user-octagon.svg' },
            { label: 'בקשת היתר', sublabel: 'פתוחה', icon: '/icons/book.svg' },
            { label: 'חבר במנגנונים', sublabel: 'פלסטיניים', icon: '/icons/user-octagon.svg' },
            { label: 'אבחון בתוקף', icon: '/icons/user-octagon-broken.svg' },
            { label: 'בכיר רש״פ', sublabel: '1', icon: '/icons/user-octagon.svg' },
            { label: 'דרכונים', icon: '/icons/passport-group.svg' },
          ].map((item, i) => (
            <IconItem key={i} className="flex flex-col items-center">
              <IconImg src={item.icon} alt="" loading="lazy" />
              <div className="flex flex-col items-center text-center">
                <IconLabel dir="auto">{item.label}</IconLabel>
                {item.sublabel && <IconLabel dir="auto">{item.sublabel}</IconLabel>}
              </div>
            </IconItem>
          ))}
        </IconsGrid>
      </PersonInfoPanel>
    </PanelRoot>
  )
}
