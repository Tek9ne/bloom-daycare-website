import { useEffect } from "react";
import { Book, Baby, School, Clock } from "lucide-react";

const Programs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      title: "Infant Care",
      description:
        "Nurturing care for infants aged 6 weeks to 18 months with a focus on development and comfort.",
      icon: Baby,
      age: "6 weeks - 18 months",
    },
    {
      title: "Toddler Playgroup",
      description:
        "Interactive play and learning for toddlers aged 18 months to 3 years, fostering creativity.",
      icon: Book,
      age: "18 months - 3 years",
    },
    {
      title: "Preschool Program",
      description:
        "Structured learning for ages 3 to 5, preparing children for kindergarten with fun activities.",
      icon: School,
      age: "3 - 5 years",
    },
    {
      title: "After-School Care",
      description:
        "Safe and engaging care for school-aged children with homework help and activities.",
      icon: Clock,
      age: "5 - 12 years",
    },
  ];

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12 animate-fade-in">
          Our Programs
          <span className="text-blue-600 dark:text-blue-400"> at Bloom</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <program.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {program.description}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Age: {program.age}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Enroll Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
