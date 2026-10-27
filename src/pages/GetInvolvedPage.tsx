import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { CorePillarId } from '../types';
import {
  Users,
  Handshake,
  Heart,
  Briefcase,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Send
} from 'lucide-react';

export const GetInvolvedPage: React.FC = () => {
  const { addVolunteerApplication, projects, setCurrentPage } = useCMS();

  // Active sub-tab
  const [activeTab, setActiveTab] = useState<'volunteer' | 'partner' | 'sponsor' | 'supporter'>('volunteer');

  // Volunteer form state
  const [volFullName, setVolFullName] = useState('');
  const [volEmail, setVolEmail] = useState('');
  const [volPhone, setVolPhone] = useState('');
  const [volCity, setVolCity] = useState('Dar es Salaam, Tanzania');
  const [volPillar, setVolPillar] = useState<CorePillarId | 'any'>('educate');
  const [volSkills, setVolSkills] = useState('');
  const [volAvailability, setVolAvailability] = useState<'weekdays' | 'weekends' | 'flexible' | 'full-time-intern'>('weekends');
  const [volMotivation, setVolMotivation] = useState('');
  const [volSubmitted, setVolSubmitted] = useState(false);

  // Partner form state
  const [partnerOrg, setPartnerOrg] = useState('');
  const [partnerPerson, setPartnerPerson] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerType, setPartnerType] = useState('corporate');
  const [partnerDetails, setPartnerDetails] = useState('');
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  // Sponsor form state
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || '');
  const [sponsorName, setSponsorName] = useState('');
  const [sponsorEmail, setSponsorEmail] = useState('');
  const [sponsorAmount, setSponsorAmount] = useState('500');
  const [sponsorSubmitted, setSponsorSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volFullName || !volEmail) return;

    addVolunteerApplication({
      fullName: volFullName,
      email: volEmail,
      phone: volPhone,
      cityCountry: volCity,
      preferredPillar: volPillar,
      skills: volSkills,
      availability: volAvailability,
      motivation: volMotivation
    });

    setVolSubmitted(true);
    setVolFullName('');
    setVolEmail('');
    setVolPhone('');
    setVolSkills('');
    setVolMotivation('');
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerOrg || !partnerEmail) return;
    setPartnerSubmitted(true);
    setPartnerOrg('');
    setPartnerPerson('');
    setPartnerEmail('');
    setPartnerPhone('');
    setPartnerDetails('');
  };

  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSponsorSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner (Professional Polish Theme) */}
      <section className="bg-[#002147] text-white py-16 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] bg-[#001733] px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/30">
              Community Solidarity
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Get Involved With RHO
            </h1>
            <p className="mt-3 text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              “BUILDING BRIGHTER FUTURE TOGETHER”
            </p>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              Every person has something valuable to give. Discover five meaningful pathways to collaborate with Rising Hands Organisation in empowering children, youth, women, and vulnerable families in Tanzania.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Options Overview Selector */}
      <section className="sticky top-[73px] z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto py-3 gap-2 sm:gap-3 no-scrollbar">
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'volunteer'
                  ? 'bg-[#002147] text-[#D4AF37] border-b-2 border-[#D4AF37] shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>1. Volunteer</span>
            </button>

            <button
              onClick={() => setActiveTab('partner')}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'partner'
                  ? 'bg-[#002147] text-[#D4AF37] border-b-2 border-[#D4AF37] shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Handshake className="w-4 h-4" />
              <span>2. Become a Partner</span>
            </button>

            <button
              onClick={() => setCurrentPage('donate')}
              className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-bold whitespace-nowrap bg-amber-50 text-[#002147] border border-amber-300 hover:bg-amber-100 transition-all"
            >
              <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
              <span>3. Donate (Direct)</span>
            </button>

            <button
              onClick={() => setActiveTab('sponsor')}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'sponsor'
                  ? 'bg-[#002147] text-[#D4AF37] border-b-2 border-[#D4AF37] shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>4. Sponsor a Project</span>
            </button>

            <button
              onClick={() => setActiveTab('supporter')}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'supporter'
                  ? 'bg-[#002147] text-[#D4AF37] border-b-2 border-[#D4AF37] shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>5. Become a Supporter</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* OPTION 1: VOLUNTEER */}
          {activeTab === 'volunteer' && (
            <div className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="max-w-2xl">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                  Pathway 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002147] tracking-tight">
                  Volunteer Your Time & Talent
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Join our grassroots volunteer movement in Tanzania. Whether you are a teacher, digital professional, sports enthusiast, health worker, or passionate youth advocate, your skills can inspire a young life.
                </p>
              </div>

              {volSubmitted ? (
                <div className="p-8 rounded-sm bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold">Volunteer Application Received!</h3>
                  <p className="text-xs sm:text-sm max-w-lg mx-auto">
                    Thank you for stepping forward! Your submission has been securely recorded in our volunteer coordinator’s management desk. A community team member will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => setVolSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-sm text-xs font-bold bg-[#002147] text-white hover:bg-[#001733] transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={volFullName}
                        onChange={(e) => setVolFullName(e.target.value)}
                        placeholder="e.g. Juma Mwita"
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={volEmail}
                        onChange={(e) => setVolEmail(e.target.value)}
                        placeholder="e.g. juma@example.tz"
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Phone Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={volPhone}
                        onChange={(e) => setVolPhone(e.target.value)}
                        placeholder="e.g. +255 700 000 000"
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        City & Country
                      </label>
                      <input
                        type="text"
                        value={volCity}
                        onChange={(e) => setVolCity(e.target.value)}
                        placeholder="e.g. Dar es Salaam, Tanzania"
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Preferred Focus Pillar
                      </label>
                      <select
                        value={volPillar}
                        onChange={(e) => setVolPillar(e.target.value as any)}
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white"
                      >
                        <option value="educate">EDUCATE (Teaching, kits, reading clubs)</option>
                        <option value="empower">EMPOWER (Vocational, tech skills, business)</option>
                        <option value="inspire">INSPIRE (Youth sports, arts, leadership)</option>
                        <option value="transform">TRANSFORM (Family welfare, clean water, green)</option>
                        <option value="any">Flexible Across Any Area</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Availability
                      </label>
                      <select
                        value={volAvailability}
                        onChange={(e) => setVolAvailability(e.target.value as any)}
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white"
                      >
                        <option value="weekends">Weekends Only</option>
                        <option value="weekdays">Weekday Afternoons</option>
                        <option value="flexible">Flexible / Remote Support</option>
                        <option value="full-time-intern">Full-Time Community Internship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                      Key Skills & Background
                    </label>
                    <input
                      type="text"
                      value={volSkills}
                      onChange={(e) => setVolSkills(e.target.value)}
                      placeholder="e.g. Mathematics tutoring, graphic design, football coaching, counseling, event planning"
                      className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                      Why do you want to volunteer with Rising Hands Organisation?
                    </label>
                    <textarea
                      rows={3}
                      value={volMotivation}
                      onChange={(e) => setVolMotivation(e.target.value)}
                      placeholder="Share your personal motivation and hope for the community..."
                      className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-bold text-sm text-[#002147] bg-[#D4AF37] hover:bg-[#002147] hover:text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Volunteer Application</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* OPTION 2: BECOME A PARTNER */}
          {activeTab === 'partner' && (
            <div className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="max-w-2xl">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                  Pathway 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002147] tracking-tight">
                  Become An Institutional or Corporate Partner
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  We collaborate with corporate social responsibility (CSR) departments, local and international grant foundations, university research hubs, and governmental bodies to co-create transformative programs.
                </p>
              </div>

              {partnerSubmitted ? (
                <div className="p-8 rounded-sm bg-blue-50 border border-blue-200 text-blue-900 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
                  <h3 className="text-lg font-bold">Partnership Inquiry Submitted!</h3>
                  <p className="text-xs sm:text-sm max-w-lg mx-auto">
                    Thank you for your institutional interest in Rising Hands Organisation. Our Strategic Partnerships team will review your proposal and respond with our formal introductory concept note.
                  </p>
                  <button
                    onClick={() => setPartnerSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-sm text-xs font-bold bg-[#002147] text-white hover:bg-[#001733]"
                  >
                    Send Another Proposal
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Organization / Enterprise Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerOrg}
                        onChange={(e) => setPartnerOrg(e.target.value)}
                        placeholder="e.g. Tanzania Tech Foundation Ltd."
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Contact Person Name & Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerPerson}
                        onChange={(e) => setPartnerPerson(e.target.value)}
                        placeholder="e.g. Dr. Frank Mwakalukwa (CSR Lead)"
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        placeholder="e.g. csr@company.co.tz"
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Partner Category
                      </label>
                      <select
                        value={partnerType}
                        onChange={(e) => setPartnerType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white"
                      >
                        <option value="corporate">Corporate CSR Partner</option>
                        <option value="foundation">Philanthropic Grant Foundation</option>
                        <option value="ngo">Fellow NGO Collaborator</option>
                        <option value="academic">University / Academic Research</option>
                        <option value="government">Local Government Agency</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                      Brief Partnership Concept or Focus Interest
                    </label>
                    <textarea
                      rows={4}
                      value={partnerDetails}
                      onChange={(e) => setPartnerDetails(e.target.value)}
                      placeholder="Outline how your organization would like to collaborate with RHO (e.g. sponsoring digital literacy hubs, providing student internship kits, co-funding clean water systems)..."
                      className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-bold text-sm text-[#002147] bg-[#D4AF37] hover:bg-[#002147] hover:text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Handshake className="w-4 h-4" />
                    <span>Submit Partnership Request</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* OPTION 4: SPONSOR A PROJECT */}
          {activeTab === 'sponsor' && (
            <div className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="max-w-2xl">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                  Pathway 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002147] tracking-tight">
                  Sponsor a Specific Project
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Direct your generosity to a designated community project. Receive customized quarterly monitoring updates and transparent impact breakdowns.
                </p>
              </div>

              {sponsorSubmitted ? (
                <div className="p-8 rounded-sm bg-amber-50 border border-amber-200 text-amber-900 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto" />
                  <h3 className="text-lg font-bold">Project Sponsorship Pledge Recorded!</h3>
                  <p className="text-xs sm:text-sm max-w-lg mx-auto">
                    Thank you! We have created your project sponsorship pledge. Please visit our official Donation Portal to finalize your preferred payment method (M-Pesa, Bank Wire, or Card).
                  </p>
                  <button
                    onClick={() => setCurrentPage('donate')}
                    className="mt-4 px-6 py-2.5 rounded-sm text-xs font-bold bg-[#002147] text-[#D4AF37] hover:bg-[#001733]"
                  >
                    Proceed to Official Payment Instructions →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSponsorSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                      Select Project to Sponsor
                    </label>
                    <select
                      value={selectedProjectId}
                      onChange={(e) => setSelectedProjectId(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white"
                    >
                      {projects.map((p) => (
                        <option key={p.id} value={p.id}>
                          [{p.pillar.toUpperCase()}] {p.title} (Target: ${p.targetBudgetPlaceholder.toLocaleString()})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Your Full Name / Entity *
                      </label>
                      <input
                        type="text"
                        required
                        value={sponsorName}
                        onChange={(e) => setSponsorName(e.target.value)}
                        placeholder="e.g. Amina Kibona"
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={sponsorEmail}
                        onChange={(e) => setSponsorEmail(e.target.value)}
                        placeholder="e.g. amina@example.com"
                        className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                      Sponsorship Pledge Amount (USD Equivalent)
                    </label>
                    <div className="flex items-center gap-3">
                      {['100', '250', '500', '1000'].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setSponsorAmount(amt)}
                          className={`px-4 py-2 rounded-sm text-xs font-bold border transition-colors ${
                            sponsorAmount === amt
                              ? 'bg-[#002147] text-[#D4AF37] border-[#002147]'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                      <input
                        type="number"
                        value={sponsorAmount}
                        onChange={(e) => setSponsorAmount(e.target.value)}
                        placeholder="Custom USD"
                        className="w-32 px-3 py-2 rounded-sm border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-bold text-sm text-[#002147] bg-[#D4AF37] hover:bg-[#002147] hover:text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
                    <span>Record Project Sponsorship Pledge</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* OPTION 5: BECOME A SUPPORTER */}
          {activeTab === 'supporter' && (
            <div className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="max-w-2xl">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                  Pathway 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002147] tracking-tight">
                  Become an RHO Supporter & Advocate
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Help amplify our voice. Become an advocate in your university, workplace, diaspora circle, or social network. Share field stories, organize awareness drives, and foster international solidarity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-sm bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-sm bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
                    📢
                  </div>
                  <h3 className="text-base font-bold text-[#002147] mb-2">Advocate on Social Media</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Share RHO community dispatches, celebrate Tanzanian youth achievements, and tag #RisingHandsTanzania #BuildingBrighterFuture.
                  </p>
                </div>

                <div className="p-6 rounded-sm bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-sm bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4">
                    🤝
                  </div>
                  <h3 className="text-base font-bold text-[#002147] mb-2">Host an Awareness Circle</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Invite colleagues or community groups to learn about our child education kit campaigns and youth vocational workshops.
                  </p>
                </div>

                <div className="p-6 rounded-sm bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-sm bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-4">
                    🌍
                  </div>
                  <h3 className="text-base font-bold text-[#002147] mb-2">Diaspora Ambassador</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tanzanians abroad can act as ambassadors, connecting RHO to international grant providers, book donors, and skill trainers.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                <p className="text-xs text-slate-500">
                  Contact our outreach desk to receive the official RHO Ambassador Resource Pack.
                </p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-6 py-2.5 rounded-sm text-xs font-bold bg-[#002147] text-[#D4AF37] hover:bg-[#001733]"
                >
                  Contact Outreach Team
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
