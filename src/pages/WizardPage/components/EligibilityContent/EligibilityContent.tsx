import type { FC } from 'react'
import { IdCardPreview } from '@/components/ui/IdCardPreview'
import { MOCK_ELIGIBILITY, MOCK_RESIDENT } from '@/pages/WizardPage/mockData'
import {
  EligibilityRoot,
  EligibilityCard,
  EligibilityCardHeader,
  EligibilityLabel,
  EligibilityValue,
  EligibilityBoldNote,
} from './EligibilityContent.styles'

export const EligibilityContent: FC = () => {
  return (
    <EligibilityRoot>
      <EligibilityCard>
        <EligibilityCardHeader>
          <EligibilityLabel dir="auto">סוג כרטיס זכאי</EligibilityLabel>
          <EligibilityValue dir="auto">
            {MOCK_ELIGIBILITY.cardType}{' '}
            <EligibilityBoldNote>(שים לב להחליף כרטיס במדפסת)</EligibilityBoldNote>
          </EligibilityValue>
        </EligibilityCardHeader>
        <IdCardPreview resident={MOCK_RESIDENT} eligibility={MOCK_ELIGIBILITY} />
      </EligibilityCard>
    </EligibilityRoot>
  )
}
