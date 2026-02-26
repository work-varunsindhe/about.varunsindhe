import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js",
  "Python",
  "SQL / PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "Git & DevOps",
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary text-lg">01.</span>
            About Me
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a software developer and Computer Science graduate from{" "}
                <span className="text-foreground font-medium">JNNCE Shivamogga (BE, CSE)</span> with
                a passion for turning complex business problems into elegant digital solutions.
              </p>
              <p>
                My professional journey includes working at{" "}
                <span className="text-foreground font-medium">Shahi Exports, Shivamogga</span> — one of
                India's largest garment manufacturers and a multimillion-dollar enterprise — where I
                gained deep insight into how technology powers operations at scale.
              </p>
              <p>
                Beyond the corporate world, I've{" "}
                <span className="text-primary font-medium">led multiple college events</span> and
                built a reputation for creating custom software tailored to each client's
                unique needs — helping local businesses establish their digital presence and
                compete in the modern marketplace.
              </p>
            </div>

            <div>
              <p className="text-sm font-mono text-primary mb-4">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
