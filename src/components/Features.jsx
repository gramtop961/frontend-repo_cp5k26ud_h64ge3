import { UserPlus, MapPin, Calendar, MessageCircle, Bot, Languages, Shield } from 'lucide-react';

const features = [
  {
    icon: UserPlus,
    title: 'Simple Account Creation',
    description: 'Easy onboarding designed for all age groups with clear steps and big, readable text.'
  },
  {
    icon: MapPin,
    title: 'Volunteer Matching',
    description: 'Smart recommendations based on needs and proximity so help arrives faster.'
  },
  {
    icon: Calendar,
    title: 'Task Scheduling & Rescheduling',
    description: 'Flexible time management for visits and errands that fit your routine.'
  },
  {
    icon: MessageCircle,
    title: 'In-App Communication',
    description: 'Secure chat and calls to coordinate with your volunteer in one place.'
  },
  {
    icon: Bot,
    title: 'AI Mode (New)',
    description: 'Personalized assistant for reminders, emergency help, and gentle companionship.'
  },
  {
    icon: Languages,
    title: 'Multi-Language Support',
    description: 'Designed for seniors across India with regional language options.'
  },
  {
    icon: Shield,
    title: 'Secure Payment Gateway',
    description: 'Transparent, safe transactions for paid services where applicable.'
  }
];

const Features = () => {
  return (
    <section id="features" aria-label="Features" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Made for care, built for simplicity</h2>
          <p className="mt-3 text-lg text-gray-700">Everything you need to request help, connect, and feel supported.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2B6CB0]">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-700">{f.description}</p>
            </div>
          ))}
        </div>

        {/* AI Mode highlight */}
        <div id="ai" className="mt-14 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-[#2B6CB0]">New</p>
              <h3 className="mt-3 text-3xl font-bold text-gray-900">Meet Sahakari AI — Your Smart and Caring Companion</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Voice-based volunteer booking</li>
                <li>• Daily task and medication reminders</li>
                <li>• Smart suggestions for suitable volunteers</li>
                <li>• Emergency help access in one tap</li>
                <li>• Conversation for companionship</li>
              </ul>
              <p className="mt-4 font-medium text-gray-900">Because care shouldn’t need a manual — it should feel natural.</p>
            </div>
            <div aria-hidden="true" className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-xl ring-1 ring-blue-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#2B6CB0]/10 to-yellow-300/20" />
                <div className="relative h-full w-full p-6">
                  <div className="grid h-full grid-cols-2 gap-4">
                    <div className="rounded-xl bg-blue-50" />
                    <div className="rounded-xl bg-yellow-50" />
                    <div className="col-span-2 rounded-xl bg-white ring-1 ring-blue-100" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#2B6CB0]/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
