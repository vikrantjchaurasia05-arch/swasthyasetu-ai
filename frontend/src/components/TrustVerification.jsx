import React, { useState } from 'react';
import { ShieldCheck, BadgeCheck, RefreshCw, Lock, FileCheck, ThumbsUp, ThumbsDown, Flag } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { base44 } from '@/api/base44Client';

const trustItems = [
  { icon: BadgeCheck, text: 'Verified healthcare facilities' },
  { icon: FileCheck, text: 'Official government scheme information' },
  { icon: RefreshCw, text: 'Updated facility information' },
  { icon: Lock, text: 'Secure user data' },
  { icon: ShieldCheck, text: 'Source-based AI answers' },
];

const reportTypes = [
  'Wrong hospital information',
  'Closed facility',
  'Wrong phone number',
  'Incorrect scheme information',
  'Incorrect location',
];

export default function TrustVerification() {
  const { t } = useLang();
  const [feedback, setFeedback] = useState(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportType, setReportType] = useState('');
  const [reportDetails, setReportDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  return (
    <section id="trust" className="py-16 lg:py-20 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{t('trustTitle')}</h2>
          <p className="mt-2 text-slate-500">We are committed to accurate, verified healthcare information.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {trustItems.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="bg-white rounded-xl ring-1 ring-slate-100 shadow-sm p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><Icon className="w-5 h-5" /></div>
                <span className="text-sm font-medium text-slate-700">{item.text}</span>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl ring-1 ring-slate-100 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-slate-800">{t('feedbackQ')}</div>
              <div className="text-xs text-slate-400 mt-0.5">Source: Official Government / Healthcare Provider</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => { setFeedback('yes'); base44.entities.FacilityFeedback.create({ reportType: 'General feedback', helpful: true, status: 'open' }).catch(() => {}); }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${feedback === 'yes' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}>
                <ThumbsUp className="w-4 h-4" /> Yes
              </button>
              <button onClick={() => { setFeedback('no'); base44.entities.FacilityFeedback.create({ reportType: 'General feedback', helpful: false, status: 'open' }).catch(() => {}); }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${feedback === 'no' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                <ThumbsDown className="w-4 h-4" /> No
              </button>
              <button onClick={() => setReportOpen(!reportOpen)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-red-50 text-red-600 hover:bg-red-100">
                <Flag className="w-4 h-4" /> Report
              </button>
            </div>
          </div>

          {feedback && (
            <div className="mt-4 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-4 py-2.5">
              {feedback === 'yes' ? 'Thank you for your feedback!' : 'Thanks — please tell us what needs fixing using the Report option.'}
            </div>
          )}

          {reportOpen && (
            <div className="mt-4 border-t border-slate-100 pt-4">
              <div className="text-sm font-semibold text-slate-700 mb-2">Report an issue</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {reportTypes.map(r => (
                  <button key={r} onClick={() => setReportType(r)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${reportType === r ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                    {r}
                  </button>
                ))}
              </div>
              <textarea value={reportDetails} onChange={e => setReportDetails(e.target.value)} placeholder="Add details (optional)" rows={2}
                className="w-full bg-slate-50 rounded-xl px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-red-400" />
              <button disabled={saving || !reportType} onClick={async () => {
                 setSaving(true);
                 try {
                   await base44.entities.FacilityFeedback.create({
                     reportType,
                     helpful: feedback === 'yes',
                     details: reportDetails,
                     status: 'open',
                   });
                   setSubmitted(true); setReportOpen(false); setReportType(''); setReportDetails('');
                 } finally { setSaving(false); }
              }}
                className="mt-2 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700 disabled:opacity-50">Submit report</button>
            </div>
          )}
          {submitted && (
            <div className="mt-4 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-4 py-2.5">
              Report submitted. Thank you for helping improve healthcare data.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
