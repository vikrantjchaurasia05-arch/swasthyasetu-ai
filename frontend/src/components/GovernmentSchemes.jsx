import React, { useState, useEffect } from 'react';
import { Landmark, CheckCircle2, FileText, Sparkles, ChevronDown, ChevronUp, ShieldCheck, X, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { base44 } from '@/api/base44Client';

export default function GovernmentSchemes() {
  const { t } = useLang();
  const [openDocs, setOpenDocs] = useState(null);
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eligibilityModalScheme, setEligibilityModalScheme] = useState(null);
  const [learnMoreScheme, setLearnMoreScheme] = useState(null);

  useEffect(() => {
    base44.entities.GovernmentScheme.list('-created_date', 50)
      .then(setSchemes)
      .catch(() => setSchemes([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="schemes" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{t('schemesTitle')}</h2>
          <p className="mt-2 text-slate-500">{t('schemesSubtitle')}</p>
        </div>

        {/* Top Global AI Eligibility Checker */}
        <GeneralEligibilityChecker />

        {/* Scheme Cards Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <div className="col-span-full text-center py-12 text-slate-400">Loading government schemes…</div>}
          {schemes.map((s, i) => (
            <div key={s.id || s.name} className="bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-snug">{s.name}</h3>
                      {s.tag && <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{s.tag}</span>}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.benefit}</p>

                <div className="text-xs space-y-2 mb-4 bg-slate-50/70 p-3 rounded-xl">
                  <div>
                    <span className="font-bold text-slate-500 block mb-0.5">Beneficiaries:</span>
                    <span className="text-slate-700">{s.who}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-500 block mb-0.5">Eligibility:</span>
                    <span className="text-slate-700">{s.eligibility}</span>
                  </div>
                </div>

                <button
                  onClick={() => setOpenDocs(openDocs === i ? null : i)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 mb-3 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-emerald-600" /> {t('requiredDocs')} {openDocs === i ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {openDocs === i && (
                  <ul className="text-xs text-slate-600 space-y-1.5 mb-4 pl-1 bg-emerald-50/40 p-3 rounded-xl">
                    {s.docs?.map(d => (
                      <li key={d} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Buttons with Working Handlers */}
              <div className="mt-4 flex gap-2 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setEligibilityModalScheme(s)}
                  className="flex-1 px-3 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> {t('checkEligibility')}
                </button>
                <button
                  onClick={() => setLearnMoreScheme(s)}
                  className="px-3 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                  {t('learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INDIVIDUAL SCHEME ELIGIBILITY VERIFICATION MODAL */}
      {eligibilityModalScheme && (
        <SchemeEligibilityModal
          scheme={eligibilityModalScheme}
          onClose={() => setEligibilityModalScheme(null)}
        />
      )}

      {/* LEARN MORE DETAIL MODAL */}
      {learnMoreScheme && (
        <SchemeLearnMoreModal
          scheme={learnMoreScheme}
          onClose={() => setLearnMoreScheme(null)}
        />
      )}
    </section>
  );
}

// -----------------------------------------------------------------------------
// INDIVIDUAL SCHEME ELIGIBILITY MODAL (Interactive for Ayushman, MJPJAY, etc.)
// -----------------------------------------------------------------------------
function SchemeEligibilityModal({ scheme, onClose }) {
  const [answers, setAnswers] = useState({
    state: 'Maharashtra',
    rationCard: 'Orange Ration Card',
    age: '45',
    income: 'Under ₹1,00,000 / year',
    isRural: 'Yes',
    pregnant: 'No',
  });
  const [checked, setChecked] = useState(false);
  const [isEligible, setIsEligible] = useState(true);

  const handleVerify = () => {
    let eligible = true;
    if (scheme.id === 'vay_vandana') {
      eligible = Number(answers.age) >= 70;
    } else if (scheme.id === 'mjpjay') {
      eligible = answers.state === 'Maharashtra' && (answers.rationCard !== 'White Ration Card (High Income)');
    } else if (scheme.id === 'pmjay') {
      eligible = answers.income !== 'Above ₹2.5 Lakh / year';
    } else if (scheme.id === 'jsy') {
      eligible = answers.pregnant === 'Yes' && answers.isRural === 'Yes';
    }
    setIsEligible(eligible);
    setChecked(true);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-bold text-base">Verify Eligibility: {scheme.name}</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-6 space-y-4 text-sm max-h-[80vh] overflow-y-auto">
          <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl text-xs leading-relaxed">
            <strong>Key Requirement:</strong> {scheme.eligibility}
          </div>

          {!checked ? (
            <div className="space-y-3">
              {scheme.id === 'vay_vandana' ? (
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Applicant Age (Must be 70+ years)</label>
                  <input
                    type="number"
                    value={answers.age}
                    onChange={e => setAnswers({ ...answers, age: e.target.value })}
                    className="w-full bg-slate-50 rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-emerald-500"
                    placeholder="Enter age"
                  />
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">State of Residence</label>
                    <select
                      value={answers.state}
                      onChange={e => setAnswers({ ...answers, state: e.target.value })}
                      className="w-full bg-slate-50 rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-emerald-500">
                      <option value="Maharashtra">Maharashtra (Eligible for PM-JAY & MJPJAY)</option>
                      <option value="Other">Other State</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Ration Card Category</label>
                    <select
                      value={answers.rationCard}
                      onChange={e => setAnswers({ ...answers, rationCard: e.target.value })}
                      className="w-full bg-slate-50 rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-emerald-500">
                      <option value="Yellow Ration Card (BPL)">Yellow Ration Card (Below Poverty Line)</option>
                      <option value="Orange Ration Card">Orange Ration Card (Low/Medium Income)</option>
                      <option value="Antyodaya Anna Yojana (AAY)">Antyodaya Anna Yojana (Poorest Families)</option>
                      <option value="White Ration Card (High Income)">White Ration Card (Income above ₹1 Lakh)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Annual Household Income</label>
                    <select
                      value={answers.income}
                      onChange={e => setAnswers({ ...answers, income: e.target.value })}
                      className="w-full bg-slate-50 rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-emerald-500">
                      <option value="Under ₹1,00,000 / year">Under ₹1,00,000 / year</option>
                      <option value="₹1,00,000 - ₹2,50,000 / year">₹1,00,000 - ₹2,50,000 / year</option>
                      <option value="Above ₹2.5 Lakh / year">Above ₹2.5 Lakh / year</option>
                    </select>
                  </div>
                </>
              )}

              {scheme.id === 'jsy' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Are you currently pregnant?</label>
                  <select
                    value={answers.pregnant}
                    onChange={e => setAnswers({ ...answers, pregnant: e.target.value })}
                    className="w-full bg-slate-50 rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-emerald-500">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              )}

              <button
                onClick={handleVerify}
                className="w-full mt-4 py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Check Instant Eligibility
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in">
              <div className={`p-4 rounded-xl text-center ${isEligible ? 'bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200' : 'bg-amber-50 text-amber-900 ring-1 ring-amber-200'}`}>
                <div className="inline-flex p-2 rounded-full bg-white shadow-sm mb-2">
                  <CheckCircle2 className={`w-8 h-8 ${isEligible ? 'text-emerald-600' : 'text-amber-600'}`} />
                </div>
                <h4 className="font-bold text-base">{isEligible ? 'Congratulations! You Qualify' : 'Verification Review Needed'}</h4>
                <p className="text-xs mt-1 text-slate-600">
                  {isEligible
                    ? `Based on your responses, you qualify for full cashless benefits under ${scheme.name}.`
                    : `Your profile may have restrictions under the current criteria for ${scheme.name}. You may still apply for review.`}
                </p>
              </div>

              <div>
                <h5 className="font-bold text-slate-700 text-xs uppercase mb-1">Benefit You Receive:</h5>
                <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg">{scheme.benefit}</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-700 text-xs uppercase mb-1">Documents to Carry:</h5>
                <ul className="text-xs text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded-lg">
                  {scheme.docs?.map(d => <li key={d}>• {d}</li>)}
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-slate-700 text-xs uppercase mb-1">How & Where to Apply:</h5>
                <p className="text-xs text-slate-600">
                  Visit the nearest <strong>Arogyamitra Counter</strong> at any Government Hospital (Sassoon, YCM, or CHC Chakan) or nearest <strong>Aaple Sarkar Seva Kendra</strong> with your Aadhaar and Ration Card.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setChecked(false)}
                  className="flex-1 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl">
                  Re-check Answers
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl">
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// LEARN MORE MODAL FOR SPECIFIC SCHEME
// -----------------------------------------------------------------------------
function SchemeLearnMoreModal({ scheme, onClose }) {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div>
            <h3 className="font-bold text-base">{scheme.name}</h3>
            <span className="text-xs text-emerald-400">{scheme.tag || 'Official Healthcare Scheme'}</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-6 space-y-4 text-sm max-h-[80vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Full Benefit Coverage</h4>
            <p className="text-slate-700 leading-relaxed text-sm bg-slate-50 p-3 rounded-xl">{scheme.benefit}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Eligible Population</h4>
            <p className="text-slate-700 text-xs bg-slate-50 p-3 rounded-xl">{scheme.who}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Official Helpline & Inquiry</h4>
            <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-xl text-emerald-800">
              <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-sm">Toll-Free Helpline: {scheme.helpline || '104 / 14555'}</div>
                <div className="text-xs text-emerald-600">Available 24x7 in Marathi, Hindi & English</div>
              </div>
            </div>
          </div>

          {scheme.officialUrl && (
            <div>
              <a
                href={scheme.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline">
                <ExternalLink className="w-4 h-4" /> Visit Official Government Portal
              </a>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// GENERAL MULTI-SCHEME ELIGIBILITY CALCULATOR
// -----------------------------------------------------------------------------
function GeneralEligibilityChecker() {
  const [answers, setAnswers] = useState({
    age: '',
    state: 'Maharashtra',
    familySize: '',
    income: 'Below poverty line',
    employment: 'Farmer',
    benefits: 'Ration card'
  });
  const [result, setResult] = useState(null);

  const questions = [
    { key: 'age', label: 'Age of Head of Family', type: 'number', placeholder: 'e.g. 45' },
    { key: 'state', label: 'State', type: 'select', options: ['Maharashtra', 'Madhya Pradesh', 'Uttar Pradesh', 'Rajasthan', 'Karnataka', 'Other'] },
    { key: 'familySize', label: 'Family members count', type: 'number', placeholder: 'e.g. 5' },
    { key: 'income', label: 'Annual Income Category', type: 'select', options: ['Below poverty line', 'Low income (< ₹1 Lakh)', 'Middle income (₹1L - ₹2.5L)', 'Above ₹2.5 Lakh'] },
    { key: 'employment', label: 'Primary Occupation', type: 'select', options: ['Farmer', 'Daily wage laborer', 'Self-employed', 'Senior citizen', 'Salaried'] },
    { key: 'benefits', label: 'Current Benefit Cards', type: 'select', options: ['Yellow Ration Card', 'Orange Ration Card', 'White Ration Card', 'None'] },
  ];

  const check = () => {
    const eligible = [];
    const ageNum = Number(answers.age);

    if (answers.income === 'Below poverty line' || answers.income === 'Low income (< ₹1 Lakh)') {
      eligible.push('Ayushman Bharat PM-JAY (₹5 Lakh Cover)');
    }
    if (answers.state === 'Maharashtra') {
      eligible.push('Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY)');
    }
    if (ageNum >= 70 || answers.employment === 'Senior citizen') {
      eligible.push('Ayushman Vay Vandana Card (Universal ₹5 Lakh for 70+)');
    }
    if (answers.employment === 'Farmer' || answers.employment === 'Daily wage laborer') {
      eligible.push('Janani Suraksha Yojana (Institutional Delivery)');
      eligible.push('Rashtriya Bal Swasthya Karyakram (RBSK)');
    }
    eligible.push('Mukhyamantri Sahayata Nidhi (Maharashtra Medical Aid)');

    setResult(eligible);
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 rounded-2xl p-6 lg:p-8 ring-1 ring-emerald-100 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="w-5 h-5 text-emerald-600" />
        <h3 className="font-bold text-slate-800 text-lg">AI Comprehensive Eligibility Checker</h3>
      </div>
      <p className="text-xs text-slate-500 mb-5">Answer a few non-confidential questions to see all national and state healthcare schemes you qualify for.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions.map(q => (
          <div key={q.key}>
            <label className="block text-xs font-semibold text-slate-600 mb-1">{q.label}</label>
            {q.type === 'select' ? (
              <select
                value={answers[q.key]}
                onChange={e => setAnswers(a => ({ ...a, [q.key]: e.target.value }))}
                className="w-full bg-white rounded-xl px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200 outline-none focus:ring-emerald-500">
                {q.options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input
                type="number"
                value={answers[q.key]}
                onChange={e => setAnswers(a => ({ ...a, [q.key]: e.target.value }))}
                placeholder={q.placeholder}
                className="w-full bg-white rounded-xl px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200 outline-none focus:ring-emerald-500"
              />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={check}
        className="mt-5 px-6 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 inline-flex items-center gap-2 shadow-sm transition-colors">
        <ShieldCheck className="w-4 h-4" /> Check All Matching Schemes
      </button>

      {result && (
        <div className="mt-5 bg-white rounded-xl p-5 ring-1 ring-emerald-200 shadow-sm animate-in fade-in">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">You are eligible for {result.length} healthcare programs:</div>
          <div className="flex flex-wrap gap-2">
            {result.map(r => (
              <span key={r} className="px-3 py-1.5 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {r}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
