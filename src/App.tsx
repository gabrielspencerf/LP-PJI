import {Route, Routes} from 'react-router-dom';
import {ScrollToTop} from '@/components/routing/ScrollToTop.tsx';
import {LandingPage} from '@/pages/LandingPage.tsx';
import {PrivacyPage} from '@/pages/PrivacyPage.tsx';
import {TermsPage} from '@/pages/TermsPage.tsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
      </Routes>
    </>
  );
}
