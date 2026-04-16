import type { FC } from 'react'
import { IdCardPreview } from '@/components/ui/IdCardPreview'
import { MOCK_ELIGIBILITY } from '@/pages/WizardPage/mockData'
import {
  EligibilityRoot,
  EligibilityCard,
  EligibilityCardHeader,
  EligibilityLabel,
  EligibilityValue,
} from './EligibilityContent.styles'

export const EligibilityContent: FC = () => {
  return (
    <EligibilityRoot>
      <EligibilityCard>
        <EligibilityCardHeader>
          <EligibilityLabel dir="auto">סוג כרטיס זכאי</EligibilityLabel>
          <EligibilityValue dir="auto">{MOCK_ELIGIBILITY.cardType}</EligibilityValue>
        </EligibilityCardHeader>
        <IdCardPreview />
      </EligibilityCard>
    </EligibilityRoot>
  )
}
