import React, { useState, useEffect } from 'react';
import { GitCompare, Sparkles, Check, X, MapPin, LocateFixed, Search, ExternalLink, RefreshCw } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { base44 } from '@/api/base44Client';

// Quick location chips for remote districts in Maharashtra
const popularLocations = [
  { label: 'Gadchiroli (Tribal Forest)', query: 'Gadchiroli' },
  { label: 'Nandurbar (Satpura)', query: 'Nandurbar' },
  { label: 'Melghat (Amravati)', query: 'Melghat' },
  { label: 'Palghar (Jawhar)', query: 'Jawhar' },
  { label: 'Ratnagiri (Konkan)', query: 'Ratnagiri' },
  { label: 'Satara (Patan / Karad)', query: 'Satara' },
  { label: 'Khed & Chakan (Pune Rural)', query: 'Chakan' },
];

// Haversine formula to calculate accurate distance between two GPS coordinates in km
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export default function SmartComparison() {
  const { t } = useLang();
  const [facilities, setFacilities] = useState([]);
  const [locationQuery, setLocationQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [gpsLocation, setGpsLocation] = useState(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState(null);
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    base44.entities.HealthcareFacility.list('-distance', 100).then(data => {
      setFacilities(data);
    });
  }, []);

  // Request browser GPS
  const handleUseGPS = () => {
    if (!navigator.geolocation) {
      setGpsError('Geolocation is not supported by your browser.');
      return;
    }
    setGpsLoading(true);
    setGpsError(null);
    setLocationQuery('');

    navigator.geolocation.getCurrentPosition(
      pos => {
        setGpsLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        setGpsLoading(false);
        setAdvice(null);
      },
      err => {
        console.warn('GPS Error:', err);
        setGpsError('GPS permission denied or unavailable. Using location search instead.');
        setGpsLoading(false);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Determine top 3-4 facilities to compare
  let comparedList = [];

  if (gpsLocation) {
    // Calculate live distance for all facilities from user GPS
    const withGpsDist = facilities.map(f => ({
      ...f,
      computedDistance: calculateDistance(gpsLocation.lat, gpsLocation.lng, f.lat, f.lng)
    }));
    // Sort by computed distance
    withGpsDist.sort((a, b) => a.computedDistance - b.computedDistance);
    comparedList = withGpsDist.slice(0, 3);
  } else if (locationQuery.trim()) {
    const q = locationQuery.toLowerCase().trim();
    comparedList = facilities.filter(f => {
      const fullText = `${f.name} ${f.address} ${f.district || ''} ${f.taluka || ''} ${f.speciality || ''}`.toLowerCase();
      return fullText.includes(q);
    }).slice(0, 3);
  } else {
    // Default to Khed/Chakan nearby cluster
    comparedList = facilities.filter(f => {
      const text = `${f.name} ${f.address}`.toLowerCase();
      return text.includes('khed') || text.includes('chakan') || text.includes('manchar');
    }).slice(0, 3);
  }

  // Generate dynamic AI Medical Guidance
  const handleHelpChoose = () => {
    if (comparedList.length === 0) return;
    const govt = comparedList.find(f => f.type === 'Government');
    const pvt = comparedList.find(f => f.type === 'Private');
    const emg = comparedList.find(f => f.emergency);

    let rec = `Analysis for this location: `;
    if (govt) {
      const dist = gpsLocation ? `${govt.computedDistance} km away` : `${govt.distance} km`;
      rec += `For free consultations, subsidized medicines, and normal deliveries, ${govt.name} (${dist}) is your primary choice. `;
    }
    if (pvt) {
      const dist = gpsLocation ? `${pvt.computedDistance} km away` : `${pvt.distance} km`;
      rec += `If you require advanced ICU, multi-speciality surgery, or private care, ${pvt.name} (${dist}) accepts Ayushman Bharat/MJPJAY cashless cards. `;
    }
    if (emg) {
      rec += `For 24x7 emergencies, ${emg.name} has trauma and oxygen services active. `;
    }
    rec += `Always call 108 first in life-threatening conditions.`;
    setAdvice(rec);
  };

  const rows = [
    {
      label: 'Distance from Location',
      fn: f => gpsLocation ? (
        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
          {f.computedDistance} km (Live GPS)
        </span>
      ) : (
        <span>{f.distance} km</span>
      )
    },
    { label: 'Hospital Sector', fn: f => f.type },
    {
      label: '24x7 Emergency Service',
      fn: f => f.emergency ? (
        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
          <Check className="w-4 h-4 text-emerald-600" /> Yes (24 Hours)
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-slate-400">
          <X className="w-4 h-4" /> Daytime OPD Only
        </span>
      )
    },
    { label: 'Key Specialties', fn: f => f.speciality },
    {
      label: 'Ayushman Bharat & MJPJAY',
      fn: f => f.schemes?.length ? (
        <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
          ✓ 100% Cashless Accepted
        </span>
      ) : (
        <span className="text-slate-400">Subsidized / Standard</span>
      )
    },
    { label: 'Cost Range', fn: f => f.costRange },
    { label: 'Operating Hours', fn: f => f.hours },
    { label: 'Diagnostics & Testing', fn: f => f.diagnostics?.slice(0, 3).join(', ') || 'Clinical Labs' },
    {
      label: 'Google Maps Directions',
      fn: f => (
        <a
          href={f.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.name + ' ' + f.address)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
          <ExternalLink className="w-3.5 h-3.5" /> Navigate on Google Maps
        </a>
      )
    }
  ];

  return (
    <section id="compare" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">{t('compareTitle')}</h2>
          <p className="mt-2 text-slate-500">{t('compareSubtitle')}</p>
        </div>

        {/* Location & GPS Controller */}
        <div className="bg-emerald-50/60 p-5 rounded-2xl ring-1 ring-emerald-100 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* GPS Trigger Button */}
            <button
              onClick={handleUseGPS}
              disabled={gpsLoading}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${gpsLocation ? 'bg-emerald-700 text-white ring-2 ring-emerald-400' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}>
              <LocateFixed className={`w-4 h-4 ${gpsLoading ? 'animate-spin' : ''}`} />
              {gpsLoading ? 'Detecting GPS...' : gpsLocation ? '✓ GPS Active (Nearest Hospitals)' : 'Use My Live GPS Location'}
            </button>

            <span className="text-xs font-bold text-slate-400 uppercase hidden sm:inline">OR</span>

            {/* Location Search Bar */}
            <div className="flex-1 w-full relative">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl ring-1 ring-slate-200">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  value={locationQuery}
                  onChange={e => {
                    setLocationQuery(e.target.value);
                    setGpsLocation(null);
                    setAdvice(null);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Search any Maharashtra location, district or village..."
                  className="w-full bg-transparent outline-none text-xs text-slate-700 placeholder:text-slate-400 font-medium"
                />
                {locationQuery && (
                  <button onClick={() => { setLocationQuery(''); setShowSuggestions(false); }} className="p-1 text-slate-400 hover:text-slate-600">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              
              {/* Autocomplete Suggestions Dropdown */}
              {showSuggestions && locationQuery.length >= 1 && (
                <div className="absolute top-full mt-1 left-0 right-0 bg-white shadow-xl rounded-xl ring-1 ring-slate-100 max-h-48 overflow-y-auto z-10">
                  {facilities
                    .filter(f => `${f.name} ${f.address} ${f.district} ${f.taluka}`.toLowerCase().includes(locationQuery.toLowerCase()))
                    .slice(0, 5)
                    .map(f => (
                      <button
                        key={f.id}
                        onClick={() => {
                          setLocationQuery(f.name);
                          setShowSuggestions(false);
                          setGpsLocation(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs hover:bg-emerald-50 border-b border-slate-50 transition-colors last:border-0"
                      >
                        <div className="font-bold text-slate-800">{f.name}</div>
                        <div className="text-[10px] text-slate-500">{f.district} · {f.type}</div>
                      </button>
                    ))
                  }
                </div>
              )}
            </div>
          </div>

          {gpsError && (
            <div className="mt-2 text-xs text-amber-700 bg-amber-50 p-2 rounded-lg">
              ⚠️ {gpsError}
            </div>
          )}

          {/* Quick Remote District Chips */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-3 border-t border-emerald-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Remote Areas:</span>
            {popularLocations.map(p => (
              <button
                key={p.label}
                onClick={() => {
                  setLocationQuery(p.query);
                  setGpsLocation(null);
                  setAdvice(null);
                }}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-colors ${locationQuery === p.query ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700 hover:bg-emerald-100/70 ring-1 ring-slate-200/60'}`}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Result Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs font-bold text-slate-600">
            {gpsLocation ? (
              <span className="text-emerald-700 flex items-center gap-1">
                <LocateFixed className="w-3.5 h-3.5" /> Showing {comparedList.length} closest hospitals calculated from your GPS coordinates:
              </span>
            ) : locationQuery ? (
              <span>Showing hospitals near: <strong className="text-emerald-700">"{locationQuery}"</strong></span>
            ) : (
              <span>Showing default rural comparison cluster (Khed & Chakan):</span>
            )}
          </div>
          {comparedList.length === 0 && (
            <span className="text-xs text-amber-600 font-semibold">No facilities found. Try another district.</span>
          )}
        </div>

        {/* Comparison Table */}
        {comparedList.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 shadow-sm">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3.5 font-bold text-slate-500 w-44">Parameters</th>
                  {comparedList.map(h => (
                    <th key={h.id || h.name} className="text-left px-4 py-3.5 font-bold text-slate-800">
                      <div className="text-sm font-extrabold">{h.name}</div>
                      <div className="text-xs text-slate-500 font-normal mt-0.5">{h.district} · {h.taluka}</div>
                      <div className={`text-[11px] font-semibold mt-1 inline-block px-2 py-0.5 rounded-full ${h.type === 'Government' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'}`}>
                        {h.type} · {h.category}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? 'bg-slate-50/50' : 'bg-white'}>
                    <td className="px-4 py-3 font-semibold text-slate-500">{r.label}</td>
                    {comparedList.map(h => (
                      <td key={h.id || h.name} className="px-4 py-3 text-slate-700">
                        {r.fn(h)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-50 rounded-2xl text-slate-400 text-xs">
            No matching hospitals for this area. Click one of the quick remote area chips above.
          </div>
        )}

        {/* AI Help Me Choose */}
        {comparedList.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleHelpChoose}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm shrink-0">
              <Sparkles className="w-4 h-4" /> AI Help Me Choose For This Area
            </button>
            {advice && (
              <div className="flex-1 bg-emerald-50 rounded-xl p-4 text-xs sm:text-sm text-slate-800 ring-1 ring-emerald-200 animate-in fade-in">
                <span className="font-bold text-emerald-800">AI Recommendation for your location: </span>{advice}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
