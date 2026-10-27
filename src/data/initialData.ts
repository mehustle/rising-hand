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
  ContactMessage
} from '../types';

export const INITIAL_ORG_SETTINGS: OrgSettings = {
  name: 'Rising Hands Organisation',
  organizationName: 'Rising Hands Organisation',
  acronym: 'RHO',
  tagline: 'BUILDING BRIGHTER FUTURE TOGETHER',
  type: 'Non-governmental, non-profit, non-political and community-focused organization',
  mission:
    'To educate, empower and inspire children, youth, women and vulnerable communities through education, skills development, entrepreneurship, mentorship, social support and community development.',
  vision:
    'A society where every child, young person and vulnerable community member has the opportunity, support and resources to build a better future.',
  registrationNumberPlaceholder: '[Pending Official Disclosure - NGO Registration No. Placeholder]',
  officialAddressPlaceholder: 'Plot 42, Kijitonyama / Kinondoni Municipal District',
  addressPlaceholder: 'Plot 42, Kijitonyama / Kinondoni Municipal District',
  cityCountry: 'Dar es Salaam, Tanzania',
  primaryEmailPlaceholder: 'info@risinghandsorganisation.org',
  emailPlaceholder: 'info@risinghandsorganisation.org',
  secondaryEmailPlaceholder: 'partnerships@risinghandsorganisation.org',
  phonePlaceholder: '+255 (0) 700 000 000',
  secondaryPhonePlaceholder: '+255 (0) 222 000 000',
  officeHours: 'Monday – Friday: 8:30 AM – 5:00 PM EAT (Closed on Tanzanian Public Holidays)',
  officeHoursPlaceholder: 'Monday – Friday: 8:30 AM – 5:00 PM EAT (Closed on Tanzanian Public Holidays)',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126744.4239853907!2d39.2083284!3d-6.792354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b266086a152!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz',
  socialLinks: {
    facebook: 'https://facebook.com/risinghandsorganisation',
    twitter: 'https://twitter.com/risinghands_rho',
    instagram: 'https://instagram.com/risinghandsorganisation',
    linkedin: 'https://linkedin.com/company/rising-hands-organisation',
    youtube: 'https://youtube.com/@risinghandsorganisation'
  },
  mpesaTillPlaceholder: '5429108 (Vodacom M-Pesa Buy Goods Placeholder)',
  mpesaPaybillPlaceholder: 'Business No: 900200 | Acc: RHO-DONATION',
  tigopesaTillPlaceholder: '892100 (Tigo Pesa Lipa Namba Placeholder)',
  airtelMoneyPlaceholder: '410022 (Airtel Money Merchant Placeholder)',
  bankAccountTsh: {
    bankName: 'CRDB Bank Plc (Tanzania)',
    accountName: 'RISING HANDS ORGANISATION (RHO)',
    accountNumber: '0150392817200',
    swiftCode: 'CORUTZTZXXX',
    branch: 'Dar es Salaam Corporate Branch, Tanzania',
    currency: 'TZS',
    currencyLabel: 'TSH (Tanzanian Shillings - Local Interbank & TISS)'
  },
  bankAccountUsd: {
    bankName: 'CRDB Bank Plc (Tanzania)',
    accountName: 'RISING HANDS ORGANISATION (RHO)',
    accountNumber: '0250392817201',
    swiftCode: 'CORUTZTZXXX',
    branch: 'Dar es Salaam Corporate Branch, Tanzania',
    currency: 'USD',
    currencyLabel: 'USD (US Dollars - International SWIFT Wire)'
  },
  bankAccountPlaceholder: {
    bankName: 'CRDB Bank Plc (Tanzania)',
    accountName: 'RISING HANDS ORGANISATION (RHO)',
    accountNumber: '0150392817200 (TSH) / 0250392817201 (USD)',
    swiftCode: 'CORUTZTZXXX',
    branch: 'Dar es Salaam Corporate Branch, Tanzania'
  },
  notesNotice:
    'Notice: Official registration certificates, government filings, and audited annual reports will be published here upon final verification by the RHO Board of Directors.'
};

