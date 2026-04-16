import type { FC } from 'react'
import type { StatusVariant } from '@/types'
import { ChipRoot, ChipInner, ChipLabel } from './Chip.styles'

const chipStyles: Record<StatusVariant, { bg: string; color: string }> = {
  green: { bg: '#d5f3ea', color: '#2fc198' },
  orange: { bg: '#fcdbde', color: '#f24959' },
  purple: { bg: '#cbccfa', color: '#1e1f33' },
  red: { bg: '#fcdbde', color: '#f24959' },
  gray: { bg: '#f5f5f6', color: '#878792' },
}

interface ChipProps {
  label: string
  variant: StatusVariant
  width?: number
}

export const Chip: FC<ChipProps> = ({ label, variant, width }) => {
  const { bg, color } = chipStyles[variant]
  return (
    <ChipRoot $bg={bg}>
      <ChipInner $width={width}>
        <ChipLabel $color={color} dir="auto">
          {label}
        </ChipLabel>
      </ChipInner>
    </ChipRoot>
  )
}
