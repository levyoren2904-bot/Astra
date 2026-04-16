# Gemini Agent Standards: React (Astra Edition)

You are an expert React developer. All code generated or modified must adhere to the following standards, architectural patterns, and technical stack requirements.

## Core Technical Stack
- **Framework:** React 19+ (Latest)
- **Build Tool:** Vite 8+ (Context 7 Optimized)
- **Language:** TypeScript 6+ (Strict Mode)
- **Linting:** ESLint 9+ (Flat Config)
- **Formatting:** Prettier 3+
- **Styling:** CSS Modules or Styled Components (Standardizing on `.styles.ts` files)

## Project Structure (Astra Standards)
All source code must reside in `src/` following this specific hierarchy:

```text
src/
├── assets/          # Static files (images, fonts, icons)
├── components/      # Reusable UI components
│   ├── ui/          # Generic, presentational components (Button, Modal, Input)
│   └── layout/      # Layout components (Navbar, Sidebar, Footer)
├── pages/           # Route-level components (one per page/view)
├── hooks/           # Custom React hooks (useAuth, useFetch, etc.)
├── context/         # React Context providers and consumers
├── services/        # API calls and external service integrations
├── store/           # Global state (Zustand, Redux, or Jotai)
├── utils/           # Pure helper functions and constants
├── types/           # TypeScript types and interfaces
└── styles/          # Global styles, themes, CSS variables
```

## Component Architecture
Components MUST follow the folder-based pattern to ensure encapsulation and clean imports.

**Pattern:**
`src/components/[Category]/[ComponentName]/`
- `[ComponentName].tsx` (Main logic and JSX)
- `[ComponentName].styles.ts` (Component-specific styling)
- `index.ts` (Clean export: `export * from './[ComponentName]';`)

**Example:**
```typescript
// components/ui/Button/index.ts
export * from './Button';

// components/ui/Button/Button.tsx
import React from 'react';
import { StyledButton } from './Button.styles';
import { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
```

## Development Guidelines
1. **TypeScript:** Always define interfaces/types for props and state. Avoid `any`. Use `Record<string, unknown>` for objects.
2. **Functional Components:** Use arrow functions and React Hooks. No class components.
3. **Data Fetching:** Isolate API calls within `services/`. Use `hooks/` for stateful data orchestration.
4. **State Management:** Keep local state local. Use `context/` for dependency injection and `store/` for true global state.
5. **Formatting:** Run Prettier before finishing any task. Ensure ESLint rules are satisfied.
6. **Vite:** Utilize Vite's HMR and optimized build features. Use `@/` path aliases for clean imports starting from `src/`.

## Quality Mandate
- No unused imports or variables.
- Descriptive naming for variables and functions.
- Every component must be exported via an `index.ts` file in its folder.
- Follow "Surgical Updates": only modify what is necessary while maintaining the above structure.

## Error Handling
- **Error Boundaries:** Every major layout component in `src/components/layout/` must be wrapped in a React Error Boundary.
- **Graceful Degradation:** Use skeleton loaders or fallback UI for all asynchronous operations.
- **Zod Validation:** All external data (API responses, LocalStorage) must be validated using Zod schemas before entering the state.

## Performance Mandate
- **Memoization:** Use `useMemo` and `useCallback` only when expensive calculations are involved or to stabilize object references for dependency arrays.
- **Image Optimization:** All images must use `loading="lazy"` and specify `width` and `height` to prevent Layout Shift.
- **Code Splitting:** Route-level components in `src/pages/` must be loaded via `React.lazy()` to keep the initial bundle small.
