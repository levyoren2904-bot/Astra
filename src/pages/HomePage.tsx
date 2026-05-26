import { useState, useRef, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { Tooltip } from '@/components/ui/Tooltip'
import { CardCheckModal } from './CardCheckModal'
import {
  PageRoot,
  DropdownMenu,
  MenuItemBtn,
  MenuItemTextArea,
  MenuItemLine,
  MenuIconWrap,
  AcquisitionInnerWrap,
  BulkInnerWrap,
  BulkInner2,
  QueriesInnerWrap,
  MenuIconImg,
  LogoWordmarkWrap,
  LogoWordmark,
  TextField,
  IconsGroup,
  TextFieldSeparator,
  TextFieldInput,
  HandBtn,
  HandBtnImg,
  StartBtnArrow,
  StartBtnLabel,
  ResidentPopup,
  QueueBadge,
  QueueNumber,
  ResidentPopupInfo,
  ResidentPopupTexts,
  ResidentPopupName,
  ResidentPopupId,
  ResidentPopupPhoto,
} from './HomePage.styles'

const imgQuestion = '/icons/question.svg'
const imgRedo = '/icons/redo.svg'
const imgRefresh = '/icons/refresh.svg'
const imgSpeaker = '/icons/speaker.svg'
const imgArrow = '/icons/arrow.svg'
const imgMenuAcquisition = '/icons/menu-acquisition.svg'
const imgMenuBulk = '/icons/menu-bulk.svg'
const imgMenuAdmin = '/icons/menu-admin.svg'
const imgMenuQueries = '/icons/menu-queries.svg'
const imgBarcode = '/icons/barcode-scan.svg'

const menuItems = [
  {
    label: 'הרכשה ייעודית',
    lines: ['הרכשה ייעודית'],
    iconType: 'acquisition',
    path: '/wizard-acquisition',
  },
  { label: 'כרטיסים מיוחדים', lines: ['כרטיסים מיוחדים'], iconType: 'bulk', path: '/wizard-bulk' },
  { label: 'ניהול מערכת', lines: ['ניהול', 'מערכת'], iconType: 'admin', path: '/admin' },
  { label: 'שאילתות', lines: ['שאילתות'], iconType: 'queries', path: null, external: true },
  { label: 'בדיקת כרטיס', lines: ['בדיקת כרטיס'], iconType: 'cardcheck', path: null },
] as const

const MenuIcon: FC<{ type: (typeof menuItems)[number]['iconType'] }> = ({ type }) => {
  if (type === 'acquisition') {
    return (
      <MenuIconWrap className="relative shrink-0 overflow-clip">
        <AcquisitionInnerWrap>
          <MenuIconImg
            src={imgMenuAcquisition}
            alt=""
            loading="lazy"
            className="absolute block w-full h-full"
          />
        </AcquisitionInnerWrap>
      </MenuIconWrap>
    )
  }
  if (type === 'bulk') {
    return (
      <MenuIconWrap className="relative shrink-0">
        <BulkInnerWrap>
          <BulkInner2>
            <MenuIconImg
              src={imgMenuBulk}
              alt=""
              loading="lazy"
              className="block w-full h-full"
            />
          </BulkInner2>
        </BulkInnerWrap>
      </MenuIconWrap>
    )
  }
  if (type === 'admin') {
    return (
      <MenuIconWrap className="relative shrink-0">
        <MenuIconImg
          src={imgMenuAdmin}
          alt=""
          loading="lazy"
          className="absolute block w-full h-full"
        />
      </MenuIconWrap>
    )
  }
  if (type === 'cardcheck') {
    return (
      <MenuIconWrap className="relative shrink-0">
        <MenuIconImg
          src={imgBarcode}
          alt=""
          loading="lazy"
          className="absolute block w-full h-full"
        />
      </MenuIconWrap>
    )
  }
  // queries
  return (
    <MenuIconWrap className="relative shrink-0">
      <QueriesInnerWrap className="absolute">
        <MenuIconImg
          src={imgMenuQueries}
          alt=""
          loading="lazy"
          className="absolute block w-full h-full"
        />
      </QueriesInnerWrap>
    </MenuIconWrap>
  )
}

const MOCK_QUEUE_RESIDENT = {
  queueNumber: 134,
  name: 'מוחמד בן סלמאן',
  photo: '/images/bio-captured-photo.png',
}

function isValidId(value: string) {
  return /^\d{9}$/.test(value)
}

export const HomePage: FC = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cardCheckOpen, setCardCheckOpen] = useState(false)
  const [idValue, setIdValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const showPopup = isValidId(idValue)

  function handleCallNext() {
    // TODO: integrate with queue API — announce + inject ID
    inputRef.current?.focus()
  }

  function handleStartProcess() {
    if (!idValue.trim()) return
    navigate('/wizard', { state: { id: idValue } })
  }

  function handleMenuSelect(item: (typeof menuItems)[number]) {
    setMenuOpen(false)
    if (item.iconType === 'cardcheck') {
      setCardCheckOpen(true)
      return
    }
    if ('external' in item && item.external) {
      window.open('about:blank', '_blank') // TODO: replace with actual שאילתות URL
      return
    }
    if (item.path) navigate(item.path)
  }

  return (
    <PageRoot className="relative w-full overflow-hidden">
      {/* Video background — crossfade loop to avoid visible jump */}
      <VideoBackground />

      {/* Card validity check modal */}
      {cardCheckOpen && <CardCheckModal onClose={() => setCardCheckOpen(false)} />}

      {/* Hamburger menu button — top left (RTL) */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        className="absolute top-5 left-5 z-20 w-11 h-11 flex items-center justify-center rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors shadow-btn-primary"
        aria-label="תפריט"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="2" rx="1" fill="white" />
          <rect x="2" y="9" width="16" height="2" rx="1" fill="white" />
          <rect x="2" y="14" width="16" height="2" rx="1" fill="white" />
        </svg>
      </button>

      {/* Dropdown menu — exact Figma: 2×2 grid, bg #fbfbfb, rounded-16, shadow, p-24, gap-17 */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-[15]" onClick={() => setMenuOpen(false)} />
          <DropdownMenu className="absolute left-5 z-20 flex flex-wrap justify-end items-center">
            {menuItems.map((item) => (
              <MenuItemBtn
                key={item.label}
                onClick={() => handleMenuSelect(item)}
                className="flex flex-col items-center hover:brightness-95 transition-all"
              >
                <MenuIcon type={item.iconType} />
                {/* Text area — flex:1 fills the remaining 38px (86 - 8top - 24icon - 8gap - 8bottom) */}
                <MenuItemTextArea className="flex flex-col justify-center text-center" dir="auto">
                  {item.lines.map((line, i) => (
                    <MenuItemLine key={i}>{line}</MenuItemLine>
                  ))}
                </MenuItemTextArea>
              </MenuItemBtn>
            ))}
          </DropdownMenu>
        </>
      )}

      {/* Center content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-10">
        {/* Logo + ASTRA wordmark */}
        <div className="flex flex-col items-center">
          <img src="/Logo.svg" alt="Astra" width={208} height={208} loading="eager" fetchPriority="high" />
          <LogoWordmarkWrap>
            <LogoWordmark>ASTRA</LogoWordmark>
          </LogoWordmarkWrap>
        </div>

        {/* Button group — LTR: [התחל תהליך] [TextField w/icons] [speaker] */}
        <div className="relative flex items-center gap-4" dir="ltr">
          {/* "התחל תהליך" button */}
          <button
            onClick={handleStartProcess}
            disabled={!idValue.trim()}
            className="flex items-center gap-2 h-10 px-6 rounded bg-[#5c5def] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)] transition-all shrink-0"
          >
            <StartBtnLabel>התחל תהליך</StartBtnLabel>
            <StartBtnArrow src={imgArrow} alt="" loading="lazy" />
          </button>

          {/* TextField */}
          <TextField>
            <IconsGroup>
              <Tooltip text="סימון כנעדר">
                <button
                  className="overflow-clip relative shrink-0 w-6 h-6 hover:opacity-70 transition-opacity"
                  onClick={() => {}}
                >
                  <div className="absolute inset-[8.33%]">
                    <div className="absolute inset-[-3.75%]">
                      <img
                        src={imgQuestion}
                        alt=""
                        loading="lazy"
                        width={24}
                        height={24}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                </button>
              </Tooltip>
              <Tooltip text="החזרה לתור">
                <button
                  className="relative shrink-0 w-6 h-6 hover:opacity-70 transition-opacity"
                  onClick={() => {}}
                >
                  <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4">
                    <div className="absolute inset-[-6.25%_-4.69%]">
                      <img
                        src={imgRedo}
                        alt=""
                        loading="lazy"
                        width={24}
                        height={24}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                </button>
              </Tooltip>
              <Tooltip text="קריאה שנית">
                <button
                  className="relative overflow-clip shrink-0 w-6 h-6 hover:opacity-70 transition-opacity"
                  onClick={() => {}}
                >
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-4.17%]">
                      <img
                        src={imgRefresh}
                        alt=""
                        loading="lazy"
                        width={24}
                        height={24}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                </button>
              </Tooltip>
            </IconsGroup>

            <TextFieldSeparator />

            <TextFieldInput
              ref={inputRef}
              type="text"
              value={idValue}
              onChange={(e) => setIdValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleStartProcess()}
              placeholder="ת.ז"
              dir="rtl"
            />
          </TextField>

          {/* Speaker/call-next button — 40×40 blue square */}
          <HandBtn
            onClick={handleCallNext}
            title="קרא לתושב הבא"
            className="flex items-center justify-center rounded bg-[#5c5def] hover:brightness-110 border border-[#5c5def] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)] transition-all shrink-0"
          >
            <HandBtnImg src={imgSpeaker} alt="קרא לתושב הבא" loading="lazy" className="object-contain" />
          </HandBtn>

          {/* Resident popup — appears below the TextField when a valid 9-digit ID is typed */}
          {showPopup && (
            <ResidentPopup>
              {/* LTR order: queue badge (left) | texts (middle) | photo (right) */}
              <QueueBadge>
                <QueueNumber>{MOCK_QUEUE_RESIDENT.queueNumber}</QueueNumber>
              </QueueBadge>
              <ResidentPopupInfo>
                <ResidentPopupTexts>
                  <ResidentPopupName dir="auto">{MOCK_QUEUE_RESIDENT.name}</ResidentPopupName>
                  <ResidentPopupId dir="auto">{idValue}</ResidentPopupId>
                </ResidentPopupTexts>
                <ResidentPopupPhoto
                  src={MOCK_QUEUE_RESIDENT.photo}
                  alt=""
                  loading="lazy"
                />
              </ResidentPopupInfo>
            </ResidentPopup>
          )}
        </div>
      </div>
    </PageRoot>
  )
}
