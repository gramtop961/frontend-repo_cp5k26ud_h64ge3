import { Apple, Play, Phone, Mail } from 'lucide-react';

const DownloadContact = () => {
  return (
    <section id="download" className="bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16" aria-label="Download and contact">
      <div className="mx-auto max-w-7xl px-4">
        {/* Download */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Start Your Journey with Sahakari Today!</h2>
            <p className="mt-3 text-lg text-gray-700">Install the app and experience trusted, compassionate assistance.</p>
            <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label="App store buttons">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label="Download on the App Store"
              >
                <Apple className="h-5 w-5" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2B6CB0] px-5 py-3 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2"
                aria-label="Get it on Google Play"
              >
                <Play className="h-5 w-5" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Preview mockups */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:max-w-md">
              <div className="rounded-2xl bg-white p-3 shadow ring-1 ring-blue-100">
                <div className="aspect-[9/19] w-full rounded-xl bg-gradient-to-b from-blue-100 to-white" />
                <p className="mt-2 text-sm font-medium text-gray-700">Home</p>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow ring-1 ring-blue-100">
                <div className="aspect-[9/19] w-full rounded-xl bg-gradient-to-b from-yellow-100 to-white" />
                <p className="mt-2 text-sm font-medium text-gray-700">AI Assistant</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>
            <p className="mt-2 text-gray-700">We’re here to help. Reach out with questions or feedback.</p>

            <form className="mt-4 space-y-4" aria-label="Contact form" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-blue-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2B6CB0] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-blue-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2B6CB0] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border border-blue-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2B6CB0] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#2B6CB0] px-6 py-3 text-base font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2"
                aria-label="Send message"
              >
                Send message
              </button>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#2B6CB0]" aria-hidden="true" /> Senior Helpline: +91 1800-000-000</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#2B6CB0]" aria-hidden="true" /> support@sahakari.org</p>
              </div>
            </form>
          </div>
        </div>

        {/* Presence map placeholder */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-white p-4 shadow-sm ring-1 ring-blue-100">
          <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-blue-50 to-yellow-50" role="img" aria-label="Map showing Sahakari's presence" />
          <p className="mt-2 text-center text-sm text-gray-600">Sahakari is growing across cities in India.</p>
        </div>
      </div>
    </section>
  );
};

export default DownloadContact;
