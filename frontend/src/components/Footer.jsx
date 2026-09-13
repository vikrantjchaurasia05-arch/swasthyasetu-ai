import React from 'react';
import { HeartPulse, Phone, MapPin, Mail } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const linkGroups = [
  { title: 'Platform', links: ['About Us', 'Contact', 'Privacy Policy', 'Terms'] },
  { title: 'Healthcare', links: ['Emergency', 'Government Schemes', 'Find Healthcare', 'Insurance'] },
  { title: 'Support', links: ['Accessibility', 'Help Center', 'Feedback', 'FAQs'] },
];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer id="about" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">SwasthyaSetu AI</div>
                <div className="text-[11px] text-emerald-400">{t('tagline')}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Connecting people to better healthcare.</p>
            <div className="mt-4 space-y-1.5 text-sm text-slate-400">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-500" /> 108 (Emergency)</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-500" /> support@swasthyasetu.in</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-500" /> Pune, Maharashtra, India</div>
            </div>
          </div>

          {linkGroups.map(g => (
            <div key={g.title}>
              <h4 className="font-semibold text-white mb-3 text-sm">{g.title}</h4>
              <ul className="space-y-2 text-sm">
                {g.links.map(l => <li key={l}><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800">
          <div className="rounded-xl bg-slate-800/60 px-4 py-3 text-xs text-amber-300/90 mb-4">
            Disclaimer: This platform provides healthcare information and navigation support. It is not a replacement for professional medical advice. Always consult a qualified healthcare provider for medical concerns.
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
            <div>© {new Date().getFullYear()} SwasthyaSetu AI. All rights reserved.</div>
            <div>Made for rural and underserved communities in India 🇮🇳</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
