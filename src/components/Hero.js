import { useEffect, useState } from "react";

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="hero"
      style={{
        filter: `blur(${Math.min(scrollY * 0.02, 8)}px)`,   // ✅ LIMIT blur
        opacity: `${Math.max(1 - scrollY * 0.0015, 0)}`     // ✅ stop at 0
      }}
    >
      <div className="hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="typing-text">Welcome to AccuFintech</span>
          </h1>

          <p className="hero-subtitle">
            Your trusted partner in financial solutions
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
          >
            Get Started
          </button>

          <button
              className="btn-secondary"
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </button>
          </div>

          <p className="hero-trust">
            Trusted by 100+ clients • Secure • Reliable
          </p>
        </div>

      

      </div>
    </section>
  );
}

export default Hero;