import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Community from './components/Community';
import { Download, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Header />
      <About />
      <Features />
      <Community />

      {/* Download */}
      <section id="download" aria-label="Download app" className="bg-gradient-to-b from-yellow-50 to-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Start Your Journey with Sahakari Today!</h2>
            <p className="mt-3 text-lg text-gray-700">Available soon on your favorite app stores. Get early access updates.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#2B6CB0] px-6 py-3 text-base font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2">
                <Download className="h-5 w-5" aria-hidden="true" />
                Get Download Link
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border-2 border-[#2B6CB0] px-6 py-3 text-base font-semibold text-[#2B6CB0] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2">
                Join as Volunteer
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-blue-100">
              <div className="aspect-[9/19] w-full rounded-xl bg-gradient-to-b from-blue-100 to-blue-50 p-2">
                <div className="h-full w-full rounded-lg bg-white shadow-inner" />
              </div>
            </div>
            <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-blue-100">
              <div className="aspect-[9/19] w-full rounded-xl bg-gradient-to-b from-yellow-100 to-yellow-50 p-2">
                <div className="h-full w-full rounded-lg bg-white shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" aria-label="Contact" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">We’re here to help</h2>
              <p className="mt-3 text-lg text-gray-700">Have questions or want to partner with us? Reach out anytime.</p>
              <div className="mt-4 space-y-2 text-gray-800">
                <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-[#2B6CB0]" /> support@sahakari.org</p>
                <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-[#2B6CB0]" /> Senior helpline: 1800-000-2024</p>
              </div>
              <div className="mt-6 h-48 w-full overflow-hidden rounded-xl bg-blue-50">
                <img
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/77.5946,12.9716,9/600x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYyd28yeGk1N3Z3N3gifQ.-J2oWQvY8h1wR7K5U8v7cw"
                  alt="Map showing Sahakari presence"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <form className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-900">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#2B6CB0] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]" />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="text-sm font-medium text-gray-900">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#2B6CB0] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]" />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#2B6CB0] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]" />
              </div>
              <button type="submit" className="mt-5 w-full rounded-full bg-[#2B6CB0] px-6 py-3 font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 py-8 text-blue-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-center text-sm opacity-90">© {new Date().getFullYear()} Sahakari — Care with compassion.</p>
          <div className="text-center text-sm opacity-90">Future: Family dashboard • AI volunteer ranking • Telehealth • Community events</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
