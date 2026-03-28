import { motion } from 'framer-motion';

export default function Section({ children, className = '', id = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-[120px] px-[40px] w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}
