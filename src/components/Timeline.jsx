
function Timeline() {
  const journey = [
    "2024 → Started Programming",
    "2025 → Learned Web Development",
    "2026 → Git & GitHub",
    "2026 → Linux & SQL",
    "2026 → MERN + DevOps Projects",
    "2026 → Started DSA",
    "2026 → Started AI/ML",
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          My Journey
        </h2>

        <div className="border-l-4 border-yellow-500 pl-8 space-y-8">

          {journey.map((item, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-md p-6 rounded-xl hover:translate-x-2 transition duration-300"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Timeline;