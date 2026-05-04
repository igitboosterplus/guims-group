import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage      from './pages/Home';
import EntitiesPage  from './pages/Entities';
import ValuesPage    from './pages/Values';
import ResourcesPage from './pages/Resources';
import ContactPage   from './pages/Contact';

/* Scroll window to top or to hash element on every route change */
const RouteScrollReset = () => {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure content is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);
  return null;
};

const AppLayout = () => (
  <>
    <RouteScrollReset />
    <Header />
    <main className="page-main">
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/entites"   element={<EntitiesPage />} />
        <Route path="/valeurs"   element={<ValuesPage />} />
        <Route path="/ressources" element={<ResourcesPage />} />
        <Route path="/contact"   element={<ContactPage />} />
        {/* Fallback – redirect unknown paths to home */}
        <Route path="*"          element={<HomePage />} />
      </Routes>
    </main>
    <Footer />
    <ScrollToTop />
    <WhatsAppButton />
  </>
);

const App = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;
