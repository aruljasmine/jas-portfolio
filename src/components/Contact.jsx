
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-yellow-400 mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-10">
          Let's connect and build something amazing together.
        </p>

        <div className="flex justify-center gap-8">

          <a
            href="https://github.com/aruljasmine"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl hover:border hover:border-yellow-400"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arul-jasmine-d-877132292/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl hover:border hover:border-yellow-400"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;