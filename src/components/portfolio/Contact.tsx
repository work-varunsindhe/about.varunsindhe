import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-primary text-sm mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Whether you're a business looking to go digital, need custom software, or just want
            to say hello — my inbox is always open. I deliver quality solutions at{" "}
            <span className="text-primary font-medium">prices that won't break the bank</span>,
            with results that drive real growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="glow" size="lg" asChild>
              <a href="mailto:work.varusindhe@gmail.com">
                <Mail size={18} />
                Say Hello
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button variant="outline-glow" size="lg" asChild>
              <a href="tel:+919035727025">
                <Phone size={18} />
                +91 9035727025
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground font-mono">
            work.varusindhe@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
