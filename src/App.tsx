/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { PYO } from './pages/PYO';
import { Events } from './pages/Events';
import { Story } from './pages/Story';
import { Environment } from './pages/Environment';
import { Contact } from './pages/Contact';
import { Internal } from './pages/Internal';
import React, { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
              <Route path="/pyo" element={<PageWrapper><PYO /></PageWrapper>} />
              <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
              <Route path="/story" element={<PageWrapper><Story /></PageWrapper>} />
              <Route path="/environment" element={<PageWrapper><Environment /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/internal" element={<PageWrapper><Internal /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  );
}
