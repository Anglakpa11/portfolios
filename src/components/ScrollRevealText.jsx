import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollRevealText({ text, className = "", progress: externalProgress }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 35%"]
  });

  const scrollYProgress = externalProgress || internalProgress;
  const words = text.split(" ");

  return (
    <span ref={containerRef} className={`${className} block`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </span>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const x = useTransform(progress, range, ["15vw", "0vw"]);
  
  return (
    <span className="relative mr-[0.25em] mb-[0.15em] inline-block overflow-visible">
      <motion.span 
        style={{ opacity, x, display: 'inline-block', willChange: 'opacity, transform' }}
      >
        {children}
      </motion.span>
    </span>
  );
};
