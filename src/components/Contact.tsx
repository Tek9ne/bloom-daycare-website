import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  childAge: string;
  program: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    program: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      childAge: "",
      program: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to give your child the best start in life? Contact us today to
            schedule a tour or learn more about our programs at Bloom Daycare
            and Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@bloomdaycare.edu
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Address
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Education Street
                      <br />
                      Learning City, LC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Hours
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 7:00 AM - 6:00 PM
                      <br />
                      Extended care until 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Schedule a Tour
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We'd love to show you around our facilities and meet with you to
                discuss your child's needs. Tours are available Monday through
                Friday.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transform transition-transform">
                Book a Tour
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Enrollment Inquiry
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="childAge"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Child's Age
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g., 3 years old"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Program Interest
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                >
                  <option value="">Select a program</option>
                  <option value="infant">
                    Infant Care (6 weeks - 12 months)
                  </option>
                  <option value="toddler">Toddler Program (1 - 2 years)</option>
                  <option value="preschool">Preschool (3 - 4 years)</option>
                  <option value="primary">Primary School (5 - 11 years)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your child's needs or any questions you have..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center dark:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transform"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
