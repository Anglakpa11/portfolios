import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative flex flex-col gap-6"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] md:rounded-[12px] bg-[#1a1a1a] border border-white/5">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col gap-1 px-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#EDEDED] group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-[12px] font-mono text-[#FFFFFF40] mt-1">{project.id}</span>
        </div>
        <p className="text-[14px] tracking-widest uppercase text-[#FFFFFF60]">
          {project.category}
        </p>
      </div>
    </motion.a>
  );
};

export default function SelectedWork() {
  return (
    <Section id="work" className="border-t border-white/10 pt-[120px]">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
        <div className="flex flex-col gap-4">
          <span className="inline-block px-4 py-2 border border-white/10 text-[12px] font-bold tracking-[0.2em] uppercase text-[#FFFFFF80] rounded-full w-fit">
            SELECTED WORK
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black uppercase leading-[0.9] tracking-tighter text-[#EDEDED]">
            CRAFTING <br /> DIGITAL <span className="text-accent underline underline-offset-8 decoration-8 decoration-accent/30">LIVES</span>
          </h2>
        </div>
        <p className="text-[#FFFFFF80] max-w-sm text-lg md:text-xl font-medium pt-8">
          Precision pixels. Intuitive flows. Human-centered logic. Design that doesn't just look good, it performs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {PORTFOLIO_DATA.work.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
