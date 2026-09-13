import React, { useState } from 'react';
import { Siren, Phone, MapPin, LifeBuoy, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const emergencies = [
  { name: 'Accident', guidance: 'Keep the person still. Control bleeding with firm pressure. Do not move someone with suspected spinal injury. Call 108 immediately.' },
  { name: 'Chest pain', guidance: 'Suspected heart attack. Have the person sit and rest, loosen tight clothing. If not allergic, chew an aspirin. Call 108 at once.' },
  { name: 'Breathing difficulty', guidance: 'Sit the person upright. Help use any prescribed inhaler. Call 108 if breathing does not improve quickly.' },
  { name: 'Severe bleeding', guidance: 'Apply firm pressure with a clean cloth. Keep pressure continuous. Elevate the wound if possible. Call 108.' },
  { name: 'Stroke symptoms', guidance: 'Remember FAST — Face drooping, Arm weakness, Speech difficulty, Time to call 108. Note the time symptoms started.' },
  { name: 'Poisoning', guidance: 'Do not induce vomiting. Remove from the source. Call Poison Help or 108. Keep the container to show medical staff.' },
  { name: 'Pregnancy emergency', guidance: 'Help the mother lie on her left side. If bleeding or severe pain, call 108. Do not give food or water.' },
  { name: 'Child emergency', guidance: 'Keep the child calm. Check breathing. For choking, use back blows. Call 108 for any serious concern.' },
];

export default function EmergencySection() {
  const { t } = useLang();
  const [open, setOpen] = useState(null);

  return (
    <section id="emergency" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-6 sm:p-8 text-white text-center shadow-lg">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 mb-3">
            <Siren className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">{t('emergencyTitle')}</h2>
          <p className="mt-2 text-red-50 max-w-xl mx-auto">Get immediate guidance and locate the nearest emergency facility. Always contact emergency services for serious conditions.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:108" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-red-700 font-bold rounded-xl hover:bg-red-50 transition-colors">
              <Phone className="w-5 h-5" /> Call 108 Emergency
            </a>
            <a href="#find" className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 text-white font-semibold rounded-xl hover:bg-white/25 transition-colors">
              <MapPin className="w-5 h-5" /> Find Nearest Emergency Hospital
            </a>
            <a href="#ai" className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 text-white font-semibold rounded-xl hover:bg-white/25 transition-colors">
              <LifeBuoy className="w-5 h-5" /> Get Emergency Guidance
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Emergency categories & first-response guidance</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {emergencies.map((e, i) => (
              <div key={e.name} className="bg-white rounded-xl ring-1 ring-slate-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3.5 text-left">
                  <span className="flex items-center gap-2 font-semibold text-slate-800">
                    <AlertTriangle className="w-4 h-4 text-red-500" /> {e.name}
                  </span>
                  {open === i ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {open === i && (
                  <div className="px-4 pb-4 text-sm text-slate-600">
                    <p>{e.guidance}</p>
                    <a href="tel:108" className="mt-2 inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm"><Phone className="w-4 h-4" /> Call 108 now</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
