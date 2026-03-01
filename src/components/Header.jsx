import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Header = () => {
  return (
    <header id="home" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Hero text */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Portfolio</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Raffie E. Dumaraog
            </h1>
            <p className="mt-4 text-lg text-gray-300 md:text-xl">
              IT Student – Developer – Designer
            </p>
          </div>

          {/* Primary actions */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl border border-teal-400/50 bg-teal-400/10 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:border-teal-400 hover:bg-teal-400/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-cyan-500/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:border-cyan-500 hover:bg-cyan-500/20"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          {/* Profile image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-teal-400/20 to-cyan-500/20 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-gray-800/60 p-2 shadow-card">
              <img
                src={profileImage}
                alt="Raffie E. Dumaraog"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

