import type { FC } from 'react'
import { STEPS } from '@/pages/WizardPage/mockData'
import {
  StepCircleOuter,
  StepRingBg,
  StepInnerCircle,
  StepInnerCircleInactive,
  StepNumActive,
  StepNumInactive,
  StepLabelWrap,
  StepText,
  ConnectorOuter,
  ConnectorLine,
} from './WizardStepper.styles'

const StepCircle: FC<{ num: number; state: 'active' | 'completed' | 'inactive' }> = ({
  num,
  state,
}) => {
  if (state === 'active') {
    return (
      <StepCircleOuter className="relative shrink-0">
        <StepRingBg className="absolute inset-0 rounded-full" />
        <StepInnerCircle className="absolute rounded-full bg-[#5c5def]" />
        <StepNumActive className="absolute inset-0 flex items-center justify-center text-white">
          {num}
        </StepNumActive>
      </StepCircleOuter>
    )
  }
  if (state === 'completed') {
    return (
      <StepCircleOuter className="relative shrink-0 flex items-center justify-center">
        <StepInnerCircle className="absolute rounded-full bg-[#5c5def]" />
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="relative z-10">
          <path
            d="M1 5L4.5 8.5L11 1.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StepCircleOuter>
    )
  }
  return (
    <StepCircleOuter className="relative shrink-0 flex items-center justify-center">
      <StepInnerCircleInactive className="absolute rounded-full" />
      <StepNumInactive>{num}</StepNumInactive>
    </StepCircleOuter>
  )
}

interface WizardStepperProps {
  currentStep: number
}

export const WizardStepper: FC<WizardStepperProps> = ({ currentStep }) => {
  const stepsDesc = [...STEPS].reverse()
  return (
    <div className="flex items-center justify-center shrink-0 w-full overflow-clip">
      <div className="flex gap-3 items-center justify-center" dir="ltr">
        {stepsDesc.map((step, idx) => (
          <div key={step.num} className="flex items-center gap-3" dir="ltr">
            <StepLabelWrap>
              <StepText dir="auto" $active={step.num <= currentStep}>
                {step.label}
              </StepText>
            </StepLabelWrap>
            <StepCircle
              num={step.num}
              state={
                step.num < currentStep
                  ? 'completed'
                  : step.num === currentStep
                    ? 'active'
                    : 'inactive'
              }
            />
            {idx < stepsDesc.length - 1 && (
              <ConnectorOuter className="flex items-center justify-center overflow-clip bg-white">
                <ConnectorLine />
              </ConnectorOuter>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
