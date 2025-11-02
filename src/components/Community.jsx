import { HeartHandshake, Award, Star, Clock } from 'lucide-react';

const testimonials = [
  {
    name: 'Savitri Devi',
    role: 'Senior Member',
    quote:
      'With Sahakari, I feel independent again. My volunteer helps with groceries and, more importantly, shares a cup of tea and conversation.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Arjun',
    role: 'Volunteer',
    quote:
      'I joined to help, but I gained a new perspective and a dear friend. The app makes it so easy to schedule and stay in touch.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  }
];

const Community = () => {
  return (
    <section id="volunteers" aria-label="For Volunteers and stories" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Volunteer CTA */}
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-gradient-to-r from-blue-50 to-yellow-50 p-8 sm:p-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-[#2B6CB0]">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" /> Volunteer with Sahakari
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">Be the Reason Someone Smiles Today.</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><Award className="mt-1 h-4 w-4 text-[#2B6CB0]" /><span>Gain new skills, community connections, and impact badges.</span></li>
              <li className="flex items-start gap-2"><Clock className="mt-1 h-4 w-4 text-[#2B6CB0]" /><span>Flexible volunteer hours that fit your schedule.</span></li>
              <li className="flex items-start gap-2"><Star className="mt-1 h-4 w-4 text-[#2B6CB0]" /><span>Make a measurable difference in someone’s daily life.</span></li>
            </ul>
            <div className="mt-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#2B6CB0] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2"
              >
                Join as Volunteer
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-blue-100">
            <img
              src="https://images.unsplash.com/photo-1543339308-43f2b2c20430?q=80&w=1600&auto=format&fit=crop"
              alt="Volunteer assisting a senior with errands"
              className="aspect-video w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="mt-12">
          <h3 className="text-3xl font-bold text-gray-900">Stories That Inspire.</h3>
          <p className="mt-2 text-gray-700">Real voices from our community of seniors and volunteers.</p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/40 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <blockquote className="text-lg leading-relaxed text-gray-800">“{t.quote}”</blockquote>
                    <figcaption className="mt-2 text-sm font-medium text-gray-900">
                      {t.name} <span className="font-normal text-gray-600">• {t.role}</span>
                    </figcaption>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
