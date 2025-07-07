import { useState } from "react";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleTourClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="home"
      className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 min-h-screen flex items-center"
    >
      {/* Background Logo with subtle animation */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-no-repeat bg-center opacity-20 dark:opacity-10 z-0"
        style={{ backgroundImage: "url('/logo.png')" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in flex flex-col justify-center">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Bloom Daycare
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  and Academy
                </span>
                <div className="text-xl italic text-orange-500 dark:text-orange-400 mt-2">
                  Where learning meets adventure
                </div>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                At Bloom Daycare and Academy, we provide exceptional early
                childhood education and care in a loving, stimulating
                environment where every child can thrive and discover their
                potential.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTourClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center group dark:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transform"
              >
                Schedule a Tour
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors hover:scale-105 transform">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-300" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    5-Star Rated
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Excellence in Education
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <Users className="h-5 w-5 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    500+ Families
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Trust Our Care
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                  <Award className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Award Winning
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Educational Programs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/children-learning.jpg"
              alt="Children learning and playing"
              className="rounded-2xl opacity-30 object-contain z-0"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Schedule a Tour
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contact us to arrange a visit to Bloom Daycare and Academy!
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 hover:scale-105 transform transition-transform"
              >
                Close
              </button>
              <button
                onClick={() => (window.location.href = "#contact")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transform transition-transform"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
