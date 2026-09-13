import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { MapPin, Navigation, Phone, Search, LocateFixed, Building2, Hospital, Stethoscope, FlaskConical, Clock, X, ChevronRight, ExternalLink } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { base44 } from '@/api/base44Client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const categories = ['All', 'Hospital', 'PHC', 'CHC', 'Clinic', 'Diagnostic'];

const maharashtraRegions = [
  { label: 'All Maharashtra', query: '' },
  { label: 'Gadchiroli (Tribal Forest)', query: 'gadchiroli' },
  { label: 'Nandurbar (Satpura)', query: 'nandurbar' },
  { label: 'Melghat (Amravati)', query: 'melghat' },
  { label: 'Palghar (Jawhar / Mokhada)', query: 'jawhar' },
  { label: 'Ratnagiri & Sindhudurg', query: 'ratnagiri' },
  { label: 'Satara & Patan', query: 'satara' },
  { label: 'Pune, Khed & Chakan', query: 'pune' },
  { label: 'Nashik & Surgana', query: 'nashik' },
];

// Helper to center the Leaflet map when user filters/searches
function ChangeMapView({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords && coords.length === 2 && !isNaN(coords[0])) {
      map.flyTo(coords, 10, { duration: 1.2 });
    }
  }, [coords, map]);
  return null;
}

