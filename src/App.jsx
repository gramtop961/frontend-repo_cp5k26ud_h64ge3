import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import DownloadContact from './components/DownloadContact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900">
      {/* Home / Hero */}
      <Header />

      {/* About */}
      <section id="about" className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16" aria-label="About Sahakari">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We Believe in Care Beyond Technology</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Sahakari was created to bridge generations — connecting seniors who need assistance with young, motivated volunteers. Inspired by everyday moments of seniors struggling with tasks and feeling isolated, we set out to design a platform rooted in empathy, trust, and accessibility.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100">
              <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
              <p className="mt-2 text-gray-700">To empower seniors to live independently while fostering kindness and connection through volunteerism.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100">
              <h3 className="text-xl font-semibold text-gray-900">Our Story</h3>
              <p className="mt-2 text-gray-700">Born from community observation and built with seniors at the center, Sahakari focuses on what truly matters: dignity, safety, and companionship.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100">
              <h3 className="text-xl font-semibold text-gray-900">Values</h3>
              <p className="mt-2 text-gray-700">Empathy • Trust • Simplicity • Accessibility • Connection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features + AI highlight */}
      <Features />

      {/* For Volunteers */}
      <section id="volunteers" className="bg-white py-12 sm:py-16" aria-label="For Volunteers">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Be the Reason Someone Smiles Today</h2>
              <p className="mt-3 text-lg text-gray-700">Gain new skills, build community connections, and make a real difference with flexible hours and meaningful impact.</p>
              <ol className="mt-4 list-inside list-decimal text-gray-700">
                <li>Signup</li>
                <li>Match with Seniors</li>
                <li>Assist &amp; Connect</li>
                <li>Earn Rewards</li>
              </ol>
              <a
                href="#download"
                className="mt-5 inline-flex rounded-full bg-[#2B6CB0] px-6 py-3 text-base font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2"
                aria-label="Join as Volunteer"
              >
                Join as Volunteer
              </a>
            </div>
            <div aria-hidden className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-6 shadow-sm ring-1 ring-blue-100">
                <div className="grid h-full grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white shadow-inner ring-1 ring-blue-100" />
                  <div className="rounded-xl bg-white shadow-inner ring-1 ring-blue-100" />
                  <div className="col-span-2 rounded-xl bg-white shadow-inner ring-1 ring-blue-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Download + Contact + Map */}
      <DownloadContact />

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Sahakari. All rights reserved.</p>
          <div className="text-sm text-gray-600">Future enhancements: Family dashboard • AI-based ranking • Telehealth • Community events</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
