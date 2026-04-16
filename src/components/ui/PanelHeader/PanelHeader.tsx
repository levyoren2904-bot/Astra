import type { FC } from 'react'
import { HeaderRoot, HeaderTitle, IconBadge } from './PanelHeader.styles'

interface PanelHeaderProps {
  title: string
  count?: number
  icon: string
}

export const PanelHeader: FC<PanelHeaderProps> = ({ title, count, icon }) => {
  return (
    <HeaderRoot>
      <HeaderTitle dir="auto">
        {title}
        {count !== undefined ? ` (${count})` : ''}
      </HeaderTitle>
      <IconBadge>
        <img src={icon} alt="" width={24} height={24} />
      </IconBadge>
    </HeaderRoot>
  )
}
