const Programs: React.FC = () => {
  return (
    <section
      id="programs"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="text-blue-600 dark:text-blue-400">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our diverse programs designed to foster holistic development
            for early years and primary students.
          </p>
        </div>

        <div className="space-y-12">
          {/* School Details */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              School Details
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bloom Daycare and Academy is a private day school offering:
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto list-disc list-inside mt-4">
              <li>Full-time preschool programs</li>
              <li>Part-time preschool programs</li>
              <li>After-school care</li>
              <li>Summer camp programs</li>
              <li>Enrichment classes (e.g., Music, Art, STEM)</li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Academic Programs
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our curriculum follows a British-Nigerian framework, blending
              rigorous academics with cultural relevance to prepare students for
              success.
            </p>
          </div>

          {/* Subjects Offered */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Subjects Offered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "English",
                "Mathematics",
                "Social Studies",
                "Home Economics",
                "Business Studies",
                "Islamic Religion Studies",
                "Christian Religion Studies",
                "French Language",
                "Civic Education",
                "Computer Studies (ICT)",
                "Physical and Health Education",
                "Basic Technology",
                "Basic Science",
                "Agriculture Science",
                "Security Education",
                "Cultural and Creative Arts (CCA)",
                "Arabic Language",
                "Hausa Language",
                "Yoruba Language",
                "Igbo Language",
                "History",
              ].map((subject) => (
                <div
                  key={subject}
                  className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg text-center"
                >
                  <p className="text-gray-900 dark:text-white">{subject}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
