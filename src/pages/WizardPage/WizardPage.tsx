import { useState, type FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { CloseIcon } from './components/CloseIcon'
import { WizardStepper } from './components/WizardStepper'
import { PersonalDetailsPanel } from './components/PersonalDetailsPanel'
import { PermitsPanel } from './components/PermitsPanel'
import { ProhibitionsPanel } from './components/ProhibitionsPanel'
import { CardHistoryPanel } from './components/CardHistoryPanel'
import { QuestionnaireModal } from './components/QuestionnaireModal'
import { ExclusionModal } from './components/ExclusionModal'
import { EligibilityContent } from './components/EligibilityContent'
import { FeesContent } from './components/FeesContent'
import { BiometricsContent } from './components/BiometricsContent'
import { IssuanceContent } from './components/IssuanceContent'
import { MOCK_RESIDENT, MOCK_PROHIBITIONS } from './mockData'
import {
  PageRoot,
  Backdrop,
  ModalBox,
  ModalHeaderRow,
  ResidentInfoWrap,
  ResidentId,
  ResidentName,
  WizardTitle,
  PersonalDetailsBox,
  DevBarWizard,
  DevBtnWizard,
  NextBtn,
  NextBtnLabel,
  BackBtn,
  BackBtnLabel,
  CancelBtnWizard,
  CancelBtnWizardLabel,
} from './WizardPage.styles'

export const WizardPage: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentStep, setCurrentStep] = useState(1)
  const [noPhoto, setNoPhoto] = useState(false)
  const [mockFail, setMockFail] = useState(false)
  const [showQuestionnaire, setShowQuestionnaire] = useState(false)
  const [showExclusion, setShowExclusion] = useState(false)

  const idFromState = (location.state as { id?: string } | null)?.id ?? ''
  const displayId = idFromState || MOCK_RESIDENT.id

  function handleNext() {
    if (currentStep < 5) setCurrentStep((s) => s + 1)
  }
  function handleBack() {
    if (currentStep > 1) setCurrentStep((s) => s - 1)
    else navigate('/')
  }
  function handleCancel() {
    navigate('/')
  }

  const atStep5 = currentStep === 5

  return (
    <PageRoot className="relative w-full overflow-hidden">
      <VideoBackground />
      <Backdrop className="absolute inset-0 z-10" />

      {/* Modal — LTR layout to match Figma */}
      <ModalBox className="absolute z-20 flex flex-col" dir="ltr">
        {/* ── Header — LTR: X(left) | flex-1: [name+ID] [title](right) ── */}
        <ModalHeaderRow className="flex gap-10 items-center overflow-clip shrink-0 w-full">
          <button onClick={handleCancel} className="shrink-0 hover:opacity-70 transition-opacity">
            <CloseIcon />
          </button>
          <div className="flex flex-1 gap-6 items-center justify-end min-w-0">
            <ResidentInfoWrap className="flex gap-2 items-end" dir="ltr">
              <ResidentId dir="auto">{displayId}</ResidentId>
              <ResidentName dir="auto">{MOCK_RESIDENT.nameHe}</ResidentName>
            </ResidentInfoWrap>
            <WizardTitle dir="auto">הנפקת כר״ח</WizardTitle>
          </div>
        </ModalHeaderRow>

        {/* ── Stepper ── */}
        <WizardStepper currentStep={currentStep} />

        {/* ── Step content ── */}
        {currentStep === 1 && (
          <>
            <PersonalDetailsBox className="shrink-0 w-full rounded-2xl overflow-hidden">
              {import.meta.env.DEV && (
                <DevBarWizard>
                  <DevBtnWizard
                    $active={noPhoto}
                    $activeBg="#5c5def"
                    onClick={() => setNoPhoto((p) => !p)}
                  >
                    {noPhoto ? '✓ אין תמונה' : 'מצב 0'}
                  </DevBtnWizard>
                  <DevBtnWizard
                    $active={mockFail}
                    $activeBg="#f65e53"
                    onClick={() => setMockFail((p) => !p)}
                  >
                    {mockFail ? '✓ זיהוי נכשל' : 'זיהוי נכשל'}
                  </DevBtnWizard>
                </DevBarWizard>
              )}
              <PersonalDetailsPanel
                noPhoto={noPhoto}
                mockFail={mockFail}
                onOpenQuestionnaire={() => setShowQuestionnaire(true)}
              />
            </PersonalDetailsBox>
            <div className="flex flex-1 gap-6 min-h-0 overflow-hidden w-full" dir="ltr">
              <CardHistoryPanel />
              <ProhibitionsPanel />
              <PermitsPanel />
            </div>
          </>
        )}

        {currentStep === 2 && <EligibilityContent />}
        {currentStep === 3 && (
          <FeesContent onExclusion={() => setShowExclusion(true)} onClose={() => navigate('/')} />
        )}
        {currentStep === 4 && <BiometricsContent onExclusion={() => setShowExclusion(true)} />}
        {currentStep === 5 && <IssuanceContent />}

        {/* ── Exclusion flow (states 3→4→5) ── */}
        {showExclusion && (
          <ExclusionModal
            hasProhibitions={MOCK_PROHIBITIONS.length > 0}
            onClose={() => setShowExclusion(false)}
            onComplete={() => {
              setShowExclusion(false)
              handleNext()
            }}
          />
        )}

        {/* ── Questionnaire modal (state 1) ── */}
        {showQuestionnaire && (
          <QuestionnaireModal
            onClose={() => setShowQuestionnaire(false)}
            onComplete={() => {
              setShowQuestionnaire(false)
              handleNext()
            }}
            onExclusion={() => {
              setShowQuestionnaire(false)
              setShowExclusion(true)
            }}
          />
        )}

        {/* ── Action buttons — LTR: הבא(left) | חזור | ביטול ── */}
        <div className="flex gap-4 items-start shrink-0 w-full" dir="ltr">
          <NextBtn
            onClick={atStep5 ? handleCancel : handleNext}
            className="flex items-center justify-center overflow-clip rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)] shrink-0"
          >
            <NextBtnLabel dir="auto">{atStep5 ? 'סיום תהליך' : 'הבא'}</NextBtnLabel>
          </NextBtn>
          <BackBtn
            $disabled={atStep5}
            onClick={handleBack}
            disabled={atStep5}
            className="flex items-center justify-center overflow-clip rounded shrink-0"
          >
            <BackBtnLabel dir="auto">חזור</BackBtnLabel>
          </BackBtn>
          {!atStep5 && (
            <CancelBtnWizard
              onClick={handleCancel}
              className="flex items-center justify-center overflow-clip rounded shrink-0"
            >
              <CancelBtnWizardLabel dir="auto">ביטול</CancelBtnWizardLabel>
            </CancelBtnWizard>
          )}
        </div>
      </ModalBox>
    </PageRoot>
  )
}
