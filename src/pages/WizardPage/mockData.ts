import type { Resident, Permit, Prohibition, CardHistory, Eligibility } from '@/types'

export const MOCK_RESIDENT: Resident = {
  id: '1000000098',
  nameHe: 'אבו מרוואן מוחמד',
  nameAr: 'أبو مروان محمد',
  birthDate: '12/04/1984',
  age: 37,
  maritalStatus: 'נשוי + 3',
  district: "ג'נין",
  city: "ג'נין",
  street: 'שקר 2',
}

export const MOCK_PERMITS: Permit[] = [
  {
    id: '123456789',
    type: 'רישיון לגובה',
    iconType: 'license',
    status: 'מוקפא',
    statusVariant: 'orange',
    validFrom: '12.4.2025',
    validTo: '13.4.2025',
    destination: null,
    chips: ['רישיון פעיל בסגר'],
  },
  {
    id: '123456789',
    type: 'היתר עבודה',
    iconType: 'work',
    status: 'פעיל',
    statusVariant: 'green',
    validFrom: '12.4.2025',
    validTo: '13.4.2025',
    destination: 'ישראל',
    chips: ['היתר פעיל בסגר', 'היתר למרות מניעתו'],
  },
  {
    id: '123456789',
    type: 'היתר עבודה',
    iconType: 'work',
    status: 'פעיל',
    statusVariant: 'green',
    validFrom: '12.4.2025',
    validTo: '13.4.2025',
    destination: 'ישראל',
    chips: ['היתר פעיל בסגר', 'היתר למרות מניעתו'],
  },
]

export const MOCK_PROHIBITIONS: Prohibition[] = [
  {
    type: 'מניעת שב"כ סירוב מעבר',
    location: 'ישראל, הפרת אמונים',
    status: 'פעיל',
    validFrom: '1.2.2023',
    validTo: '1.1.2023',
  },
  {
    type: 'מניעת שב"כ סירוב מעבר',
    location: 'ישראל, הפרת אמונים',
    status: 'פעיל',
    validFrom: '1.2.2023',
    validTo: '1.1.2023',
  },
  {
    type: 'מניעת שב"כ סירוב מעבר',
    location: 'ישראל, הפרת אמונים',
    status: 'פעיל',
    validFrom: '1.2.2023',
    validTo: '1.1.2023',
  },
  {
    type: 'מניעת שב"כ סירוב מעבר',
    location: 'ישראל, הפרת אמונים',
    status: 'פעיל',
    validFrom: '1.2.2023',
    validTo: '1.1.2023',
  },
]

export const MOCK_ELIGIBILITY: Eligibility = {
  cardType: 'כרטיס נלווה איו״ש',
  issuedDate: '08/07/2022',
  expiryDate: '08/07/2026',
  serial: '90008628565',
}

export const MOCK_CARD_HISTORY: CardHistory[] = [
  {
    type: 'כר"ח שטחים',
    status: 'פעיל',
    statusVariant: 'green',
    validFrom: '1.2.2023',
    validTo: '1.1.2023',
  },
  {
    type: 'כר"ח שטחים',
    status: 'מוקפא',
    statusVariant: 'orange',
    validFrom: '1.2.2023',
    validTo: '1.1.2023',
  },
  {
    type: 'כר"ח שטחים',
    status: 'לא פעיל',
    statusVariant: 'gray',
    validFrom: '1.2.2023',
    validTo: '1.1.2023',
  },
  {
    type: 'כר"ח שטחים',
    status: 'לא פעיל',
    statusVariant: 'gray',
    validFrom: '1.2.2023',
    validTo: '1.1.2023',
  },
]

export const MOCK_ADMIN_CODE = '1234' // dev only

export const MOCK_QUESTIONS_SET1 = [
  {
    question: 'תאריך ניפוק ת.ז',
    options: ['12/04/2019', '05/08/2015', '22/11/2010', '30/01/2022'],
    correctIndex: 2,
  },
  { question: 'מקום לידה', options: ["ג'נין", 'רמאללה', 'חברון', 'שכם'], correctIndex: 0 },
  { question: 'שם האב', options: ['מוחמד', 'עלי', 'אחמד', 'יוסף'], correctIndex: 2 },
  { question: 'שם האם', options: ['פאטמה', 'מריאם', 'עאישה', "ח'אולה"], correctIndex: 1 },
]

export const MOCK_QUESTIONS_SET2 = [
  { question: 'מספר רחוב', options: ['2', '4', '7', '12'], correctIndex: 0 },
  { question: 'שנת עלייה לארץ', options: ['1998', '2001', '2005', '2010'], correctIndex: 1 },
  {
    question: 'שם בית הספר האחרון',
    options: ["אל-נג'אח", 'אל-ביאן', "אל-ח'ליל", 'אל-ראזי'],
    correctIndex: 2,
  },
  { question: 'צבע עיניים', options: ['חום', 'ירוק', 'אפור', 'כחול'], correctIndex: 0 },
]

export const STEPS = [
  { num: 1, label: 'זיהוי תושב' },
  { num: 2, label: 'בדיקת זכאות' },
  { num: 3, label: 'אגרות' },
  { num: 4, label: 'ביומטריה' },
  { num: 5, label: 'הנפקה' },
]
