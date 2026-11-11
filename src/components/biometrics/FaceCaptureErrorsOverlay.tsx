import type { FC } from 'react'
import { BIO_CAPTURED_PHOTO } from '@/pages/WizardPage/constants'
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
  BioFaceErrRetakeBtn,
} from './BiometricsPrimitives.styles'

interface FaceCaptureErrorsOverlayProps {
  /** Named reasons returned by the face-quality check for the photo just taken. */
  errors: readonly string[]
  onRetake: () => void
}

function errorsTitle(count: number): string {
  return count === 1 ? 'נמצאה תקלה אחת בצילום' : `נמצאו ${count} תקלות בצילום`
}

/**
 * Post-capture face-quality failure: the check only runs after the photo is
 * taken, so the operator sees what to fix and retakes. Shared by both
 * biometrics screens (wizard step 4, acquisition step 3). Figma 800:5969.
 */
export const FaceCaptureErrorsOverlay: FC<FaceCaptureErrorsOverlayProps> = ({
  errors,
  onRetake,
}) => (
  <>
    <BioFrostedBackdrop />
    <BioFaceErrCard dir="rtl" role="alert">
      <BioFaceErrTitle>{errorsTitle(errors.length)}</BioFaceErrTitle>
      <BioFaceErrSub>יש לתקן ולצלם שנית</BioFaceErrSub>
      <BioFaceErrPhotoSlot>
        <BioCapturedThumb>
          <BioCapturedThumbImg src={BIO_CAPTURED_PHOTO} alt="" loading="lazy" />
        </BioCapturedThumb>
      </BioFaceErrPhotoSlot>
      <BioFaceErrList>
        {errors.map((err) => (
          <BioFaceErrRow key={err}>
            <BioFaceErrIcon src="/icons/warning-24.svg" alt="" />
            <BioFaceErrText>{err}</BioFaceErrText>
          </BioFaceErrRow>
        ))}
      </BioFaceErrList>
      <BioFaceErrRetakeBtn type="button" onClick={onRetake}>
        צלם שנית
      </BioFaceErrRetakeBtn>
    </BioFaceErrCard>
  </>
)
