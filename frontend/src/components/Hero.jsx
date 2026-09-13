import React, { useState, useEffect } from 'react';
import { MapPin, MessageSquare, Siren, Mic, Globe, Navigation, ShieldCheck, ChevronLeft, ChevronRight, Activity, Wifi, Radio, HeartPulse } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import AIAssistant from '@/components/AIAssistant';

const slides = [
  {
    badge: 'Med-Tech · Remote Telemedicine',
    title: 'AI Tele-OPD for Remote & Tribal Villages',
    desc: 'Connecting Primary Health Centres in Gadchiroli, Nandurbar & Melghat to apex super-specialists in Pune & Mumbai via instant audio/video diagnosis.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    tagIcon: Activity,
    highlight: 'Zero Distance Healthcare'
  },
  {
    badge: 'Smart Logistics · Mobile Medical Vans',
    title: 'Diagnostic Labs at Your Village Chowk',
    desc: 'GPS-enabled mobile health units equipped with digital X-Ray, ECG, Pathology, and anti-snake venom reaching remote rural ghats across Maharashtra.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop',
    tagIcon: Wifi,
    highlight: 'Point-of-Care Diagnostics'
  },
  {
    badge: 'Cashless Care · PM-JAY & MJPJAY',
    title: '100% Free Treatment for Rural Families',
    desc: 'Instant biometric eligibility check and cashless hospital admission up to ₹5,00,000 per family across 50+ network hospitals in Maharashtra.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
    tagIcon: ShieldCheck,
    highlight: '₹5,00,000 Annual Protection'
  },
  {
    badge: 'Emergency Lifeline · 108 Ambulance',
    title: '24x7 Emergency Trauma Response',
    desc: 'Rapid GPS ambulance dispatch with life-support equipment and real-time medical guidance reaching remote village corners within minutes.',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=1200&auto=format&fit=crop',
    tagIcon: Siren,
    highlight: 'Call 108 Toll-Free'
  }
];

export default function Hero() {
  const { t } = useLang();
  const [currSlide, setCurrSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrSlide(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = slides[currSlide];
  const TagIcon = slide.tagIcon;

  return (
    <section id="home" className="relative bg-gradient-to-b from-emerald-50/70 via-teal-50/20 to-white pt-4 pb-8 lg:pt-6 lg:pb-12 border-b border-emerald-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Med-Tech Remote Healthcare Slideshow Banner */}
        <div
          className="mb-8 relative rounded-3xl overflow-hidden shadow-lg border border-emerald-200/70 bg-slate-950 text-white transition-all duration-700"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          
          <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            
            {/* Slide Content Overlay */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide backdrop-blur-md">
                  <TagIcon className="w-3.5 h-3.5" />
                  <span>{slide.badge}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-300 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                  <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>{slide.highlight}</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed drop-shadow">
                  {slide.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrSlide(i)}
                      className={`h-2 rounded-full transition-all ${currSlide === i ? 'w-8 bg-emerald-400' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setCurrSlide(prev => (prev - 1 + slides.length) % slides.length)}
                    className="p-1.5 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrSlide(prev => (prev + 1) % slides.length)}
                    className="p-1.5 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Main Content & AI Assistant Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Maharashtra Remote & Rural Healthcare Network
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              {t('heroHeadline')}
            </h1>
            
            <p className="mt-2.5 text-base sm:text-lg font-bold text-emerald-700">
              {t('heroHighlight')}
            </p>
            
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              {t('heroDesc')}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#find"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5 text-sm">
                <MapPin className="w-4 h-4" /> {t('findNear')}
              </a>
              <a
                href="#ai"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-50 font-bold rounded-xl transition-colors shadow-2xs text-sm">
                <MessageSquare className="w-4 h-4 text-emerald-600" /> {t('askAI')}
              </a>
              <a
                href="tel:108"
                className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition-all text-sm">
                <Siren className="w-4 h-4 animate-pulse" /> {t('emergencyHelp')}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1.5"><Mic className="w-3.5 h-3.5 text-emerald-600" /> Multilingual AI Voice</span>
              <span className="inline-flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-emerald-600" /> Marathi, Hindi & English</span>
              <span className="inline-flex items-center gap-1.5"><Navigation className="w-3.5 h-3.5 text-emerald-600" /> Real GPS Location</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AIAssistant compact />
          </div>
        </div>
      </div>
    </section>
  );
}