export const INITIAL_PILLARS: CorePillar[] = [
  {
    id: 'educate',
    name: 'EDUCATE',
    title: 'Education, Literacy & Scholarships',
    tagline: 'Nurturing bright minds through equitable learning and modern tools.',
    description:
      'We dismantle barriers to primary and secondary education for children from disadvantaged families, providing school materials, tuition sponsorships, digital literacy, reading clubs, and academic mentorship.',
    detailedScope: [
      'Scholarship support for orphans and vulnerable children in Tanzania',
      'Distribution of essential school kits: uniforms, textbooks, backpacks, and solar lamps',
      'Community digital literacy labs introducing basic computing and internet skills',
      'After-school reading clubs and numeracy clinics in underserved wards',
      'Secondary school career guidance and higher education advisory workshops'
    ],
    keyActivities: [
      'Scholarship & School Fees Support',
      'Back-to-School Learning Materials Kits',
      'Digital Literacy & Computer Basics Hubs',
      'Volunteer Teacher & Peer Mentorship Clinics'
    ],
    targetGroups: ['Primary & Secondary Pupils', 'Disadvantaged Students', 'Orphans & Vulnerable Children (OVC)'],
    metricsTarget: '1,500+ Students Targeted',
    iconName: 'GraduationCap',
    accentColor: '#1E40AF',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'empower',
    name: 'EMPOWER',
    title: 'Youth Skills, Vocational Training & Livelihoods',
    tagline: 'Equipping youth and women with practical economic independence.',
    description:
      'Youth unemployment and lack of technical skills hinder community growth. We deliver market-relevant vocational apprenticeships, digital skills, women micro-enterprise mentorship, and seed grants.',
    detailedScope: [
      'Practical vocational training: tailoring, carpentry, electrical installation, and phone repair',
      'Women and youth micro-business incubation and savings groups (VICOBA)',
      'Digital freelancing, graphic design, and basic coding bootcamps for out-of-school youth',
      'Financial literacy, bookkeeping, and cooperative formation training',
      'Micro-equipment grant kits for graduates to kickstart self-employment'
    ],
    keyActivities: [
      'Vocational Apprenticeship Hubs',
      'Women Small Business Seed Mentorship',
      'Youth Tech & Digital Skills Labs',
      'Financial Literacy & Village Savings (VICOBA)'
    ],
    targetGroups: ['Unemployed Youth', 'Young Mothers & Women Entrepreneurs', 'Informal Sector Workers'],
    metricsTarget: '1,000+ Young People & Women',
    iconName: 'Wrench',
    accentColor: '#B45309',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'inspire',
    name: 'INSPIRE',
    title: 'Leadership, Sports & Talent Development',
    tagline: 'Igniting confidence, creative expression, and ethical character.',
    description:
      'We empower young people to discover their voice, build character through sports and teamwork, express their creativity through cultural arts, and become ethical changemakers in their communities.',
    detailedScope: [
      'Community youth sports leagues (football, netball, athletics) fostering discipline and unity',
      'Youth Leadership Academy building communication, conflict resolution, and civic responsibility',
      'Creative arts, spoken word, music, and cultural storytelling forums',
      'Peer-to-peer life skills and adolescent reproductive health awareness sessions',
      'Talent showcases connecting gifted youth to national mentors and opportunities'
    ],
    keyActivities: [
      'RHO Community Sports Cups & Leagues',
      'Youth Leadership & Civic Responsibility Labs',
      'Creative Arts & Cultural Expression Workshops',
      'Peer Mentorship & Life Skills Seminars'
    ],
    targetGroups: ['Adolescents & Young Adults', 'Aspiring Young Artists & Athletes', 'Community Youth Leaders'],
    metricsTarget: '800+ Active Youth Participants',
    iconName: 'Sparkles',
    accentColor: '#D97706',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'transform',
    name: 'TRANSFORM',
    title: 'Community Development & Social Support',
    tagline: 'Uplifting vulnerable families and restoring sustainable dignity.',
    description:
      'Sustainable transformation requires holistic community wellbeing. We support vulnerable families with emergency nutritional relief, clean water access, disability inclusion, and environmental conservation.',
    detailedScope: [
      'Emergency food baskets and nutritional support for child-headed and vulnerable households',
      'Clean water, sanitation, and hygiene (WASH) installations in peri-urban and rural schools',
      'Advocacy, mobility aids, and inclusive access programs for persons with disabilities',
      'Community tree-planting and environmental climate resilience clubs',
      'Child protection and anti-gender-based violence community sensitisation drives'
    ],
    keyActivities: [
      'Vulnerable Families Emergency Relief Packs',
      'Community Clean Water & School WASH Projects',
      'Disability Inclusion & Assistive Devices Support',
      'Green Communities Tree Planting & Conservation'
    ],
    targetGroups: ['Vulnerable Families', 'Persons with Disabilities', 'Underserved Communities', 'Elderly Caretakers'],
    metricsTarget: '50+ Underserved Villages & Wards',
    iconName: 'HeartHandshake',
    accentColor: '#0F766E',
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop'
  }
];

