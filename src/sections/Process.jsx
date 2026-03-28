import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';

export default function Process() {
  return (
    <Section id="process" className="py-40 bg-card rounded-3xl mb-32">
      <div className="mb-24 px-4 md:px-0">
        <span className="inline-block px-4 py-2 border border-border text-xs font-bold tracking-widest uppercase text-muted rounded-full mb-8">
          Method
        </span>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Discover My Work Method
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.process.map((step) => (
          <div 
            key={step.id} 
            className="group relative border border-border bg-background p-10 hover:border-white/50 transition-colors"
          >
            <div className="text-6xl font-black text-muted/20 group-hover:text-white/20 transition-colors mb-8">
              {step.id}
            </div>
            <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
              {step.title}
            </h4>
            <p className="text-muted leading-relaxed font-medium">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
