import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import avatar from '../assets/cta_avatar.png';

export default function Contact() {
  const { socials } = PORTFOLIO_DATA;

  // Filter required socials from data
  const filteredSocials = socials.filter(s =>
    ['instagram', 'LINKEDIN', 'Facebook'].includes(s.name)
  );

  return (
    <Section id="contact" className="bg-black text-white px-[24px] md:px-[40px] py-20 md:py-32 border-t border-white/5">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-24">

        {/* Left Side: Typography */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[clamp(44px,11vw,60px)] md:text-[8vw] lg:text-[100px] font-black uppercase leading-[0.9] tracking-[-0.05em] mb-8"
          >
            LET'S MAKE YOUR <br /> <span className="text-[#6C3BFF]">DESIGN SHINE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[14px] md:text-[18px] lg:text-[20px] font-bold uppercase tracking-[0.05em] leading-[1.6] text-white/70 max-w-[600px] mb-12 md:mb-16 italic"
          >
            “PASSIONATE ABOUT CREATING CLEAN, FUNCTIONAL, AND VISUALLY ENGAGING APPLICATIONS THAT MAKE A DIFFERENCE.”
          </motion.p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-12">
            {filteredSocials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                className="group relative flex items-center gap-2 text-[12px] md:text-[18px] font-bold uppercase tracking-widest text-white/90 hover:text-[#6C3BFF] transition-colors duration-300"
              >
                <span className="relative">
                  {social.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#6C3BFF] group-hover:w-full transition-all duration-300" />
                </span>
                <span className="text-[10px] md:text-[12px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[320px] md:max-w-[500px] lg:max-w-[600px] aspect-[4/5] relative rounded-2xl overflow-hidden group border border-white/10 shrink-0"
        >
          <img
            src={avatar}
            alt="Ang Lakpa Sherpa Avatar"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </Section>
  );
}
