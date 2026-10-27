import { Language, PageId } from './types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    programs: string;
    impact: string;
    projects: string;
    news: string;
    getInvolved: string;
    contact: string;
    donate: string;
    supportMission: string;
    staffPortal: string;
    adminActive: string;
    menu: string;
    selectLanguage: string;
  };
  topBar: {
    orgType: string;
    location: string;
    language: string;
    currentLangName: string;
    swahiliNotice: string;
  };
  tagline: {
    main: string;
    quote: string;
    sub: string;
    registered: string;
  };
  pillars: {
    educate: string;
    empower: string;
    inspire: string;
    transform: string;
  };
  hero: {
    eyebrow: string;
    headlinePre: string;
    headlineHighlight: string;
    summary: string;
    supportBtn: string;
    exploreBtn: string;
    volunteerBtn: string;
  };
  common: {
    donateNow: string;
    learnMore: string;
    readStory: string;
    viewAll: string;
    verifiedNGO: string;
    quickActions: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      programs: 'Our Programs',
      impact: 'Our Impact',
      projects: 'Projects',
      news: 'News & Stories',
      getInvolved: 'Get Involved',
      contact: 'Contact Us',
      donate: 'DONATE',
      supportMission: 'SUPPORT OUR MISSION (DONATE)',
      staffPortal: 'Staff / CMS',
      adminActive: 'Admin Active',
      menu: 'Navigation',
      selectLanguage: 'Language / Lugha'
    },
    topBar: {
      orgType: 'Tanzania Non-Governmental Non-Profit (RHO)',
      location: 'Dar es Salaam, Tanzania (EAT)',
      language: 'Language',
      currentLangName: 'English',
      swahiliNotice: 'Kiswahili pia kinapatikana'
    },
    tagline: {
      main: 'BUILDING BRIGHTER FUTURE TOGETHER',
      quote: '“BUILDING BRIGHTER FUTURE TOGETHER”',
      sub: 'Tanzanian NGO • Non-Profit • Community-Focused',
      registered: 'Registered Civil Society in Tanzania'
    },
    pillars: {
      educate: 'EDUCATE',
      empower: 'EMPOWER',
      inspire: 'INSPIRE',
      transform: 'TRANSFORM'
    },
    hero: {
      eyebrow: 'Tanzania • NGO • Community',
      headlinePre: 'BUILDING BRIGHTER',
      headlineHighlight: 'FUTURE TOGETHER',
      summary:
        'To educate, empower and inspire children, youth, women and vulnerable communities in Tanzania through sustainable education, vocational training, mentorship and grassroots community development.',
      supportBtn: 'Support Our Mission',
      exploreBtn: 'Explore Programs',
      volunteerBtn: 'Join as Volunteer'
    },
    common: {
      donateNow: 'Donate Now',
      learnMore: 'Learn More',
      readStory: 'Read Story',
      viewAll: 'View All',
      verifiedNGO: 'Non-Governmental Organisation in Tanzania',
      quickActions: 'Quick Actions'
    }
  },
  sw: {
    nav: {
      home: 'Mwanzo',
      about: 'Kuhusu Sisi',
      programs: 'Mipango Yetu',
      impact: 'Matokeo Yetu',
      projects: 'Miradi',
      news: 'Habari na Makala',
      getInvolved: 'Shiriki Nasi',
      contact: 'Wasiliana Nasi',
      donate: 'CHANGIA',
      supportMission: 'UNGA MKONO UTUME WETU (CHANGIA)',
      staffPortal: 'Wafanyakazi / CMS',
      adminActive: 'Msimamizi Amewashwa',
      menu: 'Menyu Kuu',
      selectLanguage: 'Chagua Lugha / Select Language'
    },
    topBar: {
      orgType: 'Shirika Lisilo la Kiserikali Tanzania (RHO)',
      location: 'Dar es Salaam, Tanzania (EAT)',
      language: 'Lugha',
      currentLangName: 'Kiswahili',
      swahiliNotice: 'English also available'
    },
    tagline: {
      main: 'KUJENGA KESHO ILIYO BORA PAMOJA',
      quote: '“KUJENGA KESHO ILIYO BORA PAMOJA”',
      sub: 'Shirika la Kitanzania • Lisilo la Kiserikali • Jamii',
      registered: 'Jumuiya ya Kiraia Iliyosajiliwa Tanzania'
    },
    pillars: {
      educate: 'KUELIMISHA',
      empower: 'KUWEZESHA',
      inspire: 'KUHAMASISHA',
      transform: 'KUBADILISHA'
    },
    hero: {
      eyebrow: 'Tanzania • NGO • Jamii',
      headlinePre: 'KUJENGA KESHO',
      headlineHighlight: 'ILIYO BORA PAMOJA',
      summary:
        'Kuelimisha, kuwezesha na kuhamasisha watoto, vijana, wanawake na jamii zenye mazingira magumu nchini Tanzania kupitia elimu endelevu, mafunzo ya ufundi stadi, malezi na maendeleo shirikishi ya jamii.',
      supportBtn: 'Unga Mkono Utume Wetu',
      exploreBtn: 'Chunguza Mipango Yetu',
      volunteerBtn: 'Jiunge Kama Mjitolea'
    },
    common: {
      donateNow: 'Changia Sasa',
      learnMore: 'Jifunze Zaidi',
      readStory: 'Soma Habari',
      viewAll: 'Tazama Zote',
      verifiedNGO: 'Shirika Lisilo la Kiserikali Lililosajiliwa Tanzania',
      quickActions: 'Vitendo vya Haraka'
    }
  }
};

export const getNavLinks = (lang: Language): { id: PageId; label: string }[] => {
  const t = TRANSLATIONS[lang].nav;
  return [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'programs', label: t.programs },
    { id: 'impact', label: t.impact },
    { id: 'projects', label: t.projects },
    { id: 'news', label: t.news },
    { id: 'get-involved', label: t.getInvolved },
    { id: 'contact', label: t.contact }
  ];
};
