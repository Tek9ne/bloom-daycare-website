import { Link } from "react-scroll";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Bloom Daycare and Academy Logo"
                  className="h-12 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Bloom Daycare</h3>
                <p className="text-gray-400">and Academy</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Where learning meets adventure at Bloom Daycare and Academy,
              providing exceptional early childhood education and care in a
              loving, stimulating environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="programs"
                  smooth={true}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="facilities"
                  smooth={true}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="staff"
                  smooth={true}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Our Staff
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Infant Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Toddler Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Preschool
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Primary School
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Summer Camps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-400">info@bloomdaycare.edu</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Education Street
                  <br />
                  Learning City, LC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bloom Daycare and Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
