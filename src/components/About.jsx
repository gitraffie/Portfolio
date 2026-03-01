import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* About headline */}
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              My strength comes from my family and loved ones—they are my motivation.
            </p>
          </div>

          {/* About details */}
          <div className="space-y-4 text-gray-300">
            <p>
              I am confident in my problem-solving skills and creativity.
            </p>
            <p>
              I specialize in Frontend & Backend Web Development.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

