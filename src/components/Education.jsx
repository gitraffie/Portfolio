import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="section-title">Education</h2>
        <div className="mt-8 glass-card p-6">
          {/* Education block */}
          <h3 className="text-xl font-semibold text-white">St. Anthony’s College</h3>
          <p className="mt-2 text-gray-300">4th Year IT Student</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;

