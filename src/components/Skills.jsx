function Skills() {
  const skills = [
    "Python",
    "Java",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Linux",
    "Docker",
    "SQL",
    "Data Structures",
    "Algorithms",
    "Problem Solving",
  ];

  return (
    <section id="skills" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
        Skills
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              bg-gradient-to-br
              from-black
              via-red-950
              to-black
              p-6
              rounded-xl
              text-center
              border
              border-red-900
              hover:border-yellow-500
              hover:scale-110
              hover:shadow-[0_0_35px_rgba(234,179,8,0.7)]
              transition-all
              duration-300
              cursor-pointer
              font-semibold
              text-lg
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;