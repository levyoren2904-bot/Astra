import type { FC } from 'react'
import type { CardColor, CardSide, Eligibility, Resident } from '@/types'
import {
  CARD_EMBLEM_LEFT,
  CARD_EMBLEM_RIGHT,
  CARD_LOGO,
  CARD_BARCODE,
  CARD_PHOTO,
  CARD_PHOTO_SILHOUETTE,
  DIGITAL_CIRCLE_LG,
  DIGITAL_CIRCLE_MD,
  DIGITAL_CIRCLE_SM,
} from '@/pages/WizardPage/constants'
import {
  CardRoot,
  CardBackStripe,
  DecoCircleGroup,
  DecoCircleLg,
  DecoCircleMd,
  DecoCircleSm,
  NoiseOverlay,
  CardHeaderRow,
  EmblemLeft,
  TitleCenter,
  TitleHe,
  TitleAr,
  LogoRow,
  LogoArSpan,
  LogoHeSpan,
  LogoImg,
  EmblemRight,
  CardBodyRow,
  DataSection,
  DateColumn,
  DateFieldRow,
  DateValue,
  FieldLabelCol,
  FieldLabelHe,
  FieldLabelAr,
  NameColumn,
  NameFieldRow,
  NameValues,
  NameAr,
  NameHe,
  PhotoSection,
  PhotoBox,
  PhotoImg,
  IdRow,
  IdNumber,
  IdLabelCol,
  IdLabelHe,
  IdLabelAr,
  BarcodeImg,
  SerialSpan,
} from './IdCardPreview.styles'

/** Placeholders used when the card stands for a card TYPE rather than a person (Figma 11:4893). */
const BLANK_VALUE = '---'
const BLANK_DATE = 'DD/MM/YYYY'
const BLANK_ID = '123456789'

interface IdCardPreviewProps {
  variant?: 'physical' | 'digital'
  /** Card family: the green איו״ש card (default) or the orange תפר card. */
  color?: CardColor
  /** Face shown. 'back' renders the blank reverse with the magnetic stripe. */
  side?: CardSide
  /**
   * Draw the card as an unissued TYPE template: silhouette photo, `---` for the
   * personal values and `DD/MM/YYYY` for the dates. Use wherever the card stands
   * for "which card does this person get", not "here is this person's card".
   */
  blank?: boolean
  resident: Resident
  eligibility: Eligibility
}

export const IdCardPreview: FC<IdCardPreviewProps> = ({
  variant = 'physical',
  color = 'default',
  side = 'front',
  blank = false,
  resident: r,
  eligibility: e,
}) => {
  const nameFields: [string, string, string, string][] = [
    ['שם פרטי', 'اسم خاص', blank ? BLANK_VALUE : r.nameHe, 'أبو مروان'],
    ['שם האב', 'اسم الأب', blank ? BLANK_VALUE : 'מוחמד', 'محمد'],
    ['שם הסב', 'اسم الجد', blank ? BLANK_VALUE : 'יוסוף', 'يوسف'],
    ['שם משפחה', 'اسم العائلة', blank ? BLANK_VALUE : 'מרוואן', 'مروان'],
    ['כתובת', 'عنوان', blank ? BLANK_VALUE : r.city, 'جنين'],
    ['תאריך לידה', 'تاريخ الميلاد', blank ? BLANK_DATE : r.birthDate, ''],
  ]
  const dateFields: [string, string, string][] = [
    ['ת. הנפקה', 'أ. الإصدار', blank ? BLANK_DATE : e.issuedDate],
    ['תום תוקף', 'البراءة صحة', blank ? BLANK_DATE : e.expiryDate],
  ]

  const deco = (
    <DecoCircleGroup>
      <DecoCircleLg src={DIGITAL_CIRCLE_LG} alt="" loading="lazy" />
      <DecoCircleMd src={DIGITAL_CIRCLE_MD} alt="" loading="lazy" />
      <DecoCircleSm src={DIGITAL_CIRCLE_SM} alt="" loading="lazy" />
    </DecoCircleGroup>
  )

  // Reverse face (Figma 104:18209) — emblem + magnetic stripe only, no personal data.
  if (side === 'back') {
    return (
      <CardRoot $variant={variant} $color={color}>
        {deco}
        {variant === 'digital' && <NoiseOverlay />}
        <CardHeaderRow>
          <EmblemLeft src={CARD_EMBLEM_LEFT} alt="" loading="lazy" />
        </CardHeaderRow>
        <CardBackStripe />
      </CardRoot>
    )
  }

  return (
    <CardRoot $variant={variant} $color={color}>
      {deco}

      {variant === 'digital' && <NoiseOverlay />}

      <CardHeaderRow>
        <EmblemLeft src={CARD_EMBLEM_LEFT} alt="" loading="lazy" />
        <TitleCenter>
          <TitleHe dir="auto">מנהלת התיאום והקישור האזרחית - איו״ש</TitleHe>
          <TitleAr>مديرة التنسيق والربط المدني - أيوش</TitleAr>
          <LogoRow>
            <LogoArSpan>أسترا</LogoArSpan>
            <LogoHeSpan dir="auto">אסטרה</LogoHeSpan>
            <LogoImg src={CARD_LOGO} alt="" loading="lazy" />
          </LogoRow>
        </TitleCenter>
        <EmblemRight src={CARD_EMBLEM_RIGHT} alt="" loading="lazy" />
      </CardHeaderRow>

      <CardBodyRow>
        <DataSection>
          <DateColumn>
            {dateFields.map(([heLabel, arLabel, value]) => (
              <DateFieldRow key={heLabel}>
                <DateValue>{value}</DateValue>
                <FieldLabelCol>
                  <FieldLabelHe dir="auto">{heLabel}</FieldLabelHe>
                  <FieldLabelAr dir="auto">{arLabel}</FieldLabelAr>
                </FieldLabelCol>
              </DateFieldRow>
            ))}
          </DateColumn>
          <NameColumn>
            {nameFields.map(([heLabel, arLabel, heVal, arVal]) => (
              <NameFieldRow key={heLabel}>
                <NameValues>
                  <NameAr dir="auto">{arVal}</NameAr>
                  <NameHe dir="auto">{heVal}</NameHe>
                </NameValues>
                <FieldLabelCol>
                  <FieldLabelHe dir="auto">{heLabel}</FieldLabelHe>
                  <FieldLabelAr dir="auto">{arLabel}</FieldLabelAr>
                </FieldLabelCol>
              </NameFieldRow>
            ))}
          </NameColumn>
        </DataSection>
        <PhotoSection>
          <PhotoBox>
            <PhotoImg src={blank ? CARD_PHOTO_SILHOUETTE : CARD_PHOTO} alt="" loading="lazy" />
          </PhotoBox>
          <IdRow>
            <IdNumber dir="auto">{blank ? BLANK_ID : r.id}</IdNumber>
            <IdLabelCol>
              <IdLabelHe dir="auto">ת.ז</IdLabelHe>
              <IdLabelAr dir="auto">بطاقة الهوية</IdLabelAr>
            </IdLabelCol>
          </IdRow>
        </PhotoSection>
      </CardBodyRow>

      <BarcodeImg src={CARD_BARCODE} alt="" loading="lazy" />
      <SerialSpan dir="auto">{e.serial}</SerialSpan>
    </CardRoot>
  )
}
