import { Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact <span className="text-blue-600 dark:text-blue-400">Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Reach out to learn more about our programs or start the admission
            process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Details
            </h3>
            <div className="space-y-4">
              <p className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                <MapPin className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                Cluster5/450 First Atlantic Road, River Park Estate, Airport
                Road, Lugbe, Abuja (FCT), Nigeria
              </p>
              <p className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                <Phone className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                +2349062387761, +2347034155551, +2348024234184
              </p>
              <p className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                <Mail className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                <a href="mailto:Bloominternationalacademy@gmail.com">
                  Bloominternationalacademy@gmail.com
                </a>
              </p>
              <p className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                <Mail className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                <a href="mailto:Oluwafunmilolanireti@yahoo.com">
                  Oluwafunmilolanireti@yahoo.com
                </a>
              </p>
              <p className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                <Mail className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                <a href="mailto:Oluwafunmiolanireti@gmail.com">
                  Oluwafunmiolanireti@gmail.com
                </a>
              </p>
              <p className="flex items-center text-lg text-gray-600 dark:text-gray-300">
                <MapPin className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                <a
                  href="https://maps.google.com/?q=542B+Freedom+Way,+cluster+5,Lugbe+900107,+Federal+Capital+Territory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Map Location
                </a>
              </p>
            </div>
          </div>

          {/* Admission Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Admission Information
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Admission Process
                </h4>
                <ul className="text-lg text-gray-600 dark:text-gray-300 list-disc list-inside mt-2">
                  <li>Preschool: January to December</li>
                  <li>Primary (Basic): August/September</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Admission Requirements
                </h4>
                <ul className="text-lg text-gray-600 dark:text-gray-300 list-disc list-inside mt-2">
                  <li>School test</li>
                  <li>Birth certificate</li>
                  <li>Last result from previous school</li>
                  <li>Parent or guardian consent</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Admission Dates
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  August 20th to September 30th
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Enrollment Form
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  <a
                    href="/assets/EnrollmentForm.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Download PDF Enrollment Form
                  </a>
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  <a
                    href="mailto:Bloominternationalacademy@gmail.com?subject=Request%20for%20Online%20Enrollment%20Form"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Request Online Enrollment Form
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
