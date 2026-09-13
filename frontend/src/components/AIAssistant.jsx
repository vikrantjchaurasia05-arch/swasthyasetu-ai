import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Mic, Globe, MapPin, AlertTriangle } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { base44 } from '@/api/base44Client';

const suggestionsByLang = {
  en: [
    'Where is the nearest hospital in Pune?',
    'What should I do for high fever & shivering?',
    'Do I qualify for Ayushman Bharat?',
    'Chest pain emergency advice',
    'How to control blood sugar naturally?',
    'What schemes help pregnant mothers?',
    'Find government hospitals with free medicines',
    'Dog bite or rabies first aid'
  ],
  mr: [
    'पुणे आणि खेडमधील जवळचे रुग्णालय कुठे आहे?',
    'ताप आणि थंडी वाजल्यास काय करावे?',
    'आयुष्मान भारत कार्डसाठी पात्रता कशी तपासावी?',
    'छातीत दुखत असल्यास काय करावे?',
    'मधुमेह आणि बीपी नियंत्रणात कसा ठेवावा?',
    'गरोदर मातांसाठी कोणत्या सरकारी योजना आहेत?',
    'ससून हॉस्पिटलमध्ये मोफत उपचार कसे मिळतात?',
    'कुत्रा चावल्यास तात्काळ काय करावे?'
  ],
  hi: [
    'पुणे में नजदीकी अस्पताल कहाँ है?',
    'तेज बुखार और कंपकंपी में क्या करें?',
    'आयुष्मान भारत कार्ड की पात्रता कैसे जांचें?',
    'सीने में दर्द होने पर आपातकालीन सलाह',
    'शुगर और बीपी कैसे नियंत्रित रखें?',
    'गर्भवती महिलाओं के लिए कौन सी योजनाएं हैं?',
    'ससून अस्पताल में मुफ्त इलाज कैसे मिलता है?',
    'कुत्ते के काटने पर प्राथमिक उपचार क्या है?'
  ]
};

export default function AIAssistant({ compact = false }) {
  const { t, lang } = useLang();
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: lang === 'mr'
        ? 'नमस्ते! मी तुमचा स्वास्थ्यसेतू एआय सहाय्यक आहे. मी तुम्हाला जवळची रुग्णालये, आजार व लक्षणे, मोफत सरकारी योजना आणि आपत्कालीन मदतीबाबत मार्गदर्शन करू शकतो. विचारा!'
        : lang === 'hi'
        ? 'नमस्ते! मैं आपका स्वास्थ्यसेतु एआई सहायक हूँ. मैं आपको नजदीकी अस्पताल, लक्षण, सरकारी स्वास्थ्य योजनाएं और आपातकालीन प्राथमिक उपचार में मदद कर सकता हूँ. पूछें!'
        : 'Namaste! I am your SwasthyaSetu AI Health Assistant. I can help you find hospitals, check scheme eligibility, manage symptoms, and guide you in medical emergencies. Ask anything!'
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = async (text) => {
    const q = text || input;
    if (!q.trim()) return;
    
    setMessages(m => [...m, { role: 'user', text: q }]);
    setInput('');
    setTyping(true);

    try {
      const reply = await base44.ai.chat(q, lang);
      setMessages(m => [...m, { role: 'ai', text: reply || (
        lang === 'mr'
          ? 'जवळच्या PHC ला भेट द्या किंवा १०८ वर संपर्क करा.'
          : lang === 'hi'
          ? 'नजदीकी PHC पर जाएं या १०८ पर कॉल करें।'
          : 'Please visit your nearest PHC or call 108 in an emergency.'
      ) }]);
    } catch (e) {
      console.warn('AI Assistant error:', e);
    } finally {
      setTyping(false);
    }
  };

  const currentSuggestions = suggestionsByLang[lang] || suggestionsByLang.en;

  return (
    <div id="ai" className={`bg-white rounded-2xl shadow-lg ring-1 ring-slate-100 overflow-hidden ${compact ? '' : 'max-w-2xl mx-auto'}`}>
      <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-white text-sm sm:text-base">{t('aiTitle')}</div>
          <div className="flex items-center gap-1.5 text-emerald-100 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" /> {t('aiOnline')}
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs">
          <Mic className="w-4 h-4" /><Globe className="w-4 h-4" /><MapPin className="w-4 h-4" />
        </div>
      </div>

      <div className="px-5 py-4 h-64 overflow-y-auto bg-slate-50/60 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[88%] px-4 py-3 rounded-2xl text-xs sm:text-sm whitespace-pre-line leading-relaxed ${m.role === 'user' ? 'bg-emerald-600 text-white rounded-br-sm shadow-sm' : 'bg-white text-slate-800 ring-1 ring-slate-200/70 rounded-bl-sm shadow-sm'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="px-4 py-3 bg-white ring-1 ring-slate-200 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1.5 items-center">
                <span className="text-xs text-slate-400 font-medium mr-1">AI analyzing...</span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Suggested prompts in current language */}
      <div className="px-5 pt-3 pb-1 flex flex-wrap gap-1.5">
        {currentSuggestions.slice(0, compact ? 3 : 6).map(s => (
          <button
            key={s}
            onClick={() => send(s)}
            className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors font-medium text-left">
            {s}
          </button>
        ))}
      </div>

      <div className="px-5 py-3">
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
          <button className="p-1.5 text-slate-500 hover:text-emerald-600"><Mic className="w-4 h-4" /></button>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder={t('aiPlaceholder')}
            className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-400"
          />
          <button
            onClick={() => send(input)}
            className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shrink-0 shadow-sm">
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-2 flex items-start gap-1.5 text-[11px] text-amber-700 bg-amber-50 rounded-lg px-2.5 py-1.5">
          <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-600" />
          <span>{t('aiDisclaimer')}</span>
        </div>
      </div>
    </div>
  );
}
