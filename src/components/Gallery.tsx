const Gallery: React.FC = () => {
  return (
    <section
      id="gallery"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="text-blue-600 dark:text-blue-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Explore moments from our vibrant school community, events, and
            facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {[
            { src: "/children-learning.jpg", alt: "Children Learning" },
            { src: "/playground.jpg", alt: "Playground Activities" },
            { src: "/library.jpg", alt: "School Library" },
          ].map((image) => (
            <div
              key={image.alt}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
