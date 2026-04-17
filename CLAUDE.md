# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (binds to :5173, or next available port)
npm run build    # TypeScript check + Vite bundle → dist/
npm run lint     # ESLint
npm run preview  # serve the built dist/ locally
```

## Stack

React 19 + TypeScript (strict mode), Vite 8, React Router 7, Tailwind CSS 3, Zustand 5. TypeScript enforces `noUnusedLocals`, `noUnusedParameters`, and `noUncheckedSideEffectImports`.

## Performance Conventions

- **Code splitting**: All route-level pages in `App.tsx` are loaded via `React.lazy()` + `<Suspense>` to keep the initial bundle small.
- **Image loading**: All `<img>` tags use `loading="lazy"` to prevent unnecessary network requests on first render.

## Code Architecture

```
src/
  main.tsx                  # entry — BrowserRouter wraps App
  App.tsx                   # route table only (Routes/Route)
  styles/index.css          # @fontsource imports THEN @tailwind directives (order matters)
  pages/
    HomePage.tsx + .styles.ts   # flat file — home screen
    AdminPage/                  # folder pattern (same as WizardPage)
    WizardPage/                 # folder pattern
      WizardPage.tsx + .styles.ts
      constants.ts              # ALL image paths + shared constants (FROSTED_STYLE, FP_SETS, etc.)
      mockData.ts
      index.ts
      components/               # WizardPage sub-components (each a folder)
        BiometricsContent/ EligibilityContent/ FeesContent/ IssuanceContent/
        PersonalDetailsPanel/ PermitsPanel/ ProhibitionsPanel/ CardHistoryPanel/
        QuestionnaireModal/ ExclusionModal/ WizardStepper/ CloseIcon/
    WizardBulkPage/             # same folder pattern
      WizardBulkPage.tsx + .styles.ts + index.ts
    WizardAcquisitionPage/      # same folder pattern
      WizardAcquisitionPage.tsx + .styles.ts + index.ts
  components/
    ui/                     # VideoBackground, Tooltip, Chip, IdCardPreview, PanelHeader
    layout/                 # ErrorBoundary
  store/                    # Zustand stores (installed, no stores yet)
  assets/
    Homepage_vid.mp4        # background video (all screens)
public/
  Logo.svg
  icons/                    # small action/badge SVG+PNG icons: <img src="/icons/name.svg">
                            # Note: Figma sometimes downloads PNG with .svg extension — run `file` to verify
  images/                   # larger imagery loaded via WizardPage/constants.ts:
                            # bio-* (biometrics panel assets), card-* (ID card preview),
                            # fees-* (fee step), fingerprint_scanner.png
```

Routes: `/` → HomePage, `/wizard` → WizardPage, `/wizard-bulk` → WizardBulkPage, `/wizard-acquisition` → WizardAcquisitionPage, `/admin` → AdminPage.

## Styling Rules

**Iron-clad**: All styles live in a co-located `.styles.ts` file using styled-components. No inline `style={{}}` props anywhere. Tailwind utility classes are used only for layout helpers inside JSX className (flex, gap, overflow, etc.) when a full styled component would be overkill.

**CSS import order**: `@import` statements in `src/styles/index.css` must come **before** `@tailwind` directives — PostCSS will warn and fonts may silently fail to load if the order is reversed.

**Shared image constants**: `WizardPage/constants.ts` exports all `/public/images/` paths and layout constants (FROSTED_STYLE, FP_SETS, FINGER_LEFTS_4/2, etc.). Other pages that reuse biometric assets import from `@/pages/WizardPage/constants` rather than duplicating paths.

### WizardPage Architecture

WizardPage is a single-file page with all sub-components defined inline. Key components:

- **`WizardStepper`** — 5-step progress bar. DOM order is reversed `[5,4,3,2,1]` inside `dir="ltr"` flex so step 1 renders rightmost, matching Figma.
- **`PersonalDetailsPanel`** — face recognition left section + resident info right section. Props: `noPhoto` (state 0), `mockFail` (dev toggle for fail result), `onOpenQuestionnaire`.
- **`PermitsPanel` / `ProhibitionsPanel` / `CardHistoryPanel`** — bottom 3 panels, each `flex-1 h-full min-h-0` inside an `overflow-hidden` row. Permits uses `shrink-0 minHeight:140` on cards so 2.x cards show with scroll indication.
- **`PanelHeader`** — shared header with title + icon badge (`#b2b3f7` bg, 32×32, `borderRadius:8`). Icon is on the RIGHT (last in LTR DOM order).

