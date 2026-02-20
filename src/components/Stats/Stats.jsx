import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Stats.css";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    statsRef.current.forEach((el) => {
      const target = el.getAttribute("data-value");

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          snap: { innerText: 1 },
        }
      );
    });
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stat-box">
        <h2 ref={(el) => (statsRef.current[0] = el)} data-value="98">
          0
        </h2>
        <p>Client Satisfaction</p>
      </div>

      <div className="stat-box">
        <h2 ref={(el) => (statsRef.current[1] = el)} data-value="120">
          0
        </h2>
        <p>Projects Completed</p>
      </div>

      <div className="stat-box">
        <h2 ref={(el) => (statsRef.current[2] = el)} data-value="5">
          0
        </h2>
        <p>Years Experience</p>
      </div>
    </section>
  );
};

export default Stats;