export const INITIAL_IMPACT_STATS: ImpactStatistic[] = [
  {
    id: 'stat-children',
    number: '1,250+',
    label: 'Children Supported',
    description: 'Provided with school uniforms, textbooks, scholarship fees, and academic kits.',
    category: 'Education',
    icon: 'GraduationCap',
    isEditable: true,
    lastUpdated: 'August 2026'
  },
  {
    id: 'stat-youth',
    number: '840+',
    label: 'Young People Empowered',
    description: 'Trained in technical vocational skills, digital literacy, and entrepreneurship.',
    category: 'Livelihoods',
    icon: 'TrendingUp',
    isEditable: true,
    lastUpdated: 'August 2026'
  },
  {
    id: 'stat-communities',
    number: '38+',
    label: 'Communities Reached',
    description: 'Active grassroots partnerships across wards and rural villages in Tanzania.',
    category: 'Reach',
    icon: 'MapPin',
    isEditable: true,
    lastUpdated: 'August 2026'
  },
  {
    id: 'stat-projects',
    number: '14',
    label: 'Projects Delivered',
    description: 'High-impact community development and youth initiatives successfully conducted.',
    category: 'Delivery',
    icon: 'Award',
    isEditable: true,
    lastUpdated: 'August 2026'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-scholarships',
    title: 'Bright Horizons: 2026 Student Learning Kits & Scholarship Drive',
    slug: 'bright-horizons-student-scholarships',
    pillar: 'educate',
    status: 'active',
    location: 'Kinondoni & Temeke Districts, Dar es Salaam',
    targetBeneficiaries: '350 Primary & Secondary students from ultra-poor households',
    summary: 'Distributing complete annual school supply kits, text books, uniforms, and covering tuition exam levies.',
    fullDescription:
      'Education remains the most reliable pathway out of intergenerational poverty. In urban peri-urban settlements in Dar es Salaam, numerous children drop out because families cannot afford exercise books, school uniforms, and mandatory exam fees. Bright Horizons bridges this critical gap by providing comprehensive educational kits and securing enrolment for the academic year.',
    targetBudgetPlaceholder: 18500,
    raisedAmountPlaceholder: 12400,
    currency: 'USD',
    startDate: '2026-01-15',
    endDate: '2026-12-31',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
    keyOutcomes: [
      '350 Students enrolled and equipped with full scholastic kits',
      'Zero dropout rate among sponsored cohort in target schools',
      'Termly academic progress tracking and volunteer teacher tutoring'
    ],
    featured: true
  },
  {
    id: 'proj-vocational-hub',
    title: 'Youth FutureCraft: Community Carpentry & Tailoring Apprenticeships',
    slug: 'youth-futurecraft-vocational-apprenticeships',
    pillar: 'empower',
    status: 'active',
    location: 'Pwani & Dar es Salaam Border Region',
    targetBeneficiaries: '120 Out-of-school young women and men aged 18–24',
    summary: 'Delivering hands-on vocational technical certification and starter toolkits for sustainable self-employment.',
    fullDescription:
      'Young people without formal diplomas often struggle to find dignified income opportunities. The Youth FutureCraft project links youth with certified master craftspeople in tailoring, carpentry, and electrical repair, supplemented with business management and financial literacy modules.',
    targetBudgetPlaceholder: 24000,
    raisedAmountPlaceholder: 16800,
    currency: 'USD',
    startDate: '2026-03-01',
    endDate: '2026-11-30',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    keyOutcomes: [
      '120 Apprentices completing 6-month certified technical modules',
      'Graduates receive subsidized startup micro-kits to establish workshops',
      'Ongoing business advisory network through local micro-finance mentors'
    ],
    featured: true
  },
  {
    id: 'proj-clean-water',
    title: 'Maji Safi kwa Afya: School & Community Clean Water Points',
    slug: 'maji-safi-clean-water-points',
    pillar: 'transform',
    status: 'active',
    location: 'Bagamoyo Peri-Urban Wards, Tanzania',
    targetBeneficiaries: '1,800 Schoolchildren and 3 surrounding village communities',
    summary: 'Installing solar-powered borehole water filtration tanks and modern handwashing sanitation stations.',
    fullDescription:
      'Water-borne diseases are a primary cause of school absenteeism among Tanzanian primary pupils. Maji Safi installs reliable water storage, solar pumping, and hygienic filtration units in partner schools, with community water access points managed by a joint parent-teacher committee.',
    targetBudgetPlaceholder: 15000,
    raisedAmountPlaceholder: 9500,
    currency: 'USD',
    startDate: '2026-02-10',
    endDate: '2026-09-30',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop',
    keyOutcomes: [
      'Two solar-powered water filtration systems installed',
      'Daily clean drinking water for 1,800 children during school hours',
      '65% reduction in reported water-borne health complaints'
    ],
    featured: true
  },
  {
    id: 'proj-sports-leadership',
    title: 'Rise & Play: Community Youth Sports & Leadership League',
    slug: 'rise-and-play-youth-sports-league',
    pillar: 'inspire',
    status: 'upcoming',
    location: 'Ilala & Kinondoni Communities, Dar es Salaam',
    targetBeneficiaries: '400 Adolescent boys and girls',
    summary: 'Leveraging football and netball leagues to provide peer mentorship, life skills, and anti-substance guidance.',
    fullDescription:
      'Sports bring diverse youth together, instill discipline, and keep vulnerable young people actively engaged. Rise & Play combines weekend football and netball tournaments with interactive workshops on leadership, conflict resolution, mental health, and civic engagement.',
    targetBudgetPlaceholder: 12000,
    raisedAmountPlaceholder: 4200,
    currency: 'USD',
    startDate: '2026-09-15',
    endDate: '2027-02-28',
    imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1200&auto=format&fit=crop',
    keyOutcomes: [
      '16 Community youth teams equipped with kit, balls, and certified coaches',
      'Weekly peer-led life skills workshops embedded into training',
      'Annual community solidarity championship event'
    ],
    featured: false
  },
  {
    id: 'proj-women-seed',
    title: 'Wanawake Jasiri: Women Micro-Enterprise Seed Support',
    slug: 'wanawake-jasiri-women-micro-enterprise',
    pillar: 'empower',
    status: 'completed',
    location: 'Mbagala & Charambe Wards, Dar es Salaam',
    targetBeneficiaries: '85 Single mothers and female household heads',
    summary: 'Provided business training, seed grants, and established 4 community savings & loan groups (VICOBA).',
    fullDescription:
      'When you empower a woman, an entire family is lifted out of poverty. The Wanawake Jasiri initiative supported vulnerable female household heads with training in food processing, boutique retailing, and financial literacy, paired with seed capital revolving grants.',
    targetBudgetPlaceholder: 10000,
    raisedAmountPlaceholder: 10000,
    currency: 'USD',
    startDate: '2025-06-01',
    endDate: '2026-03-31',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    keyOutcomes: [
      '85 Women completed financial management training',
      '4 Independent savings groups established and currently operating',
      'Average household disposable income increased by 78%'
    ],
    featured: false
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'RHO Launches Digital Literacy Hub to Equip Underprivileged Tanzanian Youth',
    slug: 'rho-launches-digital-literacy-hub',
    category: 'Education',
    publishDate: 'August 18, 2026',
    author: 'RHO Communications Desk',
    excerpt:
      'A new solar-powered digital training centre opens its doors in Dar es Salaam, bringing computer access and fundamental digital skills to over 200 youths this semester.',
    content:
      'In an era defined by technology, digital literacy is no longer a luxury—it is an essential bridge to employment, higher education, and entrepreneurship.\n\nRising Hands Organisation (RHO) is proud to unveil its Community Digital Literacy Hub in Dar es Salaam. Equipped with 25 desktop workstations, solar backup power, and reliable learning software, the centre offers free after-school courses in typing, office productivity tools, online safety, and intro to coding.\n\n"Our goal is to ensure that no child or youth in our community is left behind in the digital age simply because their family cannot afford a computer," stated the RHO Programs Lead at the opening orientation.\n\nClasses will run Monday through Saturday with volunteer instructors from local universities supporting the cohort.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Digital Literacy', 'Youth', 'Education', 'Tanzania'],
    readTime: '3 min read',
    featured: true
  },
  {
    id: 'news-2',
    title: 'From Vocational Training to Self-Reliance: Neema’s Inspiring Journey',
    slug: 'neemas-inspiring-journey-vocational-skills',
    category: 'Community Story',
    publishDate: 'August 04, 2026',
    author: 'Field Impact Officer',
    excerpt:
      'After completing RHO’s 6-month tailoring apprenticeship and receiving a sewing machine grant, 21-year-old Neema now runs her own tailoring studio supporting her siblings.',
    content:
      'Two years ago, 21-year-old Neema was struggling to provide for her two younger siblings following the loss of their parents. Unable to continue formal secondary education, opportunities appeared scarce.\n\nThrough RHO’s EMPOWER pillar, Neema was enrolled in the Youth FutureCraft apprenticeship program. Under the guidance of an experienced master tailor, she mastered garment construction, pattern drafting, and basic accounting.\n\nUpon graduation, Neema was awarded a micro-grant toolkit including a sewing machine and basic fabric inventory.\n\nToday, Neema’s small workshop in Dar es Salaam produces school uniforms, dresses, and custom designs for community members. "RHO gave me not just skills, but the belief that I could change our destiny," she says with pride. "Now, both of my younger siblings are back in school."',
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Empowerment', 'Success Story', 'Vocational Skills', 'Women in Business'],
    readTime: '4 min read',
    featured: true
  },
  {
    id: 'news-3',
    title: 'Preparations Underway for 2026 Back-to-School Distribution Campaign',
    slug: 'preparations-underway-back-to-school-2026',
    category: 'Announcement',
    publishDate: 'July 26, 2026',
    author: 'RHO Operations Team',
    excerpt:
      'Volunteers and community leaders gather to pack scholastic kits for over 350 disadvantaged primary school students across target wards.',
    content:
      'With the upcoming academic term approaching, Rising Hands Organisation has commenced procurement and assembly of educational materials for vulnerable children identified through local ward social welfare desks.\n\nEach package contains school uniforms, durable leather shoes, mathematical sets, notebooks, pens, and solar study lamps for students residing in homes without electricity grid connections.\n\nRHO expresses profound gratitude to community volunteers, individual donors, and local partners whose continuous support makes this annual drive possible.',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop',
    tags: ['Scholarships', 'School Supplies', 'Community Action'],
    readTime: '2 min read',
    featured: false
  }
];

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: '[Executive Director Placeholder]',
    role: 'Executive Director & Founder',
    category: 'leadership',
    bio: 'Dedicated Tanzanian community development advocate with extensive grassroots experience in youth leadership, educational non-profits, and vulnerable community empowerment.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    emailPlaceholder: 'director@risinghandsorganisation.org',
    isPlaceholder: true
  },
  {
    id: 'team-2',
    name: '[Head of Programs Placeholder]',
    role: 'Head of Programs & Strategy',
    category: 'leadership',
    bio: 'Oversees the operational execution of RHO’s four core pillars (Educate, Empower, Inspire, Transform), monitoring field impact and community partner relationships.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    emailPlaceholder: 'programs@risinghandsorganisation.org',
    isPlaceholder: true
  },
  {
    id: 'team-3',
    name: '[Community Outreach Lead Placeholder]',
    role: 'Community Outreach & Volunteer Lead',
    category: 'field',
    bio: 'Coordinates ward-level community mobilization, volunteer induction, and liaison with local community elders, schools, and vulnerable family heads.',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
    emailPlaceholder: 'outreach@risinghandsorganisation.org',
    isPlaceholder: true
  },
  {
    id: 'team-4',
    name: '[Child Safeguarding Officer Placeholder]',
    role: 'Child Safeguarding & Social Support Officer',
    category: 'field',
    bio: 'Ensures stringent adherence to international child protection protocols, psychological support standards, and inclusive access for youth with disabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    emailPlaceholder: 'safeguarding@risinghandsorganisation.org',
    isPlaceholder: true
  }
];

