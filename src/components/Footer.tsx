import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { PageId } from '../types';
import { getNavLinks } from '../translations';
import { RHOLogo } from './RHOLogo';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, settings, pillars, language, t } = useCMS();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 6000);
  };

  const navLinks: { id: PageId; label: string }[] = [
    ...getNavLinks(language),
    { id: 'donate', label: t.common.donateNow }
  ];

  return (
    <footer className="bg-[#002147] text-slate-300 pt-16 pb-12 border-t-4 border-[#D4AF37]" id="site-footer">
      {/* Top Pre-Footer Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden rounded-sm bg-[#001733] border-2 border-[#D4AF37]/30 p-8 sm:p-10 shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 mb-3">
                <Heart className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                Join Hands With Us Today
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Together, We Build Brighter Futures for Tanzanian Youth & Communities
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether through volunteer service, project sponsorship, or charitable donations, your partnership empowers vulnerable children, women, and families to achieve self-reliance.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <button
                onClick={() => setCurrentPage('donate')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm text-[#002147] bg-[#D4AF37] hover:bg-white transition-all shadow-lg"
                id="footer-donate-button"
              >
                <Heart className="w-4 h-4 fill-[#002147] text-[#002147]" />
                <span>SUPPORT OUR MISSION</span>
              </button>
              <button
                onClick={() => setCurrentPage('get-involved')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm text-white bg-transparent hover:bg-white/10 border-2 border-white/30 hover:border-white transition-all"
              >
                <span>GET INVOLVED</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <RHOLogo
              variant="white"
              size="md"
              showTagline={true}
              tagline={t.tagline.main}
              subtitle={t.tagline.sub}
            />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              <strong className="text-white font-semibold">{settings.name} (RHO)</strong> is a non-governmental, non-profit, non-political and community-focused organisation based in Tanzania.
            </p>
            <div className="p-3 bg-[#001733] rounded-sm border border-white/10 text-xs text-slate-300 space-y-1">
              <p className="font-bold text-[#D4AF37] uppercase tracking-wider text-[11px]">Our Vision:</p>
              <p className="italic text-slate-200">{settings.vision}</p>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2.5">
                Connect With RHO
              </p>
              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href={settings.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-sm bg-[#001733] border border-white/10 hover:bg-[#D4AF37] hover:text-[#002147] transition-colors text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={settings.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-sm bg-[#001733] border border-white/10 hover:bg-[#D4AF37] hover:text-[#002147] transition-colors text-white"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={settings.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-sm bg-[#001733] border border-white/10 hover:bg-[#D4AF37] hover:text-[#002147] transition-colors text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={settings.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-sm bg-[#001733] border border-white/10 hover:bg-[#D4AF37] hover:text-[#002147] transition-colors text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={settings.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-sm bg-[#001733] border border-white/10 hover:bg-[#D4AF37] hover:text-[#002147] transition-colors text-white"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Core Pillars
            </h4>
            <ul className="space-y-2 text-sm">
              {pillars.map((pillar) => (
                <li key={pillar.id}>
                  <button
                    onClick={() => setCurrentPage('programs')}
                    className="text-left text-slate-300 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                    <span>{pillar.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => setCurrentPage('impact')}
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>View Verified Impact</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-sm">
              {navLinks.slice(0, 7).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-left text-slate-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Placeholders & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Contact & Location
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {settings.officialAddressPlaceholder}, {settings.cityCountry}
                  <span className="block text-[11px] text-slate-400">(Editable Placeholder in CMS)</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${settings.primaryEmailPlaceholder}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {settings.primaryEmailPlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{settings.phonePlaceholder}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{settings.officeHours}</span>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-200 mb-1.5">
                RHO Community Newsletter
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 rounded-sm bg-[#001733] border border-white/20 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37]"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-sm bg-[#D4AF37] hover:bg-white text-[#002147] text-xs font-bold shrink-0 transition-colors"
                >
                  JOIN
                </button>
              </form>
              {subscribed && (
                <p className="mt-1.5 text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing to RHO updates!</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Structured Payment & Verification Badges */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-bold text-[#D4AF37] uppercase tracking-wider text-[11px]">Supported Giving Channels:</span>
            <span className="px-2.5 py-1 rounded-sm bg-[#001733] text-slate-200 border border-white/10 font-mono text-[11px]">
              Vodacom M-Pesa
            </span>
            <span className="px-2.5 py-1 rounded-sm bg-[#001733] text-slate-200 border border-white/10 font-mono text-[11px]">
              Tigo Pesa
            </span>
            <span className="px-2.5 py-1 rounded-sm bg-[#001733] text-slate-200 border border-white/10 font-mono text-[11px]">
              Airtel Money
            </span>
            <span className="px-2.5 py-1 rounded-sm bg-[#001733] text-slate-200 border border-white/10 font-mono text-[11px]">
              CRDB / NMB Wire Transfer
            </span>
            <span className="px-2.5 py-1 rounded-sm bg-[#001733] text-slate-200 border border-white/10 font-mono text-[11px]">
              Visa / Mastercard Staging
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict Child Safeguarding & Financial Transparency Standards</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} Rising Hands Organisation (RHO). All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-300">
              Tagline: <strong className="text-[#D4AF37]">“BUILDING BRIGHTER FUTURE TOGETHER”</strong> • {settings.registrationNumberPlaceholder}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              onClick={() => setCurrentPage('about')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Safeguarding & Governance
            </button>
            <span>•</span>
            <button
              onClick={() => setCurrentPage('contact')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Verify Information
            </button>
            <span>•</span>
            <button
              onClick={() => setCurrentPage('admin')}
              className="inline-flex items-center gap-1 text-[#D4AF37] hover:text-white transition-colors font-semibold"
            >
              <Lock className="w-3 h-3" />
              <span>Admin / CMS Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
