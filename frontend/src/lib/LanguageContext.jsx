import React, { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  en: {
    tagline: 'Your Health, Our Priority',
    nav: {
      home: 'Home',
      find: 'Find Healthcare',
      services: 'Health Services',
      schemes: 'Government Schemes',
      insurance: 'Insurance & Support',
      emergency: 'Emergency',
      about: 'About Us'
    },
    login: 'Login / Sign Up',
    heroHeadline: 'AI-Powered Healthcare Access for Everyone',
    heroHighlight: 'Trusted Healthcare Across Pune & Rural Areas.',
    heroDesc: 'Find nearby government and private hospitals, check eligibility for Ayushman Bharat & MJPJAY schemes, get AI medical guidance in your mother tongue, and access 24x7 emergency assistance.',
    findNear: 'Find Hospitals Near Me',
    askAI: 'Ask AI Health Assistant',
    emergencyHelp: 'Call 108 Emergency',
    voiceInput: 'Voice Input',
    languagesCount: '3 Languages',
    locationBased: 'Google Maps GPS',
    aiTitle: 'SwasthyaSetu AI Health Assistant',
    aiOnline: 'Online · Pune Medical Guide',
    aiDesc: 'Ask any question about symptoms, medicines, hospitals & schemes.',
    aiPlaceholder: 'Ask any health question (e.g. fever relief, nearest hospital, Ayushman card)...',
    aiDisclaimer: 'AI provides healthcare navigation and first response guidance; consult a doctor for clinical treatment.',
    servicesTitle: 'Quick Healthcare Services',
    servicesSubtitle: 'Essential medical access and government healthcare resources in one place.',
    findTitle: 'Find Healthcare Nearby',
    findSubtitle: 'Discover verified Government PHCs, CHCs, Civil Hospitals and Private Multi-speciality Centers.',
    searchPlaceholder: 'Search by hospital, district, taluka, or speciality...',
    useCurrentLoc: 'Use current location',
    facilitiesFound: 'facilities found in Pune area',
    viewDetails: 'View Details',
    directions: 'Google Maps',
    call: 'Call',
    openNow: 'Open Now',
    schemesTitle: 'Government Healthcare Schemes',
    schemesSubtitle: 'Discover free and subsidized government medical schemes and verify your eligibility.',
    checkEligibility: 'Check Eligibility',
    learnMore: 'Learn More',
    requiredDocs: 'Required documents',
    insuranceTitle: 'Insurance & Financial Support',
    insuranceSubtitle: 'Understand cashless coverage, treatment estimates, and claim guidance.',
    canIAffordTitle: 'Can I afford this treatment?',
    canIAffordSubtitle: 'Calculate your out-of-pocket expenses under Ayushman Bharat or private mediclaim.',
    estimateCostBtn: 'Estimate Treatment Cost',
    accessScoreTitle: 'Pune Rural Healthcare Access Score',
    accessScoreSubtitle: 'Evaluation of medical infrastructure, emergency availability, and coverage gaps.',
    compareTitle: 'Smart Nearby Hospital Comparison',
    compareSubtitle: 'Compare healthcare facilities near your village or locality side-by-side with AI guidance.',
    emergencyTitle: 'Medical Emergency? Immediate Help',
    ruralMode: 'Rural & Low-Data Mode',
    ruralMsg: 'Optimized for 2G/3G connectivity in villages with offline hospital directory.',
    trustTitle: 'Verified & Trusted Healthcare Information',
    feedbackQ: 'Did you find this medical information accurate and helpful?'
  },
  mr: {
    tagline: 'तुमचे आरोग्य, आमची प्राथमिकता',
    nav: {
      home: 'मुख्यपृष्ठ',
      find: 'रुग्णालय शोधा',
      services: 'आरोग्य सेवा',
      schemes: 'सरकारी योजना',
      insurance: 'विमा व आर्थिक मदत',
      emergency: 'आपत्कालीन',
      about: 'आमच्याबद्दल'
    },
    login: 'लॉगिन / नोंदणी',
    heroHeadline: 'प्रत्येकासाठी एआय-आधारित मोफत आरोग्य सेवा',
    heroHighlight: 'पुणे जिल्हा व ग्रामीण भागासाठी विश्वासार्ह आरोग्य सहाय्य.',
    heroDesc: 'जवळची शासकीय व खाजगी रुग्णालये शोधा, आयुष्यमान भारत व म.जो.फुले योजनांची पात्रता तपासा, मराठी भाषेत आरोग्य मार्गदर्शन मिळवा आणि आपत्कालीन मदत मिळवा.',
    findNear: 'जवळचे रुग्णालय शोधा',
    askAI: 'आरोग्य सहाय्यकाला विचारा',
    emergencyHelp: '१०८ रुग्णवाहिका बोलवा',
    voiceInput: 'व्हॉइस इनपुट',
    languagesCount: '३ भाषा उपलब्ध',
    locationBased: 'गुगल मॅप्स लोकेशन',
    aiTitle: 'स्वास्थ्यसेतू एआय सहाय्यक',
    aiOnline: 'ऑनलाइन · पुणे आरोग्य मार्गदर्शक',
    aiDesc: 'लक्षणे, औषधे, रुग्णालये व योजनांबद्दल कोणताही प्रश्न विचारा.',
    aiPlaceholder: 'आरोग्य प्रश्न विचारा (उदा. तापावर उपाय, जवळचे रुग्णालय, आयुष्मान कार्ड)...',
    aiDisclaimer: 'एआय मार्गदर्शन प्राथमिक माहितीसाठी आहे, गंभीर आजारात डॉक्टरांचा सल्ला घ्या.',
    servicesTitle: 'त्वरित आरोग्य सेवा',
    servicesSubtitle: 'आवश्यक वैद्यकीय सुविधा आणि सरकारी आरोग्य योजना एकाच ठिकाणी.',
    findTitle: 'पुणे व परिसरातील रुग्णालये शोधा',
    findSubtitle: 'सरकारी प्राथमिक आरोग्य केंद्रे (PHC), ग्रामीण रुग्णालये व खाजगी मल्टीस्पेशालिटी हॉस्पिटल्स.',
    searchPlaceholder: 'गाव, परिसर (खेड, चाकण, पिंपरी, पुणे) किंवा रुग्णालयाचे नाव शोधा...',
    useCurrentLoc: 'माझे सध्याचे ठिकाण',
    facilitiesFound: 'रुग्णालये उपलब्ध आहेत',
    viewDetails: 'तपशील पहा',
    directions: 'गुगल मॅप्स',
    call: 'कॉल करा',
    openNow: 'सुरू आहे',
    schemesTitle: 'सरकारी आरोग्य योजना व सवलती',
    schemesSubtitle: 'मोफत शासकीय योजनांची माहिती घ्या आणि तुमची पात्रता तपासा.',
    checkEligibility: 'पात्रता तपासा',
    learnMore: 'सविस्तर माहिती',
    requiredDocs: 'आवश्यक कागदपत्रे',
    insuranceTitle: 'आरोग्य विमा व आर्थिक मदत',
    insuranceSubtitle: 'कॅशलेस उपचार, खर्चाचा अंदाज आणि विमा दाव्याची मदत.',
    canIAffordTitle: 'मला हा उपचार परवडेल का?',
    canIAffordSubtitle: 'आयुष्मान भारत व विमा योजनेतून उपचाराचा अंदाजे खर्च तपासा.',
    estimateCostBtn: 'खर्चाचा अंदाज घ्या',
    accessScoreTitle: 'आरोग्य सुविधा उपलब्धता गुण',
    accessScoreSubtitle: 'परिसरातील वैद्यकीय सुविधा, आपत्कालीन सोयी व त्रुटींचे विश्लेषण.',
    compareTitle: 'जवळच्या रुग्णालयांची तुलना',
    compareSubtitle: 'तुमच्या गावाजवळील रुग्णालयांची थेट तुलना करा आणि एआयची मदत घ्या.',
    emergencyTitle: 'वैद्यकीय आपत्कालीन मदत',
    ruralMode: 'ग्रामीण व लो-डेटा मोड',
    ruralMsg: 'कमी इंटरनेट असलेल्या भागासाठी विशेष जलद मोड व ऑफलाइन सुविधा.',
    trustTitle: 'प्रमाणित व विश्वासार्ह माहिती',
    feedbackQ: 'ही माहिती आपल्यासाठी उपयुक्त ठरली का?'
  },
  hi: {
    tagline: 'आपका स्वास्थ्य, हमारी प्राथमिकता',
    nav: {
      home: 'होम',
      find: 'अस्पताल खोजें',
      services: 'स्वास्थ्य सेवाएं',
      schemes: 'सरकारी योजनाएं',
      insurance: 'बीमा और वित्तीय सहायता',
      emergency: 'आपातकालीन',
      about: 'हमारे बारे में'
    },
    login: 'लॉगिन / साइन अप',
    heroHeadline: 'सभी के लिए एआई-संचालित स्वास्थ्य सेवा',
    heroHighlight: 'पुणे एवं ग्रामीण क्षेत्रों के लिए भरोसेमंद स्वास्थ्य साथी.',
    heroDesc: 'नजदीकी सरकारी व निजी अस्पताल खोजें, आयुष्मान भारत और महात्मा ज्योतिबा फुले योजना की पात्रता जांचें, हिंदी में स्वास्थ्य सलाह पाएं और १०८ आपातकालीन सहायता प्राप्त करें.',
    findNear: 'मेरे पास अस्पताल खोजें',
    askAI: 'एआई स्वास्थ्य सहायक से पूछें',
    emergencyHelp: '१०८ एम्बुलेंस बुलाएं',
    voiceInput: 'आवाज से पूछें',
    languagesCount: '३ भाषाएं',
    locationBased: 'गूगल मैप्स जीपीएस',
    aiTitle: 'स्वास्थ्यसेतु एआई सहायक',
    aiOnline: 'ऑनलाइन · पुणे स्वास्थ्य मार्गदर्शक',
    aiDesc: 'लक्षण, दवाएं, अस्पताल और सरकारी योजनाओं से संबंधित प्रश्न पूछें.',
    aiPlaceholder: 'स्वास्थ्य प्रश्न पूछें (उदा. बुखार का उपचार, नजदीकी अस्पताल, आयुष्मान कार्ड)...',
    aiDisclaimer: 'एआई प्राथमिक सलाह देता है, चिकित्सीय उपचार के लिए डॉक्टर से संपर्क करें.',
    servicesTitle: 'त्वरित स्वास्थ्य सेवाएं',
    servicesSubtitle: 'सभी आवश्यक चिकित्सा सुविधाएं और सरकारी स्वास्थ्य योजनाएं एक ही स्थान पर.',
    findTitle: 'पुणे व आसपास अस्पताल खोजें',
    findSubtitle: 'सरकारी प्राथमिक स्वास्थ्य केंद्र (PHC), सिविल अस्पताल और निजी मल्टीस्पेशलिटी केंद्र.',
    searchPlaceholder: 'गांव, क्षेत्र (चाकण, खेड, पिंपरी, पुणे) या अस्पताल का नाम खोजें...',
    useCurrentLoc: 'मेरा वर्तमान स्थान',
    facilitiesFound: 'अस्पताल उपलब्ध हैं',
    viewDetails: 'विवरण देखें',
    directions: 'गूगल मैप्स',
    call: 'कॉल करें',
    openNow: 'खुला है',
    schemesTitle: 'सरकारी स्वास्थ्य योजनाएं',
    schemesSubtitle: 'मुफ्त व रियायती सरकारी स्वास्थ्य योजनाओं की जानकारी लें और पात्रता जांचें.',
    checkEligibility: 'पात्रता जांचें',
    learnMore: 'अधिक जानें',
    requiredDocs: 'आवश्यक दस्तावेज',
    insuranceTitle: 'बीमा और वित्तीय सहायता',
    insuranceSubtitle: 'कैशलेस इलाज, उपचार खर्च का अनुमान और क्लेम सहायता.',
    canIAffordTitle: 'क्या यह इलाज मेरे बजट में है?',
    canIAffordSubtitle: 'आयुष्मान भारत और बीमा के तहत अपने खर्च का सही अनुमान लगाएं.',
    estimateCostBtn: 'इलाज का खर्च आंकें',
    accessScoreTitle: 'स्वास्थ्य सेवा पहुंच स्कोर',
    accessScoreSubtitle: 'इलाके में चिकित्सा सुविधाओं, आपातकालीन सेवाओं और कमियों का विश्लेषण.',
    compareTitle: 'नजदीकी अस्पतालों की तुलना',
    compareSubtitle: 'अपने नजदीकी अस्पतालों की आमने-सामने तुलना करें और सही विकल्प चुनें.',
    emergencyTitle: 'चिकित्सीय आपातकाल? तुरंत मदद',
    ruralMode: 'ग्रामीण एवं लो-डेटा मोड',
    ruralMsg: 'धीमे इंटरनेट कनेक्शन में भी तेजी से चलने के लिए अनुकूलित.',
    trustTitle: 'सत्यापित व विश्वसनीय जानकारी',
    feedbackQ: 'क्या यह स्वास्थ्य जानकारी आपके लिए उपयोगी रही?'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = useCallback((key) => {
    const parts = key.split('.');
    let val = translations[lang];
    for (const p of parts) {
      val = val?.[p];
    }
    return val ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
