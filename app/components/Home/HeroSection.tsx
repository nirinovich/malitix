export function HeroSection(): JSX.Element {
  return (
    <section id="home" className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Custom Technology Solutions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Transform your business with cutting-edge development, mobile apps,
              and digital transformation.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/custom-dev"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
