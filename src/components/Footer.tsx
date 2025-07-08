import { Link } from "react-scroll";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Bloom Daycare and Academy
            </h3>
            <p className="text-gray-400">Where learning meets adventure</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "home",
                "about",
                "programs",
                "facilities",
                "staff",
                "contact",
              ].map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              <a
                href="/assets/CodeOfConduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Code of Conduct
              </a>
              {" | "}
              <a
                href="/assets/PrivacyPolicy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 Bloom Daycare and Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
