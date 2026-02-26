import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Users } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Software Developer",
    subtitle: "Shahi Exports, Shivamogga",
    desc: "Contributed to technology solutions at one of India's largest apparel exporters — a multimillion-dollar operation serving global brands. Worked on systems that streamline manufacturing workflows and data management.",
    tag: "Professional",
  },
  {
    icon: GraduationCap,
    title: "BE in Computer Science",
    subtitle: "JNNCE, Shivamogga",
    desc: "Completed Bachelor of Engineering in Computer Science & Engineering. Built strong foundations in algorithms, software design, databases, and full-stack development.",
    tag: "Education",
  },
  {
    icon: Users,
    title: "Event Lead & Organizer",
    subtitle: "College Events & Fests",
    desc: "Led and organized multiple large-scale college events and technical fests, managing teams, logistics, and delivering impactful experiences for hundreds of participants.",
    tag: "Leadership",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary text-lg">02.</span>
            Where I've Been
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-border hidden md:block" />

            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={18} />
                  </div>
                </div>

                <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-primary font-mono text-sm">{item.subtitle}</p>
                    </div>
                    <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
