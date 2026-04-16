import { useState, type FC } from 'react'
import { CloseIcon } from '@/pages/WizardPage/components/CloseIcon'
import { MOCK_ADMIN_CODE } from '@/pages/WizardPage/mockData'
import {
  ModalOverlay,
  ModalBox,
  ModalHeaderRow,
  ModalTitle,
  ModalFooter,
  PrimaryBtn,
  PrimaryBtnLabel,
  CancelBtn,
  CancelBtnLabel,
  WarningIcon,
  WarningText,
  WarningBody,
  CodeBody,
  FieldLabel,
  CodeInputRow,
  SubmitCodeBtn,
  SubmitCodeBtnLabel,
  CodeInput,
  CodeStatusMsg,
  ReasonBody,
  ReasonFieldLabel,
  ReasonTextarea,
} from './ExclusionModal.styles'

interface ExclusionModalProps {
  hasProhibitions: boolean
  onClose: () => void
  onComplete: () => void
}

export const ExclusionModal: FC<ExclusionModalProps> = ({
  hasProhibitions,
  onClose,
  onComplete,
}) => {
  const [step, setStep] = useState<'warning' | 'code' | 'reason'>(
    hasProhibitions ? 'warning' : 'code',
  )
  const [adminCode, setAdminCode] = useState('')
  const [codeVerified, setCodeVerified] = useState(false)
  const [codeError, setCodeError] = useState(false)
  const [reason, setReason] = useState('')

  function verifyCode() {
    if (adminCode === MOCK_ADMIN_CODE) {
      setCodeVerified(true)
      setCodeError(false)
    } else {
      setCodeError(true)
      setCodeVerified(false)
    }
  }

  return (
    <ModalOverlay className="absolute inset-0 flex items-center justify-center z-30">
      <ModalBox className="flex flex-col" dir="ltr">
        <ModalHeaderRow className="flex items-center shrink-0" dir="ltr">
          <button onClick={onClose} className="shrink-0 hover:opacity-70 transition-opacity">
            <CloseIcon />
          </button>
          <ModalTitle dir="auto" className="flex-1 text-right">
            החרגת תושב
          </ModalTitle>
        </ModalHeaderRow>

        {step === 'warning' && (
          <>
            <WarningBody className="flex flex-1 flex-col items-center justify-center">
              <WarningIcon src="/icons/warning.svg" alt="" loading="lazy" />
              <WarningText dir="auto">
                שים לב! לתושב יש <strong>מניעות פעילות</strong>. האם ברצונך לבצע החרגה בכל
                מקרה?
              </WarningText>
            </WarningBody>
            <ModalFooter className="flex items-start shrink-0" dir="ltr">
              <PrimaryBtn
                $active={true}
                onClick={() => setStep('code')}
                className="flex items-center justify-center rounded shrink-0"
              >
                <PrimaryBtnLabel $active={true} dir="auto">
                  החרגת תושב
                </PrimaryBtnLabel>
              </PrimaryBtn>
              <CancelBtn
                onClick={onClose}
                className="flex items-center justify-center rounded shrink-0"
              >
                <CancelBtnLabel dir="auto">ביטול</CancelBtnLabel>
              </CancelBtn>
            </ModalFooter>
          </>
        )}

        {step === 'code' && (
          <>
            <CodeBody className="flex flex-1 flex-col items-end justify-center">
              <FieldLabel dir="auto">הכנס קוד מנהל</FieldLabel>
              <CodeInputRow className="flex items-center" dir="ltr">
                <SubmitCodeBtn
                  onClick={verifyCode}
                  className="flex items-center justify-center rounded shrink-0"
                >
                  <SubmitCodeBtnLabel dir="auto">הכנס</SubmitCodeBtnLabel>
                </SubmitCodeBtn>
                <CodeInput
                  type="password"
                  value={adminCode}
                  $error={codeError}
                  $verified={codeVerified}
                  onChange={(e) => {
                    setAdminCode(e.target.value)
                    setCodeError(false)
                    setCodeVerified(false)
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && verifyCode()}
                  dir="ltr"
                />
              </CodeInputRow>
              <CodeStatusMsg dir="auto" $error={codeError} $verified={codeVerified}>
                {codeError
                  ? 'קוד שגוי, נסה שוב'
                  : codeVerified
                    ? 'קוד אומת בהצלחה'
                    : import.meta.env.DEV
                      ? `קוד פיתוח: ${MOCK_ADMIN_CODE}`
                      : ''}
              </CodeStatusMsg>
            </CodeBody>
            <ModalFooter className="flex items-start shrink-0" dir="ltr">
              <PrimaryBtn
                $active={codeVerified}
                onClick={codeVerified ? () => setStep('reason') : undefined}
                disabled={!codeVerified}
                className="flex items-center justify-center rounded shrink-0"
              >
                <PrimaryBtnLabel $active={codeVerified} dir="auto">
                  בצע החרגה
                </PrimaryBtnLabel>
              </PrimaryBtn>
              <CancelBtn
                onClick={onClose}
                className="flex items-center justify-center rounded shrink-0"
              >
                <CancelBtnLabel dir="auto">ביטול</CancelBtnLabel>
              </CancelBtn>
            </ModalFooter>
          </>
        )}

        {step === 'reason' && (
          <>
            <ReasonBody className="flex flex-1 flex-col items-end">
              <ReasonFieldLabel dir="auto">הכנס סיבת החרגה</ReasonFieldLabel>
              <ReasonTextarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                dir="auto"
                placeholder="סיבת ההחרגה"
              />
            </ReasonBody>
            <ModalFooter className="flex items-start shrink-0" dir="ltr">
              <PrimaryBtn
                $active={reason.trim().length > 0}
                onClick={reason.trim().length > 0 ? onComplete : undefined}
                disabled={reason.trim().length === 0}
                className="flex items-center justify-center rounded shrink-0"
              >
                <PrimaryBtnLabel $active={reason.trim().length > 0} dir="auto">
                  בצע החרגה
                </PrimaryBtnLabel>
              </PrimaryBtn>
              <CancelBtn
                onClick={onClose}
                className="flex items-center justify-center rounded shrink-0"
              >
                <CancelBtnLabel dir="auto">ביטול</CancelBtnLabel>
              </CancelBtn>
            </ModalFooter>
          </>
        )}
      </ModalBox>
    </ModalOverlay>
  )
}
