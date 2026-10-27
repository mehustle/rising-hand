import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { CorePillarId } from '../types';
import {
  GraduationCap,
  Wrench,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Heart,
  Users,
  Target,
  BookOpen,
  Laptop,
  Briefcase,
  Compass
} from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const { pillars, setCurrentPage } = useCMS();
  const [activePillarTab, setActivePillarTab] = useState<CorePillarId>('educate');

  const selectedPillar = pillars.find((p) => p.id === activePillarTab) || pillars[0];

  const getTabIcon = (id: CorePillarId) => {
    switch (id) {
      case 'educate':
        return <GraduationCap className="w-4 h-4" />;
      case 'empower':
        return <Wrench className="w-4 h-4" />;
      case 'inspire':
        return <Sparkles className="w-4 h-4" />;
      case 'transform':
        return <HeartHandshake className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner (Professional Polish Theme) */}
      <section className="bg-[#002147] text-white py-16 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] bg-[#001733] px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/30">
              Community Action
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Our Strategic Programs
            </h1>
            <p className="mt-3 text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              EDUCATE • EMPOWER • INSPIRE • TRANSFORM
            </p>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              Rising Hands Organisation operates across four integrated pillars designed to support individuals and communities from early childhood learning through youth self-employment and sustainable community welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Pillar Selector Tabs */}
      <section className="sticky top-[73px] z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto py-2.5 gap-2 sm:gap-4 no-scrollbar">
            {pillars.map((pillar) => {
              const isActive = activePillarTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarTab(pillar.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#002147] text-[#D4AF37] border-b-2 border-[#D4AF37] shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#002147]'
                  }`}
                >
                  {getTabIcon(pillar.id)}
                  <span>{pillar.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Pillar Feature Showcase */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Stats */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-sm overflow-hidden shadow-xl border-2 border-slate-200 aspect-4/3 bg-slate-100">
                <img
                  src={selectedPillar.imageUrl}
                  alt={selectedPillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-sm text-xs font-black uppercase tracking-widest bg-[#D4AF37] text-[#002147]">
                    {selectedPillar.name} Focus
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-white">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 rounded-sm bg-slate-50 border-l-4 border-[#D4AF37] border-y border-r border-slate-200 text-slate-900">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#002147] mb-1">
                  <Target className="w-4 h-4 text-[#D4AF37]" />
                  <span>Strategic Milestone</span>
                </div>
                <p className="text-sm font-bold text-[#002147]">{selectedPillar.metricsTarget}</p>
                <p className="text-xs text-slate-600 mt-1">
                  Continuously measured across community wards in Tanzania.
                </p>
              </div>
            </div>

            {/* Right Detailed Narrative & Activities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#002147] px-3 py-1 rounded-sm">
                  Pillar Blueprint
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] tracking-tight mt-3">
                  {selectedPillar.title}
                </h2>
                <p className="text-base text-slate-700 font-semibold mt-1 italic">
                  “{selectedPillar.tagline}”
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedPillar.description}
              </p>

              {/* Detailed Scope Points */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#002147]">
                  Comprehensive Activities & Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPillar.detailedScope.map((scope, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-sm bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5 hover:border-[#D4AF37] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Groups */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#002147] mb-2">
                  Target Beneficiary Groups:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPillar.targetGroups.map((group, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-sm text-xs font-bold bg-white text-[#002147] border border-slate-200"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentPage('donate')}
                  className="px-6 py-3.5 rounded-sm font-bold text-xs sm:text-sm text-[#002147] bg-[#D4AF37] hover:bg-[#002147] hover:text-white transition-all flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>Sponsor {selectedPillar.name} Projects</span>
                </button>
                <button
                  onClick={() => setCurrentPage('get-involved')}
                  className="px-6 py-3.5 rounded-sm font-bold text-xs sm:text-sm text-white bg-[#002147] hover:bg-[#001733] transition-all flex items-center gap-2"
                >
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>Volunteer In This Area</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 4 Pillars In-Depth Grid Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
              Holistic Community Model
            </span>
            <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
              The Four Pillars In Detail
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore how each pillar operates on the ground in Tanzanian wards and villages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-sm p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#D4AF37] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-sm text-xs font-extrabold uppercase tracking-widest bg-[#002147] text-[#D4AF37] border border-[#D4AF37]/30">
                      PILLAR: {pillar.name}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {pillar.metricsTarget}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#002147] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-semibold mb-3">
                    “{pillar.tagline}”
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#002147] uppercase tracking-wider block">
                      Core Interventions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {pillar.detailedScope.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setActivePillarTab(pillar.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#002147] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                  >
                    <span>Highlight Focus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                  <button
                    onClick={() => setCurrentPage('donate')}
                    className="px-4 py-2 rounded-sm text-xs font-bold bg-[#002147] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#002147] transition-colors"
                  >
                    Support {pillar.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Partnership Invitation */}
      <section className="py-14 bg-[#002147] border-t-4 border-[#D4AF37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block">
              Collaborative Impact
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Interested in Partnering on a Specific Program?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We welcome collaboration with donor agencies, educational institutions, private enterprises, and community groups to scale our programs.
            </p>
          </div>
          <div className="shrink-0 flex gap-3">
            <button
              onClick={() => setCurrentPage('get-involved')}
              className="px-6 py-3.5 rounded-sm text-xs sm:text-sm font-bold bg-[#D4AF37] text-[#002147] hover:bg-white transition-colors shadow-lg"
            >
              Become a Partner
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-3.5 rounded-sm text-xs sm:text-sm font-bold bg-transparent text-white hover:bg-white/10 border-2 border-white transition-colors"
            >
              Contact Program Officers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
