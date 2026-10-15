import type { FC } from 'react'
import {
  BioFrostedBackdrop,
  BioHwCard,
  BioHwIconArea,
  BioHwTitle,
  BioHwSub,
  BioHwRetryBtn,
  BioHwSpinnerSvg,
} from './BiometricsPrimitives.styles'

const COPY = {
  camera: {
    title: 'המצלמה מנותקת',
    sub: 'בדוק את חיבור המצלמה ונסה שנית',
  },
  fingerprint: {
    title: 'קורא טביעות האצבע מנותק',
    sub: 'בדוק את חיבור הקורא ונסה שנית',
  },
} as const

const WarningTriangle: FC = () => (
  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" role="img" aria-hidden="true">
    <path
      d="M32 8L58 54H6L32 8Z"
      stroke="#f65e53"
      strokeWidth={3}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path d="M32 26V40" stroke="#f65e53" strokeWidth={3} strokeLinecap="round" />
    <circle cx="32" cy="46" r="1.5" fill="#f65e53" />
  </svg>
)

interface HardwareDisconnectedOverlayProps {
  device: 'camera' | 'fingerprint'
  checking: boolean
  onRetry: () => void
  /** The step can be completed without this device - say so, so the operator does not stop to fix it. */
  optional?: boolean
}

/**
 * Blocks a single biometrics panel (camera OR fingerprint reader) when its
 * hardware is reported disconnected. Shares the frosted-card visual language
 * already used for the "not yet acquired" overlays on both biometrics screens.
 */
export const HardwareDisconnectedOverlay: FC<HardwareDisconnectedOverlayProps> = ({
  device,
  checking,
  onRetry,
  optional = false,
}) => {
  const copy = COPY[device]
  return (
    <>
      <BioFrostedBackdrop />
      <BioHwCard role="alert">
        <BioHwIconArea>
          <WarningTriangle />
        </BioHwIconArea>
        <BioHwTitle dir="auto">{copy.title}</BioHwTitle>
        {optional && <BioHwSub dir="auto">(לא חובה - אפשר להמשיך בלי)</BioHwSub>}
        <BioHwSub dir="auto">{copy.sub}</BioHwSub>
        <BioHwRetryBtn onClick={onRetry} disabled={checking} $checking={checking}>
          {checking && (
            <BioHwSpinnerSvg width={16} height={16} viewBox="0 0 20 20" fill="none">
              <path
                d="M19 10.0004C18.9999 11.901 18.3981 13.7528 17.2809 15.2904C16.1637 16.8279 14.5885 17.9723 12.7809 18.5596C10.9733 19.1469 9.02619 19.1468 7.21864 18.5594C5.41109 17.9721 3.83588 16.8276 2.71876 15.29C1.60165 13.7523 0.999986 11.9005 1 9.99994C1.00001 8.09935 1.60171 6.24755 2.71884 4.70994C3.83598 3.17233 5.4112 2.02785 7.21877 1.44052C9.02633 0.853187 10.9734 0.85316 12.781 1.44044"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </BioHwSpinnerSvg>
          )}
          <span dir="auto">{checking ? 'בודק...' : 'בדוק שנית'}</span>
        </BioHwRetryBtn>
      </BioHwCard>
    </>
  )
}
