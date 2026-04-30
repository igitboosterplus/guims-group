import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage      from './pages/Home';
import EntitiesPage  from './pages/Entities';
import ValuesPage    from './pages/Values';
import ResourcesPage from './pages/Resources';
import ContactPage   from './pages/Contact';

/* Scroll window to top on every route change */
const RouteScrollReset = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
  </>
);

const App = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;
