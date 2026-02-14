export default function CyberHero() {
  return (
    <section className="bg-[#f3f4f6] py-30 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative border border-purple-300 rounded-3xl bg-[#f3f4f6] px-10 py-12 overflow-visible">

          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* LEFT CONTENT */}
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-4xl font-semibold text-indigo-900 leading-tight mb-5">
                Accelerating Cybersecurity <br />
                Transformation at Scale
              </h1>

              <p className="text-gray-600 leading-relaxed text-base">
                We empower organizations to accelerate their cybersecurity transformation at scale.
                With our expertise, we help you design, implement, and sustain customized
                cybersecurity programs that seamlessly align with your business goals.
                Our solutions span various domains, offering the complete spectrum of services
                required to build strong security foundations and overcome compliance challenges.
                Our seasoned experts are dedicated to delivering top-notch solutions designed to
                protect your business and ensure your continuous growth.
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