export const INITIAL_EVENTS: CommunityEvent[] = [
  {
    id: 'evt-1',
    title: 'Dar es Salaam Youth Leadership & Mentorship Forum',
    date: 'September 12, 2026',
    time: '09:00 AM – 02:00 PM EAT',
    location: 'Community Hall, Kinondoni, Dar es Salaam',
    pillar: 'inspire',
    description:
      'Interactive day of career talks, ethical leadership panel, and personal development workshops led by inspiring Tanzanian professionals and changemakers.',
    targetAudience: 'Youth aged 16–25 & Student Leaders',
    registrationStatus: 'open',
    capacityPlaceholder: '150 Participants (Free Enrolment)'
  },
  {
    id: 'evt-2',
    title: 'Women & Youth Micro-Enterprise Exhibition',
    date: 'October 03, 2026',
    time: '10:00 AM – 04:30 PM EAT',
    location: 'RHO Community Grounds, Dar es Salaam',
    pillar: 'empower',
    description:
      'Community marketplace showcasing products created by RHO vocational apprentices and women entrepreneur groups, celebrating grassroots innovation.',
    targetAudience: 'General Public, Local Buyers & Business Mentors',
    registrationStatus: 'open',
    capacityPlaceholder: 'Open Admission'
  }
];

export const INITIAL_DONATIONS: DonationRecord[] = [
  {
    id: 'don-demo-1',
    referenceCode: 'RHO-2026-DON-1042',
    donorName: 'Amina Mwangi (Demo Record)',
    donorEmail: 'amina.m@example.org',
    amount: 100000,
    currency: 'TZS',
    frequency: 'one-time',
    designation: 'Educate - Children Scholarships & School Kits',
    paymentMethod: 'mobile_money',
    providerDetails: 'M-Pesa (Vodacom)',
    date: '2026-08-25',
    status: 'confirmed',
    isAnonymous: false,
    notes: 'Support for primary student scholastic kits'
  },
  {
    id: 'don-demo-2',
    referenceCode: 'RHO-2026-DON-1043',
    donorName: 'Global Friends of Tanzania (Demo Record)',
    donorEmail: 'contact@globalfriends.demo',
    amount: 250,
    currency: 'USD',
    frequency: 'monthly',
    designation: 'Where Most Needed (General Mission Fund)',
    paymentMethod: 'bank_transfer',
    providerDetails: 'Wire Transfer / Swift',
    date: '2026-08-26',
    status: 'pledged',
    isAnonymous: false,
    notes: 'Monthly community empowerment pledge'
  }
];

export const INITIAL_VOLUNTEERS: VolunteerApplication[] = [
  {
    id: 'vol-1',
    fullName: 'Juma Hassan (Demo Applicant)',
    email: 'juma.hassan@example.com',
    phone: '+255 754 112 233',
    cityCountry: 'Dar es Salaam, Tanzania',
    preferredPillar: 'educate',
    skills: 'English tutoring, digital literacy, secondary science guidance',
    availability: 'weekends',
    motivation: 'I want to give back to young people in my home city and inspire them to pursue higher education.',
    submittedAt: '2026-08-24 14:30',
    status: 'reviewed'
  }
];

export const INITIAL_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Sarah Kimario',
    email: 'sarah.k@example.tz',
    phone: '+255 712 345 678',
    inquiryType: 'partnership',
    subject: 'Partnership with University Youth Club',
    message:
      'Greetings to Rising Hands Organisation. We are a university volunteer club interested in partnering with your EDUCATE and INSPIRE programs for an upcoming weekend workshop.',
    submittedAt: '2026-08-26 11:15',
    isRead: false,
    replied: false
  }
];
