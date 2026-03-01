import { motion } from 'framer-motion';
import { FiMail, FiGithub } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Let’s connect for collaborations, projects, or internships.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div className="glass-card space-y-5 p-6">
            <a
              href="mailto:raffiedumaraog@gmail.com"
              className="flex items-center gap-3 text-gray-300 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-teal-400">
                <FiMail />
              </span>
              raffiedumaraog@gmail.com
            </a>
            <a
              href="https://github.com/gitraffie"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-teal-400">
                <FiGithub />
              </span>
              github.com/gitraffie
            </a>
            <a
              href="https://www.facebook.com/sheeesh.raffie.to.gaiz/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-teal-400">
                <FaFacebookF />
              </span>
              facebook.com/sheeesh.raffie.to.gaiz
            </a>
            <a
              href="https://www.linkedin.com/in/raffie-dumaraog-1553a7394"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-teal-400">
                <FaLinkedinIn />
              </span>
              linkedin.com/in/raffie-dumaraog-1553a7394
            </a>
          </div>

          {/* Contact form */}
          <div className="glass-card p-6">
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-gray-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                />
              </div>
              {/* Email */}
              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-gray-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                />
              </div>
              {/* Message */}
              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-gray-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl border border-teal-400/50 bg-teal-400/10 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:border-teal-400 hover:bg-teal-400/20"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

