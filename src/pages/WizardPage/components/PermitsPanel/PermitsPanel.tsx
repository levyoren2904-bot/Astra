import type { FC } from 'react'
import { Chip } from '@/components/ui/Chip'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { MOCK_PERMITS } from '@/pages/WizardPage/mockData'
import type { PermitIconType } from '@/types'
import {
  PanelRoot,
  PermitCard,
  PermitId,
  PermitType,
  PermitDestination,
  PermitValidity,
  PermitIconImg,
  PermitLabel,
} from './PermitsPanel.styles'

const PermitIcon: FC<{ type: PermitIconType }> = ({ type }) => {
  return (
    <PermitIconImg
      src={type === 'license' ? '/icons/permit-license.svg' : '/icons/permit-work.svg'}
      alt=""
    />
  )
}

export const PermitsPanel: FC = () => {
  return (
    <PanelRoot className="flex-1 flex flex-col gap-2 p-4 rounded-2xl min-h-0 min-w-0 h-full">
      <PanelHeader
        title="היתרים ורישיונות"
        count={MOCK_PERMITS.length}
        icon="/icons/panel-licenses.png"
      />
      <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto w-full">
        {MOCK_PERMITS.map((p, i) => (
          <PermitCard
            key={i}
            className="flex flex-col gap-2 justify-between p-4 rounded-xl w-full shrink-0"
          >
            <div className="flex gap-4 items-center shrink-0 w-full">
              <div className="shrink-0">
                <Chip label={p.status} variant={p.statusVariant} width={64} />
              </div>
              <div className="flex flex-1 gap-1 items-end justify-end min-w-0">
                <PermitId dir="auto">{p.id}</PermitId>
                <PermitType dir="auto">{p.type}</PermitType>
                <div className="shrink-0">
                  <PermitIcon type={p.iconType} />
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start justify-end shrink-0 w-full">
              {p.chips.map((c) => (
                <Chip key={c} label={c} variant="purple" />
              ))}
            </div>
            <div className="flex gap-4 items-end justify-end shrink-0 w-full">
              {p.destination && (
                <PermitDestination dir="auto">
                  <PermitLabel>יעד</PermitLabel>: {p.destination}
                </PermitDestination>
              )}
              <PermitValidity dir="auto">
                <PermitLabel>תוקף</PermitLabel>: {p.validFrom}-{p.validTo}
              </PermitValidity>
            </div>
          </PermitCard>
        ))}
      </div>
    </PanelRoot>
  )
}
