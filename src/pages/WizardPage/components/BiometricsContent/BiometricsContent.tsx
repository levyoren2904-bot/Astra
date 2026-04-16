import { useState, type FC } from 'react'
import {
  BIO_HEADER_BG,
  BIO_FP_ICON,
  BIO_FP_SCAN_BG,
  BIO_FP_SYMBOL,
  BIO_DOT_GREEN,
  BIO_DOT_RED,
  BIO_CAM_BG,
  BIO_CAM_ICON,
  BIO_LIGHT_ICON,
  BIO_ANGLE_ICON,
  BIO_FACE_GREEN,
  BIO_FACE_RED,
  BIO_CAPTURED_PHOTO,
  FP_SETS,
  FINGER_LEFTS_4,
  FINGER_LEFTS_2,
} from '@/pages/WizardPage/constants'
import {
  BioRoot,
  BioHeader,
  HeaderBgImg,
  BioHeaderTitle,
  FpPanel,
  FpIconWrap,
  BioIcon,
  ScannerWrap,
  ScannerImg,
  SetLabelRow,
  SetDot,
  SetLabelText,
  SetInstruction,
  FingerLabelWrap,
  FingerLabelText,
  FpErrorEllipse,
  BottomActionBar,
  ActionBtns,
  LockBtn,
  BackSetBtn,
  ExcludeBtn,
  FrostedOverlay,
  FrostedLabel,
  FpSymbolImg,
  FacePanel,
  CamBgWrap,
  CamBgImg,
  CamOverlay,
  FaceHeaderLeft,
  AngleChip,
  AngleDot,
  AngleIcon,
  ResidentInstruction,
  FaceCircleWrap,
  FaceCircleImg,
  AngleErrorChip,
  AngleErrorText,
  CaptureBar,
  CaptureBtn,
  CapturedThumb,
  CapturedThumbImg,
  RetakeBtn,
  DevPanel,
  DevBtnBio,
} from './BiometricsContent.styles'

type FaceCapState = 'waiting' | 'captured'

interface BiometricsContentProps {
  onExclusion: () => void
}

