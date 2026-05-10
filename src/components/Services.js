import { motion } from "framer-motion";
import { FaFileInvoice, FaCalculator, FaChartLine, FaUsers } from "react-icons/fa";
const services = [
  {
    icon: <FaFileInvoice />,
    title: "GST Filing",
    desc: "Accurate GST returns"
  },  
  {
    icon: <FaFileInvoice />,
    title: "GST Registration & Filing",
    desc: "End-to-end GST registration and accurate return filing."
  },
  {
    icon: <FaCalculator />,
    title: "Income Tax Filing",
    desc: "Hassle-free ITR filing for individuals and businesses."
  },
  {
    icon: <FaChartLine />,
    title: "Accounting & Bookkeeping",
    desc: "Maintain clean and organized financial records."
  },
  {
    icon: <FaUsers />,
    title: "Tax Planning & Saving",
    desc: "Smart strategies to legally reduce tax burden."
  },
  {
    icon: <FaFileInvoice />,
    title: "Business Registration",
    desc: "Start your company, LLP, or firm with expert guidance."
  },
  {
    icon: <FaCalculator />,
    title: "Audit & Compliance",
    desc: "Stay compliant with audits and government regulations."
  },
  {
    icon: <FaFileInvoice />,
    title: "Payroll Management",
    desc: "Employee salary, PF, ESI handled smoothly."
  },
  {
    icon: <FaChartLine />,
    title: "Financial Consulting",
    desc: "Expert advice to grow and scale your business."
  }
];

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <motion.div
        className="service-container"
        drag="x"
        dragConstraints={{ left: -1600, right: 0 }}  // 👈 adjust based on cards
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
      >
        {services.map((s, i) => (
          <motion.div
            className="service-card"
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Services;