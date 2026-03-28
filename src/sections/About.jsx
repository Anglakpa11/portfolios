import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section id="about" className="border-t border-white/10 pt-[120px] pb-[160px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        {/* Left: Profile Image */}
        <motion.div 
          className="md:col-span-5 relative group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[12px] bg-[#1a1a1a] shadow-2xl relative">
            <img 
              src={profileImg} 
              alt="Ang Lakpa Sherpa" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
            />
            {/* Subtle Overlay Glow */}
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          {/* Decorative Square */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-white/10 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
        </motion.div>

        {/* Right: Bio Content */}
        <motion.div 
          className="md:col-span-7 flex flex-col gap-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-6">
            <span className="inline-block px-4 py-2 border border-white/10 text-[12px] font-bold tracking-[0.2em] uppercase text-[#FFFFFF80] rounded-full w-fit">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tighter text-[#EDEDED]">
              FROM KATHMANDU — <br /> 
              <span className="text-accent underline underline-offset-8 decoration-4 decoration-accent/20">UI/UX DESIGNER</span>. <br />
              LET'S WORK TOGETHER
            </h2>
          </div>
          
          <div className="flex flex-col gap-8 max-w-2xl">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-[#FFFFFF80]">
              {PORTFOLIO_DATA.about.bio}
            </p>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="group relative inline-flex items-center gap-4 border border-white/20 px-10 py-5 uppercase font-bold text-sm tracking-widest text-[#EDEDED] overflow-hidden transition-colors hover:border-accent"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-white transition-colors">↓</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
