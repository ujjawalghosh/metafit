import React from 'react';
import { 
  Activity, 
  Utensils, 
  Brain, 
  Bot, 
  Stethoscope 
} from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col items-center py-20 px-4 overflow-hidden font-sans">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          What You Get with MetaFit
        </h2>
        {/* Green Underline */}
        <div className="h-1.5 w-24 bg-emerald-400 mx-auto rounded-full"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col gap-6 items-center">
        
        {/* Row 1: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <FeatureCard 
            tag="Active"
            title="Live Fitness"
            description="Daily live yoga, dance, and exercise sessions with real trainers."
            icon={<Activity className="w-8 h-8 text-emerald-500" />}
            iconBg="bg-emerald-100"
            tagBg="bg-gray-100"
          />
          <FeatureCard 
            tag="Nutrition"
            title="Sustainable Dieting"
            description="No food bans. Enjoy normal home food with smart portioning."
            icon={<Utensils className="w-8 h-8 text-orange-500" />}
            iconBg="bg-orange-100"
            tagBg="bg-gray-100"
          />
          <FeatureCard 
            tag="Mental Health"
            title="Mind & Psychology"
            description="Support for emotional eating and habit-building strategies."
            icon={<Brain className="w-8 h-8 text-purple-500" />}
            iconBg="bg-purple-100"
            tagBg="bg-gray-100"
          />
        </div>

        {/* Row 2: 2 Cards (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
          <FeatureCard 
            tag="Technology"
            title="AI Weight Loss Coach"
            description="Daily guidance with automatic plan adjustments based on progress."
            icon={<Bot className="w-8 h-8 text-blue-500" />}
            iconBg="bg-blue-100"
            tagBg="bg-gray-100"
          />
          <FeatureCard 
            tag="Medical"
            title="Medical Path"
            description="Doctor-led GLP-1 / Mounjaro support when medically appropriate."
            icon={<Stethoscope className="w-8 h-8 text-teal-600" />}
            iconBg="bg-teal-100"
            tagBg="bg-gray-100"
          />
        </div>

      </div>
    </div>
  );
};

// Reusable Card Component
interface FeatureCardProps {
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  tagBg: string;
}

const FeatureCard = ({ tag, title, description, icon, iconBg, tagBg }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-full border border-slate-50">
      
      {/* Tag Pills */}
      <span className={`${tagBg} text-slate-500 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6`}>
        {tag}
      </span>

      {/* Icon Circle */}
      <div className={`w-20 h-20 rounded-full ${iconBg} flex items-center justify-center mb-6`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSection;