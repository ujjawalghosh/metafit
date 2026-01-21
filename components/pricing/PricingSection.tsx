import React from 'react';
import { 
  Bot, 
  TrendingUp, 
  Video, 
  Smartphone, 
  CheckCircle2, 
  PersonStanding, 
  Music, 
  Users, 
  Check, 
  CalendarDays, 
  Sprout, 
  Stethoscope, 
  Pill, 
  Activity, 
  Dumbbell 
} from 'lucide-react';

const PricingSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Monthly Plans
        </h1>
        <p className="text-slate-500 text-lg">
          Choose the plan that fits your weight loss journey
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl w-full items-start">
        
        {/* --- Card 1: BASIC --- */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="text-center mb-6">
            <h3 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-2">Basic</h3>
            <div className="flex items-baseline justify-center text-slate-900">
              <span className="text-2xl font-bold">₹</span>
              <span className="text-5xl font-extrabold tracking-tight">1,499</span>
              <span className="text-slate-400 text-lg font-medium ml-1">/mo</span>
            </div>
          </div>
          
          <div className="border-t border-slate-100 mb-6"></div>

          <ul className="space-y-4 flex-1 mb-8">
            <FeatureItem icon={<Bot className="w-5 h-5 text-slate-400" />} text="AI-powered diet plan" />
            <FeatureItem icon={<TrendingUp className="w-5 h-5 text-slate-400" />} text="Progress tracking" />
            <FeatureItem icon={<Video className="w-5 h-5 text-slate-400" />} text="Recorded workouts" />
            <FeatureItem icon={<Smartphone className="w-5 h-5 text-slate-400" />} text="Basic app access" />
          </ul>

          <button className="w-full py-3 rounded-lg bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors">
            Select Basic
          </button>
        </div>

        {/* --- Card 2: LIVE FITNESS (Most Popular) --- */}
        <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-emerald-500 flex flex-col h-full transform md:-translate-y-4 z-10">
          
          {/* Badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-md">
            🔥 Most Popular
          </div>

          <div className="text-center mb-6 mt-2">
            <h3 className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-2">Live Fitness</h3>
            <div className="flex items-baseline justify-center text-slate-900">
              <span className="text-2xl font-bold">₹</span>
              <span className="text-5xl font-extrabold tracking-tight">2,499</span>
              <span className="text-slate-400 text-lg font-medium ml-1">/mo</span>
            </div>
          </div>
          
          <div className="border-t border-slate-100 mb-6"></div>

          <ul className="space-y-4 flex-1 mb-8">
            <FeatureItem icon={<CheckCircle2 className="w-5 h-5 text-emerald-500" />} text="Everything in Basic" highlight />
            <FeatureItem icon={<PersonStanding className="w-5 h-5 text-emerald-500" />} text="Unlimited LIVE classes" />
            <FeatureItem icon={<Music className="w-5 h-5 text-emerald-500" />} text="Yoga & Dance sessions" />
            <FeatureItem icon={<Users className="w-5 h-5 text-emerald-500" />} text="Group motivation" />
          </ul>

          <button className="w-full py-3 rounded-lg bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200">
            Start Live Journey
          </button>
        </div>

        {/* --- Card 3: COACHING PLUS --- */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="text-center mb-6">
            <h3 className="text-xs font-bold text-purple-600 tracking-widest uppercase mb-2">Coaching Plus</h3>
            <div className="flex items-baseline justify-center text-slate-900">
              <span className="text-2xl font-bold">₹</span>
              <span className="text-5xl font-extrabold tracking-tight">3,999</span>
              <span className="text-slate-400 text-lg font-medium ml-1">/mo</span>
            </div>
          </div>
          
          <div className="border-t border-slate-100 mb-6"></div>

          <ul className="space-y-4 flex-1 mb-8">
            <FeatureItem icon={<Check className="w-5 h-5 text-purple-600" />} text="Everything in Live Fitness" />
            <FeatureItem text="Personal Nutritionist" className="font-medium ml-7" />
            <FeatureItem icon={<CalendarDays className="w-5 h-5 text-purple-600" />} text="Weekly progress reviews" />
            <FeatureItem icon={<Sprout className="w-5 h-5 text-purple-600" />} text="Habit coaching" />
          </ul>

          <button className="w-full py-3 rounded-lg bg-purple-50 text-purple-700 font-bold hover:bg-purple-100 transition-colors">
            Get Coaching
          </button>
        </div>

        {/* --- Card 4: MEDICAL METAFIT --- */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="text-center mb-6">
            <h3 className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">Medical Metafit</h3>
            <div className="flex items-baseline justify-center text-slate-900">
              <span className="text-2xl font-bold">₹</span>
              <span className="text-5xl font-extrabold tracking-tight">7,999</span>
              <span className="text-slate-400 text-lg font-medium ml-1">/mo</span>
            </div>
          </div>
          
          <div className="border-t border-slate-100 mb-6"></div>

          <ul className="space-y-4 flex-1 mb-8">
            <FeatureItem icon={<Stethoscope className="w-5 h-5 text-blue-500" />} text="Doctor consultation & care" />
            <FeatureItem icon={<Pill className="w-5 h-5 text-blue-500" />} text="GLP-1 / Mounjaro support" />
            <FeatureItem icon={<Activity className="w-5 h-5 text-blue-500" />} text="Health monitoring" />
            <FeatureItem icon={<Dumbbell className="w-5 h-5 text-blue-500" />} text="Muscle-safe workout plan" />
          </ul>

          <div className="mt-auto">
            <button className="w-full py-3 rounded-lg bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 transition-colors border border-blue-100">
              Consult Doctor
            </button>
            <p className="text-center text-xs text-slate-400 mt-3 italic">
              *Medicine cost extra
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper component for list items
const FeatureItem = ({ icon, text, highlight = false, className = "" }: { icon?: React.ReactNode; text: string; highlight?: boolean; className?: string }) => (
  <li className={`flex items-start gap-3 text-sm text-slate-600 ${className}`}>
    {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
    <span className={highlight ? "font-semibold text-slate-900" : ""}>{text}</span>
  </li>
);

export default PricingSection;