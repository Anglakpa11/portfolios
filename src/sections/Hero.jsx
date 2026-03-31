import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/hero.png';
import { Timer } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import FloatingBalls from '../components/FloatingBalls';
export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1.1, 0.9]);

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col pt-[140px] pb-[36px] px-[40px] overflow-hidden bg-background">
      <CustomCursor />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingBalls />
      </div>
      
      {/* Text Group */}
      <div className="flex flex-col mt-auto items-start text-left pb-[120px] z-10 w-full relative">
        {/* Small Label - Now above title */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-4"
        >
          <Timer size={20} className="text-accent" />
          <span className="text-[#FFFFFF] text-[14px] md:text-[18px] font-medium tracking-[0.1em] mt-0.5 uppercase">
            KICKSTART YOUR UI/UX PROJECT
          </span>
        </motion.div>

        {/* Main Typography Area with Character-Level Name Reveal Hover */}
        <motion.div
            initial="initial"
            whileHover="hover"
            className="flex flex-col items-start font-black leading-[0.8] tracking-[-0.04em] text-[#FFFFFF] cursor-default text-[60px] md:text-[140px] lg:text-[160px] relative z-10 select-none"
        >
          {/* First Row: UX/UI -> ANG */}
          <div className="relative overflow-hidden h-max w-max flex items-center">
            {/* Slide Out: UX/UI */}
            <div className="flex">
              {"UX/UI".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { x: 0, opacity: 1 },
                    hover: { x: "-110%", opacity: 0 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Slide In: ANG */}
            <div className="absolute inset-x-0 flex">
              {"ANG".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { x: "120%", opacity: 0 },
                    hover: { x: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.03 + 0.1 }}
                  className="inline-block text-[#6C3BFF]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Second Row: DESIGNER -> LAKPA */}
          <div className="relative overflow-hidden h-max w-max flex items-center">
            {/* Slide Out: DESIGNER */}
            <div className="flex pt-4">
              {"DESIGNER".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { x: 0, opacity: 1 },
                    hover: { x: "-110%", opacity: 0 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index + 4) * 0.03 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Slide In: LAKPA */}
            <div className="absolute inset-x-0 flex pt-4">
              {"LAKPA".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { x: "120%", opacity: 0 },
                    hover: { x: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index + 3) * 0.03 + 0.15 }}
                  className="inline-block text-[#6C3BFF]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>


      {/* Right Side Card (Preview Image) - Moved back to right to balance left-aligned text */}
      <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute hidden md:block top-[180px] right-[40px] w-[260px] lg:w-[320px] h-[160px] lg:h-[200px] rounded-[8px] md:rounded-[12px] bg-[#1a1a1a]/40 backdrop-blur-xl overflow-hidden z-20 border border-white/10"
      >
        <img src={heroImg} alt="Preview" className="w-[80%] h-[80%] object-contain mx-auto mt-2 opacity-90" />
        <div className="absolute bottom-4 left-0 w-full text-center">
          <p className="text-[10px] tracking-widest text-[#FFFFFF] uppercase">...ND OTHER GENERAL VISUAL DE...</p>
        </div>
      </motion.div>

      {/* Bottom Right Badges (Moved back from Left) */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-[36px] right-[40px] flex items-center gap-8 z-20"
      >
        <motion.a
          href="#work"
          initial="initial"
          whileHover="hover"
          className="relative overflow-hidden block text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors text-[20px] font-medium"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            ( SEE ALL PROJECTS )
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            ( SEE ALL PROJECTS )
          </motion.div>
        </motion.a>

        <div className="h-[44px] md:h-[52px] px-[16px] md:px-[20px] rounded-full bg-white text-black text-[14px] md:text-[16px] flex items-center gap-2 font-bold tracking-tight">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L12 6L6 12L0 6L6 0Z" fill="black" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
