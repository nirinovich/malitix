import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';

export default function TechStack() {
  const { theme } = useTheme();
  const variant = useABTestVariant('techStack');

  if (variant === 'A') {
    return <TechStackVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <TechStackVariantB theme={theme} />;
  } else {
    return <TechStackVariantC theme={theme} />;
  }
}

const TECHNOLOGIES = {
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  backend: ['Node.js', 'Python', 'Go', 'Firebase'],
  infrastructure: ['AWS', 'Google Cloud', 'Azure', 'Digital Ocean'],
  tools: ['Git', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
};

// =============================================
// VARIANT A: 2x3 Grid Badges
// =============================================
function TechStackVariantA({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Built With Modern Tech
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Industry-standard technologies ensuring scalability and performance.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
            <div key={category}>
              <h3
                className={`text-2xl font-bold mb-6 capitalize ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech}
                    className={`group p-4 rounded-xl backdrop-blur-xl text-center transition-all duration-300 hover:scale-110 cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50'
                        : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50'
                    }`}
                  >
                    <div className="flex items-center justify-center h-16 mb-3">
                      <div className="text-2xl font-bold text-[#2ca3bd]/60 group-hover:text-[#2ca3bd] transition-colors">
                        {tech.split(' ')[0].substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Horizontal Scrollable List
// =============================================
function TechStackVariantB({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Technology Arsenal
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Cutting-edge tools and frameworks for production-grade applications.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
            <div key={category}>
              <h3
                className={`text-lg font-bold mb-4 capitalize ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex overflow-x-auto gap-3 pb-4 scroll-smooth">
                {techs.map((tech) => (
                  <div
                    key={tech}
                    className={`flex-shrink-0 px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 hover:shadow-lg cursor-pointer whitespace-nowrap ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-[#2ca3bd]/20 to-[#2ca3bd]/10 border-[#2ca3bd]/30 hover:border-[#2ca3bd]'
                        : 'bg-gradient-to-r from-[#2ca3bd]/15 to-[#2ca3bd]/5 border-[#2ca3bd]/30 hover:border-[#2ca3bd]'
                    }`}
                  >
                    <span className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Categorized Columns
// =============================================
function TechStackVariantC({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Tech Stack Excellence
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Enterprise-grade technologies for enterprise-grade results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
            <div
              key={category}
              className={`p-8 rounded-2xl backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 capitalize flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                <div className="w-2 h-2 bg-[#2ca3bd] rounded-full"></div>
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <ul className="space-y-3">
                {techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#2ca3bd] rounded-full"></div>
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white/75' : 'text-gray-700'}`}>
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
