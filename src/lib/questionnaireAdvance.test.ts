import { describe, it, expect } from 'vitest'
import {
  advanceQuestionnaireState,
  type QuestionnaireEngineState,
} from './questionnaireAdvance'

function apply(
  s: QuestionnaireEngineState,
  selected: number,
  correct: number,
): QuestionnaireEngineState {
  const r = advanceQuestionnaireState(s, selected, correct)
  return {
    set: r.set,
    questionInSet: r.questionInSet,
    wrongCount: r.wrongCount,
    result: r.result,
  }
}

describe('advanceQuestionnaireState', () => {
  const initial: QuestionnaireEngineState = { set: 1, questionInSet: 0, wrongCount: 0, result: null }

  it('set 1: advances with cleared selection when more questions remain', () => {
    const next = advanceQuestionnaireState(initial, 0, 0)
    expect(next).toMatchObject({
      set: 1,
      questionInSet: 1,
      wrongCount: 0,
      result: null,
      resetSelection: true,
    })
  })

  it('set 1: counts wrong answers through first three questions', () => {
    let s = { ...initial }
    s = apply(s, 1, 0)
    expect(s.wrongCount).toBe(1)
    s = apply(s, 0, 0)
    expect(s.questionInSet).toBe(2)
    expect(s.wrongCount).toBe(1)
  })

  it('set 1: all four correct finishes with success', () => {
    let s = { ...initial }
    while (s.result === null) {
      s = apply(s, 0, 0)
    }
    expect(s.result).toBe('success')
  })

  it('set 1: any wrong on last question moves to set 2', () => {
    let s = { ...initial, questionInSet: 3, wrongCount: 0 }
    const next = advanceQuestionnaireState(s, 1, 0)
    expect(next.set).toBe(2)
    expect(next.questionInSet).toBe(0)
    expect(next.result).toBe(null)
    expect(next.resetSelection).toBe(true)
    expect(next.wrongCount).toBe(1)
  })

  it('set 2: first wrong yields failure', () => {
    const s = { set: 2 as const, questionInSet: 0, wrongCount: 1, result: null }
    const next = advanceQuestionnaireState(s, 1, 0)
    expect(next.result).toBe('failure')
  })

  it('set 2: four correct yields success', () => {
    let s: QuestionnaireEngineState = { set: 2, questionInSet: 0, wrongCount: 1, result: null }
    while (s.result === null) {
      s = apply(s, 0, 0)
    }
    expect(s.result).toBe('success')
  })
})
