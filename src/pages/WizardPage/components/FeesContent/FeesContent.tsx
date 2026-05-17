import { useState, useEffect, type FC } from 'react'
import { isDevMode } from '@/utils/devtools'
import { IdCardPreview } from '@/components/ui/IdCardPreview'
import { MOCK_ELIGIBILITY, MOCK_RESIDENT } from '@/pages/WizardPage/mockData'
import {
  FEES_TICK,
  FEES_WARN,
  FEES_EXCL,
  FEES_ANIM,
  FEES_RADIO_ON,
  FEES_PHONE_MOCKUP,
} from '@/pages/WizardPage/constants'
import {
  DevBar,
  DevBtn,
  CheckingSection,
  FeeStatusTitle,
  CheckingAnim,
  PaidSection,
  PaidInner,
  FeeTick,
  FeeNote,
  FeeDisclaimer,
  CardTypeRow,
  CardTypeCard,
  CardTypeHeader,
  CardTypeLabel,
  RadioBtn,
  RadioImg,
  RadioCircle,
  PhoneMockupWrap,
  PhoneMockupClip,
  PhoneMockupImg,
  PhoneCardOverlay,
  PhoneCardScale,
  UnpaidSection,
  UnpaidIconBox,
  FeeWarn,
  QueueBtn,
  QueueBtnLabel,
  ReCheckBtn,
  ReCheckBtnLabel,
  ExclusionBtn,
  ExclusionBtnInner,
  ExclusionBtnLabel,
  ExclusionIcon,
} from './FeesContent.styles'

type FeeState = 'checking' | 'paid' | 'unpaid' | 'mismatch'
type CardType = 'digital' | 'physical'

interface FeesContentProps {
  onExclusion: () => void
  onClose: () => void
}

export const FeesContent: FC<FeesContentProps> = ({ onExclusion, onClose }) => {
  const [feeState, setFeeState] = useState<FeeState>('checking')
  const [mockOverride, setMockOverride] = useState<'paid' | 'unpaid' | 'mismatch'>('paid')
  const [cardType, setCardType] = useState<CardType>('digital')

  useEffect(() => {
    if (feeState !== 'checking') return
    const t = setTimeout(() => setFeeState(mockOverride), 2000)
    return () => clearTimeout(t)
  }, [feeState, mockOverride])

  function cycleOverride() {
    setMockOverride((p) => (p === 'paid' ? 'unpaid' : p === 'unpaid' ? 'mismatch' : 'paid'))
    setFeeState('checking')
  }

  const RB = ({ type }: { type: CardType }) => (
    <RadioBtn onClick={() => setCardType(type)}>
      {cardType === type ? (
        <RadioImg src={FEES_RADIO_ON} alt="" loading="lazy" />
      ) : (
        <RadioCircle />
      )}
    </RadioBtn>
  )

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-0 w-full relative">
      {isDevMode && (
        <DevBar>
          <DevBtn $active={mockOverride !== 'paid'} onClick={cycleOverride}>
            {mockOverride === 'paid' ? 'תקינה' : mockOverride === 'unpaid' ? '✓ לא שולמה' : '✓ לא תואמת'}
          </DevBtn>
        </DevBar>
      )}

      {feeState === 'checking' && (
        <CheckingSection>
          <FeeStatusTitle dir="auto">בודק סטטוס אגרה</FeeStatusTitle>
          <CheckingAnim src={FEES_ANIM} alt="" loading="lazy" />
        </CheckingSection>
      )}

      {feeState === 'paid' && (
        <PaidSection>
          <PaidInner>
            <FeeStatusTitle dir="auto">אגרה שולמה</FeeStatusTitle>
            <FeeTick src={FEES_TICK} alt="" loading="lazy" />
            <FeeNote dir="auto">זכאי לכר״ח דיגיטלי</FeeNote>
            <FeeDisclaimer dir="auto">
              *לתושב - שים לב, בהנפקת כר״ח דיגיטלי, לא יונפק כרטיס פיזי
            </FeeDisclaimer>
          </PaidInner>
          <CardTypeRow>
            {(['digital', 'physical'] as CardType[]).map((type) => (
              <CardTypeCard key={type} $digital={type === 'digital'}>
                <CardTypeHeader>
                  <CardTypeLabel dir="auto">
                    {type === 'digital' ? 'כר״ח דיגיטלי' : 'כר״ח פיזי'}
                  </CardTypeLabel>
                  <RB type={type} />
                </CardTypeHeader>
                {type === 'digital' ? (
                  <>
                    <PhoneMockupWrap>
                      <PhoneMockupClip>
                        <PhoneMockupImg src={FEES_PHONE_MOCKUP} alt="" loading="lazy" />
                      </PhoneMockupClip>
                    </PhoneMockupWrap>
                    <PhoneCardOverlay>
                      <PhoneCardScale>
                        <IdCardPreview variant="digital" resident={MOCK_RESIDENT} eligibility={MOCK_ELIGIBILITY} />
                      </PhoneCardScale>
                    </PhoneCardOverlay>
                  </>
                ) : (
                  <IdCardPreview variant={type} resident={MOCK_RESIDENT} eligibility={MOCK_ELIGIBILITY} />
                )}
              </CardTypeCard>
            ))}
          </CardTypeRow>
        </PaidSection>
      )}

      {feeState === 'unpaid' && (
        <UnpaidSection>
          <FeeStatusTitle dir="auto">אגרה לא שולמה</FeeStatusTitle>
          <UnpaidIconBox>
            <FeeWarn src={FEES_WARN} alt="" loading="lazy" />
          </UnpaidIconBox>
          <QueueBtn onClick={onClose}>
            <QueueBtnLabel dir="auto">שלח חזרה לתור</QueueBtnLabel>
          </QueueBtn>
          <ReCheckBtn onClick={() => setFeeState('checking')}>
            <ReCheckBtnLabel dir="auto">בדוק שנית</ReCheckBtnLabel>
          </ReCheckBtn>
          <ExclusionBtn onClick={onExclusion}>
            <ExclusionBtnInner>
              <ExclusionBtnLabel dir="auto">בצע החרגה</ExclusionBtnLabel>
              <ExclusionIcon src={FEES_EXCL} alt="" loading="lazy" />
            </ExclusionBtnInner>
          </ExclusionBtn>
        </UnpaidSection>
      )}

      {feeState === 'mismatch' && (
        <UnpaidSection>
          <FeeStatusTitle dir="auto">אגרה לא תואמת לסוג הטלפון</FeeStatusTitle>
          <UnpaidIconBox>
            <FeeWarn src={FEES_WARN} alt="" loading="lazy" />
          </UnpaidIconBox>
          <FeeNote dir="auto">יש לשלם תוספת אגרה לפני המשך התהליך</FeeNote>
          <QueueBtn onClick={onClose}>
            <QueueBtnLabel dir="auto">שלח חזרה לתור</QueueBtnLabel>
          </QueueBtn>
          <ReCheckBtn onClick={() => setFeeState('checking')}>
            <ReCheckBtnLabel dir="auto">בדוק שנית</ReCheckBtnLabel>
          </ReCheckBtn>
        </UnpaidSection>
      )}
    </div>
  )
}