export const BiometricsContent: FC<BiometricsContentProps> = ({ onExclusion }) => {
  const [faceCapState, setFaceCapState] = useState<FaceCapState>('waiting')
  const [mockAngleFail, setMockAngleFail] = useState(false)
  const [currentSet, setCurrentSet] = useState(0)
  const [lockedSets, setLockedSets] = useState<Set<number>>(new Set())
  const [fpError, setFpError] = useState(false)

  const fpActive = faceCapState === 'captured'
  const allChecksOk = !mockAngleFail
  const setData = FP_SETS[currentSet]
  const isLastSet = currentSet === FP_SETS.length - 1
  const fingerLefts = setData.fingers.length === 4 ? FINGER_LEFTS_4 : FINGER_LEFTS_2

  function lockSet() {
    setLockedSets((prev) => new Set([...prev, currentSet]))
    if (!isLastSet) setCurrentSet((s) => s + 1)
  }

  const isDone = lockedSets.has(currentSet) && isLastSet

  return (
    <BioRoot>
      {/* ── Fingerprints panel (left) ── */}
      <FpPanel>
        <BioHeader>
          <HeaderBgImg src={BIO_HEADER_BG} alt="" loading="lazy" />
          <FpIconWrap>
            <BioIcon src={BIO_FP_ICON} alt="" loading="lazy" />
          </FpIconWrap>
          <BioHeaderTitle dir="auto">טביעות אצבעות</BioHeaderTitle>
        </BioHeader>

        <ScannerWrap>
          <ScannerImg src={BIO_FP_SCAN_BG} alt="" loading="lazy" />
        </ScannerWrap>

        {fpActive && (
          <>
            <SetLabelRow>
              <SetDot src={fpError ? BIO_DOT_RED : BIO_DOT_GREEN} alt="" loading="lazy" />
              <SetLabelText dir="auto">{setData.label}</SetLabelText>
            </SetLabelRow>
            <SetInstruction dir="auto">{setData.instruction}</SetInstruction>
          </>
        )}

        {fpActive &&
          setData.fingers.map((finger, i) => (
            <FingerLabelWrap key={finger} $left={fingerLefts[i]}>
              <FingerLabelText dir="auto">{finger}</FingerLabelText>
            </FingerLabelWrap>
          ))}

        {fpActive && fpError && <FpErrorEllipse $left={fingerLefts[2]} />}

        <BottomActionBar>
          {fpActive && (
            <ActionBtns>
              <LockBtn $done={isDone} onClick={lockSet} disabled={isDone}>
                {isLastSet && lockedSets.has(currentSet)
                  ? 'ביומטריה הושלמה ✓'
                  : 'נעל ועבור לסט הבא'}
              </LockBtn>
              {currentSet > 0 && (
                <BackSetBtn onClick={() => setCurrentSet((s) => s - 1)}>חזור לסט קודם</BackSetBtn>
              )}
              <ExcludeBtn $visible={fpError} onClick={onExclusion}>
                <span dir="auto">בצע החרגה</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13 3.22 2.2 15.1A1 1 0 0 0 3.07 16.6h13.86a1 1 0 0 0 .87-1.5L10.87 3.22a1 1 0 0 0-1.74 0Z"
                    stroke="#F44336"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M10 8v3.5" stroke="#F44336" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="14" r="0.75" fill="#F44336" />
                </svg>
              </ExcludeBtn>
            </ActionBtns>
          )}
        </BottomActionBar>

        {!fpActive && (
          <FrostedOverlay>
            <FrostedLabel dir="auto">טביעות אצבעות</FrostedLabel>
            <FpSymbolImg src={BIO_FP_SYMBOL} alt="" loading="lazy" />
          </FrostedOverlay>
        )}
      </FpPanel>

      {/* ── Face camera panel (right) ── */}
      <FacePanel>
        <CamBgWrap>
          <CamBgImg src={BIO_CAM_BG} alt="" loading="lazy" />
          <CamOverlay />
        </CamBgWrap>

        <BioHeader>
          <HeaderBgImg src={BIO_HEADER_BG} alt="" loading="lazy" />
          <FaceHeaderLeft>
            <BioIcon src={BIO_CAM_ICON} alt="" loading="lazy" />
            <BioIcon src={BIO_LIGHT_ICON} alt="" loading="lazy" />
            <AngleChip>
              <AngleDot src={allChecksOk ? BIO_DOT_GREEN : BIO_DOT_RED} alt="" loading="lazy" />
              <AngleIcon src={BIO_ANGLE_ICON} alt="" loading="lazy" />
            </AngleChip>
          </FaceHeaderLeft>
          <BioHeaderTitle dir="auto">צילום פנים</BioHeaderTitle>
        </BioHeader>

        <ResidentInstruction dir="auto">*לתושב - אנא עמוד מול המצלמה.</ResidentInstruction>

        <FaceCircleWrap>
          <FaceCircleImg
            src={allChecksOk ? BIO_FACE_GREEN : BIO_FACE_RED}
            alt=""
            loading="lazy"
          />
        </FaceCircleWrap>

        {!allChecksOk && (
          <AngleErrorChip>
            <AngleErrorText dir="auto">תקן את זווית הראש</AngleErrorText>
          </AngleErrorChip>
        )}

        <CaptureBar>
          <CaptureBtn
            $ok={allChecksOk}
            onClick={() => setFaceCapState('captured')}
            disabled={!allChecksOk}
            onMouseEnter={(e) => {
              if (allChecksOk) {
                e.currentTarget.style.opacity = '0.85'
                e.currentTarget.style.transform = 'scale(1.05)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = allChecksOk ? '1' : '0.5'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          />
        </CaptureBar>

        {fpActive && (
          <FrostedOverlay>
            <FrostedLabel dir="auto">צילום פנים</FrostedLabel>
            <CapturedThumb>
              <CapturedThumbImg src={BIO_CAPTURED_PHOTO} alt="" loading="lazy" />
            </CapturedThumb>
            <RetakeBtn
              onClick={() => {
                setFaceCapState('waiting')
                setLockedSets(new Set())
                setCurrentSet(0)
              }}
            >
              צלם שנית
            </RetakeBtn>
          </FrostedOverlay>
        )}
      </FacePanel>

      {/* DEV toggles */}
      {import.meta.env.DEV && (
        <DevPanel>
          <DevBtnBio $active={mockAngleFail} onClick={() => setMockAngleFail((f) => !f)}>
            {mockAngleFail ? 'angle FAIL' : 'angle OK'}
          </DevBtnBio>
          {fpActive && (
            <DevBtnBio $active={fpError} onClick={() => setFpError((f) => !f)}>
              {fpError ? 'FP ERROR' : 'FP OK'}
            </DevBtnBio>
          )}
        </DevPanel>
      )}
    </BioRoot>
  )
}
