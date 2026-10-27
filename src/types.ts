/**
 * Rising Hands Organisation (RHO) - Core TypeScript Definitions
 * Non-governmental, non-profit, non-political & community-focused organization in Tanzania.
 * Tagline: "BUILDING BRIGHTER FUTURE TOGETHER"
 */

export type PageId =
  | 'home'
  | 'about'
  | 'programs'
  | 'impact'
  | 'projects'
  | 'news'
  | 'get-involved'
  | 'donate'
  | 'contact'
  | 'admin';

export type Language = 'en' | 'sw';

export type CorePillarId = 'educate' | 'empower' | 'inspire' | 'transform';

export interface CorePillar {
  id: CorePillarId;
  name: string; // e.g. "EDUCATE"
  title: string; // e.g. "Education & Academic Growth"
  tagline: string;
  description: string;
  detailedScope: string[];
  keyActivities: string[];
  targetGroups: string[];
  metricsTarget: string;
  iconName: string;
  accentColor: string;
  imageUrl: string;
}

export interface ImpactStatistic {
  id: string;
  number: string; // e.g. "1,250+"
  label: string; // e.g. "Children Supported"
  description: string;
  category: string;
  icon: string;
  isEditable: boolean;
  lastUpdated: string;
}

export type ProjectStatus = 'active' | 'upcoming' | 'completed';

export interface Project {
  id: string;
  title: string;
  slug: string;
  pillar: CorePillarId;
  status: ProjectStatus;
  location: string; // e.g., "Dar es Salaam, Tanzania", "Arusha Region", "Dodoma"
  targetBeneficiaries: string;
  summary: string;
  fullDescription: string;
  targetBudgetPlaceholder: number; // in USD or TZS equivalent
  raisedAmountPlaceholder: number;
  currency: string;
  startDate: string;
  endDate?: string;
  imageUrl: string;
  keyOutcomes: string[];
  featured: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Community Story' | 'Education' | 'Youth Empowerment' | 'Announcement' | 'Partnership';
  publishDate: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'leadership' | 'board' | 'field' | 'advisor';
  bio: string;
  imageUrl: string;
  emailPlaceholder: string;
  isPlaceholder: boolean;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  pillar: CorePillarId;
  description: string;
  targetAudience: string;
  registrationStatus: 'open' | 'closed' | 'invitation_only';
  capacityPlaceholder: string;
}

export type DonationFrequency = 'one-time' | 'monthly' | 'quarterly' | 'annual';
export type PaymentMethodType = 'mobile_money' | 'bank_transfer' | 'card_gateway';

export interface DonationRecord {
  id: string;
  referenceCode: string; // e.g. "RHO-2026-DON-9481"
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  amount: number;
  currency: 'TZS' | 'USD' | 'EUR' | 'GBP';
  frequency: DonationFrequency;
  designation: string; // e.g. "Where Most Needed", "Children's Education Fund"
  paymentMethod: PaymentMethodType;
  providerDetails?: string; // e.g. "M-Pesa (Vodacom)", "CRDB Bank", "Visa"
  date: string;
  status: 'pledged' | 'confirmed' | 'pending_verification';
  isAnonymous: boolean;
  notes?: string;
}

export interface VolunteerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  cityCountry: string; // e.g. "Dar es Salaam, Tanzania"
  preferredPillar: CorePillarId | 'any';
  skills: string;
  availability: 'weekdays' | 'weekends' | 'flexible' | 'full-time-intern';
  motivation: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'approved';
}

export interface PartnerInquiry {
  id: string;
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  partnerType: 'corporate' | 'ngo_collaborator' | 'government' | 'academic' | 'foundation';
  focusInterest: string;
  proposalDetails: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'partnership_agreed';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  inquiryType: 'general' | 'donation' | 'programs' | 'partnership' | 'media';
  subject: string;
  message: string;
  submittedAt: string;
  isRead: boolean;
  replied: boolean;
}

export interface BankAccountDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  swiftCode: string;
  branch: string;
  currency: 'TZS' | 'USD';
  currencyLabel: string;
}

export interface OrgSettings {
  name: string;
  organizationName?: string;
  acronym: string;
  tagline: string;
  type: string;
  mission: string;
  vision: string;
  registrationNumberPlaceholder: string;
  officialAddressPlaceholder: string;
  addressPlaceholder?: string;
  cityCountry: string;
  primaryEmailPlaceholder: string;
  emailPlaceholder?: string;
  secondaryEmailPlaceholder: string;
  phonePlaceholder: string;
  secondaryPhonePlaceholder: string;
  officeHours: string;
  officeHoursPlaceholder?: string;
  googleMapsEmbedUrl: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  mpesaTillPlaceholder: string;
  mpesaPaybillPlaceholder: string;
  tigopesaTillPlaceholder: string;
  airtelMoneyPlaceholder: string;
  bankAccountTsh: BankAccountDetails;
  bankAccountUsd: BankAccountDetails;
  bankAccountPlaceholder: {
    bankName: string;
    accountName: string;
    accountNumber: string;
    swiftCode: string;
    branch: string;
  };
  notesNotice: string;
}
