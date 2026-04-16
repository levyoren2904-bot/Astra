import { useState, type FC } from 'react'
import { CloseIcon } from '@/pages/WizardPage/components/CloseIcon'
import { MOCK_QUESTIONS_SET1, MOCK_QUESTIONS_SET2 } from '@/pages/WizardPage/mockData'
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
  ResultBody,
  ResultIconLg,
  ResultIconSm,
  ResultMessage,
  FailureMessages,
  QuestionBody,
  QuestionText,
  OptionBtn,
  OptionLabel,
} from './QuestionnaireModal.styles'

interface QuestionnaireModalProps {
  onComplete: () => void
  onExclusion: () => void
  onClose: () => void
}

export const QuestionnaireModal: FC<QuestionnaireModalProps> = ({
  onComplete,
  onExclusion,
  onClose,
}) => {
  const [set, setSet] = useState<1 | 2>(1)
  const [questionInSet, setQuestionInSet] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [wrongCount, setWrongCount] = useState(0)
  const [result, setResult] = useState<'success' | 'failure' | null>(null)

  const questions = set === 1 ? MOCK_QUESTIONS_SET1 : MOCK_QUESTIONS_SET2
  const q = questions[questionInSet]
  const answered = selected !== null
  const wasCorrect = answered && selected === q.correctIndex

  function handleOptionClick(idx: number) {
    if (answered) return
    setSelected(idx)
  }

  function handleNext() {
    if (!answered) return
    const newWrong = wrongCount + (wasCorrect ? 0 : 1)

    if (set === 1) {
      if (questionInSet < 3) {
        setWrongCount(newWrong)
        setQuestionInSet((i) => i + 1)
        setSelected(null)
      } else {
        if (newWrong === 0) {
          setResult('success')
        } else {
          setWrongCount(newWrong)
          setSet(2)
          setQuestionInSet(0)
          setSelected(null)
        }
      }
    } else {
      if (!wasCorrect) {
        setWrongCount(newWrong)
        setResult('failure')
      } else if (questionInSet === 3) {
        setResult('success')
      } else {
        setQuestionInSet((i) => i + 1)
        setSelected(null)
      }
    }
  }

  function optionBg(idx: number) {
    if (!answered || selected !== idx) return '#f5f5f6'
    return wasCorrect ? '#ccebc7' : '#fcdbde'
  }

  return (
    <ModalOverlay className="absolute inset-0 flex items-center justify-center z-30">
      <ModalBox className="flex flex-col" dir="ltr">
        <ModalHeaderRow className="flex items-center shrink-0" dir="ltr">
          <button onClick={onClose} className="shrink-0 hover:opacity-70 transition-opacity">
            <CloseIcon />
          </button>
          <ModalTitle dir="auto" className="flex-1 text-right">
            שאלון אימות נתונים
          </ModalTitle>
        </ModalHeaderRow>

        {result === 'success' && (
          <>
            <ResultBody className="flex flex-1 flex-col items-center justify-center">
              <ResultIconLg src="/icons/tick-circle.svg" alt="" loading="lazy" />
              <ResultMessage dir="auto">התושב רשאי להמשיך בתהליך ההנפקה</ResultMessage>
            </ResultBody>
            <ModalFooter className="flex items-start" dir="ltr">
              <PrimaryBtn
                $active={true}
                onClick={onComplete}
                className="flex items-center justify-center rounded shrink-0"
              >
                <PrimaryBtnLabel $active={true} dir="auto">
                  המשך תהליך
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

        {result === 'failure' && (
          <>
            <ResultBody className="flex flex-1 flex-col items-center justify-center">
              <ResultIconSm src="/icons/warning.svg" alt="" loading="lazy" />
              <FailureMessages className="flex flex-col items-center">
                <ResultMessage dir="auto">התושב טעה ב-{wrongCount} שאלות</ResultMessage>
                <ResultMessage dir="auto">
                  יש להחריג על מנת להמשיך בתהליך ההנפקה
                </ResultMessage>
              </FailureMessages>
            </ResultBody>
            <ModalFooter className="flex items-start" dir="ltr">
              <PrimaryBtn
                $active={true}
                onClick={onExclusion}
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

        {result === null && (
          <>
            <QuestionBody className="flex flex-1 flex-col items-end justify-center">
              <QuestionText dir="auto" className="w-full text-right">
                {q.question}
              </QuestionText>
              <div className="flex gap-4 w-full">
                {q.options.map((opt, idx) => (
                  <OptionBtn
                    key={idx}
                    $bg={optionBg(idx)}
                    $answered={answered}
                    onClick={() => handleOptionClick(idx)}
                    disabled={answered}
                    className="rounded flex items-center justify-center"
                  >
                    <OptionLabel dir="auto">{opt}</OptionLabel>
                  </OptionBtn>
                ))}
              </div>
            </QuestionBody>
            <ModalFooter className="flex items-start" dir="ltr">
              <PrimaryBtn
                $active={answered}
                onClick={handleNext}
                disabled={!answered}
                className="flex items-center justify-center rounded shrink-0"
              >
                <PrimaryBtnLabel $active={answered} dir="auto">
                  שאלה הבאה
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
