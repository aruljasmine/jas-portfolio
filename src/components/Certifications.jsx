const certs = [
  {
    name: "UI/UX with Figma and Adobe XD",
    issuer: "Udemy",
    date: "Feb 2026",
    image: "/certificates/udemy-uiux.jpg",
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM",
    date: "Feb 2026",
    image: "/certificates/ibm-software.jpg",
  },
  {
    name: "Getting Started with Git and GitHub",
    issuer: "IBM",
    date: "Feb 2026",
    image: "/certificates/ibm-github.jpg",
  },
  {
    name: "Tools of the Trade: Linux and SQL",
    issuer: "Google",
    date: "Mar 2026",
    image: "/certificates/google-linux-sql.jpg",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {certs.map((cert) => (
          <div
            key={cert.name}
            className="bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">
                {cert.name}
              </h3>

              <p className="text-yellow-400 mt-2">
                {cert.issuer}
              </p>

              <p className="text-yellow-200 mt-1">
                Issued: {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;