/**
 * Post-capture face-quality check. The SDK returns a named reason per issue,
 * and each issue is either an ERROR (the photo cannot be used - retake) or a
 * WARNING (the photo is usable, a retake would only improve it).
 * Copy per Shira (PM), 2026-11-19.
 */

export type FaceIssueSeverity = 'error' | 'warning'

export interface FaceIssue {
  label: string
  severity: FaceIssueSeverity
}

/** ok = nothing flagged. error wins over warning when both are present. */
export type FaceCheckVerdict = 'ok' | 'warning' | 'error'

export function faceCheckVerdict(issues: readonly FaceIssue[]): FaceCheckVerdict {
  if (issues.some((i) => i.severity === 'error')) return 'error'
  if (issues.length > 0) return 'warning'
  return 'ok'
}

export const FACE_CHECK_COPY: Record<Exclude<FaceCheckVerdict, 'ok'>, { title: string; sub: string }> = {
  error: { title: 'תמונה לא תקינה', sub: 'יש לתקן ולצלם שנית' },
  warning: { title: 'תמונה גבולית', sub: 'לתוצאה מיטבית צלם שנית' },
}

/** Errors first, then warnings, keeping the SDK's order inside each group. */
export function sortFaceIssues(issues: readonly FaceIssue[]): FaceIssue[] {
  return [
    ...issues.filter((i) => i.severity === 'error'),
    ...issues.filter((i) => i.severity === 'warning'),
  ]
}
