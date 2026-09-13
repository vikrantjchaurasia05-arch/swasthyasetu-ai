import React, { useState } from 'react';
import { Menu, X, HeartPulse, Globe, LogIn, ChevronDown } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.find', href: '#find' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.schemes', href: '#schemes' },
  { key: 'nav.insurance', href: '#insurance' },
  { key: 'nav.emergency', href: '#emergency' },
  { key: 'nav.about', href: '#about' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const langs = [
    { code: 'en', label: 'English', sub: 'English' },
    { code: 'mr', label: 'मराठी', sub: 'Marathi' },
    { code: 'hi', label: 'हिन्दी', sub: 'Hindi' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-slate-800 text-lg tracking-tight">SwasthyaSetu AI</div>
              <div className="text-[11px] text-emerald-600 font-semibold">{t('tagline')}</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors">
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 rounded-xl transition-colors shadow-2xs">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>{langs.find(l => l.code === lang)?.label}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in">
                  <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Select Language</div>
                  {langs.map(l => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs sm:text-sm flex items-center justify-between hover:bg-emerald-50 transition-colors ${lang === l.code ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-slate-600'}`}>
                      <span>{l.label}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({l.sub})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm">
              <LogIn className="w-4 h-4" />
              {t('login')}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1 border-t border-emerald-50 pt-3 animate-in fade-in">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl">
                {t(item.key)}
              </a>
            ))}

            <div className="pt-2 flex items-center justify-between px-3 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-500">Language:</span>
              <div className="flex gap-1.5">
                {langs.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${lang === l.code ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="mt-3 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold text-white bg-emerald-600 rounded-xl">
              <LogIn className="w-4 h-4" /> {t('login')}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
