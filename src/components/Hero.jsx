import profile from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8"
    >
      <img
        src={profile}
        alt="Arul Jasmine"
        className="w-72 h-72 object-cover rounded-full border-4 border-yellow-500 shadow-[0_0_60px_rgba(234,179,8,0.8)] hover:scale-105 transition duration-500"
      />

      <div>
        <h1 className="text-5xl font-bold">
          Arul Jasmine D
        </h1>

        <p className="text-yellow-200 mt-2">
          Computer Science Engineering Student
        </p>

        <div className="text-yellow-400 text-2xl mt-6">
          <Typewriter
            words={["Web Developer"]}
            loop={0}
            cursor
          />
        </div>

        <p className="mt-6 max-w-xl text-gray-300">
          Building Skills Today, Creating Intelligent Solutions Tomorrow.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-red-700 to-red-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="https://github.com/aruljasmine"
            target="_blank"
            className="border border-yellow-500 px-6 py-3 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;