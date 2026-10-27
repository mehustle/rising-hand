import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { CorePillarId, Project, ProjectStatus } from '../types';
import {
  MapPin,
  Target,
  Calendar,
  DollarSign,
  Heart,
  Search,
  Filter,
  CheckCircle2,
  X,
  ArrowRight,
  TrendingUp,
  Plus
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { projects, selectedProjectSlug, setSelectedProjectSlug, setCurrentPage } = useCMS();
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [pillarFilter, setPillarFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected project for modal detail view
  const modalProject = selectedProjectSlug
    ? projects.find((p) => p.slug === selectedProjectSlug) || null
    : null;

  const filteredProjects = projects.filter((proj) => {
    const matchesStatus = statusFilter === 'all' || proj.status === statusFilter;
    const matchesPillar = pillarFilter === 'all' || proj.pillar === pillarFilter;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesPillar && matchesSearch;
  });

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
              Projects & Initiatives
            </h1>
            <p className="mt-3 text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              “BUILDING BRIGHTER FUTURE TOGETHER”
            </p>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              Explore our grassroots projects across Tanzania delivering school supplies, youth vocational toolkits, clean water installations, and women micro-enterprise support.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Toolbar */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D4AF37] text-slate-900"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-3 flex-wrap w-full md:w-auto justify-start md:justify-end">
              {/* Status Filter */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-sm text-xs">
                {['all', 'active', 'upcoming', 'completed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-sm capitalize text-xs font-bold transition-colors ${
                      statusFilter === status
                        ? 'bg-[#002147] text-[#D4AF37] shadow-xs'
                        : 'text-slate-600 hover:text-[#002147]'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              {/* Pillar Filter */}
              <select
                value={pillarFilter}
                onChange={(e) => setPillarFilter(e.target.value)}
                aria-label="Filter projects by pillar"
                className="px-3 py-2 rounded-sm text-xs bg-slate-100 border border-slate-200 font-bold text-[#002147] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <option value="all">All Pillars</option>
                <option value="educate">Educate</option>
                <option value="empower">Empower</option>
                <option value="inspire">Inspire</option>
                <option value="transform">Transform</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-sm border border-slate-200 p-8">
              <p className="text-base text-slate-600 font-medium">No projects match the selected criteria.</p>
              <button
                onClick={() => {
                  setStatusFilter('all');
                  setPillarFilter('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-[#002147] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const percent = Math.min(
                  100,
                  Math.round((project.raisedAmountPlaceholder / project.targetBudgetPlaceholder) * 100)
                );
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Header */}
                      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3.5 left-3.5">
                          <span className="px-3 py-1 rounded-sm text-xs font-black uppercase tracking-wider bg-[#002147] text-[#D4AF37] border border-[#D4AF37]/30">
                            {project.pillar}
                          </span>
                        </div>
                        <div className="absolute top-3.5 right-3.5">
                          <span
                            className={`px-3 py-1 rounded-sm text-xs font-bold capitalize ${
                              project.status === 'active'
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                                : project.status === 'upcoming'
                                ? 'bg-sky-50 text-sky-800 border border-sky-300'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>

                        <h3 className="text-lg font-bold text-[#002147] mb-2 line-clamp-2">
                          {project.title}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                          {project.summary}
                        </p>

                        <div className="p-3 bg-slate-50 rounded-sm mb-4 text-xs text-slate-600 border border-slate-200">
                          <span className="font-bold text-[#002147] block mb-0.5">Beneficiaries:</span>
                          <span className="line-clamp-2">{project.targetBeneficiaries}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-500">Funded / Goal:</span>
                            <span className="text-[#002147] font-bold">
                              ${project.raisedAmountPlaceholder.toLocaleString()} / $
                              {project.targetBudgetPlaceholder.toLocaleString()}
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                            <div
                              className="h-full bg-[#D4AF37]"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-[11px] text-slate-500">
                            <span>{percent}% of target pledged</span>
                            <span className="font-semibold text-[#002147]">{project.status === 'active' ? 'Campaign active' : 'Scheduled'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-4">
                      <button
                        onClick={() => setSelectedProjectSlug(project.slug)}
                        className="text-xs font-bold text-[#002147] hover:text-[#D4AF37] transition-colors"
                      >
                        Learn More →
                      </button>
                      <button
                        onClick={() => setCurrentPage('donate')}
                        className="px-4 py-2 rounded-sm text-xs font-bold bg-[#D4AF37] hover:bg-[#002147] hover:text-white text-[#002147] transition-colors"
                      >
                        Sponsor
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 bg-[#002147]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-slate-200">
            {/* Modal Header Image */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-200">
              <img
                src={modalProject.imageUrl}
                alt={modalProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProjectSlug(null)}
                className="absolute top-4 right-4 p-2 rounded-sm bg-[#002147]/90 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#002147]">
                  {modalProject.pillar}
                </span>
                <span className="px-3 py-1 rounded-sm text-xs font-bold capitalize bg-[#002147] text-white border border-[#D4AF37]/30">
                  Status: {modalProject.status}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>{modalProject.location}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002147]">
                  {modalProject.title}
                </h2>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#002147] mb-1.5">
                  About This Initiative
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {modalProject.fullDescription}
                </p>
              </div>

              {/* Target Beneficiaries */}
              <div className="p-4 rounded-sm bg-slate-50 border-l-4 border-[#D4AF37] border-y border-r border-slate-200 text-slate-900 text-xs sm:text-sm">
                <strong className="block font-bold text-[#002147] mb-1">Target Community & Beneficiaries:</strong>
                <p>{modalProject.targetBeneficiaries}</p>
              </div>

              {/* Key Anticipated Outcomes */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#002147] mb-2.5">
                  Expected Impact Outcomes:
                </h3>
                <div className="space-y-2">
                  {modalProject.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funding Overview */}
              <div className="p-5 rounded-sm bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-[#002147]">
                  <span>Project Budget Target:</span>
                  <span>${modalProject.targetBudgetPlaceholder.toLocaleString()} {modalProject.currency}</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#D4AF37]"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.round((modalProject.raisedAmountPlaceholder / modalProject.targetBudgetPlaceholder) * 100)
                      )}%`
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>${modalProject.raisedAmountPlaceholder.toLocaleString()} currently pledged</span>
                  <span className="font-bold text-[#002147]">
                    {Math.round((modalProject.raisedAmountPlaceholder / modalProject.targetBudgetPlaceholder) * 100)}% of goal
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200">
                <button
                  onClick={() => setSelectedProjectSlug(null)}
                  className="px-5 py-2.5 rounded-sm text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProjectSlug(null);
                    setCurrentPage('donate');
                  }}
                  className="px-6 py-2.5 rounded-sm text-xs font-bold bg-[#D4AF37] hover:bg-[#002147] hover:text-white text-[#002147] shadow-md flex items-center gap-2 transition-colors"
                >
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>Sponsor This Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
