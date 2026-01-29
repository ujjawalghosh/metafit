import { 
  ChatBubbleLeftRightIcon, 
  ChartBarIcon, 
  BeakerIcon, 
  TruckIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Chat with a provider 24/7",
    description: "Unlimited messaging with your dedicated care team anytime you need support.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Manage goals in one place",
    description: "Track your weight loss progress and manage your treatment plan easily.",
    icon: ChartBarIcon,
  },
  {
    title: "Clinically-proven, FDA-approved",
    description: "Access effective, science-backed treatments prescribed by licensed providers.",
    icon: BeakerIcon,
  },
  {
    title: "Fast, discreet shipping",
    description: "Your medication arrives quickly in unmarked packaging for your privacy.",
    icon: TruckIcon,
  }
];

export default function ValueProps() {
  return (
    <section className="bg-[#f4f2ed] py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-[#1a1a1a] mb-6">
            100% online,<br />
            100% convenient
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've removed the hassle of waiting rooms and pharmacy lines so you can focus on your health.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-sm"
            >
              {/* Icon Circle */}
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#054742]">
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 leading-snug">
                {feature.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}