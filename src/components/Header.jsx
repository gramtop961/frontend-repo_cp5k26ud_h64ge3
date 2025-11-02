import { Heart, Download, Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-white" id="home" aria-label="Sahakari home">
      {/* Top navigation */}
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:py-6" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2" aria-label="Sahakari home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2B6CB0] text-white">
            <Heart className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-semibold text-gray-900">Sahakari</span>
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
          <a href="#ai" className="text-gray-700 hover:text-gray-900">AI Mode</a>
          <a href="#volunteers" className="text-gray-700 hover:text-gray-900">For Volunteers</a>
          <a href="#testimonials" className="text-gray-700 hover:text-gray-900">Testimonials</a>
          <a href="#download" className="text-gray-700 hover:text-gray-900">Download</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-[#2B6CB0] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download App
          </a>
          <a
            href="#volunteers"
            className="hidden rounded-full border border-[#2B6CB0] px-4 py-2 text-sm font-semibold text-[#2B6CB0] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2 md:inline-flex"
          >
            Join as Volunteer
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-12 pt-4 sm:pb-16 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#2B6CB0]">
            <Users className="h-4 w-4" aria-hidden="true" /> Empowering Seniors, Connecting Hearts
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Empowering Seniors, Connecting Hearts.
          </h1>
          <p className="mb-6 max-w-prose text-lg leading-relaxed text-gray-700">
            A volunteer assistance platform that helps seniors live independently with the support of compassionate volunteers.
            Built for accessibility with large text, clear actions, and a warm, human touch.
          </p>
          <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Primary actions">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-full bg-[#2B6CB0] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2"
            >
              Download App
            </a>
            <a
              href="#volunteers"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#2B6CB0] px-6 py-3 text-base font-semibold text-[#2B6CB0] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:ring-offset-2"
            >
              Join as Volunteer
            </a>
          </div>

          {/* Key stats */}
          <dl className="mt-8 grid grid-cols-3 gap-4 sm:max-w-md" aria-label="Key statistics">
            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <dt className="sr-only">Volunteers</dt>
              <dd className="text-2xl font-bold text-[#2B6CB0]">5K+</dd>
              <dd className="text-sm text-gray-600">Volunteers</dd>
            </div>
            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <dt className="sr-only">Seniors Supported</dt>
              <dd className="text-2xl font-bold text-[#2B6CB0]">3K+</dd>
              <dd className="text-sm text-gray-600">Seniors Supported</dd>
            </div>
            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <dt className="sr-only">Cities Covered</dt>
              <dd className="text-2xl font-bold text-[#2B6CB0]">10+</dd>
              <dd className="text-sm text-gray-600">Cities Covered</dd>
            </div>
          </dl>

          {/* AI Mode banner */}
          <div className="mt-6 inline-flex max-w-lg items-center gap-3 rounded-2xl border border-blue-100 bg-white p-3 pr-4 shadow-sm">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#2B6CB0] text-white">
              <Heart className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-sm text-gray-700"><span className="font-semibold">Now introducing AI Mode</span> — your smart companion for reminders, scheduling, and quick help.</p>
          </div>
        </div>

        {/* Visual side */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop"
            alt="A senior smiling while interacting with a caring volunteer"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          />

          {/* App mockups */}
          <div className="pointer-events-none absolute -bottom-6 -right-2 hidden w-1/2 md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur">
                <div className="aspect-[9/19] w-full rounded-2xl bg-gradient-to-b from-blue-100 to-blue-50 p-2">
                  <div className="h-full w-full rounded-xl bg-white shadow-inner" />
                </div>
              </div>
              <div className="rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur">
                <div className="aspect-[9/19] w-full rounded-2xl bg-gradient-to-b from-yellow-100 to-yellow-50 p-2">
                  <div className="h-full w-full rounded-xl bg-white shadow-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro video */}
      <div className="mx-auto mb-10 max-w-5xl px-4">
        <div className="overflow-hidden rounded-2xl border border-blue-100 shadow-sm">
          <iframe
            className="h-60 w-full sm:h-96"
            src="https://www.youtube.com/embed/2eF1mM2l2J8"
            title="How Sahakari works"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-center text-sm text-gray-600">A quick explainer: Seniors request → Volunteers assist → AI helps manage tasks.</p>
      </div>
    </header>
  );
};

export default Header;
