import React from 'react';
import { useCMS } from '../context/CMSContext';
import {
  Award,
  TrendingUp,
  MapPin,
  GraduationCap,
  Users,
  ShieldCheck,
  Download,
  CheckCircle2,
  FileText,
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const ImpactPage: React.FC = () => {
  const { impactStats, setCurrentPage } = useCMS();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner (Professional Polish Theme) */}
      <section className="bg-[#002147] text-white py-16 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] bg-[#001733] px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/30">
              Accountability & Results
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Our Community Impact
            </h1>
            <p className="mt-3 text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              “BUILDING BRIGHTER FUTURE TOGETHER”
            </p>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              Every statistic represents real lives transformed—children attending school, youth starting small enterprises, and vulnerable families receiving critical social relief in Tanzania.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers Grid (Live & Editable in CMS) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                Core Metrics
              </span>
              <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
                Key Performance Indicators
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Figures represent active program monitoring logs and can be edited in the administrative portal.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('admin')}
              className="text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-sm bg-[#002147] hover:bg-[#001733] text-white transition-colors"
            >
              CMS: Edit Statistics
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-sm border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-[#D4AF37]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#002147] bg-slate-100 px-2.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wider">
                    {stat.category}
                  </span>
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="text-4xl font-extrabold text-[#002147] tracking-tight mb-2">
                  {stat.number}
                </div>
                <h3 className="text-base font-bold text-[#002147] mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {stat.description}
                </p>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex justify-between">
                  <span>Tracked Indicator</span>
                  <span>Updated: {stat.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Community Reach in Tanzania */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
              Geographic Presence
            </span>
            <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
              Grassroots Reach Across Tanzania
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              RHO engages directly at the ward and village level in close collaboration with local government social welfare officers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                region: 'Dar es Salaam Region',
                wards: 'Kinondoni, Ilala, Temeke, Kigamboni, Ubungo',
                focus: 'Education kits, youth digital hubs, vocational workshops, vulnerable families food support',
                badge: 'Primary Base'
              },
              {
                region: 'Pwani Region & Bagamoyo',
                wards: 'Bagamoyo peri-urban wards, Kibaha rural clusters',
                focus: 'School clean water filtration points, youth sports cups, tree planting conservation',
                badge: 'WASH & Community'
              },
              {
                region: 'Expansion Zones (Upcoming)',
                wards: 'Dodoma Municipal & Arusha peri-urban communities',
                focus: 'Secondary scholarship linkages and digital learning resource distribution',
                badge: 'Phased Expansion'
              }
            ].map((loc, i) => (
              <div
                key={i}
                className="bg-white rounded-sm p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D4AF37] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#002147] bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200">
                      {loc.badge}
                    </span>
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#002147] mb-1">{loc.region}</h3>
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    Coverage: {loc.wards}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-[#002147]">Interventions:</strong> {loc.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Transparency Standards Banner */}
      <section className="py-14 bg-[#002147] border-t-4 border-[#D4AF37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#001733] px-3 py-1 rounded-sm border border-[#D4AF37]/30">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Verification Policy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Transparent Data & Ethical Impact Reporting
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rising Hands Organisation adheres strictly to ethical non-profit communication. In line with official guidelines, financial statements, registration filings, and quantitative claims are maintained with transparent placeholders until formal verification is complete.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full py-3.5 px-5 rounded-sm text-xs font-bold text-[#002147] bg-[#D4AF37] hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Verification Dossier</span>
              </button>
              <button
                onClick={() => setCurrentPage('donate')}
                className="w-full py-3.5 px-5 rounded-sm text-xs font-bold text-white bg-transparent hover:bg-white/10 border-2 border-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Support Future Impact</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
