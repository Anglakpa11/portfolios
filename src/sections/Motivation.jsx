import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Motivation() {
  return (
    <Section id="motivation" className="border-t border-white/10 pt-0 pb-[160px] px-0">
      <div className="flex flex-col gap-24">
        {/* Full Width Graphic */}
        <motion.div 
          className="w-full h-[60vh] md:h-[80vh] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src="/src/assets/work5.png" 
            alt="Artistic Motivation" 
            className="w-full h-full object-cover grayscale brightness-50" 
          />
        </motion.div>

        {/* Text Block */}
        <div className="px-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 md:col-start-3 text-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#EDEDED] mb-12 italic leading-[1.1]">
                "DESIGN IS NOT JUST ABOUT HOW IT LOOKS, BUT HOW IT FEELS AND SPEAKS TO THE HUMAN SOUL."
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
