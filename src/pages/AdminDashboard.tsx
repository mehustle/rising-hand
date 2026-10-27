import React, { useState, useEffect } from 'react';
import { useCMS } from '../context/CMSContext';
import { CorePillarId, Project, NewsArticle, TeamMember, ProjectStatus } from '../types';
import { RHOLogo } from '../components/RHOLogo';
import {
  Settings,
  Target,
  FolderPlus,
  Newspaper,
  Users,
  HeartHandshake,
  Mail,
  RotateCcw,
  Save,
  Trash2,
  Edit,
  Plus,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  DollarSign,
  Download,
  ShieldCheck,
  Building2,
  CreditCard,
  Clock,
  MapPin,
  Phone,
  Check
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    settings,
    updateSettings,
    impactStats,
    updateImpactStat,
    projects,
    addProject,
    updateProject,
    deleteProject,
    news,
    addNewsArticle,
    updateNewsArticle,
    deleteNewsArticle,
    team,
    updateTeamMember,
    volunteers,
    donations,
    contactMessages,
    resetToDefaults,
    setCurrentPage
  } = useCMS();

  type AdminTab = 'settings' | 'impact' | 'projects' | 'news' | 'team' | 'submissions';
  const [activeTab, setActiveTab] = useState<AdminTab>('settings');
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Settings form state
  const [orgName, setOrgName] = useState(settings.name || 'Rising Hands Organisation');
  const [tagline, setTagline] = useState(settings.tagline || '');
  const [mission, setMission] = useState(settings.mission || '');
  const [vision, setVision] = useState(settings.vision || '');
  const [phone, setPhone] = useState(settings.phonePlaceholder || '');
  const [secondaryPhone, setSecondaryPhone] = useState(settings.secondaryPhonePlaceholder || '');
  const [email, setEmail] = useState(settings.primaryEmailPlaceholder || settings.emailPlaceholder || '');
  const [secondaryEmail, setSecondaryEmail] = useState(settings.secondaryEmailPlaceholder || '');
  const [address, setAddress] = useState(settings.officialAddressPlaceholder || settings.addressPlaceholder || '');
  const [cityCountry, setCityCountry] = useState(settings.cityCountry || 'Dar es Salaam, Tanzania');
  const [officeHours, setOfficeHours] = useState(settings.officeHours || settings.officeHoursPlaceholder || '');
  const [regNumber, setRegNumber] = useState(settings.registrationNumberPlaceholder || '');
  const [mpesaTill, setMpesaTill] = useState(settings.mpesaTillPlaceholder || '');
  const [mpesaPaybill, setMpesaPaybill] = useState(settings.mpesaPaybillPlaceholder || '');
  const [tigopesaTill, setTigopesaTill] = useState(settings.tigopesaTillPlaceholder || '');
  const [airtelMoney, setAirtelMoney] = useState(settings.airtelMoneyPlaceholder || '');

  // TSH Bank State
  const [bankTshName, setBankTshName] = useState(
    settings.bankAccountTsh?.bankName || 'CRDB Bank Plc (Tanzania)'
  );
  const [bankTshAccountName, setBankTshAccountName] = useState(
    settings.bankAccountTsh?.accountName || 'RISING HANDS ORGANISATION (RHO)'
  );
  const [bankTshAcc, setBankTshAcc] = useState(
    settings.bankAccountTsh?.accountNumber || '0150392817200'
  );
  const [bankTshSwift, setBankTshSwift] = useState(
    settings.bankAccountTsh?.swiftCode || 'CORUTZTZXXX'
  );
  const [bankTshBranch, setBankTshBranch] = useState(
    settings.bankAccountTsh?.branch || 'Dar es Salaam Corporate Branch, Tanzania'
  );

  // USD Bank State
  const [bankUsdName, setBankUsdName] = useState(
    settings.bankAccountUsd?.bankName || 'CRDB Bank Plc (Tanzania)'
  );
  const [bankUsdAccountName, setBankUsdAccountName] = useState(
    settings.bankAccountUsd?.accountName || 'RISING HANDS ORGANISATION (RHO)'
  );
  const [bankUsdAcc, setBankUsdAcc] = useState(
    settings.bankAccountUsd?.accountNumber || '0250392817201'
  );
  const [bankUsdSwift, setBankUsdSwift] = useState(
    settings.bankAccountUsd?.swiftCode || 'CORUTZTZXXX'
  );
  const [bankUsdBranch, setBankUsdBranch] = useState(
    settings.bankAccountUsd?.branch || 'Dar es Salaam Corporate Branch, Tanzania'
  );

  // Keep local form fields updated if settings changes externally or resets
  useEffect(() => {
    setOrgName(settings.name || 'Rising Hands Organisation');
    setTagline(settings.tagline || '');
    setMission(settings.mission || '');
    setVision(settings.vision || '');
    setPhone(settings.phonePlaceholder || '');
    setSecondaryPhone(settings.secondaryPhonePlaceholder || '');
    setEmail(settings.primaryEmailPlaceholder || settings.emailPlaceholder || '');
    setSecondaryEmail(settings.secondaryEmailPlaceholder || '');
    setAddress(settings.officialAddressPlaceholder || settings.addressPlaceholder || '');
    setCityCountry(settings.cityCountry || 'Dar es Salaam, Tanzania');
    setOfficeHours(settings.officeHours || settings.officeHoursPlaceholder || '');
    setRegNumber(settings.registrationNumberPlaceholder || '');
    setMpesaTill(settings.mpesaTillPlaceholder || '');
    setMpesaPaybill(settings.mpesaPaybillPlaceholder || '');
    setTigopesaTill(settings.tigopesaTillPlaceholder || '');
    setAirtelMoney(settings.airtelMoneyPlaceholder || '');

    setBankTshName(settings.bankAccountTsh?.bankName || 'CRDB Bank Plc (Tanzania)');
    setBankTshAccountName(settings.bankAccountTsh?.accountName || 'RISING HANDS ORGANISATION (RHO)');
    setBankTshAcc(settings.bankAccountTsh?.accountNumber || '0150392817200');
    setBankTshSwift(settings.bankAccountTsh?.swiftCode || 'CORUTZTZXXX');
    setBankTshBranch(settings.bankAccountTsh?.branch || 'Dar es Salaam Corporate Branch, Tanzania');

    setBankUsdName(settings.bankAccountUsd?.bankName || 'CRDB Bank Plc (Tanzania)');
    setBankUsdAccountName(settings.bankAccountUsd?.accountName || 'RISING HANDS ORGANISATION (RHO)');
    setBankUsdAcc(settings.bankAccountUsd?.accountNumber || '0250392817201');
    setBankUsdSwift(settings.bankAccountUsd?.swiftCode || 'CORUTZTZXXX');
    setBankUsdBranch(settings.bankAccountUsd?.branch || 'Dar es Salaam Corporate Branch, Tanzania');
  }, [settings]);

  const notifySave = (msg: string) => {
    setSaveSuccess(msg);
    setTimeout(() => setSaveSuccess(null), 4000);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      updateSettings({
        name: orgName,
        organizationName: orgName,
        tagline,
        mission,
        vision,
        phonePlaceholder: phone,
        secondaryPhonePlaceholder: secondaryPhone,
        primaryEmailPlaceholder: email,
        emailPlaceholder: email,
        secondaryEmailPlaceholder: secondaryEmail,
        officialAddressPlaceholder: address,
        addressPlaceholder: address,
        cityCountry,
        officeHours,
        officeHoursPlaceholder: officeHours,
        registrationNumberPlaceholder: regNumber,
        mpesaTillPlaceholder: mpesaTill,
        mpesaPaybillPlaceholder: mpesaPaybill,
        tigopesaTillPlaceholder: tigopesaTill,
        airtelMoneyPlaceholder: airtelMoney,
        bankAccountTsh: {
          bankName: bankTshName || 'CRDB Bank Plc (Tanzania)',
          accountName: bankTshAccountName || 'RISING HANDS ORGANISATION (RHO)',
          accountNumber: bankTshAcc || '0150392817200',
          swiftCode: bankTshSwift || 'CORUTZTZXXX',
          branch: bankTshBranch || 'Dar es Salaam Corporate Branch, Tanzania',
          currency: 'TZS',
          currencyLabel: 'TSH (Tanzanian Shillings - Local Interbank & TISS)'
        },
        bankAccountUsd: {
          bankName: bankUsdName || 'CRDB Bank Plc (Tanzania)',
          accountName: bankUsdAccountName || 'RISING HANDS ORGANISATION (RHO)',
          accountNumber: bankUsdAcc || '0250392817201',
          swiftCode: bankUsdSwift || 'CORUTZTZXXX',
          branch: bankUsdBranch || 'Dar es Salaam Corporate Branch, Tanzania',
          currency: 'USD',
          currencyLabel: 'USD (US Dollars - International SWIFT Wire)'
        },
        bankAccountPlaceholder: {
          bankName: bankTshName || 'CRDB Bank Plc (Tanzania)',
          accountName: bankTshAccountName || 'RISING HANDS ORGANISATION (RHO)',
          accountNumber: `${bankTshAcc} (TSH) / ${bankUsdAcc} (USD)`,
          swiftCode: bankTshSwift || 'CORUTZTZXXX',
          branch: bankTshBranch || 'Dar es Salaam Corporate Branch, Tanzania'
        }
      });
      notifySave('Organization profile settings saved successfully! All website pages have been updated.');
    } catch (err) {
      console.error('Error saving settings:', err);
      notifySave('Error saving settings. Please check your inputs.');
    } finally {
      setTimeout(() => setIsSaving(false), 400);
    }
  };

  // New Project Form State
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjPillar, setNewProjPillar] = useState<CorePillarId>('educate');
  const [newProjStatus, setNewProjStatus] = useState<ProjectStatus>('active');
  const [newProjLocation, setNewProjLocation] = useState('Dar es Salaam, Tanzania');
  const [newProjSummary, setNewProjSummary] = useState('');
  const [newProjBeneficiaries, setNewProjBeneficiaries] = useState('');
  const [newProjTarget, setNewProjTarget] = useState('15000');
  const [newProjRaised, setNewProjRaised] = useState('2500');

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjTitle || !newProjSummary) return;

    addProject({
      slug: newProjTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: newProjTitle,
      pillar: newProjPillar,
      status: newProjStatus,
      location: newProjLocation,
      summary: newProjSummary,
      fullDescription: newProjSummary + ' Project ongoing across targeted community wards.',
      targetBeneficiaries: newProjBeneficiaries || 'Underserved students and families.',
      keyOutcomes: ['Deliver verified assistance', 'Establish baseline indicators', 'Quarterly community review'],
      imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
      targetBudgetPlaceholder: parseFloat(newProjTarget) || 10000,
      raisedAmountPlaceholder: parseFloat(newProjRaised) || 0,
      currency: 'USD'
    });

    setShowNewProjectModal(false);
    setNewProjTitle('');
    setNewProjSummary('');
    notifySave('New community project published successfully!');
  };

  // New Article Form State
  const [showNewArticleModal, setShowNewArticleModal] = useState(false);
  const [newArtTitle, setNewArtTitle] = useState('');
  const [newArtCat, setNewArtCat] = useState('Community Story');
  const [newArtExcerpt, setNewArtExcerpt] = useState('');
  const [newArtContent, setNewArtContent] = useState('');
  const [newArtAuthor, setNewArtAuthor] = useState('RHO Communications Officer');

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArtTitle || !newArtExcerpt) return;

    addNewsArticle({
      slug: newArtTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: newArtTitle,
      category: newArtCat,
      excerpt: newArtExcerpt,
      content: newArtContent || newArtExcerpt,
      publishDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '3 min read',
      author: newArtAuthor,
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
      tags: ['Tanzania', 'Community', 'RHO']
    });

    setShowNewArticleModal(false);
    setNewArtTitle('');
    setNewArtExcerpt('');
    setNewArtContent('');
    notifySave('New article published to News & Stories!');
  };

  // Edit Project State & Handler
  const [showEditProjectModal, setShowEditProjectModal] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [editProjTitle, setEditProjTitle] = useState('');
  const [editProjPillar, setEditProjPillar] = useState<CorePillarId>('educate');
  const [editProjStatus, setEditProjStatus] = useState<ProjectStatus>('active');
  const [editProjLocation, setEditProjLocation] = useState('');
  const [editProjSummary, setEditProjSummary] = useState('');
  const [editProjBeneficiaries, setEditProjBeneficiaries] = useState('');
  const [editProjTarget, setEditProjTarget] = useState('');
  const [editProjRaised, setEditProjRaised] = useState('');

  const handleOpenEditProject = (p: Project) => {
    setEditingProjectId(p.id);
    setEditProjTitle(p.title);
    setEditProjPillar(p.pillar);
    setEditProjStatus(p.status);
    setEditProjLocation(p.location);
    setEditProjSummary(p.summary);
    setEditProjBeneficiaries(p.targetBeneficiaries || '');
    setEditProjTarget(String(p.targetBudgetPlaceholder || ''));
    setEditProjRaised(String(p.raisedAmountPlaceholder || ''));
    setShowEditProjectModal(true);
  };

  const handleSaveEditProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProjectId || !editProjTitle) return;

    updateProject(editingProjectId, {
      title: editProjTitle,
      pillar: editProjPillar,
      status: editProjStatus,
      location: editProjLocation,
      summary: editProjSummary,
      targetBeneficiaries: editProjBeneficiaries,
      targetBudgetPlaceholder: parseFloat(editProjTarget) || 0,
      raisedAmountPlaceholder: parseFloat(editProjRaised) || 0
    });

    setShowEditProjectModal(false);
    notifySave(`Changes to "${editProjTitle}" saved successfully!`);
  };

  // Edit Article State & Handler
  const [showEditArticleModal, setShowEditArticleModal] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [editArtTitle, setEditArtTitle] = useState('');
  const [editArtCat, setEditArtCat] = useState('');
  const [editArtAuthor, setEditArtAuthor] = useState('');
  const [editArtExcerpt, setEditArtExcerpt] = useState('');
  const [editArtContent, setEditArtContent] = useState('');

  const handleOpenEditArticle = (item: NewsArticle) => {
    setEditingArticleId(item.id);
    setEditArtTitle(item.title);
    setEditArtCat(item.category);
    setEditArtAuthor(item.author || '');
    setEditArtExcerpt(item.excerpt);
    setEditArtContent(item.content || item.excerpt);
    setShowEditArticleModal(true);
  };

  const handleSaveEditArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticleId || !editArtTitle) return;

    updateNewsArticle(editingArticleId, {
      title: editArtTitle,
      category: editArtCat,
      author: editArtAuthor,
      excerpt: editArtExcerpt,
      content: editArtContent
    });

    setShowEditArticleModal(false);
    notifySave(`Changes to story "${editArtTitle}" saved successfully!`);
  };

  return (
    <div className="bg-slate-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header (Professional Polish Theme) */}
        <div className="bg-[#002147] text-white rounded-sm p-6 sm:p-8 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-4 border-[#D4AF37]">
          <div className="flex items-center gap-4">
            <RHOLogo variant="white" size="lg" showTagline={false} />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-[#001733] text-[#D4AF37] border border-[#D4AF37]/30">
                Administrative Control Hub
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                RHO Content & Portal Manager
              </h1>
              <p className="text-xs text-slate-200">
                Manage organization profile, impact metrics, project portfolios, and community inquiries.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCurrentPage('home')}
              className="px-4 py-2 rounded-sm text-xs font-bold bg-[#001733] hover:bg-[#002147] text-[#D4AF37] flex items-center gap-1.5 border border-[#D4AF37]/40 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Back to Public Website</span>
            </button>
            <button
              onClick={() => {
                if (window.confirm('Reset all edited content back to default seed data?')) {
                  resetToDefaults();
                  notifySave('Content restored to initial seed defaults.');
                }
              }}
              className="px-4 py-2 rounded-sm text-xs font-bold bg-rose-950/60 hover:bg-rose-900 text-rose-200 border border-rose-700/50 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* Save Success Alert */}
        {saveSuccess && (
          <div className="mb-6 p-4 rounded-sm bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{saveSuccess}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {[
            { id: 'settings', label: 'Organization Profile', icon: Settings },
            { id: 'impact', label: 'Impact Statistics', icon: Target },
            { id: 'projects', label: `Projects (${projects.length})`, icon: FolderPlus },
            { id: 'news', label: `News & Stories (${news.length})`, icon: Newspaper },
            { id: 'team', label: `Team Directory (${team.length})`, icon: Users },
            {
              id: 'submissions',
              label: `Incoming Submissions (${volunteers.length + donations.length + contactMessages.length})`,
              icon: HeartHandshake
            }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AdminTab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs sm:text-sm font-bold tracking-wide transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#002147] text-[#D4AF37] border-b-2 border-[#D4AF37] shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#002147]">
                Organization Metadata & Financial Placeholders
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Update core organizational declarations, contact channels, and donation receiver numbers.
              </p>
            </div>

            {/* Official Brand Identity Card */}
            <div className="p-6 bg-slate-50 rounded-sm border-2 border-slate-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-sm border border-slate-200 shadow-sm">
                    <RHOLogo variant="crest" size="lg" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                        Protected Brand Identity
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Official RHO Logo Active
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] mt-0.5">
                      Rising Hands Organisation Official Emblem
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Tagline: <strong>“BUILDING BRIGHTER FUTURE TOGETHER”</strong> • Four Pillars: Educate, Empower, Inspire, Transform
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href="/rising-hands-logo.svg"
                    download="Rising-Hands-Organisation-Official-Logo.svg"
                    className="px-3.5 py-2 rounded-sm text-xs font-bold bg-[#002147] text-white hover:bg-[#001733] flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Download Vector SVG</span>
                  </a>
                  <a
                    href="/rho-logo.jpg"
                    download="Rising-Hands-Organisation-Official-Logo.jpg"
                    className="px-3.5 py-2 rounded-sm text-xs font-bold bg-white text-[#002147] border border-slate-300 hover:border-[#D4AF37] flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Download High-Res JPG</span>
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-8">
              {/* Section 1: Core Organization Profile */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-sm font-bold text-[#002147] uppercase tracking-wider">
                    Core Organizational Identity
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      Organization Full Name
                    </label>
                    <input
                      type="text"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-semibold focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      Official Tagline
                    </label>
                    <input
                      type="text"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-semibold focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      Registration Number / Legal Disclosure Placeholder
                    </label>
                    <input
                      type="text"
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-xs font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Contact & Office Coordinates */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-sm font-bold text-[#002147] uppercase tracking-wider">
                    Official Contact & Office Headquarters
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      Primary Official Email
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      Secondary / Partnerships Email
                    </label>
                    <input
                      type="text"
                      value={secondaryEmail}
                      onChange={(e) => setSecondaryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      Official Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      Secondary Phone / Landline
                    </label>
                    <input
                      type="text"
                      value={secondaryPhone}
                      onChange={(e) => setSecondaryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      National Office Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      City & Country
                    </label>
                    <input
                      type="text"
                      value={cityCountry}
                      onChange={(e) => setCityCountry(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                      Office Operating Hours
                    </label>
                    <input
                      type="text"
                      value={officeHours}
                      onChange={(e) => setOfficeHours(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Official Tanzanian Payment Channels */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-sm font-bold text-[#002147] uppercase tracking-wider">
                    Official Tanzanian Mobile Money & Bank Channels
                  </h3>
                </div>

                {/* Subsection A: Mobile Money Providers */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-[#002147] uppercase tracking-wider flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Tanzanian Mobile Money Channels</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                        Vodacom M-Pesa Till / Lipa Namba
                      </label>
                      <input
                        type="text"
                        value={mpesaTill}
                        onChange={(e) => setMpesaTill(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                        Vodacom M-Pesa Paybill / Account
                      </label>
                      <input
                        type="text"
                        value={mpesaPaybill}
                        onChange={(e) => setMpesaPaybill(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                        Tigo Pesa Lipa Namba (Merchant Till)
                      </label>
                      <input
                        type="text"
                        value={tigopesaTill}
                        onChange={(e) => setTigopesaTill(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                        Airtel Money Merchant Number
                      </label>
                      <input
                        type="text"
                        value={airtelMoney}
                        onChange={(e) => setAirtelMoney(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Subsection B: Dual Bank Accounts (TSH & USD Separate Details) */}
                <div className="space-y-6 pt-2">
                  {/* Account 1: TSH Local Account */}
                  <div className="p-5 bg-slate-50 rounded-sm border-2 border-slate-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                          <h4 className="text-sm font-bold text-[#002147]">
                            TSH Bank Account (Tanzanian Shillings - TZS)
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Local domestic operating account for bank transfers within Tanzania, EFT, TISS, and local bank mobile app deposits.
                        </p>
                      </div>
                      <span className="self-start sm:self-auto text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-emerald-100 text-emerald-800 border border-emerald-300">
                        Local Currency (TSH / TZS)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          TSH Bank Name
                        </label>
                        <input
                          type="text"
                          value={bankTshName}
                          onChange={(e) => setBankTshName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          TSH Account Name (Beneficiary)
                        </label>
                        <input
                          type="text"
                          value={bankTshAccountName}
                          onChange={(e) => setBankTshAccountName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          TSH Account Number
                        </label>
                        <input
                          type="text"
                          value={bankTshAcc}
                          onChange={(e) => setBankTshAcc(e.target.value)}
                          placeholder="e.g. 0150392817200"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          TSH SWIFT / BIC Code
                        </label>
                        <input
                          type="text"
                          value={bankTshSwift}
                          onChange={(e) => setBankTshSwift(e.target.value)}
                          placeholder="e.g. CORUTZTZXXX"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          TSH Corporate Branch
                        </label>
                        <input
                          type="text"
                          value={bankTshBranch}
                          onChange={(e) => setBankTshBranch(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Account 2: USD Foreign Currency Account */}
                  <div className="p-5 bg-slate-50 rounded-sm border-2 border-slate-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] inline-block" />
                          <h4 className="text-sm font-bold text-[#002147]">
                            USD Bank Account (US Dollars - USD Foreign Currency)
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          International foreign currency account for international wire transfers, overseas grants, and cross-border SWIFT remittances.
                        </p>
                      </div>
                      <span className="self-start sm:self-auto text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-[#002147] text-[#D4AF37] border border-[#D4AF37]/40">
                        Foreign Currency (USD / $)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          USD Bank Name
                        </label>
                        <input
                          type="text"
                          value={bankUsdName}
                          onChange={(e) => setBankUsdName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          USD Account Name (Beneficiary)
                        </label>
                        <input
                          type="text"
                          value={bankUsdAccountName}
                          onChange={(e) => setBankUsdAccountName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          USD Account Number
                        </label>
                        <input
                          type="text"
                          value={bankUsdAcc}
                          onChange={(e) => setBankUsdAcc(e.target.value)}
                          placeholder="e.g. 0250392817201"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          USD SWIFT / BIC Code
                        </label>
                        <input
                          type="text"
                          value={bankUsdSwift}
                          onChange={(e) => setBankUsdSwift(e.target.value)}
                          placeholder="e.g. CORUTZTZXXX"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm font-mono focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                          USD Corporate Branch
                        </label>
                        <input
                          type="text"
                          value={bankUsdBranch}
                          onChange={(e) => setBankUsdBranch(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Strategic Declarations */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <Target className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-sm font-bold text-[#002147] uppercase tracking-wider">
                    Strategic Mission & Vision
                  </h3>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                    Official Mission Statement
                  </label>
                  <textarea
                    rows={3}
                    value={mission}
                    onChange={(e) => setMission(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm leading-relaxed focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-1.5">
                    Official Vision Statement
                  </label>
                  <textarea
                    rows={2}
                    value={vision}
                    onChange={(e) => setVision(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-sm leading-relaxed focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Save & Feedback Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    id="save-profile-btn"
                    disabled={isSaving}
                    className="px-6 py-3 rounded-sm text-xs font-bold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white shadow-sm flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#002147] border-t-transparent rounded-full animate-spin" />
                        <span>Saving Changes...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Save Changes to Profile</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setOrgName(settings.name || 'Rising Hands Organisation');
                      setTagline(settings.tagline || '');
                      setMission(settings.mission || '');
                      setVision(settings.vision || '');
                      setPhone(settings.phonePlaceholder || '');
                      setSecondaryPhone(settings.secondaryPhonePlaceholder || '');
                      setEmail(settings.primaryEmailPlaceholder || settings.emailPlaceholder || '');
                      setSecondaryEmail(settings.secondaryEmailPlaceholder || '');
                      setAddress(settings.officialAddressPlaceholder || settings.addressPlaceholder || '');
                      setCityCountry(settings.cityCountry || 'Dar es Salaam, Tanzania');
                      setOfficeHours(settings.officeHours || settings.officeHoursPlaceholder || '');
                      setRegNumber(settings.registrationNumberPlaceholder || '');
                      setMpesaTill(settings.mpesaTillPlaceholder || '');
                      setMpesaPaybill(settings.mpesaPaybillPlaceholder || '');
                      setTigopesaTill(settings.tigopesaTillPlaceholder || '');
                      setAirtelMoney(settings.airtelMoneyPlaceholder || '');
                      setBankTshName(settings.bankAccountTsh?.bankName || 'CRDB Bank Plc (Tanzania)');
                      setBankTshAccountName(settings.bankAccountTsh?.accountName || 'RISING HANDS ORGANISATION (RHO)');
                      setBankTshAcc(settings.bankAccountTsh?.accountNumber || '0150392817200');
                      setBankTshSwift(settings.bankAccountTsh?.swiftCode || 'CORUTZTZXXX');
                      setBankTshBranch(settings.bankAccountTsh?.branch || 'Dar es Salaam Corporate Branch, Tanzania');
                      setBankUsdName(settings.bankAccountUsd?.bankName || 'CRDB Bank Plc (Tanzania)');
                      setBankUsdAccountName(settings.bankAccountUsd?.accountName || 'RISING HANDS ORGANISATION (RHO)');
                      setBankUsdAcc(settings.bankAccountUsd?.accountNumber || '0250392817201');
                      setBankUsdSwift(settings.bankAccountUsd?.swiftCode || 'CORUTZTZXXX');
                      setBankUsdBranch(settings.bankAccountUsd?.branch || 'Dar es Salaam Corporate Branch, Tanzania');
                      notifySave('Restored form to current saved state.');
                    }}
                    className="px-4 py-3 rounded-sm text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    Reset Form
                  </button>
                </div>

                {saveSuccess && (
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{saveSuccess}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        )}

        {/* TAB 2: IMPACT STATS */}
        {activeTab === 'impact' && (
          <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#002147]">
                Impact Performance Indicators
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Edit the 4 primary public metrics displayed on the Homepage and Our Impact page.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.id} className="p-5 rounded-sm bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase text-[#D4AF37] bg-[#002147] px-2.5 py-0.5 rounded-sm">
                      {stat.category}
                    </span>
                    <span className="text-[11px] text-slate-400">ID: {stat.id}</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#002147] uppercase mb-1">
                      Display Metric (e.g. 5,000+)
                    </label>
                    <input
                      type="text"
                      id={`stat-num-${stat.id}`}
                      defaultValue={stat.number}
                      className="w-full px-3 py-2 rounded-sm border border-slate-300 text-sm font-bold focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#002147] uppercase mb-1">
                      Label
                    </label>
                    <input
                      type="text"
                      id={`stat-lbl-${stat.id}`}
                      defaultValue={stat.label}
                      className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs font-medium focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#002147] uppercase mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      id={`stat-desc-${stat.id}`}
                      defaultValue={stat.description}
                      className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const numEl = document.getElementById(`stat-num-${stat.id}`) as HTMLInputElement | null;
                        const lblEl = document.getElementById(`stat-lbl-${stat.id}`) as HTMLInputElement | null;
                        const descEl = document.getElementById(`stat-desc-${stat.id}`) as HTMLTextAreaElement | null;
                        updateImpactStat(stat.id, {
                          number: numEl?.value || stat.number,
                          label: lblEl?.value || stat.label,
                          description: descEl?.value || stat.description
                        });
                        notifySave(`Saved impact metric "${lblEl?.value || stat.label}"!`);
                      }}
                      className="px-3 py-1.5 rounded-sm text-xs font-bold bg-[#002147] text-white hover:bg-[#D4AF37] hover:text-[#002147] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Metric</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#002147]">
                  Community Projects Directory
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Manage ongoing, upcoming, and completed community initiatives across Tanzania.
                </p>
              </div>
              <button
                onClick={() => setShowNewProjectModal(true)}
                className="px-4 py-2.5 rounded-sm text-xs font-bold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-sm bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img src={p.imageUrl} alt="" className="w-16 h-16 rounded-sm object-cover shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase text-[#D4AF37] bg-[#002147] px-2 py-0.5 rounded-sm">
                          {p.pillar}
                        </span>
                        <span className="text-[10px] font-bold uppercase text-slate-700 bg-slate-200 px-2 py-0.5 rounded-sm">
                          {p.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#002147] mt-1">{p.title}</h4>
                      <p className="text-xs text-slate-500">
                        {p.location} • Target: ${p.targetBudgetPlaceholder.toLocaleString()} • Raised: $
                        {p.raisedAmountPlaceholder.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleOpenEditProject(p)}
                      className="px-3 py-1.5 rounded-sm text-xs font-semibold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => {
                        const newStatus: ProjectStatus =
                          p.status === 'active' ? 'completed' : p.status === 'completed' ? 'upcoming' : 'active';
                        updateProject(p.id, { status: newStatus });
                        notifySave(`Updated status of "${p.title}" to ${newStatus}`);
                      }}
                      className="px-3 py-1.5 rounded-sm text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
                    >
                      Cycle Status ({p.status})
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete project "${p.title}"?`)) {
                          deleteProject(p.id);
                          notifySave('Project removed.');
                        }
                      }}
                      className="p-2 rounded-sm text-rose-600 hover:bg-rose-50 border border-rose-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: NEWS */}
        {activeTab === 'news' && (
          <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#002147]">
                  News, Field Stories & Press Releases
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Publish grassroots updates, beneficiary success stories, and announcements.
                </p>
              </div>
              <button
                onClick={() => setShowNewArticleModal(true)}
                className="px-4 py-2.5 rounded-sm text-xs font-bold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Publish New Story</span>
              </button>
            </div>

            <div className="space-y-4">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-sm bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.imageUrl} alt="" className="w-16 h-16 rounded-sm object-cover shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase text-[#D4AF37] bg-[#002147] px-2 py-0.5 rounded-sm">
                          {item.category}
                        </span>
                        <span className="text-[11px] text-slate-400">{item.publishDate}</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#002147] mt-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{item.excerpt}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleOpenEditArticle(item)}
                      className="px-3 py-1.5 rounded-sm text-xs font-semibold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete article "${item.title}"?`)) {
                          deleteNewsArticle(item.id);
                          notifySave('Article removed.');
                        }
                      }}
                      className="p-2 rounded-sm text-rose-600 hover:bg-rose-50 border border-rose-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: TEAM */}
        {activeTab === 'team' && (
          <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#002147]">
                Leadership & Field Personnel Directory
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Edit governance and staff entries. All profiles are noted with verification placeholders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((mem) => (
                <div key={mem.id} className="p-5 rounded-sm bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={mem.imageUrl} alt="" className="w-12 h-12 rounded-full object-cover shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#002147]">{mem.name}</h4>
                      <p className="text-xs text-slate-500">{mem.role}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#002147] uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id={`team-name-${mem.id}`}
                      defaultValue={mem.name}
                      className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs font-bold focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#002147] uppercase mb-1">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      id={`team-role-${mem.id}`}
                      defaultValue={mem.role}
                      className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs font-medium focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#002147] uppercase mb-1">
                      Bio Summary
                    </label>
                    <textarea
                      rows={2}
                      id={`team-bio-${mem.id}`}
                      defaultValue={mem.bio}
                      className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const nameEl = document.getElementById(`team-name-${mem.id}`) as HTMLInputElement | null;
                        const roleEl = document.getElementById(`team-role-${mem.id}`) as HTMLInputElement | null;
                        const bioEl = document.getElementById(`team-bio-${mem.id}`) as HTMLTextAreaElement | null;
                        updateTeamMember(mem.id, {
                          name: nameEl?.value || mem.name,
                          role: roleEl?.value || mem.role,
                          bio: bioEl?.value || mem.bio
                        });
                        notifySave(`Saved profile for "${nameEl?.value || mem.name}"!`);
                      }}
                      className="px-3 py-1.5 rounded-sm text-xs font-bold bg-[#002147] text-white hover:bg-[#D4AF37] hover:text-[#002147] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Profile</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: SUBMISSIONS (Volunteers, Donations, Inquiries) */}
        {activeTab === 'submissions' && (
          <div className="space-y-8">
            {/* Donations Ledger */}
            <div className="bg-white rounded-sm p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#002147]">
                    Pledged Contributions & Donation Ledger ({donations.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct record of pledges received via the Donation Portal.
                  </p>
                </div>
              </div>

              {donations.length === 0 ? (
                <p className="text-xs text-slate-400 py-4 italic">No donation pledges recorded yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b-2 border-[#002147] text-[#002147] uppercase tracking-wider text-[10px]">
                        <th className="py-2.5">Date</th>
                        <th className="py-2.5">Ref Code</th>
                        <th className="py-2.5">Donor</th>
                        <th className="py-2.5">Amount</th>
                        <th className="py-2.5">Channel</th>
                        <th className="py-2.5">Designation</th>
                        <th className="py-2.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {donations.map((d) => (
                        <tr key={d.id} className="hover:bg-slate-50">
                          <td className="py-2.5 text-slate-500 whitespace-nowrap">{d.date}</td>
                          <td className="py-2.5 font-mono font-bold text-[#002147]">{d.referenceCode}</td>
                          <td className="py-2.5">
                            <span className="font-semibold text-slate-900 block">{d.donorName}</span>
                            <span className="text-[11px] text-slate-400">{d.donorEmail}</span>
                          </td>
                          <td className="py-2.5 font-bold text-[#002147]">
                            {d.currency} {d.amount.toLocaleString()} ({d.frequency})
                          </td>
                          <td className="py-2.5 text-slate-600">{d.providerDetails}</td>
                          <td className="py-2.5 text-slate-600 max-w-xs truncate">{d.designation}</td>
                          <td className="py-2.5">
                            <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#D4AF37]/20 text-[#002147] border border-[#D4AF37]/40">
                              {d.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Volunteers Applications */}
            <div className="bg-white rounded-sm p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#002147]">
                  Volunteer Applications ({volunteers.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Applicants who submitted via the Get Involved portal.
                </p>
              </div>

              {volunteers.length === 0 ? (
                <p className="text-xs text-slate-400 py-4 italic">No volunteer applications logged yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {volunteers.map((v) => (
                    <div key={v.id} className="p-4 rounded-sm bg-slate-50 border border-slate-200 text-xs space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-[#002147] text-sm">{v.fullName}</h4>
                          <p className="text-slate-500">
                            {v.email} • {v.phone}
                          </p>
                        </div>
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#002147] text-[#D4AF37] uppercase">
                          {v.preferredPillar}
                        </span>
                      </div>
                      <p className="text-slate-600">
                        <strong>Availability:</strong> {v.availability} | <strong>Location:</strong> {v.cityCountry}
                      </p>
                      {v.skills && (
                        <p className="text-slate-600">
                          <strong>Skills:</strong> {v.skills}
                        </p>
                      )}
                      {v.motivation && (
                        <p className="text-slate-500 italic border-l-2 border-[#D4AF37] pl-2">
                          "{v.motivation}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Messages */}
            <div className="bg-white rounded-sm p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#002147]">
                  General Inquiries ({contactMessages.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Direct messages submitted via Contact Us.
                </p>
              </div>

              {contactMessages.length === 0 ? (
                <p className="text-xs text-slate-400 py-4 italic">No inquiries received yet.</p>
              ) : (
                <div className="space-y-3">
                  {contactMessages.map((m) => (
                    <div key={m.id} className="p-4 rounded-sm bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                      <div className="flex justify-between items-start">
                        <div>
                          <strong className="text-[#002147] text-sm">{m.name}</strong>
                          <span className="text-slate-500 ml-2">({m.email} / {m.phone || 'No phone'})</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold bg-slate-200 text-slate-700">
                          {m.subject}
                        </span>
                      </div>
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed">{m.message}</p>
                      <p className="text-[10px] text-slate-400 pt-1">Logged: {m.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal: New Project */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl border-t-4 border-[#D4AF37] max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-[#002147] mb-4">Publish New Community Project</h3>
            <form onSubmit={handleCreateProject} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={newProjTitle}
                  onChange={(e) => setNewProjTitle(e.target.value)}
                  placeholder="e.g. Bagamoyo Youth Carpentry Workshop"
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Pillar</label>
                  <select
                    value={newProjPillar}
                    onChange={(e) => setNewProjPillar(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="educate">Educate</option>
                    <option value="empower">Empower</option>
                    <option value="inspire">Inspire</option>
                    <option value="transform">Transform</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Status</label>
                  <select
                    value={newProjStatus}
                    onChange={(e) => setNewProjStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="active">Active</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Location</label>
                <input
                  type="text"
                  value={newProjLocation}
                  onChange={(e) => setNewProjLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Summary Description</label>
                <textarea
                  rows={3}
                  required
                  value={newProjSummary}
                  onChange={(e) => setNewProjSummary(e.target.value)}
                  placeholder="Provide brief objective of this intervention..."
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Target Budget (USD)</label>
                  <input
                    type="number"
                    value={newProjTarget}
                    onChange={(e) => setNewProjTarget(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Raised So Far (USD)</label>
                  <input
                    type="number"
                    value={newProjRaised}
                    onChange={(e) => setNewProjRaised(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewProjectModal(false)}
                  className="px-4 py-2 rounded-sm text-slate-700 bg-slate-100 hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-sm font-bold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white transition-colors"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: New Article */}
      {showNewArticleModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl border-t-4 border-[#D4AF37] max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-[#002147] mb-4">Publish Field Story</h3>
            <form onSubmit={handleCreateArticle} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Article Title</label>
                <input
                  type="text"
                  required
                  value={newArtTitle}
                  onChange={(e) => setNewArtTitle(e.target.value)}
                  placeholder="e.g. 50 Students in Temeke Receive Scholastic Support Kits"
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Category</label>
                  <select
                    value={newArtCat}
                    onChange={(e) => setNewArtCat(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="Community Story">Community Story</option>
                    <option value="Education">Education</option>
                    <option value="Youth Empowerment">Youth Empowerment</option>
                    <option value="Announcement">Announcement</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Author Byline</label>
                  <input
                    type="text"
                    value={newArtAuthor}
                    onChange={(e) => setNewArtAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Short Excerpt</label>
                <textarea
                  rows={2}
                  required
                  value={newArtExcerpt}
                  onChange={(e) => setNewArtExcerpt(e.target.value)}
                  placeholder="Summary snippet displayed on cards..."
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Full Article Narrative</label>
                <textarea
                  rows={6}
                  value={newArtContent}
                  onChange={(e) => setNewArtContent(e.target.value)}
                  placeholder="Write the full report..."
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 leading-relaxed focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewArticleModal(false)}
                  className="px-4 py-2 rounded-sm text-slate-700 bg-slate-100 hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-sm font-bold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white transition-colors"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Edit Project */}
      {showEditProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl border-t-4 border-[#D4AF37] max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-[#002147] mb-4">Edit Community Project</h3>
            <form onSubmit={handleSaveEditProject} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={editProjTitle}
                  onChange={(e) => setEditProjTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Pillar</label>
                  <select
                    value={editProjPillar}
                    onChange={(e) => setEditProjPillar(e.target.value as CorePillarId)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="educate">Educate</option>
                    <option value="empower">Empower</option>
                    <option value="inspire">Inspire</option>
                    <option value="transform">Transform</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Execution Status</label>
                  <select
                    value={editProjStatus}
                    onChange={(e) => setEditProjStatus(e.target.value as ProjectStatus)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Region / Location</label>
                  <input
                    type="text"
                    value={editProjLocation}
                    onChange={(e) => setEditProjLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Target Beneficiaries</label>
                  <input
                    type="text"
                    value={editProjBeneficiaries}
                    onChange={(e) => setEditProjBeneficiaries(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Target Budget (USD)</label>
                  <input
                    type="number"
                    value={editProjTarget}
                    onChange={(e) => setEditProjTarget(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Raised Amount (USD)</label>
                  <input
                    type="number"
                    value={editProjRaised}
                    onChange={(e) => setEditProjRaised(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Executive Summary</label>
                <textarea
                  rows={3}
                  value={editProjSummary}
                  onChange={(e) => setEditProjSummary(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 leading-relaxed focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditProjectModal(false)}
                  className="px-4 py-2 rounded-sm text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-sm font-bold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Project Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Edit Article */}
      {showEditArticleModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl border-t-4 border-[#D4AF37] max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-[#002147] mb-4">Edit Field Story</h3>
            <form onSubmit={handleSaveEditArticle} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Article Title</label>
                <input
                  type="text"
                  required
                  value={editArtTitle}
                  onChange={(e) => setEditArtTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Category</label>
                  <select
                    value={editArtCat}
                    onChange={(e) => setEditArtCat(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="Community Story">Community Story</option>
                    <option value="Education">Education</option>
                    <option value="Youth Empowerment">Youth Empowerment</option>
                    <option value="Announcement">Announcement</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Author Byline</label>
                  <input
                    type="text"
                    value={editArtAuthor}
                    onChange={(e) => setEditArtAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Short Excerpt</label>
                <textarea
                  rows={2}
                  required
                  value={editArtExcerpt}
                  onChange={(e) => setEditArtExcerpt(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#002147] uppercase tracking-wider mb-1">Full Article Narrative</label>
                <textarea
                  rows={6}
                  value={editArtContent}
                  onChange={(e) => setEditArtContent(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 leading-relaxed focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditArticleModal(false)}
                  className="px-4 py-2 rounded-sm text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-sm font-bold bg-[#D4AF37] text-[#002147] hover:bg-[#002147] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Story Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
