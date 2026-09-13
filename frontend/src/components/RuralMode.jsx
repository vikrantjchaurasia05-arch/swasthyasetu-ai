import React, { useState } from 'react';
import { Wifi, Volume2, Mic, MapPin, Phone, Siren, Landmark, Search, X } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

export default function RuralMode() {
  const { t } = useLang();
  const [on, setOn] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { id: 'hospitals', icon: MapPin, label: 'Nearby Hospitals' },
    { id: 'call', icon: Phone, label: 'Call Facility' },
    { id: 'emergency', icon: Siren, label: 'Emergency' },
    { id: 'schemes', icon: Landmark, label: 'Schemes' },
  ];

  return (
    <section id="rural" className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 sm:p-8 text-white shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2"><Wifi className="w-6 h-6" /> {t('ruralMode')}</h2>
              <p className="mt-1 text-emerald-50 max-w-md">{t('ruralMsg')}</p>
            </div>
            <button onClick={() => setOn(!on)}
              className={`relative w-14 h-8 rounded-full transition-colors ${on ? 'bg-white' : 'bg-white/30'}`}>
              <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-emerald-600 transition-transform ${on ? 'translate-x-6' : ''}`} />
            </button>
          </div>

          {on && (
            <div className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tabs.map(b => {
                  const Icon = b.icon;
                  const isActive = activeTab === b.id;
                  return (
                    <button 
                      key={b.id} 
                      onClick={() => setActiveTab(isActive ? null : b.id)}
                      className={`flex flex-col items-center gap-2 rounded-xl py-5 transition-colors ${isActive ? 'bg-white text-emerald-700' : 'bg-white/15 hover:bg-white/25 text-white'}`}
                    >
                      <Icon className="w-7 h-7" />
                      <span className="text-sm font-semibold">{b.label}</span>
                    </button>
                  );
                })}
              </div>

              {activeTab === 'hospitals' && (
                <div className="mt-4 bg-white/10 rounded-xl p-4 text-emerald-50 animate-in fade-in zoom-in-95">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-white">Cell Tower Triangulation - Nearest Centers:</h3>
                    <button onClick={() => setActiveTab(null)}><X className="w-5 h-5 opacity-70 hover:opacity-100"/></button>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-emerald-500/30 pb-2">
                      <div><strong className="text-white">Primary Health Centre (PHC)</strong><br/><span className="text-xs">2.4 km away • Free Checkups</span></div>
                      <a href="tel:104" className="bg-white/20 px-3 py-1 rounded flex items-center text-xs">Call</a>
                    </li>
                    <li className="flex justify-between border-b border-emerald-500/30 pb-2">
                      <div><strong className="text-white">Community Health Centre (CHC)</strong><br/><span className="text-xs">6.8 km away • 24x7 Emergency</span></div>
                      <a href="tel:108" className="bg-white/20 px-3 py-1 rounded flex items-center text-xs">Call</a>
                    </li>
                    <li className="flex justify-between">
                      <div><strong className="text-white">District Civil Hospital</strong><br/><span className="text-xs">18.5 km away • Trauma Care</span></div>
                      <a href="tel:108" className="bg-white/20 px-3 py-1 rounded flex items-center text-xs">Call</a>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'call' && (
                <div className="mt-4 bg-white/10 rounded-xl p-4 text-emerald-50 animate-in fade-in zoom-in-95">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-white">Direct Helplines:</h3>
                    <button onClick={() => setActiveTab(null)}><X className="w-5 h-5 opacity-70 hover:opacity-100"/></button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href="tel:104" className="bg-white text-emerald-700 font-bold py-2 px-4 rounded-lg text-center">📞 104 - Medical Helpline (Govt)</a>
                    <a href="tel:14555" className="bg-white text-emerald-700 font-bold py-2 px-4 rounded-lg text-center">📞 14555 - Ayushman Bharat Support</a>
                  </div>
                </div>
              )}

              {activeTab === 'emergency' && (
                <div className="mt-4 bg-red-500/20 rounded-xl p-4 text-white animate-in fade-in zoom-in-95 ring-1 ring-red-400/50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold flex items-center gap-2"><Siren className="w-5 h-5 text-red-200"/> Emergency & First Aid</h3>
                    <button onClick={() => setActiveTab(null)}><X className="w-5 h-5 opacity-70 hover:opacity-100"/></button>
                  </div>
                  <a href="tel:108" className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 rounded-lg text-center mb-3 shadow-lg">🚑 CALL 108 AMBULANCE</a>
                  <p className="text-xs text-red-100 leading-relaxed">
                    <strong>First Aid Tips:</strong><br/>
                    • <strong>Snake bite:</strong> Keep limb still. Call 108. Do NOT suck venom.<br/>
                    • <strong>Heart attack:</strong> Have them sit down. Loosen clothing. Do not give water.<br/>
                    • <strong>Burns:</strong> Run cool water over it for 10 mins. No toothpaste.
                  </p>
                </div>
              )}

              {activeTab === 'schemes' && (
                <div className="mt-4 bg-white/10 rounded-xl p-4 text-emerald-50 animate-in fade-in zoom-in-95">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-white">Low-Data Scheme Info:</h3>
                    <button onClick={() => setActiveTab(null)}><X className="w-5 h-5 opacity-70 hover:opacity-100"/></button>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>✅ <strong>PM-JAY (Ayushman):</strong> ₹5 Lakh/yr cashless cover. Bring Ration + Aadhaar to nearest CSC.</li>
                    <li>✅ <strong>JSY (Maternity):</strong> ₹1,400 reward for Govt hospital delivery.</li>
                    <li>✅ <strong>TB Scheme (Nikshay):</strong> ₹500/month for TB patients for nutrition.</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Mic, title: 'Voice input', desc: 'Speak instead of typing — in your local language.' },
            { icon: Volume2, title: 'Read aloud', desc: 'Listen to answers spoken out loud for easy understanding.' },
            { icon: Search, title: 'Low-data mode', desc: 'Essential services load first; facilities cached for offline use.' },
          ].map(f => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-emerald-50/50 rounded-xl p-5 ring-1 ring-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3"><Icon className="w-5 h-5" /></div>
                <h3 className="font-semibold text-slate-800 mb-1">{f.title}</h3>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
