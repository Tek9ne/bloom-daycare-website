interface StaffMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const Staff: React.FC = () => {
  const staff: StaffMember[] = [
    {
      name: "Jane Doe",
      role: "Lead Teacher",
      bio: "With over 10 years of experience, Jane specializes in early childhood education at Bloom Daycare and Academy.",
      image: "/assets/staff1.jpg",
    },
    {
      name: "John Smith",
      role: "Program Director",
      bio: "John oversees curriculum development and staff training to ensure learning meets adventure.",
      image: "/assets/staff2.jpg",
    },
  ];

  return (
    <section
      id="staff"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Staff
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team at Bloom Daycare and Academy, committed to
            nurturing and educating your child where learning meets adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-300 mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
