const About = () => {
  return (
    <section id="about" aria-label="About Sahakari" className="bg-gradient-to-b from-white to-blue-50/40 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We Believe in Care Beyond Technology.</h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-700">
            Sahakari was created with a vision to bridge generations — connecting seniors who need assistance with young, motivated volunteers.
            Our focus is empathy, trust, and community-driven design, so every interaction feels simple and caring.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Our Story</h3>
            <p className="mt-2 text-gray-700">
              Inspired by seeing elders struggle with daily tasks and isolation, we built a gentle way to ask for help and receive it with dignity.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
            <p className="mt-2 text-gray-700">
              To empower seniors to live independently while fostering kindness and connection through volunteerism.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Values</h3>
            <p className="mt-2 text-gray-700">Empathy • Trust • Simplicity • Accessibility • Connection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
