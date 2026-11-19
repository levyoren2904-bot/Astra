import type { FC } from 'react'
import { BIO_CAPTURED_PHOTO } from '@/pages/WizardPage/constants'
import { FACE_CHECK_COPY, faceCheckVerdict, sortFaceIssues, type FaceIssue } from '@/lib/faceCheck'
import {
  BioFrostedBackdrop,
  BioCapturedThumb,
  BioCapturedThumbImg,
  BioFaceErrCard,
  BioFaceErrTitle,
  BioFaceErrSub,
  BioFaceErrPhotoSlot,
  BioFaceErrList,
  BioFaceErrRow,
  BioFaceErrIcon,
  BioFaceErrText,
  BioFaceErrTextCol,
  BioFaceErrTranslit,
  BioFaceErrRetakeBtn,
  BioFaceErrActions,
  BioFaceErrAcceptBtn,
} from './BiometricsPrimitives.styles'

const ICON = {
  error: '/icons/warning-24.svg',
  warning: '/icons/info-amber-24.svg',
} as const

interface FaceCaptureErrorsOverlayProps {
  /** Issues the face-quality check returned for the photo just taken. Must not be empty. */
  issues: readonly FaceIssue[]
  onRetake: () => void
  /** Keep the borderline photo. Offered only when no issue is an error. */
  onAccept: () => void
}

/**
 * Post-capture face-quality result. ERROR = "תמונה לא תקינה", retake only.
 * WARNING = "תמונה גבולית", retake or keep the photo. An error anywhere wins;
 * every issue is still listed, errors first. Shared by both biometrics screens
 * (wizard step 4, acquisition step 3). Figma 800:5899 (error) / 819:5957 (warning).
 */
export const FaceCaptureErrorsOverlay: FC<FaceCaptureErrorsOverlayProps> = ({
  issues,
  onRetake,
  onAccept,
}) => {
  const verdict = faceCheckVerdict(issues) === 'error' ? 'error' : 'warning'
  const copy = FACE_CHECK_COPY[verdict]
  return (
    <>
      <BioFrostedBackdrop />
      <BioFaceErrCard dir="rtl" role="alert">
        <BioFaceErrTitle>{copy.title}</BioFaceErrTitle>
        <BioFaceErrSub>{copy.sub}</BioFaceErrSub>
        <BioFaceErrPhotoSlot>
          <BioCapturedThumb>
            <BioCapturedThumbImg src={BIO_CAPTURED_PHOTO} alt="" loading="lazy" />
          </BioCapturedThumb>
        </BioFaceErrPhotoSlot>
        <BioFaceErrList>
          {sortFaceIssues(issues).map((issue) => (
            <BioFaceErrRow key={issue.label}>
              <BioFaceErrIcon
                src={ICON[issue.severity]}
                alt={issue.severity === 'error' ? 'שגיאה' : 'אזהרה'}
              />
              <BioFaceErrTextCol>
                <BioFaceErrText>{issue.label}</BioFaceErrText>
                {issue.translit && (
                  <BioFaceErrTranslit>{issue.translit}</BioFaceErrTranslit>
                )}
              </BioFaceErrTextCol>
            </BioFaceErrRow>
          ))}
        </BioFaceErrList>
        <BioFaceErrActions>
          <BioFaceErrRetakeBtn type="button" onClick={onRetake}>
            צלם שנית
          </BioFaceErrRetakeBtn>
          {verdict === 'warning' && (
            <BioFaceErrAcceptBtn type="button" onClick={onAccept}>
              המשך עם תמונה זו
            </BioFaceErrAcceptBtn>
          )}
        </BioFaceErrActions>
      </BioFaceErrCard>
    </>
  )
}