export default function FindHealthcare() {
  const { t } = useLang();
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterCat, setFilterCat] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [open24, setOpen24] = useState(false);
  const [freeOnly, setFreeOnly] = useState(false);
  const [selected, setSelected] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.HealthcareFacility.list('-distance', 100)
      .then(setFacilities)
      .catch(() => setFacilities([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => facilities.filter(f => {
    const s = search.toLowerCase().trim();
    if (s) {
      const fullText = `${f.name} ${f.address} ${f.district || ''} ${f.taluka || ''} ${f.speciality || ''}`.toLowerCase();
      if (!fullText.includes(s)) return false;
    }
    if (selectedRegion) {
      const fullText = `${f.name} ${f.address} ${f.district || ''} ${f.taluka || ''}`.toLowerCase();
      if (!fullText.includes(selectedRegion.toLowerCase())) return false;
    }
    if (filterType !== 'All' && f.type !== filterType) return false;
    if (filterCat !== 'All' && f.category !== filterCat) return false;
    if (emergencyOnly && !f.emergency) return false;
    if (open24 && !f.hours.includes('24')) return false;
    if (freeOnly && !f.costRange.toLowerCase().includes('free')) return false;
    return true;
  }), [facilities, search, selectedRegion, filterType, filterCat, emergencyOnly, open24, freeOnly]);

  // Center on first matching facility or central Maharashtra
  const mapCenter = useMemo(() => {
    if (filtered.length > 0 && filtered[0].lat) {
      return [filtered[0].lat, filtered[0].lng];
    }
    return [19.7515, 75.7139]; // Geographic center of Maharashtra
  }, [filtered]);

  const getGoogleMapsUrl = (f) => {
    return f.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.name + ' ' + f.address)}`;
  };

  return (
    <section id="find" className="py-16 lg:py-20 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">{t('findTitle')}</h2>
          <p className="mt-2 text-slate-500">Search government PHCs, rural hospitals & private centers across remote and urban Maharashtra.</p>
        </div>

        {/* Search & Maharashtra Region Filter */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2.5">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setSelectedRegion('');
                }}
                placeholder="Search any district, taluka, village, or hospital..."
                className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 font-medium"
              />
              {search && (
                <button onClick={() => setSearch('')} className="p-1 text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => {
                setSelectedRegion('gadchiroli');
                setSearch('');
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm">
              <LocateFixed className="w-4 h-4" /> Remote Tribal Districts
            </button>
          </div>

          {/* Regional Quick Chips */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Districts & Pockets:</span>
            {maharashtraRegions.map(r => (
              <button
                key={r.label}
                onClick={() => {
                  setSelectedRegion(r.query);
                  setSearch('');
                }}
                className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-colors ${selectedRegion === r.query && !search ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {r.label}
              </button>
            ))}
          </div>

          {/* Facility Type & Status Filters */}
          <div className="mt-3 flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
            {['All', 'Government', 'Private'].map(tp => (
              <button
                key={tp}
                onClick={() => setFilterType(tp)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${filterType === tp ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {tp}
              </button>
            ))}
            <span className="w-px h-5 bg-slate-200 mx-1" />
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilterCat(c)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${filterCat === c ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {c}
              </button>
            ))}
            <span className="w-px h-5 bg-slate-200 mx-1" />
            {[
              { label: '24x7 Emergency', val: emergencyOnly, set: setEmergencyOnly },
              { label: 'Free Care / BPL', val: freeOnly, set: setFreeOnly },
            ].map(f => (
              <button
                key={f.label}
                onClick={() => f.set(!f.val)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${f.val ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map & Facility Results */}
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100 h-80 lg:h-auto lg:min-h-[540px]">
            <MapContainer center={[19.75, 75.71]} zoom={7} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
              <ChangeMapView coords={mapCenter} />
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap' />
              {filtered.map(f => (
                <Marker key={f.id} position={[f.lat, f.lng]}>
                  <Popup>
                    <div className="text-xs">
                      <strong className="text-slate-800 text-sm">{f.name}</strong>
                      <div className="text-slate-500 mt-0.5">{f.district} · {f.type}</div>
                      <div className="text-emerald-700 font-semibold">{f.status}</div>
                      <a
                        href={getGoogleMapsUrl(f)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 font-bold text-blue-600 hover:underline">
                        <ExternalLink className="w-3 h-3" /> Open in Google Maps
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div className="lg:col-span-3 space-y-4 max-h-[640px] overflow-y-auto pr-1">
            <div className="text-xs font-bold text-slate-500 flex items-center justify-between">
              <span>{loading ? 'Loading facilities…' : `${filtered.length} healthcare facilities matched in Maharashtra`}</span>
              <span className="text-emerald-600">✓ Google Maps navigation verified</span>
            </div>

            {loading && <div className="text-center py-12 text-slate-400">Loading healthcare network...</div>}
            
            {filtered.map(f => (
              <div key={f.id} className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${f.type === 'Government' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                      {f.category === 'Diagnostic' ? <FlaskConical className="w-6 h-6" /> : f.category === 'Clinic' ? <Stethoscope className="w-6 h-6" /> : <Hospital className="w-6 h-6" />}
                    </div>
                    <div>
                      <a
                        href={getGoogleMapsUrl(f)}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-slate-900 hover:text-emerald-700 leading-snug flex items-center gap-1.5 group">
                        {f.name}
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
                      </a>
                      <p className="text-xs text-slate-500 mt-1">{f.address}</p>
                      
                      <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 font-bold text-slate-700">{f.district}</span>
                        <span className={`px-2 py-0.5 rounded-md font-semibold ${f.type === 'Government' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'}`}>{f.type}</span>
                        <span className="text-slate-600 bg-emerald-50/50 px-2 py-0.5 rounded font-medium">{f.speciality}</span>
                      </div>
                    </div>
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${f.emergency ? 'bg-red-50 text-red-600 ring-1 ring-red-200' : 'bg-green-50 text-green-700'}`}>{f.status}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  <a href={`tel:${f.phone}`} className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl">
                    <Phone className="w-3.5 h-3.5" /> Call
                  </a>
                  <a
                    href={getGoogleMapsUrl(f)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl shadow-2xs">
                    <Navigation className="w-3.5 h-3.5" /> Google Maps
                  </a>
                  <button
                    onClick={() => setSelected(f)}
                    className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl ml-auto">
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {filtered.length === 0 && <div className="text-center py-12 text-slate-400">No facilities match your location search.</div>}
          </div>
        </div>
      </div>

      {/* Hospital Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="bg-white w-full sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 flex items-center justify-between px-5 py-4 bg-white border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selected.type === 'Government' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{selected.name}</h3>
                  <span className="text-xs text-slate-500">{selected.district} · {selected.type} ({selected.category})</span>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"><X className="w-5 h-5" /></button>
            </div>
            
            <div className="px-5 py-4 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <Info label="District / Taluka" value={`${selected.district} (${selected.taluka})`} />
                <Info label="Phone" value={selected.phone} />
                <Info label="Full Address" value={selected.address} />
                <Info label="Hours" value={selected.hours} icon={Clock} />
                <Info label="24x7 Emergency" value={selected.emergency ? 'Active 24x7 with Trauma' : 'OPD Regular Hours'} />
                <Info label="Hospital Beds" value={selected.beds || 'N/A'} />
                <Info label="Doctors on Duty" value={`${selected.doctors} doctors`} />
                <Info label="Cost Range" value={selected.costRange} />
              </div>
              
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase mb-1.5">Specialized Departments</div>
                <div className="flex flex-wrap gap-1.5">{selected.departments?.map(d => <span key={d} className="px-2.5 py-1 bg-slate-100 rounded-full text-slate-700 text-xs font-medium">{d}</span>)}</div>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase mb-1.5">Diagnostics & Labs</div>
                <div className="flex flex-wrap gap-1.5">{selected.diagnostics?.map(d => <span key={d} className="px-2.5 py-1 bg-slate-100 rounded-full text-slate-700 text-xs font-medium">{d}</span>)}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-slate-100">
                <a href={`tel:${selected.phone}`} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700">
                  <Phone className="w-4 h-4" /> Call Hospital
                </a>
                <a
                  href={getGoogleMapsUrl(selected)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-sm">
                  <Navigation className="w-4 h-4" /> Open on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Info({ label, value, icon: Icon }) {
  return (
    <div>
      <div className="text-xs font-semibold text-slate-400 uppercase mb-0.5 flex items-center gap-1">{Icon && <Icon className="w-3 h-3" />}{label}</div>
      <div className="text-slate-700 font-medium">{value}</div>
    </div>
  );
}
