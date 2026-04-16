import { lazy, Suspense, type FC } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const WizardPage = lazy(() => import('./pages/WizardPage').then((m) => ({ default: m.WizardPage })))
const WizardBulkPage = lazy(() =>
  import('./pages/WizardBulkPage').then((m) => ({ default: m.WizardBulkPage })),
)
const WizardAcquisitionPage = lazy(() =>
  import('./pages/WizardAcquisitionPage').then((m) => ({ default: m.WizardAcquisitionPage })),
)
const AdminPage = lazy(() => import('./pages/AdminPage').then((m) => ({ default: m.AdminPage })))

const App: FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wizard" element={<WizardPage />} />
        <Route path="/wizard-bulk" element={<WizardBulkPage />} />
        <Route path="/wizard-acquisition" element={<WizardAcquisitionPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
