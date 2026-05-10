/** Pure transition for the verification questionnaire (matches QuestionnaireModal logic). */

export interface QuestionnaireEngineState {
  set: 1 | 2
  questionInSet: number
  wrongCount: number
  result: 'success' | 'failure' | null
}

export interface AdvanceResult extends QuestionnaireEngineState {
  resetSelection: boolean
}

export function advanceQuestionnaireState(
  s: QuestionnaireEngineState,
  selectedIndex: number,
  correctIndex: number,
): AdvanceResult {
  const wasCorrect = selectedIndex === correctIndex
  const newWrong = s.wrongCount + (wasCorrect ? 0 : 1)

  if (s.set === 1) {
    if (s.questionInSet < 3) {
      return {
        set: 1,
        questionInSet: s.questionInSet + 1,
        wrongCount: newWrong,
        result: null,
        resetSelection: true,
      }
    }
    if (newWrong === 0) {
      return {
        set: 1,
        questionInSet: s.questionInSet,
        wrongCount: newWrong,
        result: 'success',
        resetSelection: false,
      }
    }
    return {
      set: 2,
      questionInSet: 0,
      wrongCount: newWrong,
      result: null,
      resetSelection: true,
    }
  }

  if (!wasCorrect) {
    return {
      ...s,
      wrongCount: newWrong,
      result: 'failure',
      resetSelection: false,
    }
  }
  if (s.questionInSet === 3) {
    return {
      ...s,
      result: 'success',
      resetSelection: false,
    }
  }
  return {
    ...s,
    questionInSet: s.questionInSet + 1,
    result: null,
    resetSelection: true,
  }
}
