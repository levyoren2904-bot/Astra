import type { FC } from 'react'
import { Chip } from '@/components/ui/Chip'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { MOCK_PROHIBITIONS } from '@/pages/WizardPage/mockData'
import {
  PanelRoot,
  ProhibitionRow,
  ProhibitionType,
  ProhibitionDetail,
  ProhibitionDetailHighlight,
  ProhibitionDivider,
  ProhibitionDate,
  ProhibitionValidityLabel,
  CalendarIconImg,
} from './ProhibitionsPanel.styles'

const CalendarIcon: FC = () => {
  return <CalendarIconImg src="/icons/calendar-union.svg" alt="" loading="lazy" />
}

export const ProhibitionsPanel: FC = () => {
  return (
    <PanelRoot className="flex-1 flex flex-col gap-2 p-4 rounded-2xl min-h-0 min-w-0 h-full">
      <PanelHeader
        title="מניעות"
        count={MOCK_PROHIBITIONS.length}
        icon="/icons/panel-history.png"
      />
      <div className="overflow-y-auto flex-1 flex flex-col gap-2 w-full min-h-0">
        {MOCK_PROHIBITIONS.map((item, i) => (
          <ProhibitionRow
            key={i}
            className="flex justify-between items-start shrink-0 w-full rounded-xl"
          >
            <div className="shrink-0">
              <Chip
                label={item.status}
                variant={item.status === 'פעיל' ? 'green' : 'gray'}
                width={64}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-center min-w-0">
              <div className="flex gap-2 items-center justify-end w-full">
                <div className="flex flex-1 gap-2 items-start justify-end min-w-0">
                  <ProhibitionDetail dir="auto">
                    <ProhibitionDetailHighlight>כיוון:</ProhibitionDetailHighlight>
                    {' לישראל'}
                  </ProhibitionDetail>
                  <ProhibitionDivider>
                    <ProhibitionDetail dir="auto">
                      <ProhibitionDetailHighlight>סיבה:</ProhibitionDetailHighlight>
                      {' הפרת אמונים'}
                    </ProhibitionDetail>
                  </ProhibitionDivider>
                </div>
                <ProhibitionType dir="auto">{item.type}</ProhibitionType>
              </div>
              <div className="flex gap-2 items-center justify-end w-full">
                <div className="flex-1 flex items-start justify-end min-w-0">
                  <ProhibitionDate dir="auto">
                    {item.validFrom} - {item.validTo}
                  </ProhibitionDate>
                </div>
                <ProhibitionValidityLabel dir="auto">תוקף</ProhibitionValidityLabel>
                <CalendarIcon />
              </div>
            </div>
          </ProhibitionRow>
        ))}
      </div>
    </PanelRoot>
  )
}
