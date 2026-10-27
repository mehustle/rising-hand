import React, { useState, useEffect } from 'react';
import { useCMS } from '../context/CMSContext';
import { PageId } from '../types';
import { getNavLinks } from '../translations';
import { RHOLogo } from './RHOLogo';
import {
  Menu,
  X,
  Heart,
  Phone,
  Mail,
  Lock,
  ChevronRight,
  ShieldCheck,
  Globe
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPage, setCurrentPage, settings, isAdminLoggedIn, language, setLanguage, t } = useCMS();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = getNavLinks(language);

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#001733] text-slate-300 text-xs py-2 px-4 border-b border-[#002147]/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[#D4AF37] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.topBar.orgType}
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <a
              href={`mailto:${settings.primaryEmailPlaceholder}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#D4AF37] text-slate-300 transition-colors"
              title="Official Organization Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="truncate max-w-[200px]">{settings.primaryEmailPlaceholder}</span>
            </a>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{settings.phonePlaceholder}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden lg:inline-flex items-center gap-1 text-[11px] text-slate-300">
              <Globe className="w-3 h-3 text-[#D4AF37]" />
              <span>{t.topBar.location}</span>
            </span>

            {/* Quick Language Toggle in Utility Bar */}
            <div
              className="hidden sm:flex items-center bg-[#002855] rounded-sm p-0.5 border border-[#D4AF37]/40 text-[11px]"
              role="group"
              aria-label="Chagua Lugha / Language Switcher"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#D4AF37] text-[#002147] font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Switch to English"
              >
                <span>🇬🇧 English</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('sw')}
                className={`px-2 py-0.5 rounded-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                  language === 'sw'
                    ? 'bg-[#D4AF37] text-[#002147] font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Badili kwenda Kiswahili (Swahili)"
              >
                <span>🇹🇿 Kiswahili</span>
              </button>
            </div>

            <button
              onClick={() => handleNavClick('admin')}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[11px] font-semibold transition-all ${
                isAdminLoggedIn
                  ? 'bg-emerald-900/90 text-emerald-200 border border-emerald-500'
                  : 'bg-[#002855] text-slate-200 hover:text-white hover:bg-[#003366] border border-[#D4AF37]/30'
              }`}
              title="Access NGO Management Portal"
            >
              <Lock className="w-3 h-3 text-[#D4AF37]" />
              <span>{isAdminLoggedIn ? t.nav.adminActive : t.nav.staffPortal}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-[#002147] border-b-4 border-[#D4AF37] transition-all duration-300 ${
          isScrolled ? 'py-2.5 shadow-xl' : 'py-3.5 shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded p-1"
            aria-label="Rising Hands Organisation Home"
          >
            <RHOLogo
              variant="white"
              size="md"
              showTagline={true}
              tagline={t.tagline.main}
              subtitle={t.tagline.sub}
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-sm text-sm font-medium transition-colors duration-150 relative ${
                    isActive
                      ? 'text-[#D4AF37] font-bold bg-white/10'
                      : 'text-white/90 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4AF37]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls: Language Toggle & Donate CTA & Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Prominent Language Switcher (English / Kiswahili Swahili) */}
            <div
              className="flex items-center bg-[#001733] border border-[#D4AF37]/80 rounded-sm p-0.5 sm:p-1 shadow-inner"
              role="group"
              aria-label="Chagua Lugha / Language Selector (English / Swahili)"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37] ml-1 mr-1 hidden md:inline-block shrink-0" />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-2.5 py-1 rounded-xs text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#D4AF37] text-[#002147] shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={language === 'en'}
                title="Switch to English"
                id="lang-toggle-en"
              >
                <span className="hidden lg:inline text-[11px]">🇬🇧</span>
                <span className="hidden sm:inline">English</span>
                <span className="sm:hidden">EN</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('sw')}
                className={`px-2 sm:px-2.5 py-1 rounded-xs text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                  language === 'sw'
                    ? 'bg-[#D4AF37] text-[#002147] shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={language === 'sw'}
                title="Badili kwenda Kiswahili (Swahili)"
                id="lang-toggle-sw"
              >
                <span className="hidden lg:inline text-[11px]">🇹🇿</span>
                <span className="hidden sm:inline">Swahili</span>
                <span className="sm:hidden">SW</span>
              </button>
            </div>

            {/* Donate Button */}
            <button
              onClick={() => handleNavClick('donate')}
              className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-sm font-bold text-xs sm:text-sm text-[#002147] bg-[#D4AF37] hover:bg-white transition-colors duration-200 shadow-md hover:shadow-lg"
              id="navbar-donate-cta"
            >
              <Heart className="w-4 h-4 fill-[#002147] text-[#002147]" />
              <span>{t.nav.donate}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-sm text-white hover:text-[#D4AF37] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[105px] bottom-0 z-40 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#002147] border-b-4 border-[#D4AF37] shadow-2xl p-5 sm:p-6 max-h-[85vh] overflow-y-auto text-white">
            {/* Mobile Language Switcher Card */}
            <div className="p-3 bg-[#001733] rounded-sm border border-[#D4AF37]/50 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#D4AF37] flex items-center gap-1.5 uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t.nav.selectLanguage}</span>
                </span>
                <span className="text-[11px] text-slate-300 font-medium">
                  {language === 'sw' ? '🇹🇿 Kiswahili' : '🇬🇧 English'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`py-2 px-3 rounded-sm text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    language === 'en'
                      ? 'bg-[#D4AF37] text-[#002147] shadow-md ring-2 ring-[#D4AF37]'
                      : 'bg-[#002855] text-slate-200 border border-white/10 hover:bg-[#003366]'
                  }`}
                  id="mobile-lang-en"
                >
                  <span>🇬🇧 English</span>
                  {language === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-[#002147]" />}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('sw')}
                  className={`py-2 px-3 rounded-sm text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    language === 'sw'
                      ? 'bg-[#D4AF37] text-[#002147] shadow-md ring-2 ring-[#D4AF37]'
                      : 'bg-[#002855] text-slate-200 border border-white/10 hover:bg-[#003366]'
                  }`}
                  id="mobile-lang-sw"
                >
                  <span>🇹🇿 Kiswahili</span>
                  {language === 'sw' && <span className="w-1.5 h-1.5 rounded-full bg-[#002147]" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-1.5 pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3">
                {t.nav.menu}
              </span>
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-sm text-left text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-white/10 text-[#D4AF37] font-bold border-l-4 border-[#D4AF37]'
                        : 'text-white/90 hover:bg-white/5 hover:text-[#D4AF37]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#D4AF37]/60" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('donate')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm font-bold text-xs sm:text-sm text-[#002147] bg-[#D4AF37] hover:bg-white transition-colors shadow-md"
              >
                <Heart className="w-4 h-4 fill-[#002147] text-[#002147]" />
                <span>{t.nav.supportMission}</span>
              </button>

              <button
                onClick={() => handleNavClick('admin')}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-sm text-xs font-semibold text-white/90 bg-[#001733] hover:bg-[#002855] border border-white/10"
              >
                <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.nav.staffPortal}</span>
              </button>

              <div className="mt-2 p-3 bg-[#001733] rounded-sm text-[11px] text-slate-300 space-y-1 border border-white/10">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.common.verifiedNGO}</span>
                </div>
                <p className="text-[#D4AF37] font-semibold italic">{t.tagline.quote}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

