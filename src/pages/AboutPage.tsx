import React from 'react';
import { useCMS } from '../context/CMSContext';
import { RHOLogo } from '../components/RHOLogo';
import {
  ShieldCheck,
  Heart,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Building2,
  Lock,
  ArrowRight,
  Globe2,
  Award
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { settings, team, setCurrentPage } = useCMS();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner (Professional Polish Theme) */}
      <section className="bg-[#002147] text-white py-16 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] bg-[#001733] px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/30">
              Who We Are
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              About Rising Hands Organisation
            </h1>
            <p className="mt-3 text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              “BUILDING BRIGHTER FUTURE TOGETHER”
            </p>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              Rising Hands Organisation (RHO) is a Tanzanian non-governmental, non-profit, non-political, and community-focused organisation founded to champion human dignity, youth empowerment, and equal opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Identity & Legal Character */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-sm bg-white border border-slate-200 hover:border-[#D4AF37] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#002147] flex items-center justify-center text-[#D4AF37] mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#002147] mb-1">Non-Governmental</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating independently as a civil society organisation dedicated strictly to social welfare and community empowerment across Tanzania.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-white border border-slate-200 hover:border-[#D4AF37] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#002147] flex items-center justify-center text-[#D4AF37] mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#002147] mb-1">Non-Profit & Charitable</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every resource, contribution, and grant is directed entirely toward grassroots programs, educational supplies, and community development.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-white border border-slate-200 hover:border-[#D4AF37] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#002147] flex items-center justify-center text-[#D4AF37] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#002147] mb-1">Non-Political & Community-Focused</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We serve all individuals irrespective of political affiliation, ethnic background, or faith, maintaining neutrality and inclusive compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-[#001733] text-white p-8 sm:p-10 rounded-sm border-2 border-[#D4AF37]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-sm bg-[#002147] text-[#D4AF37] flex items-center justify-center mb-6 border border-[#D4AF37]/40">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Our Long-Term Aspiration
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-4">
                  OUR VISION
                </h2>
                <blockquote className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed italic border-l-4 border-[#D4AF37] pl-4">
                  “{settings.vision}”
                </blockquote>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#D4AF37] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Anchored in the Sustainable Development Goals (SDGs 1, 4, 5, 8 & 10)</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-[#002147] text-white p-8 sm:p-10 rounded-sm border-2 border-[#D4AF37]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-sm bg-[#001733] text-[#D4AF37] flex items-center justify-center mb-6 border border-[#D4AF37]/40">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Our Daily Mandate
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-4">
                  OUR MISSION
                </h2>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                  {settings.mission}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Implemented through four core action pillars: Educate, Empower, Inspire, Transform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Emblem & Brand Symbolism Section */}
      <section className="py-16 bg-white border-b border-slate-200" id="official-emblem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
              Official Identity & Visual Symbolism
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] tracking-tight font-serif">
              The Story Behind Our Official Emblem
            </h2>
            <p className="mt-3 text-xs sm:text-sm font-bold text-[#D4AF37] uppercase tracking-widest">
              “BUILDING BRIGHTER FUTURE TOGETHER”
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every detail in the Rising Hands Organisation emblem was deliberately designed to reflect our core philosophy of community upliftment, child protection, and holistic empowerment in Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Official Brand Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full p-6 sm:p-8 bg-slate-50 rounded-sm border-2 border-slate-200 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <RHOLogo variant="full" />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Registered Civil Society Seal • Tanzania</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Emblem Symbolism Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: 'Radiant Rising Sun & Golden Rays',
                  tag: 'Dawn of Hope & Knowledge',
                  desc: 'The golden sun rising on the horizon symbolizes education dispelling ignorance, a new dawn for vulnerable families, and the limitless potential waiting to be unlocked in every child.'
                },
                {
                  title: 'Three Children with Raised Hands',
                  tag: 'Joy, Equality & Protection',
                  desc: 'Representing boys and girls standing tall and joyful in victory. They reflect our unwavering commitment to child safeguarding, gender equality, inclusive youth empowerment, and celebrating every child’s dignity.'
                },
                {
                  title: 'Soaring Freedom Birds',
                  tag: 'Aspiration & Peace',
                  desc: 'The birds gliding high in the golden sky represent soaring ambitions, peaceful coexistence, and breaking free from the cycles of intergenerational poverty.'
                },
                {
                  title: 'The Cradling Rising Hands',
                  tag: 'Community Solidarity & Nurture',
                  desc: 'The two large, sculptured navy blue hands curve upwards from the grassroots, cradling the children and their future. They embody community members, donors, and elders lifting one another up.'
                },
                {
                  title: 'The Golden Heart at the Center',
                  tag: 'Love, Integrity & Stewardship',
                  desc: 'Where the hands meet at the base, they form an embossed golden heart—the epicenter of our values: unconditional love for humanity, transparency, and ethical leadership.'
                },
                {
                  title: 'The 4 Core Pillars (Educate • Empower • Inspire • Transform)',
                  tag: 'Strategic Operational Mandate',
                  desc: 'Our four operational pillars provide the roadmap for every project: from rural classroom desks and school supplies to vocational toolkits, youth clubs, and sustainable clean water initiatives.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-sm bg-slate-50 border border-slate-200 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-sm bg-[#002147] text-[#D4AF37] font-black text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-[#002147] transition-colors">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 flex-wrap mb-1">
                        <h4 className="text-sm font-bold text-[#002147]">{item.title}</h4>
                        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                          • {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Beneficiaries Breakdown */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
              Who We Serve
            </span>
            <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
              Target Beneficiaries
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              RHO’s strategic mission concentrates on vulnerable and underserved demographics to maximize lasting generational change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Children & Orphans',
                desc: 'Primary and early secondary students from low-income or single-parent families needing uniforms, school supplies, and tuition assistance.',
                badge: 'Primary Focus'
              },
              {
                title: 'Youth & Young Adults',
                desc: 'Unemployed and out-of-school young women and men seeking vocational apprenticeships, digital skills, and ethical leadership.',
                badge: 'Skills & Livelihood'
              },
              {
                title: 'Women & Mothers',
                desc: 'Single mothers, female household heads, and informal market traders supported through micro-grants and financial cooperatives.',
                badge: 'Economic Independence'
              },
              {
                title: 'Vulnerable Families',
                desc: 'Households struggling with severe food insecurity, lack of clean water, health emergencies, or elderly-headed caretaking burdens.',
                badge: 'Social Support'
              },
              {
                title: 'Persons with Disabilities',
                desc: 'Children and adults with physical or sensory impairments needing assistive mobility devices, inclusive education, and community advocacy.',
                badge: 'Inclusion & Rights'
              },
              {
                title: 'Underserved Communities',
                desc: 'Peri-urban and rural wards in Tanzania lacking fundamental infrastructure, libraries, clean water points, and youth recreation hubs.',
                badge: 'Community Reach'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-[#D4AF37] transition-colors shadow-sm"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-bold text-[#002147] bg-white border border-slate-200 px-2.5 py-0.5 rounded-sm">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <h3 className="text-base font-bold text-[#002147] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
              Our Core Organisational Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Integrity & Stewardship',
                desc: 'We manage every financial and material donation with meticulous honesty, transparent accounting, and ethical responsibility.'
              },
              {
                title: 'Inclusivity & Dignity',
                desc: 'Every human being possesses intrinsic value. We uphold non-discrimination, cultural respect, and equal voice for all.'
              },
              {
                title: 'Community Ownership',
                desc: 'Sustainable solutions are born within the community. We work shoulder-to-shoulder with local elders, teachers, and youth.'
              },
              {
                title: 'Excellence & Impact',
                desc: 'We hold ourselves to measurable outcomes, data-backed interventions, and continuous learning from our field officers.'
              }
            ].map((val, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D4AF37] transition-colors"
              >
                <div>
                  <div className="w-8 h-8 rounded-sm bg-[#002147] text-[#D4AF37] font-black text-xs flex items-center justify-center mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#002147] mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="py-16 bg-white border-t border-slate-200" id="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                Governance & Staff
              </span>
              <h2 className="text-3xl font-extrabold text-[#002147] tracking-tight">
                Our Dedicated Leadership & Field Team
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Note: Team profiles are displayed as placeholders until official verification by the Board of Trustees.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('admin')}
              className="text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-sm bg-[#002147] hover:bg-[#001733] text-white transition-colors"
            >
              CMS: Manage Team Members
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm flex flex-col hover:border-[#D4AF37] transition-all"
              >
                <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {member.isPlaceholder && (
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-sm bg-[#002147]/90 text-[10px] text-[#D4AF37] font-mono">
                      Editable Placeholder
                    </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#002147] bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200">
                      {member.category}
                    </span>
                    <h3 className="text-base font-bold text-[#002147] mt-2 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mb-3">{member.role}</p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 truncate">
                    {member.emailPlaceholder}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding & Transparency Assurance */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm p-8 sm:p-10 border-2 border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-sm border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Tolerance Policy</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#002147] tracking-tight">
                Child Safeguarding & Financial Accountability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rising Hands Organisation adheres to strict child protection protocols, background verifications for all field staff and volunteers, and transparent bookkeeping suitable for international donors, corporate partners, and governmental oversight bodies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-6 py-3.5 rounded-sm text-xs sm:text-sm font-bold bg-[#002147] text-white hover:bg-[#001733] transition-colors"
              >
                Inquire With Safeguarding Lead
              </button>
              <button
                onClick={() => setCurrentPage('donate')}
                className="px-6 py-3.5 rounded-sm text-xs sm:text-sm font-bold bg-[#D4AF37] text-[#002147] hover:bg-white hover:border hover:border-[#002147] transition-colors"
              >
                Support Our Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
