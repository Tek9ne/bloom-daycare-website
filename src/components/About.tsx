import { Heart, Shield, BookOpen, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const values: Value[] = [
    {
      icon: Heart,
      title: "Loving Care",
      description:
        "Every child receives individual attention and care in a nurturing environment that feels like home.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "State-of-the-art security systems and trained staff ensure your child's safety at all times.",
    },
    {
      icon: BookOpen,
      title: "Quality Education",
      description:
        "Research-based curriculum designed to develop cognitive, social, and emotional skills.",
    },
    {
      icon: Sparkles,
      title: "Creative Development",
      description:
        "Art, music, and imaginative play foster creativity and self-expression in every child.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Bloom Daycare and Academy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Bloom Daycare and Academy has been dedicated to
            providing exceptional early childhood education and care, where
            learning meets adventure to nurture each child's unique potential.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <value.icon className="h-12 w-12 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
