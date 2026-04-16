import { useState, type FC } from 'react'
import { Wrapper, Arrow, Card, Label, PopoverContainer } from './Tooltip.styles'

interface TooltipProps {
  text: string
  children: React.ReactNode
}

export const Tooltip: FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false)

  return (
    <Wrapper onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}

      {visible && (
        <PopoverContainer>
          <Arrow />
          <Card>
            <Label dir="auto">{text}</Label>
          </Card>
        </PopoverContainer>
      )}
    </Wrapper>
  )
}
