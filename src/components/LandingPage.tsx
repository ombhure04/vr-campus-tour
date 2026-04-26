import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import {
  Building2,
  Utensils,
  BookOpen,
  FlaskConical,
  ArrowRight,
  Monitor,
  Compass
} from 'lucide-react';

import { Facility } from '../types';
import collegeImg from '../assets/Background.jpg';

interface LandingPageProps {
  onExplore: () => void;
  onFacility: (facility: Facility) => void;
  onFreeExplore: () => void;
}

const iconMap: Record<string, typeof Building2> = {
  'utensils': Utensils,
  'book-open': BookOpen,
  'flask-conical': FlaskConical,
  'monitor': Monitor,
  'building': Building2
};

export default function LandingPage({ onExplore, onFacility, onFreeExplore }: LandingPageProps) {
  const [facilities, setFacilities] = useState<Facility[]>([]);

  useEffect(() => {
    loadFacilities();
  }, []);

  const loadFacilities = () => {
    setFacilities([
      { id: '1', name: 'Cafeteria', description: 'Food & refreshments area', icon: 'utensils', image_360: null, type: 'facility', order_index: 1 },
      { id: '2', name: 'Library', description: 'Quiet study environment', icon: 'book-open', image_360: null, type: 'academic', order_index: 2 },
      { id: '3', name: 'Computer Lab', description: 'Practical lab sessions', icon: 'monitor', image_360: null, type: 'lab', order_index: 3 },
      { id: '4', name: 'Science Lab', description: 'Experiments & research', icon: 'flask-conical', image_360: null, type: 'lab', order_index: 4 }
    ]);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white overflow-x-hidden">

      {/* IMMERSIVE BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-60 transition-transform duration-1000"
          style={{ backgroundImage: `url(${collegeImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pt-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-md"
          >
            Welcome to the Future of Education
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
            GHRCEMN
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Experience our campus in <span className="text-cyan-400 font-semibold text-glow">Immersive 360° VR</span>
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={onExplore}
              className="group relative overflow-hidden px-8 py-4 bg-blue-600 rounded-2xl font-bold text-lg transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)]"
            >
              <div className="relative z-10 flex items-center gap-3">
                <Building2 size={24} />
                <span>Guided Tour</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <button
              onClick={onFreeExplore}
              className="group px-8 py-4 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-700/50 transition-all flex items-center gap-3"
            >
              <Compass size={24} className="text-cyan-400 group-hover:rotate-45 transition-transform" />
              <span>Free Explore</span>
            </button>
          </div>
        </motion.div>

        {/* FACILITIES GRID */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Featured Locations</h2>
            <div className="h-[1px] flex-grow mx-8 bg-gradient-to-r from-slate-700 to-transparent" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {facilities.map((facility) => {
              const Icon = iconMap[facility.icon] || Building2;

              return (
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  key={facility.id}
                  onClick={() => onFacility(facility)}
                  className="group relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                >
                  {/* Subtle Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative h-full bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative p-4 bg-slate-800 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                        <Icon size={32} className="text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                        {facility.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      EXPLORE NOW <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* STATUS BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 px-5 py-2 bg-slate-800/40 backdrop-blur-md rounded-full border border-white/5 shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">
              System Ready: 360° Engine Online
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}