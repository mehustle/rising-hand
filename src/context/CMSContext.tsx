import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CorePillar,
  ImpactStatistic,
  Project,
  NewsArticle,
  TeamMember,
  CommunityEvent,
  OrgSettings,
  DonationRecord,
  VolunteerApplication,
  ContactMessage,
  PageId,
  Language
} from '../types';
import { TRANSLATIONS, Translations } from '../translations';
import {
  INITIAL_ORG_SETTINGS,
  INITIAL_PILLARS,
  INITIAL_IMPACT_STATS,
  INITIAL_PROJECTS,
  INITIAL_NEWS,
  INITIAL_TEAM,
  INITIAL_EVENTS,
  INITIAL_DONATIONS,
  INITIAL_VOLUNTEERS,
  INITIAL_MESSAGES
} from '../data/initialData';

interface CMSContextType {
  // Language & Localization
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;

  // Navigation
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  selectedProjectSlug: string | null;
  setSelectedProjectSlug: (slug: string | null) => void;
  selectedArticleSlug: string | null;
  setSelectedArticleSlug: (slug: string | null) => void;

  // Data Collections
  settings: OrgSettings;
  pillars: CorePillar[];
  impactStats: ImpactStatistic[];
  projects: Project[];
  news: NewsArticle[];
  team: TeamMember[];
  events: CommunityEvent[];
  donations: DonationRecord[];
  volunteers: VolunteerApplication[];
  contactMessages: ContactMessage[];

  // Admin Auth
  isAdminLoggedIn: boolean;
  adminLogin: (pin: string) => boolean;
  adminLogout: () => void;

  // Actions for Impact Statistics
  updateImpactStat: (id: string, updated: Partial<ImpactStatistic>) => void;
  addImpactStat: (stat: Omit<ImpactStatistic, 'id'>) => void;
  deleteImpactStat: (id: string) => void;

  // Actions for Projects
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  // Actions for Programs
  updateProgram: (id: string, updated: Partial<CorePillar>) => void;

  // Actions for News
  addNewsArticle: (article: Omit<NewsArticle, 'id'>) => void;
  updateNewsArticle: (id: string, updated: Partial<NewsArticle>) => void;
  deleteNewsArticle: (id: string) => void;

  // Actions for Team Members
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  updateTeamMember: (id: string, updated: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;

  // Actions for Events
  addEvent: (event: Omit<CommunityEvent, 'id'>) => void;
  updateEvent: (id: string, updated: Partial<CommunityEvent>) => void;
  deleteEvent: (id: string) => void;

  // Actions for Donations
  addDonationRecord: (record: Omit<DonationRecord, 'id' | 'referenceCode' | 'date'>) => DonationRecord;
  updateDonationStatus: (id: string, status: DonationRecord['status']) => void;

  // Actions for Volunteers
  addVolunteerApplication: (app: Omit<VolunteerApplication, 'id' | 'submittedAt' | 'status'>) => void;
  updateVolunteerStatus: (id: string, status: VolunteerApplication['status']) => void;

  // Actions for Contact Messages
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'submittedAt' | 'isRead' | 'replied'>) => void;
  markContactAsRead: (id: string) => void;
  markContactAsReplied: (id: string) => void;
  deleteContactMessage: (id: string) => void;

  // Org Settings
  updateOrgSettings: (updated: Partial<OrgSettings>) => void;
  updateSettings: (updated: Partial<OrgSettings>) => void;

