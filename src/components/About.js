import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
      <motion.section
        d="about"
        className="about"

        initial={{ 
          opacity: 0, 
          scale: 0.6
        }}

        whileInView={{ 
          opacity: 1, 
          scale: 1
        }}

        transition={{ 
          type: "spring",
          stiffness: 120,
          damping: 10
        }}

        viewport={{ once: true }}
>
    
      <div id="about" className="section-divider"></div>
      <h2 >About Us</h2>
        
      <p className="about-text">
        We are a professional accounting service dedicated to helping businesses
        manage finances, file taxes, and stay compliant with ease.
      </p>

      <motion.div
        className="about-stats"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
                }
              }}
            >
        {["20+", "15+", "100%"].map((val, i) => (
          <motion.div
            key={i}
            className="stat-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
      <h3>{val}</h3>
      <p>
        {i === 0 && "Years Experience"}
        {i === 1 && "Clients Served"}
        {i === 2 && "Client Satisfaction"}
      </p>
    </motion.div>
  ))}
</motion.div>

      <div className="about-points">
        <p><FaCheckCircle /> Accurate & Reliable Services</p>
        <p><FaCheckCircle /> Expert in GST & Tax Filing</p>
        <p><FaCheckCircle /> Fast WhatsApp Support</p>
      </div>
    </motion.section>
  );
}
export default About;