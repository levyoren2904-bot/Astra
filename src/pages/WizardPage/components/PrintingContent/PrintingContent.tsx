import { useEffect, useState, type FC } from 'react'
import { BIO_HEADER_BG } from '@/pages/WizardPage/constants'
import { MOCK_ELIGIBILITY } from '@/pages/WizardPage/mockData'
import {
  PrintRoot,
  PrintContentRow,
  ScannerPanel,
  ScannerHeader,
  HeaderBgImg,
  ScannerInstruction,
  ScannerPanelTitle,
  ScannerIdleCenter,
  BarcodeIcon,
  ScannerIdleText,
  PrintingPanel,
  PrintingTitle,
  PrintingSubtitle,
  ProgressBarsWrap,
  ProgressRow,
  ProgressLabel,
  ProgressTrack,
  ProgressFill,
} from './PrintingContent.styles'

const READ_DURATION = 2500
const WRITE_DURATION = 2500

interface Props {
  onComplete: () => void
}

export const PrintingContent: FC<Props> = ({ onComplete }) => {
  const [phase, setPhase] = useState<1 | 2>(1)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), READ_DURATION)
    const t2 = setTimeout(onComplete, READ_DURATION + WRITE_DURATION + 300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onComplete])

  return (
    <PrintRoot>
      <PrintContentRow>
        {/* Left panel — scanner idle (card not yet placed) */}
        <ScannerPanel>
          <ScannerHeader>
            <HeaderBgImg src={BIO_HEADER_BG} alt="" loading="lazy" />
            <ScannerInstruction dir="auto">
              *לתושב - פתח את אלמונסק, כנס לכר״ח הדיגיטלי והצמד למכשיר
            </ScannerInstruction>
            <ScannerPanelTitle dir="auto">בדיקת תקינות</ScannerPanelTitle>
          </ScannerHeader>
          <ScannerIdleCenter>
            <BarcodeIcon src="/icons/barcode-scan.svg" alt="" loading="lazy" />
            <ScannerIdleText dir="auto">הנח כרטיס על הסורק לבדיקה</ScannerIdleText>
          </ScannerIdleCenter>
        </ScannerPanel>

        {/* Right panel — printing progress */}
        <PrintingPanel>
          <PrintingTitle dir="auto">כרטיס בהנפקה</PrintingTitle>
          <PrintingSubtitle dir="auto">{MOCK_ELIGIBILITY.cardType}</PrintingSubtitle>

          <ProgressBarsWrap dir="rtl">
            <ProgressRow>
              <ProgressLabel dir="auto">קורא נתונים</ProgressLabel>
              <ProgressTrack>
                <ProgressFill $duration={READ_DURATION} $delay={0} $running={true} />
              </ProgressTrack>
            </ProgressRow>
            <ProgressRow>
              <ProgressLabel dir="auto">מדפיס נתונים</ProgressLabel>
              <ProgressTrack>
                <ProgressFill $duration={WRITE_DURATION} $delay={0} $running={phase === 2} />
              </ProgressTrack>
            </ProgressRow>
          </ProgressBarsWrap>
        </PrintingPanel>
      </PrintContentRow>
    </PrintRoot>
  )
}
