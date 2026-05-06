import { Route, Routes } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LogoDefs } from '@/logos/LogoDefs'
import { Options } from '@/pages/Options'
import { OnePager } from '@/pages/OnePager'
import { LogoVariations } from '@/pages/LogoVariations'
import { WordmarkPage } from '@/pages/WordmarkPage'
import { ApplyPage } from '@/pages/ApplyPage'

export function App() {
  return (
    <>
      <LogoDefs />
      <Header />
      <Routes>
        <Route path="/" element={<Options />} />
        <Route path="/atomic" element={<OnePager />} />
        <Route path="/logos" element={<LogoVariations />} />
        <Route path="/wordmark" element={<WordmarkPage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
      <Footer />
    </>
  )
}
