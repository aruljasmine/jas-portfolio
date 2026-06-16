const projects = [
  {
    title: "MERN DevOps Dashboard",
    tech: "React • Node • Docker • GitHub Actions",
  },
  {
    title: "Weather App",
    tech: "HTML • CSS • JavaScript • API",
  },
  {
    title: "Portfolio Website",
    tech: "React • Tailwind • Framer Motion",
  },
  {
    title: "AI/ML Projects (Upcoming)",
    tech: "Python • Pandas • Scikit-Learn",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-black/60 backdrop-blur-md p-8 rounded-2xl hover:scale-105 transition duration-300 border border-red-900 hover:border-yellow-400"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 text-yellow-200">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;