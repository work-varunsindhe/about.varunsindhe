import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Database, TrendingUp, Code2, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Custom-built, fast-loading websites that turn visitors into customers. SEO-optimized and mobile-first.",
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    desc: "Full-stack web apps tailored to your business processes — inventory, billing, CRM, or anything you need.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    desc: "Robust database design and management that keeps your data secure, organized, and accessible.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    desc: "Take your local business online. E-commerce, digital menus, booking systems — all at affordable prices.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Bespoke software built around YOUR workflow. No generic templates — every feature serves a purpose.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Ongoing support to keep your systems running smoothly. Updates, bug fixes, and performance monitoring.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-4">
            <span className="font-mono text-primary text-lg">03.</span>
            What I Offer
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Affordable, high-quality software solutions designed to deliver{" "}
            <span className="text-primary font-medium">maximum ROI</span>. Low investment, high turnover results.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:bg-card/80 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
