import { useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollRevealText from '../components/ScrollRevealText';
import cvPdf from '../assets/Ang cv (2) (1).pdf';

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Full scroll range for the single Bio block
  const bioProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const handleMouseEnter = () => {
    window.dispatchEvent(new CustomEvent('updateCursor', { detail: { mode: 'resume', text: 'DOWNLOAD RESUME' } }));
  };

  const handleMouseLeave = () => {
    window.dispatchEvent(new CustomEvent('updateCursor', { detail: { mode: 'default' } }));
  };

  const handleGlobalDownload = () => {
    // Allows massive container to be clicked to download as the cursor promises
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = "Ang_Lakpa_Sherpa_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="about" className="pt-0 pb-0 !p-0 mb-[40px]">
      <div
        ref={containerRef}
        className="h-[400vh] relative w-full cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleGlobalDownload}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col px-[40px] overflow-hidden">

          {/* Header Row (Pinned) */}
          <div className="pt-[100px] md:pt-[60px] pb-12 bg-transparent flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8 md:gap-0 z-30">

            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-col">
                <h2 className="text-[60px] md:text-[80px] lg:text-[120px] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#FFFFFF]">
                  ABOUT ME
                </h2>
                <p className="text-[16px] md:text-[20px] font-bold uppercase tracking-wide text-[#FFFFFF] mt-2 md:mt-4">
                  FROM KATHMANDU - UXUI DESIGNER
                </p>
              </div>
              <div className="hidden md:flex w-[48px] h-[48px] rounded-full border border-white/30" />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-[12px] h-[12px] bg-white rounded-full" />
              <motion.a 
                href={cvPdf}
                download="Ang_Lakpa_Sherpa_CV.pdf"
                onClick={(e) => e.stopPropagation()} // Prevent double trigger from the container
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6C3BFF] px-6 py-2 md:py-3 rounded-[4px] text-white text-[12px] md:text-[14px] font-bold tracking-[0.1em] uppercase cursor-pointer hover:bg-[#5a2ee0] transition-colors inline-block"
              >
                DOWNLOAD RESUME
              </motion.a>
            </div>
          </div>

          {/* Sequential Text Showcase */}
          <div className="flex-1 flex flex-col justify-center pb-[10vh]">
            <div className="w-full flex flex-col gap-24 md:gap-32">

              {/* Bio Block */}
              <div className="flex flex-col gap-6">

                <div className="text-[clamp(28px,3vw,42px)] leading-[1.3] font-medium text-[#FFFFFF]">
                  <ScrollRevealText text={PORTFOLIO_DATA.about.bio} progress={bioProgress} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
