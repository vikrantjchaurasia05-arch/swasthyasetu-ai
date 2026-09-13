import React from 'react';
import { MapPin, Landmark, ShieldQuestion, Siren, ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const services = [
  { icon: MapPin, title: 'Find Healthcare', desc: 'Find nearby government hospitals, private hospitals, PHCs, CHCs, clinics and diagnostic centres.', href: '#find', color: 'emerald' },
  { icon: Landmark, title: 'Government Schemes', desc: 'Discover healthcare schemes and check your eligibility.', href: '#schemes', color: 'blue' },
  { icon: ShieldQuestion, title: 'Insurance & Financial Support', desc: 'Understand insurance coverage, government financial assistance, hospital costs and claim support.', href: '#insurance', color: 'emerald' },
  { icon: Siren, title: 'Emergency Help', desc: 'Get immediate emergency guidance and locate nearby emergency facilities.', href: '#emergency', color: 'red' },
];

export default function QuickServices() {
  const { t } = useLang();
  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{t('servicesTitle')}</h2>
          <p className="mt-2 text-slate-500">Everything you need to access healthcare, in one place.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            const colorMap = {
              emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
              blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
              red: 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white',
            };
            return (
              <a key={s.title} href={s.href}
                className="group p-6 bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${colorMap[s.color]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
