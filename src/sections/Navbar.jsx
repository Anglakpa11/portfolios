import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';
import cvPdf from '../assets/Ang cv (2) (1).pdf';

const NavLink = ({ href, children, onClick }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      className="relative overflow-hidden block text-white hover:text-white transition-colors text-[20px] md:text-[20px]"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" }
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: {
      x: "0%",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[24px] md:top-[36px] left-[24px] md:left-[40px] right-[24px] md:right-[40px] z-50 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center group">
            <img
              src={logo}
              alt="Logo"
              className="h-[42px] md:h-[52px] w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[70px]">
          <nav className="flex items-center gap-[60px] text-[20px] tracking-[0.02em] font-medium">
            <NavLink href="#about">( ABOUT )</NavLink>
            <NavLink href="#services">( SERVICES )</NavLink>
          </nav>
          <motion.a
            href={cvPdf}
            download="Ang_Lakpa_Sherpa_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center h-[44px] md:h-[52px] px-[20px] md:px-[24px] bg-white text-black rounded-[8px] font-semibold text-[20px] hover:bg-white/90 transition-colors shrink-0 leading-none cursor-pointer"
          >
            Download resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 p-2"
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-8 h-[2px] bg-white rounded-full"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-8 h-[2px] bg-white rounded-full"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-8 h-[2px] bg-white rounded-full"
          />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#0A0A0A] z-[40] flex flex-col justify-center px-[40px] md:hidden"
          >
            <nav className="flex flex-col gap-8">
              <motion.div variants={itemVariants}>
                <NavLink href="#about" onClick={() => setIsOpen(false)}>( ABOUT )</NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink href="#services" onClick={() => setIsOpen(false)}>( SERVICES )</NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.a
                  href={cvPdf}
                  download="Ang_Lakpa_Sherpa_CV.pdf"
                  className="inline-block text-[32px] font-bold text-[#6C3BFF] mt-8"
                  onClick={() => setIsOpen(false)}
                >
                  RESUME ↘
                </motion.a>
              </motion.div>
            </nav>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-[40px] left-[40px] text-white/40 text-[14px] font-bold tracking-widest uppercase"
            >
              ©2024 PORTFOLIO
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
