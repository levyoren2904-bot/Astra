import type { FC } from 'react'
import { Chip } from '@/components/ui/Chip'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { MOCK_CARD_HISTORY } from '@/pages/WizardPage/mockData'
import {
  PanelRoot,
  HistoryRow,
  HistoryType,
  HistoryDate,
  HistoryValidityLabel,
  CalendarIconImg,
} from './CardHistoryPanel.styles'

const CalendarIcon: FC = () => {
  return <CalendarIconImg src="/icons/calendar-union.svg" alt="" loading="lazy" />
}

export const CardHistoryPanel: FC = () => {
  return (
    <PanelRoot className="flex-1 flex flex-col gap-2 p-4 rounded-2xl min-h-0 min-w-0 h-full">
      <PanelHeader title="היסטוריית כר״חים" icon="/icons/panel-history.png" />
      <div className="overflow-y-auto flex-1 flex flex-col gap-2 w-full min-h-0">
        {MOCK_CARD_HISTORY.map((item, i) => (
          <HistoryRow
            key={i}
            className="flex justify-between items-start shrink-0 w-full rounded-xl"
          >
            <div className="shrink-0">
              <Chip label={item.status} variant={item.statusVariant} width={64} />
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-center min-w-0">
              <div className="flex flex-col items-end justify-center shrink-0 w-full">
                <HistoryType dir="auto">{item.type}</HistoryType>
              </div>
              <div className="flex flex-col items-end justify-center shrink-0 w-full">
                <div className="flex gap-2 items-center justify-end w-full">
                  <div className="flex-1 flex items-start justify-end min-w-0">
                    <HistoryDate dir="auto">
                      {item.validFrom} - {item.validTo}
                    </HistoryDate>
                  </div>
                  <HistoryValidityLabel dir="auto">תוקף</HistoryValidityLabel>
                  <CalendarIcon />
                </div>
              </div>
            </div>
          </HistoryRow>
        ))}
      </div>
    </PanelRoot>
  )
}
