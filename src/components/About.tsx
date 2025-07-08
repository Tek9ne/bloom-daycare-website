import { Heart, Shield, BookOpen, Palette, Star } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Bloom Daycare and Academy
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Discover our story, mission, and commitment to nurturing young minds
            in a loving and stimulating environment.
          </p>
        </div>

        <div className="space-y-12">
          {/* History Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Our History
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Located in a serene and secure environment in Lugbe River Park
              Estate, Abuja, Bloom Daycare and Academy is a comprehensive
              educational institution catering to children from early years
              through primary (Basic) education. We are committed to nurturing
              the intellectual, emotional, social, and physical growth of every
              child, laying a strong foundation for a lifetime of success.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              Bloom Daycare and Academy was established out of a deep passion
              for education, child development, and moral excellence. Founded on
              December 18, 2024, the school began as a small daycare center in
              Lugbe River Park Estate, Abuja, with the vision of providing a
              safe, nurturing, and intellectually stimulating environment for
              preschool children.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              The founders, education enthusiasts with years of experience in
              early childhood care and educational leadership, recognized the
              need for a school that would deliver academic excellence while
              building strong character, discipline, and creativity in children
              from their formative years. What started as a modest daycare
              center has grown into a comprehensive educational institution
              comprising:
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto list-disc list-inside mt-4">
              <li>Daycare & Crèche Services – Child care services</li>
              <li>
                Nursery and Primary School – Providing robust, child-focused
                education
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              Since its inception, Bloom Daycare and Academy has become a beacon
              of quality education in the Lugbe community of Nigeria’s Federal
              Capital Territory. The school has expanded in both capacity and
              impact, focusing on innovative teaching methods, value-based
              education, technology integration, life skills and leadership
              development, and excellence in child development and care. Our
              commitment to “Where learning meets adventure” remains the heart
              of everything we do. At Bloom, every child is encouraged to bloom
              intellectually, socially, morally, and emotionally in their own
              unique way. Today, Bloom Daycare and Academy stands proud as a
              trusted partner in raising confident, competent, and compassionate
              future leaders.
            </p>
          </div>

          {/* Vision and Mission */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Vision & Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <strong>Vision:</strong> To foster early childhood development
              through learning, creativity, and socialization.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
              <strong>Mission:</strong> Prepare children for future academic and
              leadership success while ensuring they grow in a fun, supportive,
              and educational setting.
            </p>
          </div>

          {/* Core Values */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Accountability",
                  icon: (
                    <Star className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  ),
                },
                {
                  name: "Honesty",
                  icon: (
                    <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  ),
                },
                {
                  name: "Excellence",
                  icon: (
                    <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  ),
                },
                {
                  name: "Integrity",
                  icon: (
                    <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  ),
                },
                {
                  name: "Empathy",
                  icon: (
                    <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  ),
                },
                {
                  name: "Innovation",
                  icon: (
                    <Palette className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  ),
                },
              ].map((value) => (
                <div
                  key={value.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {value.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="text-center animate-fade-in">
            <blockquote className="text-xl italic text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              “Education is not preparation for life; education is life itself.”
              – John Dewey
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
