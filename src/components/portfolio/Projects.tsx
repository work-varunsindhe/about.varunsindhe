import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Enterprise Resource Planner",
    desc: "Built a comprehensive ERP module for a manufacturing unit to streamline production tracking, inventory management, and reporting — reducing manual overhead by 40%.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
  },
  {
    title: "E-Commerce Platform",
    desc: "Designed and developed a full e-commerce storefront for a local retail business, enabling online orders, payment integration, and delivery tracking.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Appointment Booking System",
    desc: "Created a booking and scheduling platform for a service-based business, with automated reminders, calendar sync, and customer management.",
    tags: ["React", "Firebase", "Twilio", "Material UI"],
  },
  {
    title: "Inventory Management Tool",
    desc: "Custom inventory tracker for a wholesale distributor — barcode scanning, stock alerts, and real-time dashboard for instant business insights.",
    tags: ["TypeScript", "Express", "MySQL", "Chart.js"],
  },
  {
    title: "Digital Menu & Ordering",
    desc: "QR-based digital menu system for restaurants with real-time order tracking, kitchen display, and analytics — replacing paper menus entirely.",
    tags: ["React", "Socket.io", "Node.js", "PWA"],
  },
  {
    title: "College Event Portal",
    desc: "Full-featured event management portal handling registrations, schedules, live updates, and results for 500+ participants across multiple events.",
    tags: ["React", "Express", "MongoDB", "WebSockets"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary text-lg">04.</span>
            Things I've Built
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-lg p-6 flex flex-col hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="text-primary" size={36} strokeWidth={1} />
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