**Face recognition state machine** (`FaceIdState`): `idle → scanning → success | fail`
- Progress ring: SVG overlay, `r=125`, `CIRCUMFERENCE = 2π×125`. SVG positioned `top:-9, left:-3` (empirically calibrated to align with the 3px dashed border of the 253px circle).
- On `fail`: "פתח שאלון אימות" button appears (same as `noPhoto` state).

**Dev-only toggles**: `import.meta.env.DEV` guards a floating button bar (bottom-right of modal) that toggles `noPhoto` and `mockFail` states for testing abnormal flows without backend.

**`QuestionnaireModal`** — State 1 overlay (8 questions, 2 sets of 4):
- Set 1: all 4 correct → `result='success'`; any wrong → continue to set 2
- Set 2: first wrong → `result='failure'`; all 4 correct → `result='success'`
- On result: shows success/failure screen inside same modal before calling `onComplete` / `onExclusion`
- Fixed `height: 246`, `overflow: hidden`. All text uses `lineHeight: 1` (matches Figma `lineHeight: 100%`) to prevent font metrics from overflowing the fixed height. Content sections use `flex-1` to fill space between header and footer.
- Option chips: `flex: 1` so they fill the full width equally.

**`ExclusionModal`** — Shared states 3→4→5 overlay, also `height: 246`:
- State 3 (`warning`): shown only when `hasProhibitions` — warns before proceeding
- State 4 (`code`): admin code entry. Input `width: 320`. Status message is a single fixed-height `12px` line showing error / success / DEV hint (mutually exclusive, no layout shift). Mock code: `MOCK_ADMIN_CODE = '1234'` (DEV only, shown in hint).
- State 5 (`reason`): textarea with `flex: 1` fills available space; "בצע החרגה" enabled only when text is non-empty.
- Triggered from `QuestionnaireModal.onExclusion` and will be triggered from other abnormal states (fee unpaid, fingerprint error).

**`IssuanceContent`** — Step 5, two side-by-side panels:
- Left panel (908px): header + scanner area with 3 states (`idle` / `success` / `failure`). Idle shows barcode icon at `left:306, top:269`. Success/failure show a concentric-ring icon + message at `left:358, top:228`. DEV toggle buttons in panel bottom-left.
- Right panel (flex:1): `justifyContent: center, alignItems: center` — title, card type subtitle, and `IdCardPreview` vertically centered.
- Global action row: "הבא" becomes "סיום תהליך" (navigates to `/`), "חזור" is disabled, "ביטול" hidden.

**`BiometricsContent`** — Step 4, two side-by-side panels (fingerprints left, face camera right):
- Outer wrapper: `flex: 1, minHeight: 0, alignItems: stretch` — fills remaining modal height so panels scale with viewport instead of overflowing.
- Both panels use `height: '100%'` (not fixed px) so they fill the flex wrapper.
- **Face panel** state machine (`FaceCapState`): `waiting → captured`. Three check indicators in header (camera / light / angle). Face detection circle (BIO_FACE_GREEN / BIO_FACE_RED, 375×375) at `left: 264, top: 102`. Capture bar is a CSS gradient div at `bottom: 0, height: 95` with a transparent circular button (`width: 56, height: 56`) as click target — the visible circle comes from the bar's CSS gradient design, NOT from an image asset.
- **FP panel** has 3 sets (`FP_SETS`): 4 fingers right / 4 fingers left / 2 thumbs. `FINGER_LEFTS_4 = [54, 249, 465, 694]`, `FINGER_LEFTS_2 = [249, 465]`. Finger name labels use `bottom: 76` (above action bar). Set label right-aligned (`right: 16`). Scanner image: `top: 107, height: 339`.
- `FROSTED_STYLE` constant: `backdropFilter: blur(15.35px), background: rgba(255,255,255,0.6)` — used for inactive panel overlay and post-capture face overlay.
- Dev toggles: `mockAngleFail` (angle check fail) and `fpError` (fingerprint scanner error), guarded by `import.meta.env.DEV`.

### WizardBulkPage Architecture

3-step wizard: file upload → template mapping → issuance status table.

