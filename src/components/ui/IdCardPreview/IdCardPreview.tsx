import type { FC } from 'react'
import type { CardColor, CardSide, Eligibility, Resident } from '@/types'
import {
  CARD_EMBLEM_LEFT,
  CARD_EMBLEM_RIGHT,
  CARD_LOGO,
  CARD_BARCODE,
  CARD_PHOTO,
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

interface IdCardPreviewProps {
  variant?: 'physical' | 'digital'
  /** Card family: the green איו״ש card (default) or the orange תפר card. */
  color?: CardColor
  /** Face shown. 'back' renders the blank reverse with the magnetic stripe. */
  side?: CardSide
  resident: Resident
  eligibility: Eligibility
}

export const IdCardPreview: FC<IdCardPreviewProps> = ({
  variant = 'physical',
  color = 'default',
  side = 'front',
  resident: r,
  eligibility: e,
}) => {
  const nameFields: [string, string, string, string][] = [
    ['שם פרטי', 'اسم خاص', r.nameHe, 'أبو مروان'],
    ['שם האב', 'اسم الأب', 'מוחמד', 'محمد'],
    ['שם הסב', 'اسم الجد', 'יוסוף', 'يوسف'],
    ['שם משפחה', 'اسم العائلة', 'מרוואן', 'مروان'],
    ['כתובת', 'عنوان', r.city, 'جنين'],
    ['תאריך לידה', 'تاريخ الميلاد', r.birthDate, ''],
  ]
  const dateFields: [string, string, string][] = [
    ['ת. הנפקה', 'أ. الإصدار', e.issuedDate],
    ['תום תוקף', 'البراءة صحة', e.expiryDate],
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
            <PhotoImg src={CARD_PHOTO} alt="" loading="lazy" />
          </PhotoBox>
          <IdRow>
            <IdNumber dir="auto">{r.id}</IdNumber>
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
