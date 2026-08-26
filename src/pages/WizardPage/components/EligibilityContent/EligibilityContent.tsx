import { useState, type FC } from 'react'
import { isDevMode } from '@/utils/devtools'
import { IdCardPreview } from '@/components/ui/IdCardPreview'
import { MOCK_ELIGIBILITY, MOCK_RESIDENT } from '@/pages/WizardPage/mockData'
import type { CardColor, CardSide } from '@/types'
import {
  EligibilityRoot,
  EligibilityCard,
  EligibilityLabel,
  EligibilityValue,
  EligibilityBoldNote,
  CardVariantDevBar,
  CardVariantDevBtn,
} from './EligibilityContent.styles'

/** The four כר״ח variants from the Figma component set (104:18208), in canvas order. */
const CARD_VARIANTS: { key: string; label: string; color: CardColor; side: CardSide }[] = [
  { key: 'default', label: 'ברירת מחדל', color: 'default', side: 'front' },
  { key: 'default-back', label: 'צד אחורי', color: 'default', side: 'back' },
  { key: 'seam', label: 'תפר', color: 'seam', side: 'front' },
  { key: 'seam-back', label: 'תפר אחורי', color: 'seam', side: 'back' },
]

export const EligibilityContent: FC = () => {
  const [variantKey, setVariantKey] = useState('default')
  const variant = CARD_VARIANTS.find((v) => v.key === variantKey) ?? CARD_VARIANTS[0]

  return (
    <EligibilityRoot>
      <EligibilityCard>
        <EligibilityLabel dir="auto">סוג כרטיס זכאי</EligibilityLabel>
        <EligibilityValue dir="auto">
          {MOCK_ELIGIBILITY.cardType}{' '}
          <EligibilityBoldNote>(שים לב להחליף כרטיס במדפסת)</EligibilityBoldNote>
        </EligibilityValue>
        <IdCardPreview
          color={variant.color}
          side={variant.side}
          blank
          resident={MOCK_RESIDENT}
          eligibility={MOCK_ELIGIBILITY}
        />
      </EligibilityCard>

      {isDevMode && (
        <CardVariantDevBar>
          {CARD_VARIANTS.map((v) => (
            <CardVariantDevBtn
              key={v.key}
              $active={variantKey === v.key}
              onClick={() => setVariantKey(v.key)}
              dir="auto"
            >
              {v.label}
            </CardVariantDevBtn>
          ))}
        </CardVariantDevBar>
      )}
    </EligibilityRoot>
  )
}
