import { Building, Book, Laptop, Bus, Heart } from "lucide-react";

const Facilities: React.FC = () => {
  return (
    <section
      id="facilities"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="text-blue-600 dark:text-blue-400">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Discover our state-of-the-art facilities designed to support
            learning and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {[
            {
              name: "Modern Classrooms",
              icon: (
                <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              ),
              desc: "Spacious, well-equipped classrooms for interactive learning.",
            },
            {
              name: "Library",
              icon: (
                <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              ),
              desc: "A rich collection of books to foster a love for reading.",
            },
            {
              name: "ICT Labs",
              icon: (
                <Laptop className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              ),
              desc: "Advanced computer labs for technology integration.",
            },
            {
              name: "Sports Facilities",
              icon: (
                <Bus className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              ),
              desc: "Playgrounds and sports areas for physical development.",
            },
            {
              name: "Transportation",
              icon: (
                <Bus className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              ),
              desc: "Safe and reliable school bus services.",
            },
            {
              name: "Health Services",
              icon: (
                <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              ),
              desc: "On-site clinic for student health and well-being.",
            },
          ].map((facility) => (
            <div
              key={facility.name}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                {facility.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                {facility.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {facility.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
