import React from 'react';
import { Gauge, AlertTriangle, CheckCircle2, MapPin, Building2, Stethoscope, FlaskConical, Pill, Wifi } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const metrics = [
  { label: 'Distance to nearest hospital', value: '2.4 km', status: 'good', icon: MapPin },
  { label: 'Government facilities nearby', value: '2', status: 'good', icon: Building2 },
  { label: 'Private facilities nearby', value: '3', status: 'good', icon: Building2 },
  { label: 'Emergency availability', value: 'Limited', status: 'warn', icon: AlertTriangle },
  { label: 'Specialist availability', value: 'None nearby', status: 'bad', icon: Stethoscope },
  { label: 'Diagnostic availability', value: 'Available', status: 'good', icon: FlaskConical },
  { label: 'Medicine / pharmacy', value: 'Available', status: 'good', icon: Pill },
  { label: 'Internet connectivity', value: 'Low', status: 'warn', icon: Wifi },
];

const gaps = [
  { type: 'warn', text: 'Limited emergency facilities' },
  { type: 'warn', text: 'No nearby specialist' },
  { type: 'bad', text: 'Low internet connectivity' },
  { type: 'good', text: 'PHC available' },
  { type: 'good', text: 'Pharmacy available' },
  { type: 'good', text: 'Diagnostic centre available' },
];

const statusColor = { good: 'text-emerald-600', warn: 'text-amber-600', bad: 'text-red-600' };

export default function HealthcareAccessScore() {
  const { t } = useLang();
  const score = 72;

  return (
    <section id="access-score" className="py-16 lg:py-20 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{t('accessScoreTitle')}</h2>
          <p className="mt-2 text-slate-500">A simple score showing how accessible healthcare is in your area — and what's missing.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm p-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 mb-3">
              <Gauge className="w-10 h-10 text-emerald-600" />
            </div>
            <div className="text-xs font-semibold text-slate-400 uppercase">For Khed, Pune</div>
            <div className="text-4xl font-bold text-slate-800 mt-1">{score}<span className="text-xl text-slate-400">/100</span></div>
            <div className="mt-2 inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold">Moderate access</div>
            <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 rounded-full" style={{ width: `${score}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm p-6 lg:col-span-2">
            <h3 className="font-semibold text-slate-800 mb-4">What's measured</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {metrics.map(m => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5">
                    <Icon className={`w-5 h-5 ${statusColor[m.status]}`} />
                    <div className="flex-1">
                      <div className="text-xs text-slate-500">{m.label}</div>
                      <div className={`text-sm font-semibold ${statusColor[m.status]}`}>{m.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm p-6">
          <h3 className="font-semibold text-slate-800 mb-4">What is missing in this area?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {gaps.map(g => (
              <div key={g.text} className="flex items-center gap-2 text-sm">
                {g.type === 'good'
                  ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  : <AlertTriangle className={`w-5 h-5 ${g.type === 'bad' ? 'text-red-500' : 'text-amber-500'}`} />}
                <span className="text-slate-700">{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
