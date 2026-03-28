import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const NavLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hover"
      className="relative overflow-hidden block text-[#FFFFFF80] hover:text-foreground transition-colors text-[20px]"
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
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-[36px] left-[40px] right-[40px] z-50 flex justify-between items-center"
    >
      <div className="flex items-center gap-4">
        {/* New Geometric SVG Logo */}
        <a href="#" className="flex items-center group">
          <img
            src={logo}
            alt="Logo"
            className="h-[40px] md:h-[52px] w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-end pr-26">
        <nav className="flex items-center gap-32 text-[20px] tracking-[0.02em] font-medium">
          <NavLink href="#about">( ABOUT )</NavLink>
          <NavLink href="#services">( SERVICES )</NavLink>
        </nav>
      </div>

      <button className="flex items-center justify-center h-[44px] md:h-[52px] px-[20px] md:px-[24px] bg-white text-black rounded-[8px] font-semibold text-[20px] hover:bg-white/90 transition-colors shrink-0">
        Download resume
      </button>
    </motion.header>
  );
}
