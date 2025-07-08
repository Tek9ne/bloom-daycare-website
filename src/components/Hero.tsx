import { Link } from "react-scroll";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center animate-fade-in"
      style={{ backgroundImage: `url('/children-learning.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white z-10">
        <img
          src="/logo.png"
          alt="Bloom Daycare and Academy Logo"
          className="w-48 h-48 sm:w-64 sm:h-64 mx-auto object-contain mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Bloom Daycare and Academy
        </h1>
        <p className="text-xl italic mb-8">Where learning meets adventure</p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="inline-block bg-blue-600 dark:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;
