/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { CMSProvider, useCMS } from './context/CMSContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ImpactPage } from './pages/ImpactPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { NewsPage } from './pages/NewsPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { DonatePage } from './pages/DonatePage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { ArrowUp, Heart } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { currentPage, setCurrentPage, t } = useCMS();

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'impact':
        return <ImpactPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'news':
        return <NewsPage />;
      case 'get-involved':
        return <GetInvolvedPage />;
      case 'donate':
        return <DonatePage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#D4AF37] selection:text-[#002147]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1" id="main-content">
        {renderCurrentPage()}
      </main>

      {/* Floating Quick Action Widget (When not on donate page) */}
      {currentPage !== 'donate' && (
        <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
          <button
            onClick={() => setCurrentPage('donate')}
            className="flex items-center gap-2 px-5 py-3 rounded-sm font-bold text-xs sm:text-sm text-[#002147] bg-[#D4AF37] hover:bg-white hover:text-[#002147] shadow-2xl shadow-black/30 border-2 border-[#002147] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Make a donation to Rising Hands Organisation"
          >
            <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
            <span>{t.common.donateNow}</span>
          </button>
        </aside>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <CMSProvider>
      <MainLayout />
    </CMSProvider>
  );
}
