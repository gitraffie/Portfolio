import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Acadex',
    title: 'Acadex – Web Development Project',
    description:
      'A web-based academic management system that automates class handling, computes grades, tracks attendance, and sends email notifications.',
  },
  {
    name: 'Index',
    title: 'Index – Capstone Project',
    description:
      'A geofencing- and geotagging-powered internship monitoring platform with map validation, intern tracking, and supervisor dashboards.',
  },
  {
    name: 'EyeQ',
    title: 'EyeQ – Python Project',
    description:
      'A machine learning drowsiness detection system that measures eyelid closure duration and triggers an alarm when the driver becomes drowsy.',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Highlighted work combining systems thinking, design, and execution.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="glass-card flex h-full flex-col gap-4 p-6 transition hover:shadow-glow"
            >
              {/* Project content */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  {project.name}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm text-gray-300">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <button
                  type="button"
                  className="w-full rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-500 hover:bg-cyan-500/20"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