- **Step 1** — file upload section (buttons side-by-side + instruction text + illustration) + manual ID entry table. `FileUploadRow` uses `dir="ltr"` flex: buttons left, instruction center, illustration right.
- **Step 2** — template + data source selection (placeholder).
- **Step 3** — issuance status table. `table-layout: fixed` prevents column-width recalculation when row content changes (prevents layout jump). Status cell uses `justifyContent: 'flex-start'` inside RTL flex so status text stays right-aligned.
- **`CompletionModal`** — triggered by eye icon on error rows. `dir="ltr"` container: close button left, title + resident name right. Two side-by-side fields (marital status select with custom SVG arrow via `appearance: none` + `backgroundImage`).

### WizardAcquisitionPage Architecture

3-step wizard: ת.ז → פרטי תושב → ביומטריה.

- **Step 1** — ID input (496px, right-aligned).
- **Step 2** — Personal panel (photo circle + demographics grid + 8 badge icons) + 3 scrollable info panels (היתרים / מניעות / היסטוריה).
- **Step 3** — Two 908px panels (`width: 908, height: '100%', flexShrink: 0`):
  - **Left (fingerprints)**: Scanner image (`BIO_FP_SCAN_BG`) + set label at `right:16, top:66`. Initially covered by frosted overlay + "בצע הרכשה" card. After acquisition: overlay lifts, scanner revealed, bottom action bar with "נעל ועבור לסט הבא" / "חזור לסט קודם".
  - **Right (face camera)**: Camera background (`BIO_CAM_BG`) + semi-transparent white overlay + header with cam/light/angle indicators + face circle (`BIO_FACE_GREEN`, 375×375 at `left:264, top:102`) + capture bar at bottom. After capture: frosted overlay + card with circular photo (`BIO_CAPTURED_PHOTO`, 138px) + "צלם שנית".
- **Point of no return**: after face photo captured — "ביטול" disappears, "חזור" becomes a disabled gray button (`DisabledBtn`: `#f5f5f6` bg, `#8c8c8c` border/text).
- **"סיום ומעבר לתושב הבא"**: resets all state back to step 1 for the next resident.
- Both pages import biometric assets from `@/pages/WizardPage/constants`.

## Fonts

Both fonts are self-hosted via `@fontsource` — **no CDN** (closed network).

- **Rubik** — all UI text (`@fontsource/rubik` 400/500/600/700)
- **Audiowide** — ASTRA logotype only (`@fontsource/audiowide` 400, single weight only)

ASTRA wordmark: `font-family: Audiowide`, `font-size: 80px`, `letter-spacing: 33.6px`, gradient text `linear-gradient(236.086deg, rgb(78,80,172) 1.5768%, rgb(126,128,242) 94.516%)`, `WebkitFontSmoothing: 'auto'` (prevents antialiased thinning).

## Figma Asset URLs

Icon images from `get_design_context` expire after **7 days**. Before shipping to the closed network, all `figma.com/api/mcp/asset/…` URLs must be replaced with bundled SVG files.

- Astra working file: `ZmbAVautahsMKlsq9a18aJ`
- Sol Design System: `BxvpftWlIU4NeCsAE6I9Jo`
- **Astra file wins over Design System** on any conflict. If the gap looks unintentional, ask the user.

## Tailwind Tokens

Custom tokens in `tailwind.config.js`:

```
primary-600 = #5C5DEF   (main CTA color)
fg-700      = #111122   fg-600 = #242424   fg-500 = #666666
bg-100      = #F5F5F6
error-600   = #F65E53   success-600 = #70C969   warning-700 = #F68A3C
nav         = #494154   side-panel  = #393245
nav-hover    = #756B85   darkblue    = #0086C0
shadow-btn-primary = 0 2px 4px rgba(0,0,0,0.3)
```

Full primary/secondary/fg/bg color scales (50–700) are defined in `tailwind.config.js`. Check the file for the complete palette.

## RTL / LTR Layout Rules

- `dir="rtl"` is set on `<html>` in `index.html` — applies globally.
- Use `dir="ltr"` only on structural flex containers that need to match Figma's LTR flex order (e.g. the wizard modal, button groups). Use `dir="auto"` on text nodes inside LTR containers so Hebrew text still renders RTL.
- The WizardPage modal uses `dir="ltr"` as its base layout direction. All child flex rows follow LTR DOM order matching Figma's node tree. This means the **first item in DOM renders on the LEFT**, last on the RIGHT.
- When Figma shows items right-to-left in a row, the DOM order must be reversed (last-to-first) within an LTR flex container — or use RTL grid (`dir="rtl"` on grid) like the action icons row.
- Use `100dvh` (not `100vh`) for full-screen height to account for browser chrome (address bar, tabs).

