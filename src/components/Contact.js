import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"

      initial={{ y: 100, opacity: 0 }}        // 👈 comes from bottom
      whileInView={{ y: 0, opacity: 1 }}      // 👈 slides into place
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>

      <div className="contact-container">

        <div className="contact-info">
          <p><FaPhone /> +91 98231 02003</p>
          <p><FaEnvelope /> accufintech10@gmail.com</p>
          <p><FaMapMarkerAlt /> sr.no.143,Santosh Nagar ,Katraj ,pune-411046</p>
        </div>

        <form
          action="https://formsubmit.co/accufintech10@gmail.com"
          method="POST"
          className="contact-form"
        >

          {/* Disable captcha */}
          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          {/* Redirect after submit */}
          <input
            type="hidden"
            name="_next"
            value="http://google.com"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit" className="btn-primary">
            Send Message
          </button>

        </form>

      </div>
    </motion.section>
  );
}

export default Contact;