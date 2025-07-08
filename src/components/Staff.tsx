const Staff: React.FC = () => {
  return (
    <section
      id="staff"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-blue-600 dark:text-blue-400">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Meet our dedicated educators and leaders committed to your child’s
            success.
          </p>
        </div>

        <div className="space-y-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Principal’s Welcome
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Welcome to Bloom Daycare and Academy! Our team is passionate about
              fostering a nurturing and inspiring environment for every child.
              Contact us to learn more about our leadership and faculty.
            </p>
          </div>
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Faculty & Staff
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our experienced educators are dedicated to providing quality
              education and care. Visit our school or contact us for detailed
              staff bios and qualifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
