import { describe, it, expect } from 'vitest'
import { faceCheckVerdict, sortFaceIssues, FACE_CHECK_COPY, type FaceIssue } from './faceCheck'

const err = (label: string): FaceIssue => ({ label, severity: 'error' })
const warn = (label: string): FaceIssue => ({ label, severity: 'warning' })

describe('faceCheckVerdict', () => {
  it('is ok when nothing is flagged', () => {
    expect(faceCheckVerdict([])).toBe('ok')
  })

  it('is warning when only warnings are flagged', () => {
    expect(faceCheckVerdict([warn('a'), warn('b')])).toBe('warning')
  })

  it('is error when only errors are flagged', () => {
    expect(faceCheckVerdict([err('a')])).toBe('error')
  })

  it('lets a single error win over warnings', () => {
    expect(faceCheckVerdict([warn('a'), err('b'), warn('c')])).toBe('error')
  })
})

describe('sortFaceIssues', () => {
  it('puts errors before warnings and keeps order within each group', () => {
    const sorted = sortFaceIssues([warn('w1'), err('e1'), warn('w2'), err('e2')])
    expect(sorted.map((i) => i.label)).toEqual(['e1', 'e2', 'w1', 'w2'])
  })
})

describe('FACE_CHECK_COPY', () => {
  it('uses the retake verb of the button in both states', () => {
    expect(FACE_CHECK_COPY.error.sub).toContain('צלם שנית')
    expect(FACE_CHECK_COPY.warning.sub).toContain('צלם שנית')
  })
})
