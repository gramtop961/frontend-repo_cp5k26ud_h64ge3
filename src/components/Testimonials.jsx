import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Usha Devi, 68',
    role: 'Senior Member',
    quote:
      'With Sahakari, I feel independent again. My volunteer helps with groceries and we have lovely conversations.',
    avatar:
      'https://images.unsplash.com/photo-1578898887932-2be4b1a52f12?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Rahul Mehta, 22',
    role: 'Volunteer',
    quote:
      'I joined to help, but I gained a friend. The platform makes it simple to schedule and stay connected.',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Fatima Khan, 60',
    role: 'Senior Member',
    quote:
      'The reminders are a blessing. I never miss my medicines and help is just a tap away.',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Stories That Inspire</h2>
          <p className="mt-3 text-lg text-gray-700">Real experiences from seniors and volunteers using Sahakari.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-[#2B6CB0]" aria-hidden="true" />
              <blockquote className="text-gray-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
