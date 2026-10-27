import React from 'react';
import { useCMS } from '../context/CMSContext';
import { RHOLogo } from '../components/RHOLogo';
import {
  Heart,
  Users,
  GraduationCap,
  Sparkles,
  ArrowRight,
  TrendingUp,
  MapPin,
  Award,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Building2,
  Wrench,
  HeartHandshake
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    setCurrentPage,
    settings,
    pillars,
    impactStats,
    projects,
    news,
    setSelectedProjectSlug,
    setSelectedArticleSlug,
    language,
    t
  } = useCMS();

  // Helper icon lookup
  const getPillarIcon = (name: string) => {
    switch (name.toUpperCase()) {
      case 'EDUCATE':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'EMPOWER':
        return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'INSPIRE':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'TRANSFORM':
        return <HeartHandshake className="w-6 h-6 text-teal-600" />;
      default:
        return <Heart className="w-6 h-6 text-amber-600" />;
    }
  };

  const featuredProjects = projects.filter((p) => p.featured || p.status === 'active').slice(0, 3);
  const featuredNews = news.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION (Professional Polish Theme) */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Organization Category Eyebrow */}
              <span className="inline-block text-[#002147] font-bold text-xs sm:text-sm tracking-[.25em] uppercase">
                {t.hero.eyebrow}
              </span>

              {/* Main Headline with Official Tagline */}
              <div>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#002147] leading-[1.15] tracking-tight">
                  {t.hero.headlinePre} <br />
                  <span className="text-[#D4AF37]">{t.hero.headlineHighlight}</span>
                </h1>
                <p className="mt-3 text-xs sm:text-sm font-bold tracking-widest text-[#002147] uppercase">
                  RISING HANDS ORGANISATION (RHO)
                </p>
              </div>

              {/* Mission Summary */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.hero.summary}
              </p>

              {/* The 3 User-Mandated Clear Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setCurrentPage('donate')}
                  className="inline-flex items-center justify-center gap-2 bg-[#002147] text-white px-8 py-4 rounded-sm font-bold shadow-lg hover:shadow-xl hover:bg-[#001733] transition-all transform hover:-translate-y-0.5"
                  id="hero-support-mission-btn"
                >
                  <Heart className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  <span>{t.hero.supportBtn}</span>
                </button>

                <button
                  onClick={() => setCurrentPage('programs')}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#002147] text-[#002147] px-8 py-4 rounded-sm font-bold hover:bg-slate-100 transition-all hover:-translate-y-0.5"
                  id="hero-explore-programs-btn"
                >
                  <span>{t.hero.exploreBtn}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <button
                  onClick={() => setCurrentPage('get-involved')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm font-semibold text-sm sm:text-base text-slate-700 hover:text-[#002147] transition-all"
                  id="hero-get-involved-btn"
                >
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.hero.volunteerBtn}</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">Registered Tanzanian Non-Profit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium">Child Protection Safeguarding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#002147]" />
                  <span className="font-medium">Grassroots Community Action</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Official Crest and Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md p-8 sm:p-10 bg-white rounded-sm shadow-2xl border-2 border-slate-200 text-center">
                <div className="absolute inset-2 border-2 border-dashed border-[#D4AF37] opacity-40 pointer-events-none rounded-sm"></div>

                {/* Official Emblem */}
                <div className="flex justify-center mb-5 relative z-10">
                  <RHOLogo variant="crest" size="2xl" />
                </div>

                <div className="space-y-1.5 relative z-10">
                  <span className="inline-block text-[#D4AF37] font-bold text-xs tracking-widest uppercase">
                    Official Seal & Crest
                  </span>
                  <h2 className="text-2xl font-black text-[#002147] tracking-tight font-serif">
                    RISING HANDS
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-[1px] w-6 bg-[#D4AF37]" />
                    <span className="text-xs font-extrabold tracking-[0.25em] text-[#D4AF37] uppercase">
                      ORGANISATION
                    </span>
                    <span className="h-[1px] w-6 bg-[#D4AF37]" />
                  </div>
                  <div className="pt-2 pb-1 border-y border-[#D4AF37]/30 my-2">
                    <p className="text-[11px] font-bold text-[#002147] tracking-wider uppercase">
                      {t.tagline.quote}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {language === 'sw'
                      ? 'Shirika lisilo la kiserikali, lisilo la kifaida na lisilo la kisiasa lenye makao makuu nchini Tanzania.'
                      : 'A dedicated non-governmental, non-profit, non-political and community-focused organisation based in Tanzania.'}
                  </p>
                </div>

                {/* Core Pillars Ribbon with Official Icons */}
                <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-bold relative z-10">
                  <div className="py-2 px-3 rounded-sm bg-[#002147] text-white flex items-center justify-center gap-2 border border-[#002147]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>01. {t.pillars.educate}</span>
                  </div>
                  <div className="py-2 px-3 rounded-sm bg-[#002147] text-white flex items-center justify-center gap-2 border border-[#002147]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>02. {t.pillars.empower}</span>
                  </div>
                  <div className="py-2 px-3 rounded-sm bg-[#002147] text-white flex items-center justify-center gap-2 border border-[#002147]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>03. {t.pillars.inspire}</span>
                  </div>
                  <div className="py-2 px-3 rounded-sm bg-[#002147] text-white flex items-center justify-center gap-2 border border-[#002147]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>04. {t.pillars.transform}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR CORE AREAS BANNER */}
      <section className="bg-[#002147] py-6 border-b-2 border-[#D4AF37] text-white" id="core-areas-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Our Strategic Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                THE FOUR CORE PILLARS
              </h2>
            </div>
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center text-sm font-extrabold tracking-wider">
              <span className="text-[#D4AF37]">01. EDUCATE</span>
              <span className="text-white/40">•</span>
              <span className="text-[#D4AF37]">02. EMPOWER</span>
              <span className="text-white/40">•</span>
              <span className="text-[#D4AF37]">03. INSPIRE</span>
              <span className="text-white/40">•</span>
              <span className="text-[#D4AF37]">04. TRANSFORM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE AREAS DETAILED INTERACTIVE CARDS (Professional Polish Interactive Layout) */}
      <section className="py-16 sm:py-20 bg-white" id="core-areas-cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D4AF37] font-bold text-xs tracking-widest uppercase mb-2 inline-block">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
              Transforming Lives Across Four Integrated Areas
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Every initiative launched by Rising Hands Organisation aligns with our four founding pillars, creating systemic pathways for children and vulnerable families in Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-sm overflow-hidden shadow-sm">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="group p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-slate-200 bg-white hover:bg-[#002147] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#D4AF37] font-bold text-xs tracking-widest mb-2 uppercase">
                    0{idx + 1}. {pillar.name}
                  </div>
                  <h3 className="text-xl font-bold text-[#002147] group-hover:text-white transition-colors mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-white/80 transition-colors leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 group-hover:border-white/10 transition-colors">
                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-[#D4AF37] uppercase tracking-wider block">
                      Key Interventions:
                    </span>
                    {pillar.keyActivities.slice(0, 3).map((act, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 group-hover:text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                        <span className="truncate">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-white/10">
                  <button
                    onClick={() => setCurrentPage('programs')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002147] group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>View Pillar Programs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPACT SECTION WITH EDITABLE STATISTICS (Professional Polish Bar & Cards) */}
      <section className="bg-[#002147] border-y-4 border-[#D4AF37] py-14 text-white" id="impact-statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-1">
                Measurable Reach & Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Community Impact in Numbers
              </h2>
            </div>

            <button
              onClick={() => setCurrentPage('admin')}
              className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm bg-[#001733] text-[#D4AF37] hover:bg-white hover:text-[#002147] border border-[#D4AF37]/50 transition-colors shrink-0"
              title="Administrators can update these figures in the CMS"
            >
              CMS: Edit Impact Statistics
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#001733] border border-white/10 p-6 rounded-sm flex flex-col justify-between hover:border-[#D4AF37] transition-colors"
              >
                <div>
                  <span className="text-[#D4AF37] text-[11px] uppercase font-bold tracking-widest block mb-2">
                    {stat.category}
                  </span>
                  <div className="text-white font-black text-3xl sm:text-4xl leading-none tracking-tight mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[10px] uppercase font-medium text-slate-400 flex justify-between">
                  <span>Verified Metric</span>
                  <span>{stat.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TARGET BENEFICIARIES SECTION */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
              Focus Populations
            </span>
            <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
              Serving Those Who Need Hope The Most
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our interventions prioritize vulnerable populations across urban and peri-urban Tanzanian communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Children', desc: 'Primary & early learners', icon: '👦👧' },
              { label: 'Youth', desc: 'Aged 15–24 job seekers', icon: '🧑‍🎓' },
              { label: 'Women', desc: 'Mothers & small merchants', icon: '👩‍👧' },
              { label: 'Vulnerable Families', desc: 'Low-income households', icon: '🏡' },
              { label: 'Persons with Disabilities', desc: 'Inclusive access & aids', icon: '♿' },
              { label: 'Disadvantaged Students', desc: 'Scholars needing aid', icon: '📚' }
            ].map((beneficiary, i) => (
              <div
                key={i}
                className="bg-white rounded-sm p-4 border border-slate-200 text-center hover:border-[#D4AF37] hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-2">{beneficiary.icon}</div>
                <h3 className="text-sm font-bold text-[#002147]">{beneficiary.label}</h3>
                <p className="text-[11px] text-slate-500 mt-1">{beneficiary.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS SECTION */}
      <section className="py-16 sm:py-20 bg-white" id="featured-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                Action On The Ground
              </span>
              <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
                Featured Projects & Initiatives
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('projects')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#002147] hover:text-[#D4AF37] transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const pct = Math.min(
                100,
                Math.round((project.raisedAmountPlaceholder / project.targetBudgetPlaceholder) * 100)
              );
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-sm text-[11px] font-extrabold uppercase tracking-wider bg-[#002147] text-[#D4AF37] border border-[#D4AF37]/30">
                        {project.pillar}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-sm text-[11px] font-bold capitalize bg-emerald-50 text-emerald-800 border border-emerald-300">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#002147] mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Funding / Goal Progress */}
                      <div className="space-y-1.5 mb-4">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-600">Goal Target:</span>
                          <span className="text-[#002147] font-bold">
                            ${project.targetBudgetPlaceholder.toLocaleString()} {project.currency}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                          <div
                            className="h-full bg-[#D4AF37]"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-500">
                          <span>${project.raisedAmountPlaceholder.toLocaleString()} pledged</span>
                          <span className="font-bold text-[#002147]">{pct}% funded</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          setSelectedProjectSlug(project.slug);
                          setCurrentPage('projects');
                        }}
                        className="text-xs font-bold text-[#002147] hover:text-[#D4AF37] transition-colors"
                      >
                        Project Details →
                      </button>
                      <button
                        onClick={() => setCurrentPage('donate')}
                        className="px-3.5 py-1.5 rounded-sm text-xs font-bold text-[#002147] bg-[#D4AF37] hover:bg-[#002147] hover:text-white transition-colors"
                      >
                        Support
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SUCCESS STORIES / FIELD VOICES */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200" id="success-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
              Voices of Change
            </span>
            <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
              Stories from the Community
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Read how education, vocational empowerment, and social support transform daily realities in Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-sm border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#002147] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-bold text-[#002147] bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200 text-[11px] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3 text-[#D4AF37]" />
                      {item.publishDate}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#002147] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{item.readTime}</span>
                  <button
                    onClick={() => {
                      setSelectedArticleSlug(item.slug);
                      setCurrentPage('news');
                    }}
                    className="text-xs font-bold text-[#002147] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="py-16 bg-[#002147] border-y-4 border-[#D4AF37] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block">
              Building Brighter Future Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Make a Lasting Difference in Tanzania?
            </h2>
            <p className="text-base text-slate-200 leading-relaxed">
              Every child sponsored, young person trained, and vulnerable family assisted brings us closer to a dignified society. Partner with Rising Hands Organisation today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setCurrentPage('donate')}
                className="px-8 py-4 rounded-sm font-bold text-sm text-[#002147] bg-[#D4AF37] hover:bg-white shadow-xl transition-all"
              >
                DONATE NOW
              </button>
              <button
                onClick={() => setCurrentPage('get-involved')}
                className="px-8 py-4 rounded-sm font-bold text-sm text-white bg-transparent hover:bg-white/10 border-2 border-white transition-all"
              >
                BECOME A VOLUNTEER OR PARTNER
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-6 py-4 rounded-sm font-bold text-sm text-slate-200 hover:text-[#D4AF37] transition-all"
              >
                Contact Our Team →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
