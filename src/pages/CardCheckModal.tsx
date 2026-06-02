import { useState, type FC } from 'react'
import { isDevMode } from '@/utils/devtools'
import {
  Overlay,
  Panel,
  PanelHeader,
  CloseBtn,
  PanelTitle,
  IdleState,
  BarcodeIcon,
  IdleText,
  ScanResultState,
  ScanResultTitle,
  ScanResultNote,
  FailureActions,
  SecondaryActionBtn,
  IdInput,
  MarkInvalidBtn,
  DevBar,
  DevBtn,
} from './CardCheckModal.styles'

interface Props {
  onClose: () => void
}

export const CardCheckModal: FC<Props> = ({ onClose }) => {
  const [scanState, setScanState] = useState<'idle' | 'success' | 'failure'>('idle')
  const [idValue, setIdValue] = useState('')
  const isIdValid = /^\d{9}$/.test(idValue)

  return (
    <Overlay onClick={onClose}>
      <Panel onClick={(e) => e.stopPropagation()}>
        {/* Header — dir="ltr" to match Figma: close icon left, title right */}
        <PanelHeader dir="ltr">
          <CloseBtn onClick={onClose} aria-label="סגור">
            <img src="/icons/close.svg" alt="" width={24} height={24} loading="lazy" />
          </CloseBtn>
          <PanelTitle dir="auto">בדיקת תקינות כרטיס</PanelTitle>
        </PanelHeader>

        {/* Idle state */}
        <IdleState $visible={scanState === 'idle'}>
          <BarcodeIcon src="/icons/barcode-scan.svg" alt="" loading="lazy" />
          <IdleText dir="auto">הנח כרטיס על הסורק לבדיקה</IdleText>
        </IdleState>

        {/* Success state */}
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

        {/* Failure state */}
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
            <FailureActions>
              <SecondaryActionBtn
                dir="auto"
                onClick={() => { setScanState('idle'); setIdValue('') }}
              >
                בדוק שנית
              </SecondaryActionBtn>
              <IdInput
                dir="auto"
                placeholder="הזן ת.ז"
                value={idValue}
                inputMode="numeric"
                maxLength={9}
                onChange={(e) => setIdValue(e.target.value.replace(/\D/g, ''))}
              />
              <MarkInvalidBtn dir="auto" disabled={!isIdValid} onClick={onClose}>
                סמן כלא תקין
              </MarkInvalidBtn>
            </FailureActions>
          </ScanResultState>
        )}

        {/* Dev toggles */}
        {isDevMode && (
          <DevBar>
            <DevBtn $active={scanState === 'idle'} $activeBg="#5c5def" onClick={() => setScanState('idle')}>
              idle
            </DevBtn>
            <DevBtn $active={scanState === 'success'} $activeBg="#70C969" onClick={() => setScanState('success')}>
              success
            </DevBtn>
            <DevBtn $active={scanState === 'failure'} $activeBg="#F65E53" onClick={() => setScanState('failure')}>
              failure
            </DevBtn>
          </DevBar>
        )}
      </Panel>
    </Overlay>
  )
}
