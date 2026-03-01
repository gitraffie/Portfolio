import { motion } from 'framer-motion';

const Skills = () => {
  const programming = ['Python', 'JavaScript', 'HTML', 'React.js', 'PHP'];
  const tools = ['VS Code', 'Git', 'Figma', 'Photoshop', 'After Effects'];

  return (
    <motion.section
      id="skills"
      className="py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A balanced toolkit for building thoughtful, modern experiences.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Programming column */}
          <div className="glass-card p-6 neon-border transition hover:shadow-glow">
            <h3 className="text-xl font-semibold text-white">Programming</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              {programming.map((skill) => (
                <li key={skill} className="rounded-xl border border-white/5 bg-white/5 px-4 py-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools column */}
          <div className="glass-card p-6 neon-border transition hover:shadow-glow">
            <h3 className="text-xl font-semibold text-white">Tools</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              {tools.map((tool) => (
                <li key={tool} className="rounded-xl border border-white/5 bg-white/5 px-4 py-2">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