## Project Overview

**Astra** — Hebrew RTL web app for ID card (כר"ח) issuance. Runs on a **closed internal network** — no internet at runtime. Target resolution: 1920×1080 desktop. Background on all screens: `Homepage_vid.mp4` (`autoPlay loop muted playsInline`, `object-fit: cover`).

## User Roles

- **אופרטור** — runs all issuance flows, can request exclusions (needs admin code)
- **אדמין** — system management screens + provides admin code for exclusions
- ⭐ Menu visibility is currently identical for both roles — verify and restrict when confirmed

## Application Flows

### Home Screen
Hamburger menu (top-left) → 4 items: הרכשה ייעודית / כרטיסים מיוחדים / ניהול מערכת / שאילתות (opens new tab — external system).

ID field row (LTR flex order): [התחל תהליך btn] [TextField: icons + input] [hand btn]
- Hand button → calls next resident (speaker announcement + ID injection)
- Icons inside TextField: סימון כנעדר (?) / החזרה לתור (redo) / קריאה שנית (refresh) — all 24×24px, gap-2

### תהליך רגיל — Regular Wizard (5 steps)
זיהוי תושב → בדיקת זכאות → אגרות → ביומטריה → הנפקה

- ⭐ Steps 2 & 5 assumed to always pass — verify and add error states if wrong
- **Point of no return:** Step 5 (card already issued — no back/cancel)

### Abnormal States

| State | Step | Trigger | Exit |
|---|---|---|---|
| 0 | Step 1 | No photo in system | Open questionnaire |
| 0b | Step 1 | Photo exists, face recognition failed | Open questionnaire |
| 1 | Step 1 | Verification questionnaire (4 Q × 4 options) | 4 correct → proceed / 4 wrong → exclusion |
| 2 | Step 3 | Fee unpaid | Exclusion / re-check / return to queue / cancel |
| 3 | Anywhere | Exclusion + resident has מניעות | Warning |
| 4 | Anywhere | Exclusion clicked | Admin code entry |
| 5 | Anywhere | After admin code | Enter reason → proceed |
| 6 | Step 4 | Fingerprint error | Exclusion / cancel only (no return to queue) |

Abnormals 3→4→5 form a **shared exclusion flow** — implement as one reusable modal/overlay.

### תהליך מיוחד — Bulk Wizard
File or manual ID list → template + data source → issuance status snapshot. Error on ID → eye icon → manual completion.

### תהליך ייעודי — Dedicated Acquisition
Single ID → resident details → mandatory face photo → optional fingerprint.
**Point of no return:** after photo taken. "Next resident" resets to ID entry step.

### ניהול מערכת (Admin only)
Tabs: עמדות / סוגי כרטיסים / אגרות — full CRUD per tab.

## Table Component

Node `3:882` in the Astra file is the **base table component**. Every screen uses a subset — different columns, row actions, and toolbar. Always read the specific screen node before implementing a table instance.

## Auth

SSO — user pre-authenticated at OS level. No login screen. App opens directly to Home Screen.

## Implementation Status

| Screen | Status |
|---|---|
| HomePage | Complete |
| WizardPage — step 1 layout + panels | Complete |
| WizardPage — face recognition flow (idle/scanning/success/fail) | Complete |
| WizardPage — state 0 (no photo) + state 0b (recognition failed) | Complete |
| WizardPage — state 1 (questionnaire modal) | Complete |
| WizardPage — exclusion flow (states 3→4→5, shared modal) | Complete |
| WizardPage — step 2 (eligibility) | Complete (assumed always pass) |
| WizardPage — step 3 (fees) | Complete (paid / checking / unpaid states) |
| WizardPage — step 4 (biometrics — face + fingerprints) | Complete |
| WizardPage — step 5 (הנפקה) | Complete (scanner idle/success/failure states + issued card panel) |
| WizardBulkPage — steps 1–3 layout + completion modal | Complete |
| WizardAcquisitionPage — steps 1–3 (ID / personal / biometrics) | Complete |
| AdminPage | Complete (all 3 tabs: עמדות / סוגי כרטיסים / אגרות) |

## Empty States

TBD — reserve space in component architecture for zero-data and error boundary states.
