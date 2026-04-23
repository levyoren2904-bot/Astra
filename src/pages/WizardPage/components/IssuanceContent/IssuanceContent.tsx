import { useState, type FC } from 'react'
import { isDevMode } from '@/utils/devtools'
import { IdCardPreview } from '@/components/ui/IdCardPreview'
import { BIO_HEADER_BG } from '@/pages/WizardPage/constants'
import { MOCK_ELIGIBILITY } from '@/pages/WizardPage/mockData'
import {
  IssueRoot,
  IssueContentRow,
  ScannerPanel,
  ScannerHeader,
  HeaderBgImg,
  ScannerInstruction,
  ScannerPanelTitle,
  IdleState,
  BarcodeIcon,
  IdleText,
  ScanResultState,
  ScanResultTitle,
  ScanResultNote,
  IssuanceDevBar,
  IssuanceDevBtn,
  IssuedCardPanel,
  IssuedCardTitle,
  IssuedCardSubtitle,
} from './IssuanceContent.styles'

export const IssuanceContent: FC = () => {
  const [scanState, setScanState] = useState<'idle' | 'success' | 'failure'>('idle')

  return (
    <IssueRoot>
      <IssueContentRow>
        {/* Left panel — scanner instructions */}
        <ScannerPanel>
          <ScannerHeader>
            <HeaderBgImg src={BIO_HEADER_BG} alt="" loading="lazy" />
            <ScannerInstruction dir="auto">
              *לתושב - פתח את אלמונסק, כנס לכר״ח הדיגיטלי והצמד למכשיר
            </ScannerInstruction>
            <ScannerPanelTitle dir="auto">בדיקת תקינות</ScannerPanelTitle>
          </ScannerHeader>

          <IdleState $visible={scanState === 'idle'}>
            <BarcodeIcon src="/icons/barcode-scan.svg" alt="" loading="lazy" />
            <IdleText dir="auto">הנח כרטיס על הסורק לבדיקה</IdleText>
          </IdleState>

          {scanState === 'success' && (
            <ScanResultState>
              <ScanResultTitle dir="auto">כרטיס נסרק בהצלחה</ScanResultTitle>
              <svg
                width="160"
                height="161"
                viewBox="0 0 160 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="80" cy="80.5" r="80" fill="#70C969" fillOpacity="0.15" />
                <circle cx="80" cy="80.5" r="60" fill="#70C969" fillOpacity="0.25" />
                <circle cx="80" cy="80.5" r="40" fill="#70C969" />
                <path
                  d="M58 81.5L72 95.5L103 64.5"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <ScanResultNote dir="auto">הכרטיס תקין ומוכן לשימוש</ScanResultNote>
            </ScanResultState>
          )}

          {scanState === 'failure' && (
            <ScanResultState>
              <ScanResultTitle dir="auto">שגיאה בסריקת הכרטיס</ScanResultTitle>
              <svg
                width="160"
                height="161"
                viewBox="0 0 160 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="80" cy="80.5" r="80" fill="#F65E53" fillOpacity="0.15" />
                <circle cx="80" cy="80.5" r="60" fill="#F65E53" fillOpacity="0.25" />
                <circle cx="80" cy="80.5" r="40" fill="#F65E53" />
                <path
                  d="M64 64.5L96 96.5M96 64.5L64 96.5"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <ScanResultNote dir="auto">הכרטיס לא תקין, נסה שנית</ScanResultNote>
            </ScanResultState>
          )}

          {isDevMode && (
            <IssuanceDevBar>
              <IssuanceDevBtn
                $active={scanState === 'idle'}
                $activeBg="#5c5def"
                onClick={() => setScanState('idle')}
              >
                idle
              </IssuanceDevBtn>
              <IssuanceDevBtn
                $active={scanState === 'success'}
                $activeBg="#70C969"
                onClick={() => setScanState('success')}
              >
                success
              </IssuanceDevBtn>
              <IssuanceDevBtn
                $active={scanState === 'failure'}
                $activeBg="#F65E53"
                onClick={() => setScanState('failure')}
              >
                failure
              </IssuanceDevBtn>
            </IssuanceDevBar>
          )}
        </ScannerPanel>

        {/* Right panel — issued card */}
        <IssuedCardPanel>
          <IssuedCardTitle dir="auto">הכרטיס שהונפק</IssuedCardTitle>
          <IssuedCardSubtitle dir="auto">{MOCK_ELIGIBILITY.cardType}</IssuedCardSubtitle>
          <IdCardPreview />
        </IssuedCardPanel>
      </IssueContentRow>
    </IssueRoot>
  )
}
