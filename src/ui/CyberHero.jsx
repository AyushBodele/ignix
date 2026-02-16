export default function CyberHero() {
  return (
    <section className="bg-[#f3f4f6] py-30 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative border border-purple-300 rounded-3xl bg-[#f3f4f6] px-10 py-12 overflow-visible">

          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* LEFT CONTENT */}
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-4xl font-semibold text-indigo-900 leading-tight mb-5">
                Architecting Supreme Enterprise <br />
                Cybersecurity Evolution at Scale
              </h1>

              <p className="text-gray-600 leading-relaxed text-base text-justify">
                Ignix Social accelerates cybersecurity transformation for large enterprises by delivering strategic, end-to-end protection built for scale and resilience. Our team of seasoned experts applies proven frameworks and advanced security methodologies to design systems that are both robust and future-ready. We identify and remediate critical vulnerabilities, strengthen risk management processes, and embed security into every layer of your digital infrastructure. Through continuous monitoring and intelligent threat response, we help organizations stay ahead of evolving cyber risks.
              </p>
            </div>

            {/* Spacer for desktop so text doesn't collide */}
            <div className="hidden lg:block w-[420px]" />
          </div>

          {/* ABSOLUTE IMAGE */}
          <div className="absolute right-0 bottom-0 translate-x-15 translate-y-6">
            <img
              src="/images/rocket.png" // replace with your path
              alt="Rocket launching from laptop"
              className="w-[380px] lg:w-[460px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
