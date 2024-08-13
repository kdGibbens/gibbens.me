'use client';
import { motion } from 'framer-motion';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className="md:basis-2/3 md:p-8 max-h-full lg:pt-20"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.section>
  );
};

export default Template;
