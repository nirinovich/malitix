export function ServicesSection(): JSX.Element {
  const services = [
    {
      id: "custom-dev",
      title: "Custom Development",
      description:
        "Tailored web and mobile applications built to your specifications with modern technologies.",
      href: "/custom-dev",
    },
    {
      id: "mobile-app",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      href: "/mobile-app",
    },
    {
      id: "si-refonte",
      title: "SI Refonte",
      description:
        "Modernize your legacy systems with our comprehensive system refactoring services.",
      href: "/si-refonte",
    },
    {
      id: "sprint",
      title: "Sprint Commando",
      description: "Fast-track development sprints to unblock your critical projects.",
      href: "/sprint",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white text-center">
          Our Services
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Comprehensive technology solutions for every stage of your business journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="block p-6 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
