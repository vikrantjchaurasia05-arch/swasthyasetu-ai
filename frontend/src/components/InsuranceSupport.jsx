import React, { useState } from 'react';
import { ShieldCheck, Wallet, Hospital, FileText, Calculator, GitCompare, Info } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const features = [
  { icon: ShieldCheck, title: 'Health Insurance Guidance', desc: 'Compare major health insurance plans, cashless networks, and coverage terms.' },
  { icon: Wallet, title: 'Government Financial Aid', desc: 'Find subsidies under Ayushman Bharat, MJPJAY and CM Relief Fund.' },
  { icon: Hospital, title: 'Cashless Hospital Checker', desc: 'Check if your health insurance or Ayushman card is accepted in Pune hospitals.' },
  { icon: FileText, title: 'Claims & TPA Help', desc: 'Step-by-step documentation for pre-authorization and reimbursement claims.' },
  { icon: Calculator, title: 'Treatment Cost Estimator', desc: 'Approximate expenses and out-of-pocket costs for common procedures.' },
  { icon: GitCompare, title: 'Schemes vs Private Mediclaim', desc: 'Combine government assistance with private top-up insurance.' },
];

const hospitals = [
  'Primary Health Centre (PHC) Khed (Govt, 100% Free)',
  'Community Health Centre (CHC) Chakan (Govt, Free/Nominal)',
  'Sassoon General Hospital Pune (Govt Tertiary, Free)',
  'YCM Hospital Pimpri (PCMC Govt, Subsidized)',
  'Dr. D.Y. Patil Hospital Pimpri (PM-JAY/MJPJAY Empaneled)',
  'ABC Multispeciality Chakan (Private Empaneled)',
  'Ruby Hall Clinic Pune (Private Super-Speciality)',
  'Deenanath Mangeshkar Hospital (Trust Hospital)'
];

const treatments = [
  'General OPD & Medicine Consultation',
  'Normal Delivery (Maternity)',
  'Cesarean Delivery (C-Section)',
  'Appendix Surgery (Appendectomy)',
  'Cardiac Angioplasty & Stent',
  'Orthopedic Fracture Surgery',
  'Cataract Eye Surgery (Single Eye)',
  'Gallbladder Stone Removal (Laparoscopic)'
];

const insurances = [
  'No Insurance',
  'Ayushman Bharat PM-JAY (Golden Card)',
  'MJPJAY (Maharashtra Yellow/Orange Card)',
  'Star Health Comprehensive',
  'HDFC ERGO Optima Secure',
  'Care Health Insurance',
  'Corporate Employer Mediclaim'
];

const schemes = [
  'None / General Patient',
  'Ayushman Bharat PM-JAY (₹5 Lakh Cover)',
  'MJPJAY Maharashtra (₹5 Lakh Cover)',
  'Janani Suraksha Yojana (Maternal DBT)',
  'Senior Citizen Ayushman Vay Vandana'
];

export default function InsuranceSupport() {
  const { t } = useLang();
  const [hospital, setHospital] = useState(hospitals[0]);
  const [treatment, setTreatment] = useState(treatments[0]);
  const [insurance, setInsurance] = useState(insurances[0]);
  const [scheme, setScheme] = useState(schemes[0]);
  const [estimate, setEstimate] = useState(null);

  const baseCosts = {
    'General OPD & Medicine Consultation': 500,
    'Normal Delivery (Maternity)': 25000,
    'Cesarean Delivery (C-Section)': 45000,
    'Appendix Surgery (Appendectomy)': 55000,
    'Cardiac Angioplasty & Stent': 160000,
    'Orthopedic Fracture Surgery': 45000,
    'Cataract Eye Surgery (Single Eye)': 22000,
    'Gallbladder Stone Removal (Laparoscopic)': 65000
  };

  const estimateCost = () => {
    let base = baseCosts[treatment] || 15000;
    
    // Govt hospitals cap
    if (hospital.includes('Govt') || hospital.includes('PHC') || hospital.includes('CHC') || hospital.includes('Sassoon') || hospital.includes('YCM')) {
      base = Math.min(base, 1000);
    }

    let covered = 0;
    if (insurance.includes('PM-JAY') || scheme.includes('PM-JAY') || insurance.includes('MJPJAY') || scheme.includes('MJPJAY') || scheme.includes('Vay Vandana')) {
      covered = base; // 100% cashless under government health protection
    } else if (insurance !== 'No Insurance') {
      covered = Math.round(base * 0.85); // typical 85% claim settlement
    } else if (hospital.includes('Govt')) {
      covered = base; // Free care at government civil hospitals
    }

    const oop = Math.max(0, base - covered);
    setEstimate({ base, covered, oop });
  };

  return (
    <section id="insurance" className="py-16 lg:py-20 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{t('insuranceTitle')}</h2>
          <p className="mt-2 text-slate-500">{t('insuranceSubtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {features.map(f => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Cost Estimator Card */}
        <div className="bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-1">
            <Wallet className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-800">{t('canIAffordTitle')}</h3>
          </div>
          <p className="text-xs text-slate-500 mb-6">{t('canIAffordSubtitle')}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Field label="Target Hospital" value={hospital} options={hospitals} onChange={setHospital} />
            <Field label="Treatment / Procedure" value={treatment} options={treatments} onChange={setTreatment} />
            <Field label="Health Insurance" value={insurance} options={insurances} onChange={setInsurance} />
            <Field label="Government Scheme" value={scheme} options={schemes} onChange={setScheme} />
          </div>

          <button
            onClick={estimateCost}
            className="mt-5 px-6 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm">
            {t('estimateCostBtn')}
          </button>

          {estimate && (
            <div className="mt-6 grid sm:grid-cols-3 gap-4 animate-in fade-in">
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase">Estimated Total Cost</div>
                <div className="text-2xl font-extrabold text-slate-800 mt-1">₹{estimate.base.toLocaleString('en-IN')}</div>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-100">
                <div className="text-[11px] font-bold text-emerald-700 uppercase">Covered by Scheme / Insurance</div>
                <div className="text-2xl font-extrabold text-emerald-700 mt-1">₹{estimate.covered.toLocaleString('en-IN')}</div>
              </div>
              <div className="rounded-xl bg-amber-50 p-4 border border-amber-100">
                <div className="text-[11px] font-bold text-amber-700 uppercase">Your Out-Of-Pocket Expense</div>
                <div className="text-2xl font-extrabold text-amber-700 mt-1">₹{estimate.oop.toLocaleString('en-IN')}</div>
              </div>
              <div className="sm:col-span-3 flex items-start gap-2 text-xs text-amber-800 bg-amber-50/80 rounded-xl p-3 border border-amber-200">
                <Info className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
                <span>
                  Estimated values are indicative based on Pune CGHS & MJPJAY package rates. Actual expenses depend on patient condition, room category, and pre-authorization approvals.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, options, onChange }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-white rounded-xl px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200 outline-none focus:ring-emerald-500">
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