  // Maintenance & Portability
  resetAllToDefault: () => void;
  resetToDefaults: () => void;
  exportDatabaseJSON: () => string;
  importDatabaseJSON: (jsonString: string) => boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SETTINGS: 'rho_org_settings_v1',
  PILLARS: 'rho_pillars_v1',
  STATS: 'rho_impact_stats_v1',
  PROJECTS: 'rho_projects_v1',
  NEWS: 'rho_news_v1',
  TEAM: 'rho_team_v1',
  EVENTS: 'rho_events_v1',
  DONATIONS: 'rho_donations_v1',
  VOLUNTEERS: 'rho_volunteers_v1',
  MESSAGES: 'rho_messages_v1',
  ADMIN_AUTH: 'rho_admin_auth_v1',
  LANGUAGE: 'rho_lang_preference_v1'
};

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language & Localization state (defaults to 'en', supports 'sw' Swahili)
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
      if (saved === 'sw' || saved === 'en') return saved;
    } catch {
      // Fallback
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    } catch (e) {
      console.error('Error saving language preference', e);
    }
  };

  const t = TRANSLATIONS[language];

  // Navigation state
  const [currentPage, setCurrentPageState] = useState<PageId>('home');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);

  // Scroll to top upon page navigation
  const setCurrentPage = (page: PageId) => {
    setCurrentPageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admin Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  });

  const adminLogin = (pin: string) => {
    // Default admin PIN is 2026 or rho-admin
    if (pin === '2026' || pin === 'rho-admin' || pin === 'admin') {
      setIsAdminLoggedIn(true);
      try {
        localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      } catch (e) {
        console.error(e);
      }
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    } catch (e) {
      console.error(e);
    }
  };

  // Helpers to initialize state from localStorage
  const loadState = <T,>(key: string, fallback: T): T => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return fallback;
      const parsed = JSON.parse(item);
      if (typeof fallback === 'object' && fallback !== null && !Array.isArray(fallback)) {
        return { ...fallback, ...parsed };
      }
      return parsed;
    } catch (e) {
      console.error(`Error loading state for ${key}`, e);
      return fallback;
    }
  };

  const saveState = <T,>(key: string, data: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Error saving state for ${key}`, e);
    }
  };

  // State definitions
  const [settings, setSettings] = useState<OrgSettings>(() => {
    const raw = loadState(STORAGE_KEYS.SETTINGS, INITIAL_ORG_SETTINGS);
    return {
      ...INITIAL_ORG_SETTINGS,
      ...raw,
      bankAccountTsh: {
        ...INITIAL_ORG_SETTINGS.bankAccountTsh,
        ...(raw.bankAccountTsh || {})
      },
      bankAccountUsd: {
        ...INITIAL_ORG_SETTINGS.bankAccountUsd,
        ...(raw.bankAccountUsd || {})
      },
      bankAccountPlaceholder: {
        ...INITIAL_ORG_SETTINGS.bankAccountPlaceholder,
        ...(raw.bankAccountPlaceholder || {})
      },
      socialLinks: {
        ...INITIAL_ORG_SETTINGS.socialLinks,
        ...(raw.socialLinks || {})
      }
    };
  });
  const [pillars, setPillars] = useState<CorePillar[]>(() => loadState(STORAGE_KEYS.PILLARS, INITIAL_PILLARS));
  const [impactStats, setImpactStats] = useState<ImpactStatistic[]>(() =>
    loadState(STORAGE_KEYS.STATS, INITIAL_IMPACT_STATS)
  );
  const [projects, setProjects] = useState<Project[]>(() => loadState(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS));
  const [news, setNews] = useState<NewsArticle[]>(() => loadState(STORAGE_KEYS.NEWS, INITIAL_NEWS));
  const [team, setTeam] = useState<TeamMember[]>(() => loadState(STORAGE_KEYS.TEAM, INITIAL_TEAM));
  const [events, setEvents] = useState<CommunityEvent[]>(() => loadState(STORAGE_KEYS.EVENTS, INITIAL_EVENTS));
  const [donations, setDonations] = useState<DonationRecord[]>(() =>
    loadState(STORAGE_KEYS.DONATIONS, INITIAL_DONATIONS)
  );
  const [volunteers, setVolunteers] = useState<VolunteerApplication[]>(() =>
    loadState(STORAGE_KEYS.VOLUNTEERS, INITIAL_VOLUNTEERS)
  );
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() =>
    loadState(STORAGE_KEYS.MESSAGES, INITIAL_MESSAGES)
  );

  // Sync to localStorage
  useEffect(() => saveState(STORAGE_KEYS.SETTINGS, settings), [settings]);
  useEffect(() => saveState(STORAGE_KEYS.PILLARS, pillars), [pillars]);
  useEffect(() => saveState(STORAGE_KEYS.STATS, impactStats), [impactStats]);
  useEffect(() => saveState(STORAGE_KEYS.PROJECTS, projects), [projects]);
  useEffect(() => saveState(STORAGE_KEYS.NEWS, news), [news]);
  useEffect(() => saveState(STORAGE_KEYS.TEAM, team), [team]);
  useEffect(() => saveState(STORAGE_KEYS.EVENTS, events), [events]);
  useEffect(() => saveState(STORAGE_KEYS.DONATIONS, donations), [donations]);
  useEffect(() => saveState(STORAGE_KEYS.VOLUNTEERS, volunteers), [volunteers]);
  useEffect(() => saveState(STORAGE_KEYS.MESSAGES, contactMessages), [contactMessages]);

  // Actions for Impact Statistics
  const updateImpactStat = (id: string, updated: Partial<ImpactStatistic>) => {
    setImpactStats((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updated, lastUpdated: new Date().toLocaleDateString('en-GB') } : s))
    );
  };

  const addImpactStat = (stat: Omit<ImpactStatistic, 'id'>) => {
    const newStat: ImpactStatistic = {
      ...stat,
      id: `stat-${Date.now()}`,
      lastUpdated: new Date().toLocaleDateString('en-GB')
    };
    setImpactStats((prev) => [...prev, newStat]);
  };

  const deleteImpactStat = (id: string) => {
    setImpactStats((prev) => prev.filter((s) => s.id !== id));
  };

  // Actions for Projects
  const addProject = (proj: Omit<Project, 'id'>) => {
    const newProj: Project = {
      ...proj,
      id: `proj-${Date.now()}`
    };
    setProjects((prev) => [newProj, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  // Actions for Programs
  const updateProgram = (id: string, updated: Partial<CorePillar>) => {
    setPillars((prev) => prev.map((prog) => (prog.id === id ? { ...prog, ...updated } : prog)));
  };

  // Actions for News
  const addNewsArticle = (article: Omit<NewsArticle, 'id'>) => {
    const newArticle: NewsArticle = {
      ...article,
      id: `news-${Date.now()}`
    };
    setNews((prev) => [newArticle, ...prev]);
  };

  const updateNewsArticle = (id: string, updated: Partial<NewsArticle>) => {
    setNews((prev) => prev.map((a) => (a.id === id ? { ...a, ...updated } : a)));
  };

  const deleteNewsArticle = (id: string) => {
    setNews((prev) => prev.filter((a) => a.id !== id));
  };

  // Actions for Team Members
  const addTeamMember = (member: Omit<TeamMember, 'id'>) => {
    const newMember: TeamMember = {
      ...member,
      id: `team-${Date.now()}`
    };
    setTeam((prev) => [...prev, newMember]);
  };

  const updateTeamMember = (id: string, updated: Partial<TeamMember>) => {
    setTeam((prev) => prev.map((m) => (m.id === id ? { ...m, ...updated } : m)));
  };

  const deleteTeamMember = (id: string) => {
    setTeam((prev) => prev.filter((m) => m.id !== id));
  };

  // Actions for Events
  const addEvent = (event: Omit<CommunityEvent, 'id'>) => {
    const newEvent: CommunityEvent = {
      ...event,
      id: `evt-${Date.now()}`
    };
    setEvents((prev) => [newEvent, ...prev]);
  };

  const updateEvent = (id: string, updated: Partial<CommunityEvent>) => {
    setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, ...updated } : e)));
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  // Actions for Donations
  const addDonationRecord = (
    record: Omit<DonationRecord, 'id' | 'referenceCode' | 'date'>
  ): DonationRecord => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newDonation: DonationRecord = {
      ...record,
      id: `don-${Date.now()}`,
      referenceCode: `RHO-${new Date().getFullYear()}-DON-${randomSuffix}`,
      date: new Date().toISOString().split('T')[0]
    };
    setDonations((prev) => [newDonation, ...prev]);
    return newDonation;
  };

  const updateDonationStatus = (id: string, status: DonationRecord['status']) => {
    setDonations((prev) => prev.map((d) => (d.id === id ? { ...d, status } : d)));
  };

  // Actions for Volunteers
  const addVolunteerApplication = (app: Omit<VolunteerApplication, 'id' | 'submittedAt' | 'status'>) => {
    const newVol: VolunteerApplication = {
      ...app,
      id: `vol-${Date.now()}`,
      submittedAt: new Date().toLocaleString(),
      status: 'pending'
    };
    setVolunteers((prev) => [newVol, ...prev]);
  };

  const updateVolunteerStatus = (id: string, status: VolunteerApplication['status']) => {
    setVolunteers((prev) => prev.map((v) => (v.id === id ? { ...v, status } : v)));
  };

  // Actions for Contact Messages
  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'submittedAt' | 'isRead' | 'replied'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      submittedAt: new Date().toLocaleString(),
      isRead: false,
      replied: false
    };
    setContactMessages((prev) => [newMsg, ...prev]);
  };

  const markContactAsRead = (id: string) => {
    setContactMessages((prev) => prev.map((m) => (m.id === id ? { ...m, isRead: true } : m)));
  };

  const markContactAsReplied = (id: string) => {
    setContactMessages((prev) => prev.map((m) => (m.id === id ? { ...m, replied: true } : m)));
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages((prev) => prev.filter((m) => m.id !== id));
  };

  // Org Settings
  const updateOrgSettings = (updated: Partial<OrgSettings>) => {
    setSettings((prev) => {
      const next: OrgSettings = { ...prev, ...updated };
      // Keep aliases perfectly synchronized across the application
      if (updated.emailPlaceholder) {
        next.primaryEmailPlaceholder = updated.emailPlaceholder;
      }
      if (updated.primaryEmailPlaceholder) {
        next.emailPlaceholder = updated.primaryEmailPlaceholder;
      }
      if (updated.addressPlaceholder) {
        next.officialAddressPlaceholder = updated.addressPlaceholder;
      }
      if (updated.officialAddressPlaceholder) {
        next.addressPlaceholder = updated.officialAddressPlaceholder;
      }
      if (updated.organizationName) {
        next.name = updated.organizationName;
      }
      if (updated.name) {
        next.organizationName = updated.name;
      }
      if (updated.officeHoursPlaceholder) {
        next.officeHours = updated.officeHoursPlaceholder;
      }
      if (updated.officeHours) {
        next.officeHoursPlaceholder = updated.officeHours;
      }
      if (updated.bankAccountTsh) {
        next.bankAccountTsh = {
          ...prev.bankAccountTsh,
          ...updated.bankAccountTsh
        };
      }
      if (updated.bankAccountUsd) {
        next.bankAccountUsd = {
          ...prev.bankAccountUsd,
          ...updated.bankAccountUsd
        };
      }
      if (updated.bankAccountPlaceholder) {
        next.bankAccountPlaceholder = {
          ...prev.bankAccountPlaceholder,
          ...updated.bankAccountPlaceholder
        };
      }
      if (updated.socialLinks) {
        next.socialLinks = {
          ...prev.socialLinks,
          ...updated.socialLinks
        };
      }
      // Guarantee immediate synchronous persistence to localStorage
      try {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(next));
      } catch (err) {
        console.error('Error writing settings to localStorage', err);
      }
      return next;
    });
  };

  // Reset to default seed data
  const resetAllToDefault = () => {
    setSettings(INITIAL_ORG_SETTINGS);
    setPillars(INITIAL_PILLARS);
    setImpactStats(INITIAL_IMPACT_STATS);
    setProjects(INITIAL_PROJECTS);
    setNews(INITIAL_NEWS);
    setTeam(INITIAL_TEAM);
    setEvents(INITIAL_EVENTS);
    setDonations(INITIAL_DONATIONS);
    setVolunteers(INITIAL_VOLUNTEERS);
    setContactMessages(INITIAL_MESSAGES);
    try {
      localStorage.removeItem(STORAGE_KEYS.SETTINGS);
      localStorage.removeItem(STORAGE_KEYS.PILLARS);
      localStorage.removeItem(STORAGE_KEYS.STATS);
      localStorage.removeItem(STORAGE_KEYS.PROJECTS);
      localStorage.removeItem(STORAGE_KEYS.NEWS);
      localStorage.removeItem(STORAGE_KEYS.TEAM);
      localStorage.removeItem(STORAGE_KEYS.EVENTS);
      localStorage.removeItem(STORAGE_KEYS.DONATIONS);
      localStorage.removeItem(STORAGE_KEYS.VOLUNTEERS);
      localStorage.removeItem(STORAGE_KEYS.MESSAGES);
    } catch (e) {
      console.error('Error resetting defaults', e);
    }
  };

  // Export & Import Database JSON
  const exportDatabaseJSON = (): string => {
    const exportData = {
      exportedAt: new Date().toISOString(),
      version: '1.0',
      settings,
      pillars,
      impactStats,
      projects,
      news,
      team,
      events,
      donations,
      volunteers,
      contactMessages
    };
    return JSON.stringify(exportData, null, 2);
  };

  const importDatabaseJSON = (jsonString: string): boolean => {
    try {
      const data = JSON.parse(jsonString);
      if (data.settings) setSettings(data.settings);
      if (data.pillars) setPillars(data.pillars);
      if (data.impactStats) setImpactStats(data.impactStats);
      if (data.projects) setProjects(data.projects);
      if (data.news) setNews(data.news);
      if (data.team) setTeam(data.team);
      if (data.events) setEvents(data.events);
      if (data.donations) setDonations(data.donations);
      if (data.volunteers) setVolunteers(data.volunteers);
      if (data.contactMessages) setContactMessages(data.contactMessages);
      return true;
    } catch (err) {
      console.error('Invalid JSON import payload', err);
      return false;
    }
  };

  return (
    <CMSContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentPage,
        setCurrentPage,
        selectedProjectSlug,
        setSelectedProjectSlug,
        selectedArticleSlug,
        setSelectedArticleSlug,
        settings,
        pillars,
        impactStats,
        projects,
        news,
        team,
        events,
        donations,
        volunteers,
        contactMessages,
        isAdminLoggedIn,
        adminLogin,
        adminLogout,
        updateImpactStat,
        addImpactStat,
        deleteImpactStat,
        addProject,
        updateProject,
        deleteProject,
        updateProgram,
        addNewsArticle,
        updateNewsArticle,
        deleteNewsArticle,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        addEvent,
        updateEvent,
        deleteEvent,
        addDonationRecord,
        updateDonationStatus,
        addVolunteerApplication,
        updateVolunteerStatus,
        addContactMessage,
        markContactAsRead,
        markContactAsReplied,
        deleteContactMessage,
        updateOrgSettings,
        updateSettings: updateOrgSettings,
        resetAllToDefault,
        resetToDefaults: resetAllToDefault,
        exportDatabaseJSON,
        importDatabaseJSON
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
