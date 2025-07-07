import type { LucideIcon } from "lucide-react";
import {
  TreePine,
  Utensils,
  Stethoscope,
  Car,
  Gamepad2,
  BookOpen,
} from "lucide-react";

interface Facility {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const Facilities: React.FC = () => {
  const facilities: Facility[] = [
    {
      icon: TreePine,
      title: "Outdoor Playground",
      description:
        "Safe, age-appropriate play equipment in a secure outdoor environment",
      image: "/playground.jpg",
    },
    {
      icon: Utensils,
      title: "Healthy Meals",
      description:
        "Nutritious meals and snacks prepared fresh daily by our kitchen staff",
      image: "/assets/meals.jpg",
    },
    {
      icon: Stethoscope,
      title: "Health & Safety",
      description: "On-site nurse and comprehensive health monitoring systems",
      image: "/health.jpg",
    },
    {
      icon: Car,
      title: "Transportation",
      description:
        "Safe and reliable transportation service with trained drivers",
      image: "/transport.jpg",
    },
    {
      icon: Gamepad2,
      title: "Activity Rooms",
      description:
        "Dedicated spaces for arts, crafts, music, and physical activities",
      image: "/activity.jpg",
    },
    {
      icon: BookOpen,
      title: "Library Corner",
      description:
        "Extensive collection of age-appropriate books and reading materials",
      image: "/library.jpg",
    },
  ];

  return (
    <section
      id="facilities"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Facilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art facilities at Bloom Daycare and Academy are
            designed to provide a safe, comfortable, and inspiring environment
            for learning and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full">
                  <facility.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-blue-900 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Safety First
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Your child's safety is our top priority at Bloom Daycare and
                Academy. Our facilities are equipped with modern security
                systems, and all staff are trained in emergency procedures and
                first aid.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  24/7 security monitoring system
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Secure entry and exit protocols
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Regular safety drills and training
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Child-proofed environment
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/assets/safety.jpg"
                alt="Safe and secure environment"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
